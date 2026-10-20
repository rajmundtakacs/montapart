import test from 'node:test';
import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import { apartments } from '../src/data/apartments.ts';
import { getImageVariants } from '../src/lib/images.ts';

test('all published apartment photos resolve to real optimized files, including legacy JPG case mismatches', async () => {
  const paths = apartments.flatMap(apartment => [apartment.thumbnail, ...apartment.units.flatMap(unit => unit.images)]);
  for (const path of paths) {
    const image = getImageVariants(path);
    assert.match(image.src, /^\/images\/optimized\//, path);
    await access(`public${image.src}`);
  }
  assert.equal(getImageVariants('/images/apartmanok/petrovac/images/petrovac_2.jpg').src,
    getImageVariants('/images/apartmanok/petrovac/images/petrovac_2.JPG').src);
});

test('gallery thumbnail candidates are limited to small files and SVGs retain their original URL', async () => {
  const preview = getImageVariants('/images/apartmanok/petrovac/images/petrovac_1.jpg', 160);
  assert.match(preview.src, /\.160\.webp$/);
  assert.equal(preview.srcSet.split(', ').length, 1);
  await access(`public${preview.src}`);
  assert.deepEqual(getImageVariants('/images/viber.svg'), { src: '/images/viber.svg' });
});
