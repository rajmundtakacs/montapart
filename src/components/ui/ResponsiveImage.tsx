import type { ImgHTMLAttributes } from 'react';
import { getImageVariants } from '../../lib/images';

type Props = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> & {
  src: string;
  maxWidth?: number;
};

export default function ResponsiveImage({ src, maxWidth, sizes = '100vw', decoding = 'async', ...props }: Props) {
  const image = getImageVariants(src, maxWidth);
  return <img {...image} sizes={image.srcSet ? sizes : undefined} decoding={decoding} {...props} />;
}
