'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function ImageCarousel({ images, effect = 'slide', height = 'h-96' }) {
  // Default images if none provided
  const defaultImages = [
    {
      src: 'https://via.placeholder.com/1200x800?text=Kashmir+Dal+Lake',
      alt: 'Dal Lake, Kashmir',
      caption: 'Serene Dal Lake with traditional Shikara boats'
    },
    {
      src: 'https://via.placeholder.com/1200x800?text=Kashmir+Gulmarg',
      alt: 'Gulmarg, Kashmir',
      caption: 'Snow-capped mountains of Gulmarg'
    },
    {
      src: 'https://via.placeholder.com/1200x800?text=Kashmir+Pahalgam',
      alt: 'Pahalgam, Kashmir',
      caption: 'Lush green valleys of Pahalgam'
    },
    {
      src: 'https://via.placeholder.com/1200x800?text=Kashmir+Sonamarg',
      alt: 'Sonamarg, Kashmir',
      caption: 'The golden meadow of Sonamarg'
    }
  ];

  const carouselImages = images || defaultImages;

  return (
    <div className={`w-full ${height} relative rounded-lg overflow-hidden shadow-xl`}>
      <Swiper
        modules={[Pagination, Navigation, Autoplay, EffectFade]}
        effect={effect === 'fade' ? 'fade' : 'slide'}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="h-full w-full"
      >
        {carouselImages.map((image, index) => (
          <SwiperSlide key={index} className="relative">
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white text-center">
                  <p className="text-lg font-medium">{image.caption}</p>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
