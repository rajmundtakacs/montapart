import { useState, useRef, useCallback } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard } from 'swiper/modules';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import ImageLightbox from '../ui/ImageLightbox';
import ResponsiveImage from '../ui/ResponsiveImage';
import { getImageVariants } from '../../lib/images';

interface ImageGalleryProps {
  images: string[];
  name: string;
  allowFullscreen?: boolean;
  imageSizes?: string;
  prioritize?: boolean;
}

export default function ImageGallery({
  images,
  name,
  allowFullscreen = true,
  imageSizes = '(min-width: 1536px) 880px, (min-width: 1024px) calc(60vw - 42px), (min-width: 640px) calc(100vw - 48px), calc(100vw - 32px)',
  prioritize = true,
}: ImageGalleryProps) {
  const reduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const [portraitSet, setPortraitSet] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.currentTarget.naturalHeight > e.currentTarget.naturalWidth) {
      setPortraitSet((prev) => new Set(prev).add(index));
    }
  }, []);

  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-sand-100 relative">
        <Swiper modules={[A11y, Keyboard]} keyboard={{ enabled: lightboxIndex === null }} speed={reduceMotion ? 0 : 300}
          a11y={{ containerMessage: `${name} képei`, itemRoleDescriptionMessage: 'kép' }}
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          slidesPerView={1} className="aspect-[4/3] md:aspect-[16/10]">
          {images.map((img, i) => (
            <SwiperSlide key={img}>
              <div className="relative w-full h-full">
                {portraitSet.has(i) && <div className="absolute inset-0 bg-cover bg-center blur-2xl scale-125 opacity-50" style={{ backgroundImage: `url(${getImageVariants(img, 160).src})` }} />}
                {Math.abs(i - activeIndex) <= 1 && (
                  <ResponsiveImage src={img} sizes={imageSizes} alt={`${name} – ${i + 1}. kép`} loading={prioritize ? 'eager' : 'lazy'} fetchPriority={prioritize && i === activeIndex ? 'high' : 'low'} onLoad={(e) => handleImageLoad(i, e)} className={`relative w-full h-full ${portraitSet.has(i) ? 'object-contain' : 'object-cover'}`} />
                )}
                {allowFullscreen && <button type="button" tabIndex={activeIndex === i ? 0 : -1} className="absolute inset-0 block w-full h-full cursor-zoom-in" aria-label={`${i + 1}. kép nagyítása – ${name}`} onClick={() => setLightboxIndex(i)} />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {images.length > 1 && <>
          <button type="button" aria-label="Előző kép" disabled={activeIndex === 0} onClick={() => swiperRef.current?.slidePrev()} className="gallery-arrow absolute left-2 top-1/2 -translate-y-1/2 z-10"><ChevronLeft aria-hidden="true" className="w-5 h-5" /></button>
          <button type="button" aria-label="Következő kép" disabled={activeIndex === images.length - 1} onClick={() => swiperRef.current?.slideNext()} className="gallery-arrow absolute right-2 top-1/2 -translate-y-1/2 z-10"><ChevronRight aria-hidden="true" className="w-5 h-5" /></button>
        </>}
        <span className="absolute bottom-3 left-3 z-10 rounded-full bg-midnight/75 text-white text-xs px-3 py-1.5 pointer-events-none">{activeIndex + 1} / {images.length}</span>
        {allowFullscreen && <button type="button" aria-label="Galéria megnyitása teljes képernyőn" onClick={() => setLightboxIndex(activeIndex)} className="gallery-arrow absolute bottom-2 right-2 z-10"><Expand aria-hidden="true" className="w-5 h-5" /></button>}
      </div>
      <div aria-label="Képek kiválasztása" className="mt-3 flex gap-2 overflow-x-auto overscroll-x-contain py-2 px-1">
        {images.map((img, i) => (
          <button type="button" key={img} aria-label={`${i + 1}. kép kiválasztása`} aria-pressed={activeIndex === i} onClick={() => swiperRef.current?.slideTo(i)} className={`shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors ${activeIndex === i ? 'border-sea-600' : 'border-transparent opacity-60 hover:opacity-100'}`}>
            <ResponsiveImage src={img} maxWidth={160} sizes="(min-width: 768px) 80px, 64px" alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
      {allowFullscreen && lightboxIndex !== null && <ImageLightbox images={images} name={name} initialIndex={lightboxIndex} onClose={() => setLightboxIndex(null)} />}
    </>
  );
}
