'use client';

import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ImageCarousel from '../components/ImageCarousel';

export default function Home() {
  // Example package data
  const packages = [
    {
      id: 1,
      title: 'Kashmir Tour: A Perfect Getaway in Summer',
      description: 'Experience the beauty of Kashmir with our premium tour package covering Srinagar, Gulmarg, and Pahalgam.',
      price: 18999,
      duration: '4 NIGHTS 5 DAYS',
      imageSrc: 'https://via.placeholder.com/600x400?text=Kashmir+Gondola',
      isTrending: true,
      itinerary: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Srinagar'],
      keyAttractions: ['Dal Lake', 'Gulmarg Gondola', 'Betaab Valley', 'Mughal Gardens']
    },
    {
      id: 2,
      title: 'Exotic Kashmir Trip: Visit the Crown of India',
      description: 'Enjoy the serene beauty of Kashmir with a visit to the stunning Dal Lake and shikara rides.',
      price: 24999,
      duration: '5 NIGHTS 6 DAYS',
      imageSrc: 'https://via.placeholder.com/600x400?text=Kashmir+Dal+Lake',
      itinerary: ['Srinagar', 'Gulmarg', 'Pahalgam', 'ARC Valley', 'Srinagar', 'Sonmarg', 'Srinagar'],
      keyAttractions: ['Shikara Ride', 'Mughal Gardens', 'Pahalgam Valley', 'Aru & Betaab Valley']
    },
    {
      id: 3,
      title: 'Wonders of Kashmir Tour Package - Discover Lakes & Peaks',
      description: 'Perfect family vacation covering the best of Kashmir with activities suitable for all age groups.',
      price: 29999,
      duration: '6 NIGHTS 7 DAYS',
      imageSrc: 'https://via.placeholder.com/600x400?text=Kashmir+Mountains',
      discount: 10,
      isPopular: true,
      itinerary: ['Srinagar', 'Gulmarg', 'Pahalgam', 'ARC Valley', 'Pahalgam', 'Sonmarg', 'Srinagar'],
      keyAttractions: ['Tulip Garden', 'Gondola Ride', 'Betaab Valley', 'Chandanwari', 'Thajiwas Glacier']
    }
  ];

  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Packages Section */}
      <section className="py-16 bg-gray-900" id="packages">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">KASHMIR PACKAGES</h2>
            <div className="w-20 h-1 bg-[#00A3C4] mx-auto mb-4"></div>
            <p className="section-subtitle text-gray-300">
              Choose from our carefully crafted tour packages for an unforgettable Kashmir experience.
            </p>
          </div>

          <div className="space-y-8">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                title={pkg.title}
                description={pkg.description}
                price={pkg.price}
                duration={pkg.duration}
                imageSrc={pkg.imageSrc}
                discount={pkg.discount}
                isPopular={pkg.isPopular}
                isTrending={pkg.isTrending}
                itinerary={pkg.itinerary}
                keyAttractions={pkg.keyAttractions}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <section className="py-16 bg-gray-800" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-white">CONTACT US</h2>
            <div className="w-20 h-1 bg-[#00A3C4] mx-auto mb-4"></div>
            <p className="section-subtitle text-gray-300">
              Have questions or ready to book your dream Kashmir vacation? Get in touch with our team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg shadow-xl p-8 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-[#00A3C4]/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00A3C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Phone</h3>
                <p className="text-gray-400">+91 9876 543 210</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-[#00A3C4]/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00A3C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Email</h3>
                <p className="text-gray-400">info@kashmirtravels.com</p>
              </div>

              <div className="flex flex-col items-center text-center p-4 bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-[#00A3C4]/20 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#00A3C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Address</h3>
                <p className="text-gray-400">123 Boulevard Road, Srinagar, Jammu & Kashmir, India</p>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />

      <WhatsAppButton />
    </main>
  );
}
