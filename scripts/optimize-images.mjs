import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { join, extname, relative } from 'path';

const SRC_DIR = 'public/images';
const MAX_WIDTH = 1600;       // gallery images max
const THUMB_WIDTH = 600;      // thumbnails
const QUALITY = 78;           // WebP quality

let totalOriginal = 0;
let totalOptimized = 0;
let fileCount = 0;

// Skip PNGs with transparency (logos, icons)
const SKIP_PATTERNS = ['logo', 'facebook', 'instagram', 'messenger', 'whatsapp', 'telegram', 'viber'];

async function processFile(filePath) {
  const ext = extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  // Skip known transparent/icon files
  const lowerPath = filePath.toLowerCase();
  if (SKIP_PATTERNS.some(p => lowerPath.includes(p))) {
    const fileStat = await stat(filePath);
    totalOriginal += fileStat.size;
    totalOptimized += fileStat.size;
    return;
  }

  const fileStat = await stat(filePath);
  totalOriginal += fileStat.size;

  const isThumb = filePath.includes('thumbnail');
  const maxW = isThumb ? THUMB_WIDTH : MAX_WIDTH;

  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();

    // Skip PNG with alpha channel (transparent images)
    if (ext === '.png' && metadata.hasAlpha) {
      totalOptimized += fileStat.size;
      console.log(`  Skipping (transparent PNG): ${relative(SRC_DIR, filePath)}`);
      return;
    }

    // Skip if already small enough
    if (metadata.width <= maxW && fileStat.size < 200 * 1024) {
      totalOptimized += fileStat.size;
      return;
    }

    const resized = metadata.width > maxW
      ? image.resize(maxW, null, { withoutEnlargement: true })
      : image;

    const buffer = await resized
      .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
      .toBuffer();

    // Only write if we actually saved space
    if (buffer.length < fileStat.size) {
      const { writeFile } = await import('fs/promises');
      // Write back as jpg (keeping original extension for compatibility)
      await writeFile(filePath, buffer);
      totalOptimized += buffer.length;
      fileCount++;
      const pct = ((1 - buffer.length / fileStat.size) * 100).toFixed(0);
      const rel = relative(SRC_DIR, filePath);
      console.log(`  ${rel}: ${(fileStat.size / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB (-${pct}%)`);
    } else {
      totalOptimized += fileStat.size;
    }
  } catch (err) {
    console.error(`  Error processing ${filePath}: ${err.message}`);
    totalOptimized += fileStat.size;
  }
}

async function walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const promises = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      promises.push(walkDir(full));
    } else {
      promises.push(processFile(full));
    }
  }
  await Promise.all(promises);
}

console.log('Optimizing images...\n');
await walkDir(SRC_DIR);

console.log(`\nDone! Optimized ${fileCount} files.`);
console.log(`  Before: ${(totalOriginal / 1024 / 1024).toFixed(1)} MB`);
console.log(`  After:  ${(totalOptimized / 1024 / 1024).toFixed(1)} MB`);
console.log(`  Saved:  ${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(1)} MB (${((1 - totalOptimized / totalOriginal) * 100).toFixed(0)}%)`);
