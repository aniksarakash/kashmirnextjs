'use client';

/**
 * Hero Component
 *
 * Displays the main hero section with video background and animated content.
 *
 * @author Anik Sarker Akash
 * @update 2023-07-15 - Fixed vertical alignment issues by removing unnecessary padding
 *                     and negative margins that were causing inconsistent positioning.
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import VideoBackground from './VideoBackground';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden text-white" id="hero">
      <VideoBackground
        videoSrc="/videos/hero/kashmir-landscape.mp4"
        posterSrc="/images/hero/hero-bg.jpg"
      >
        <motion.div
          className="absolute top-[100px] right-[50px] bg-white rounded-full w-[130px] h-[130px] items-center justify-center shadow-lg z-10 hidden md:flex"
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            <span className="font-heading text-[1.8rem] text-primary font-bold">3000+</span>
            <span className="text-[0.9rem] text-gray-800 font-medium">Happy Travelers</span>
          </div>
        </motion.div>

        <div className="container mx-auto px-4">
          <div className="relative z-10 max-w-[800px] mx-auto">
            <motion.h1
              className="mb-4 text-shadow text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wider"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Experience Paradise on<br />Earth
            </motion.h1>

            <motion.h2
              className="text-white text-xl md:text-2xl mb-5 text-shadow"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Exclusive Kashmir Travel Packages 2025
            </motion.h2>

            <motion.p
              className="text-lg mb-8 text-shadow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Discover breathtaking landscapes, serene lakes, and majestic mountains with our specially curated Kashmir trips.
            </motion.p>

            <motion.div
              className="flex flex-col md:flex-row justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <a href="#packages" className="btn btn-primary animate-pulse">
                View Packages
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Us
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap justify-center gap-5 mt-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <motion.div
                className="flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:bg-white/25 hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Premium Accommodations</span>
              </motion.div>
              <motion.div
                className="flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:bg-white/25 hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Expert-Led Tours</span>
              </motion.div>
              <motion.div
                className="flex items-center bg-white/15 backdrop-blur-sm px-4 py-2 rounded-full shadow-md hover:bg-white/25 hover:-translate-y-1 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>24/7 Support</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </VideoBackground>
    </section>
  );
}
