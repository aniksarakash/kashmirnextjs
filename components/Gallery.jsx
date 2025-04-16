'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const galleryImages = [
    {
      id: 1,
      src: 'https://via.placeholder.com/800x600?text=Dal+Lake',
      alt: 'Dal Lake',
      title: 'Dal Lake',
      description: 'The jewel in the crown of Kashmir, famous for its houseboats and floating gardens.'
    },
    {
      id: 2,
      src: 'https://via.placeholder.com/800x600?text=Gulmarg',
      alt: 'Gulmarg',
      title: 'Gulmarg',
      description: 'A premier ski destination with the world\'s highest gondola ride.'
    },
    {
      id: 3,
      src: 'https://via.placeholder.com/800x600?text=Pahalgam',
      alt: 'Pahalgam',
      title: 'Pahalgam',
      description: 'The Valley of Shepherds with stunning landscapes and river views.'
    },
    {
      id: 4,
      src: 'https://via.placeholder.com/800x600?text=Sonamarg',
      alt: 'Sonamarg',
      title: 'Sonamarg',
      description: 'The Meadow of Gold, known for its scenic beauty and glaciers.'
    },
    {
      id: 5,
      src: 'https://via.placeholder.com/800x600?text=Mughal+Gardens',
      alt: 'Mughal Gardens',
      title: 'Mughal Gardens',
      description: 'Historic gardens built by Mughal emperors with terraced lawns and cascading fountains.'
    },
    {
      id: 6,
      src: 'https://via.placeholder.com/800x600?text=Tulip+Garden',
      alt: 'Tulip Garden',
      title: 'Tulip Garden',
      description: 'Asia\'s largest tulip garden with over 1.5 million tulips of various colors.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-16 bg-white" id="gallery" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-gray-900 bg-white/80 backdrop-blur-sm inline-block px-6 py-2 rounded-lg shadow-sm">Explore Kashmir</h2>
          <div className="w-20 h-1 bg-[#00A3C4] mx-auto mb-4 mt-2"></div>
          <p className="section-subtitle bg-white/70 backdrop-blur-sm inline-block px-4 py-2 rounded-lg">
            Discover the breathtaking beauty of Kashmir through our gallery of stunning locations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {galleryImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
              variants={itemVariants}
              onClick={() => openLightbox(image)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-sm">{image.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-300"
            onClick={closeLightbox}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="max-w-4xl max-h-[80vh] relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="object-contain max-h-[70vh]"
              />
            </div>
            <div className="mt-4 text-white">
              <h3 className="text-2xl font-bold">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
