import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';

interface ImageGalleryProps {
  images: string[];
  name: string;
}

export default function ImageGallery({ images, name }: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="rounded-2xl overflow-hidden bg-midnight/5">
        <Swiper
          modules={[Navigation, Pagination, Keyboard]}
          navigation
          pagination={{ clickable: true }}
          keyboard
          spaceBetween={0}
          slidesPerView={1}
          className="aspect-[4/3] md:aspect-[16/10]"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${name} - ${i + 1}`}
                loading={i < 3 ? 'eager' : 'lazy'}
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => openLightbox(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnail strip */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {images.slice(0, 8).map((img, i) => (
          <button
            key={i}
            onClick={() => openLightbox(i)}
            className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden opacity-70 hover:opacity-100 transition-opacity ring-2 ring-transparent hover:ring-sea-400"
          >
            <img src={img} alt="" loading="lazy" className="w-full h-full object-cover" />
          </button>
        ))}
        {images.length > 8 && (
          <button
            onClick={() => openLightbox(8)}
            className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-lg bg-midnight/10 flex items-center justify-center text-sm font-medium text-midnight/60 hover:bg-midnight/20 transition-colors"
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
              className="absolute top-6 right-6 text-white/70 hover:text-white text-3xl z-10"
            >
              &times;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
              }}
              className="absolute left-4 md:left-8 text-white/60 hover:text-white text-4xl z-10"
            >
              &#8249;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
              }}
              className="absolute right-4 md:right-8 text-white/60 hover:text-white text-4xl z-10"
            >
              &#8250;
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
