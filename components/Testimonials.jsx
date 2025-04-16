'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const testimonials = [
    {
      id: 1,
      name: 'Aarav & Meera Sharma',
      images: [
        'https://via.placeholder.com/300x400?text=Kashmir+Couple+1',
        'https://via.placeholder.com/300x400?text=Kashmir+Couple+2'
      ],
      text: 'Our Kashmir honeymoon package trip was pure magic! From the cozy houseboat stay in Srinagar to the breathtaking views of Gulmarg, everything was perfectly arranged. The candlelight dinner in Srinagar was a beautiful surprise! Truly, a "Heaven on Earth" experience. Thank you, Kashmir Travels!',
    },
    {
      id: 2,
      name: 'Riya & Family',
      images: [
        'https://via.placeholder.com/300x400?text=Kashmir+Family+1',
        'https://via.placeholder.com/300x400?text=Kashmir+Family+2'
      ],
      text: 'A Kashmir Trip had always been on my bucket list, and Kashmir Travels made it an unforgettable journey. From scenic drives to Sonmarg to shikara rides on Dal Lake, everything was well-organized. I have already recommended Kashmir Travels to my friends for their next trip!',
    },
    {
      id: 3,
      name: 'Vikram & Neha',
      images: [
        'https://via.placeholder.com/300x400?text=Kashmir+Couple+3',
        'https://via.placeholder.com/300x400?text=Kashmir+Couple+4'
      ],
      text: 'We chose the Winter Wonderland package and it exceeded all our expectations! Skiing in Gulmarg with the professional instructors arranged by Kashmir Travels was the highlight of our trip. The snow-covered landscapes were straight out of a fairytale. Highly recommended!',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 bg-gray-900 text-white" id="testimonials" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <div className="relative inline-block">
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-40 h-[2px] bg-gray-700"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">UNFILTERED REVIEWS</h2>
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-40 h-[2px] bg-gray-700"></div>
          </div>
        </motion.div>

        <div className="relative">
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination-custom'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="testimonial-swiper py-10"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="flex flex-col md:flex-row items-center justify-center gap-8 px-4"
                  variants={itemVariants}
                >
                  <div className="flex gap-4 md:w-1/2 justify-center">
                    {testimonial.images.map((image, index) => (
                      <div key={index} className="relative">
                        <div className="relative w-[150px] h-[200px] md:w-[180px] md:h-[240px] transform rotate-[-4deg] bg-white p-2 shadow-lg">
                          <Image
                            src={image}
                            alt={`${testimonial.name} in Kashmir`}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute -top-3 -right-2 w-16 h-6 bg-yellow-400 transform rotate-12"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="md:w-1/2 max-w-xl text-left">
                    <div className="mb-6">
                      <p className="text-lg italic mb-6">"{testimonial.text}"</p>
                      <p className="text-right font-medium text-yellow-400">{testimonial.name}</p>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-button-prev-custom absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>

          <div className="swiper-button-next-custom absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="swiper-pagination-custom flex justify-center gap-2 mt-6"></div>
        </div>
      </motion.div>
    </section>
  );
}
