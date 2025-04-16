'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const faqs = [
    {
      question: "What is the best time to visit Kashmir?",
      answer: "The best time to visit Kashmir is from April to October. Spring (April-June) offers blooming gardens, summer (July-August) provides pleasant weather, and autumn (September-October) showcases golden landscapes. Winter (November-February) is perfect for snow activities in Gulmarg but some areas might be inaccessible due to heavy snowfall."
    },
    {
      question: "Do I need special permits to visit Kashmir?",
      answer: "No special permits are required for Indian nationals to visit the main tourist areas in Kashmir. International tourists need a valid Indian visa. However, for certain remote areas like Gurez, Lolab Valley, or areas close to the Line of Control, additional permits might be required which can be arranged through registered tour operators."
    },
    {
      question: "Is Kashmir safe for tourists?",
      answer: "Yes, the main tourist areas in Kashmir are safe for visitors. Like any travel destination, it's advisable to stay informed about current conditions, follow local guidance, and exercise standard travel precautions. Tourist areas like Srinagar, Gulmarg, Pahalgam, and Sonamarg have a strong security presence and are well-prepared for tourism."
    },
    {
      question: "What should I pack for a trip to Kashmir?",
      answer: "Pack according to the season. For summer: light woolens, comfortable walking shoes, sunscreen, sunglasses, and a hat. For winter: heavy woolens, thermal wear, snow boots, gloves, and a warm cap. Year-round essentials include a first-aid kit, necessary medications, personal toiletries, and a good camera to capture the beautiful landscapes."
    },
    {
      question: "What are the must-visit attractions in Kashmir?",
      answer: "Must-visit attractions include Dal Lake (houseboat stay and shikara ride), Gulmarg (gondola ride), Pahalgam (river rafting and horse riding), Sonamarg (Thajiwas Glacier), Mughal Gardens (Shalimar, Nishat, Chashme Shahi), Tulip Garden (in April), and Dachigam National Park. Don't miss local experiences like trying Kashmiri cuisine and shopping for handicrafts."
    },
    {
      question: "How many days should I plan for a Kashmir trip?",
      answer: "A minimum of 5-7 days is recommended to explore the main attractions of Kashmir. This allows you to spend 2 days in Srinagar, 2 days in Gulmarg, and 2 days in Pahalgam, with some time for travel between locations. For a more relaxed pace or to include places like Sonamarg, Yusmarg, or Doodhpathri, consider a 7-10 day itinerary."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <section className="py-16 bg-gray-50" id="faq" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="section-subtitle">
            Find answers to common questions about our Kashmir tour packages.
          </p>
        </motion.div>

        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-md overflow-hidden"
                variants={itemVariants}
              >
                <button
                  className="flex justify-between items-center w-full p-5 text-left"
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <svg
                    className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="p-5 pt-0 border-t">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
