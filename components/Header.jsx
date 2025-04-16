'use client';

/**
 * Header Component
 *
 * Main navigation header with responsive mobile menu.
 * Updated with improved scroll functionality for navigation links.
 *
 * @author Anik Sarker Akash
 * @version 1.1.0
 * @since April 17, 2025
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll function to handle navigation
  const scrollToSection = (sectionId, event) => {
    event.preventDefault();
    setIsMenuOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      // Add a small delay to ensure any state changes complete first
      setTimeout(() => {
        const yOffset = -80; // Adjust based on header height
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({top: y, behavior: 'smooth'});
      }, 10);
    }
  };

  // Track scroll position for sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.nav') && !event.target.closest('.mobile-menu-toggle')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Clean up
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 bg-black/90 shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="relative z-10">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-[#00A3C4]">Kashmir</span> Travels
          </Link>
        </div>

        <nav className={`flex items-center md:static fixed top-0 md:h-auto h-screen md:w-auto w-[280px] md:bg-transparent bg-gray-900 md:shadow-none shadow-lg md:p-0 p-8 pt-20 md:flex-row flex-col md:items-center items-start transition-all duration-300 ${isMenuOpen ? 'right-0' : 'right-[-280px]'} md:right-auto z-50`}>
          <div className="absolute top-5 right-5 md:hidden block cursor-pointer" onClick={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <ul className="flex md:flex-row flex-col md:space-x-8 md:space-y-0 space-y-4 md:mr-8 mr-0 md:w-auto w-full">
            <li><a href="#packages" onClick={(e) => scrollToSection('packages', e)} className="text-white hover:text-[#00A3C4] font-medium relative py-1 block md:border-none border-b border-gray-700">Packages</a></li>
            <li><a href="#gallery" onClick={(e) => scrollToSection('gallery', e)} className="text-white hover:text-[#00A3C4] font-medium relative py-1 block md:border-none border-b border-gray-700">Gallery</a></li>
            <li><a href="#testimonials" onClick={(e) => scrollToSection('testimonials', e)} className="text-white hover:text-[#00A3C4] font-medium relative py-1 block md:border-none border-b border-gray-700">Reviews</a></li>
            <li><a href="#faq" onClick={(e) => scrollToSection('faq', e)} className="text-white hover:text-[#00A3C4] font-medium relative py-1 block md:border-none border-b border-gray-700">FAQ</a></li>
            <li><a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="text-white hover:text-[#00A3C4] font-medium relative py-1 block md:border-none border-b border-gray-700">Contact</a></li>
          </ul>

          <div className="md:hidden block mt-6 w-full">
            <a href="tel:+919876543210" className="flex items-center text-white bg-[#00A3C4] hover:bg-[#0090b0] px-4 py-2 rounded-md font-medium transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+91 9876 543 210</span>
            </a>
          </div>
        </nav>

        <div className="hidden md:block">
          <a href="#contact" onClick={(e) => scrollToSection('contact', e)} className="bg-[#00A3C4] hover:bg-[#0090b0] text-white py-2 px-6 rounded-md transition-colors duration-300 font-medium">Enquire Now</a>
        </div>

        <div className="md:hidden block cursor-pointer z-50" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </div>
      </div>
    </header>
  );
}
