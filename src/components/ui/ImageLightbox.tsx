import { useState, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Keyboard, Zoom } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';
import FullscreenDialog from './FullscreenDialog';
import ResponsiveImage from './ResponsiveImage';

export default function ImageLightbox({ images, name, initialIndex, onClose }: { images: string[]; name: string; initialIndex: number; onClose: () => void }) {
  const reduceMotion = useReducedMotion();
  const swiperRef = useRef<SwiperType | null>(null);
  const [index, setIndex] = useState(initialIndex);

  return (
    <FullscreenDialog label={`${name} – képgaléria`} onClose={onClose} className="bg-midnight text-white">
      <div className="flex flex-col h-full min-h-0">
        <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-2 shrink-0">
          <p className="text-sm truncate">{name}</p>
          <button type="button" data-dialog-focus aria-label="Galéria bezárása" onClick={onClose} className="lightbox-button shrink-0"><X aria-hidden="true" className="w-6 h-6" /></button>
        </div>
        <Swiper modules={[A11y, Keyboard, Zoom]} keyboard zoom={{ maxRatio: 3 }} initialSlide={initialIndex} speed={reduceMotion ? 0 : 300}
          onSwiper={(swiper) => { swiperRef.current = swiper; }} onSlideChange={(swiper) => setIndex(swiper.activeIndex)}
          className="w-full flex-1 min-h-0" a11y={{ containerMessage: `${name} nagyított képei` }}>
          {images.map((img, i) => (
            <SwiperSlide key={img}>
              <div className="swiper-zoom-container">
                {Math.abs(i - index) <= 1 && <ResponsiveImage src={img} sizes="100vw" alt={`${name} – ${i + 1}. kép`} loading="eager" fetchPriority={i === index ? 'high' : 'low'} className="w-full h-full object-contain" />}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center gap-6 px-4 py-2 shrink-0">
          <button type="button" aria-label="Előző nagyított kép" disabled={index === 0} onClick={() => swiperRef.current?.slidePrev()} className="lightbox-button"><ChevronLeft aria-hidden="true" className="w-6 h-6" /></button>
          <p aria-live="polite" className="text-sm tabular-nums min-w-16 text-center">{index + 1} / {images.length}</p>
          <button type="button" aria-label="Következő nagyított kép" disabled={index === images.length - 1} onClick={() => swiperRef.current?.slideNext()} className="lightbox-button"><ChevronRight aria-hidden="true" className="w-6 h-6" /></button>
        </div>
      </div>
    </FullscreenDialog>
  );
}
