# Responsive website images

Keep source photos in their existing `public/images` locations. The image names and apartment data still correspond to the shared content collection.

`npm run dev`, `npm run build` and `npm run lint` generate WebP derivatives and the image manifest automatically. During an already running development session, run `npm run images:optimize` after replacing a source photo. Netlify generates everything during its normal build.

- Photos: 160, 480, 800, 1200 and 1600 px widths, limited to the original width.
- Small social and messaging icons: 40, 80 and 160 px, with transparency preserved.
- Sources are never overwritten. Camera orientation is applied to generated files.
- Generated URLs contain a content hash, so replacing a photo also changes its URL and avoids stale cached images.
- `public/images/optimized` and `src/generated/image-manifest.ts` are generated and ignored by Git. Existing derivatives are reused when sources have not changed.
- SVGs and existing WebP hero images continue using their existing assets.

Use `ResponsiveImage` with a `sizes` value matching its layout. Gallery thumbnails use only the 160 px variant. The large gallery and fullscreen view mount the selected image and its immediate neighbours; other large images load as the visitor navigates.

Cards remain visible while images load and retain their hover effects. Text entrance animations are short with a bounded delay; reduced-motion preferences disable movement and CSS transitions.

Run `npm test` for source preservation, small-image sizing, transparency, camera orientation and cache invalidation checks.
