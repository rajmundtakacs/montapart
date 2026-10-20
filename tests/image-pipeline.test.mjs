import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, mkdir, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import sharp from 'sharp';
import { optimizeImages } from '../scripts/optimize-images.mjs';

async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'montapart-images-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const sourceDir = join(root, 'images');
  const options = { sourceDir, outputDir: join(sourceDir, 'optimized'), manifestPath: join(root, 'generated', 'images.ts') };
  await mkdir(sourceDir);
  return { root, sourceDir, options };
}

test('preserves source bytes and transparency, and never enlarges small files', async t => {
  const { sourceDir, options } = await fixture(t);
  // Some existing .png paths actually contain JPEG data.
  const photo = join(sourceDir, 'apartment.png');
  const icon = join(sourceDir, 'instagram.png');
  await sharp({ create: { width: 600, height: 300, channels: 3, background: '#237e7e' } }).jpeg().toFile(photo);
  await sharp({ create: { width: 100, height: 100, channels: 4, background: { r: 30, g: 80, b: 120, alpha: 0.4 } } }).png().toFile(icon);
  const before = await readFile(photo);
  const { manifest } = await optimizeImages(options);
  assert.deepEqual(await readFile(photo), before);
  const entry = manifest['/images/apartment.png'];
  assert.deepEqual(entry.widths, [160, 480, 600]);
  for (const width of entry.widths) {
    const metadata = await sharp(join(options.outputDir, `apartment.png.${entry.hash}.${width}.webp`)).metadata();
    assert.equal(metadata.width, width);
    assert.equal(metadata.height, width / 2);
  }
  const iconEntry = manifest['/images/instagram.png'];
  assert.deepEqual(iconEntry.widths, [40, 80, 100]);
  const iconMetadata = await sharp(join(options.outputDir, `instagram.png.${iconEntry.hash}.80.webp`)).metadata();
  assert.equal(iconMetadata.hasAlpha, true);
});

test('reuses existing derivatives, but changing a photo invalidates its URLs', async t => {
  const { sourceDir, options } = await fixture(t);
  const path = join(sourceDir, 'replacement.JPG');
  const create = color => sharp({ create: { width: 640, height: 480, channels: 3, background: color } }).jpeg().toFile(path);
  await create('#237e7e');
  const first = await optimizeImages(options);
  const second = await optimizeImages(options);
  assert.equal(second.generated, 0);
  assert.deepEqual(second.manifest, first.manifest);
  await create('#a38060');
  const replacement = await optimizeImages(options);
  assert.notEqual(replacement.manifest['/images/replacement.JPG'].hash, first.manifest['/images/replacement.JPG'].hash);
  assert.ok(replacement.generated > 0);
});

test('camera orientation is reflected in both responsive dimensions and generated images', async t => {
  const { sourceDir, options } = await fixture(t);
  await sharp({ create: { width: 400, height: 200, channels: 3, background: '#237e7e' } })
    .jpeg().withMetadata({ orientation: 6 }).toFile(join(sourceDir, 'portrait.jpg'));
  const { manifest } = await optimizeImages(options);
  const entry = manifest['/images/portrait.jpg'];
  assert.equal(entry.width, 200);
  assert.equal(entry.height, 400);
  const output = await sharp(join(options.outputDir, `portrait.jpg.${entry.hash}.160.webp`)).metadata();
  assert.equal(output.width, 160);
  assert.equal(output.height, 320);
});
