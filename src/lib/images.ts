import images from '../generated/image-manifest.ts';

// Older content uses mixed .jpg/.JPG spelling. Always serve the real filename.
const canonicalPaths = new Map(Object.keys(images).map(path => [path.toLowerCase(), path]));

export function getImageVariants(src: string, maxWidth = 1600) {
  const source = images[src] ? src : canonicalPaths.get(src.toLowerCase()) ?? src;
  const image = images[source];
  if (!image) return { src };
  const widths = image.widths.filter(width => width <= maxWidth);
  if (widths.length === 0) widths.push(image.widths[0]);
  const url = (width: number) => `/images/optimized/${source.slice('/images/'.length)}.${image.hash}.${width}.webp`;
  return {
    src: url(widths[widths.length - 1]),
    srcSet: widths.map(width => `${url(width)} ${width}w`).join(', '),
    width: image.width,
    height: image.height,
  };
}
