import { useState, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  // Track which images are portrait (taller than wide)
  const [portraitSet, setPortraitSet] = useState<Set<number>>(new Set());

  const handleImageLoad = useCallback((index: number, e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.naturalHeight > img.naturalWidth) {
      setPortraitSet((prev) => {
        const next = new Set(prev);
        next.add(index);
        return next;
      });
    }
  }, []);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-sand-100 relative group">
        <Swiper
          modules={[Pagination, Keyboard]}
          pagination={{ clickable: true }}
          keyboard
          onSwiper={(swiper) => { swiperRef.current = swiper; }}
          spaceBetween={0}
          slidesPerView={1}
          className="aspect-[4/3] md:aspect-[16/10]"
        >
          {images.map((img, i) => {
            const isPortrait = portraitSet.has(i);
            return (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full cursor-pointer" onClick={() => openLightbox(i)}>
                  {/* Blurred background fill - only visible for portrait images */}
                  {isPortrait && (
                    <div
                      className="absolute inset-0 bg-cover bg-center blur-3xl scale-125 opacity-20 brightness-125"
                      style={{ backgroundImage: `url(${img})` }}
                    />
                  )}
                  <img
                    src={img}
                    alt={`${name} - ${i + 1}`}
                    loading={i < 3 ? 'eager' : 'lazy'}
                    onLoad={(e) => handleImageLoad(i, e)}
                    className={`relative w-full h-full ${isPortrait ? 'object-contain' : 'object-cover'}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* Custom nav buttons */}
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-midnight/70 hover:bg-white hover:text-midnight transition-all opacity-70 hover:opacity-100 shadow-md"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-midnight/70 hover:bg-white hover:text-midnight transition-all opacity-70 hover:opacity-100 shadow-md"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
      </div>

      {/* Thumbnail strip - clicking navigates the swiper, not lightbox */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {images.slice(0, 8).map((img, i) => (
          <button
            key={i}
            onClick={() => swiperRef.current?.slideTo(i)}
            className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden opacity-60 hover:opacity-100 transition-all border border-sand-100 hover:border-sea-200"
          >
            <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
        {images.length > 8 && (
          <button
            onClick={() => swiperRef.current?.slideTo(8)}
            className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg bg-midnight/10 flex items-center justify-center text-sm font-medium text-midnight/60 hover:bg-midnight/20 transition-colors border-2 border-transparent"
          >
            +{images.length - 8}
          </button>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5 text-white/80" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
              }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white/80" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white/80" />
            </button>
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              src={images[lightboxIndex]}
              alt={`${name} - ${lightboxIndex + 1}`}
              className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-6 text-white/50 text-sm">
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
