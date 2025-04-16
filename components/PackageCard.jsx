import Image from 'next/image';
import { useState } from 'react';

export default function PackageCard({
  title,
  description,
  price,
  duration,
  imageSrc,
  discount,
  isPopular,
  isTrending,
  itinerary = ['Srinagar', 'Gulmarg', 'Pahalgam', 'Srinagar'],
  inclusions = ['Sightseeing', 'Transfers', 'Meals', 'Stay', 'Trip Assistance'],
  keyAttractions = ['Dal Lake', 'Gulmarg Gondola', 'Betaab Valley', 'Mughal Gardens']
}) {
  const [showItinerary, setShowItinerary] = useState(false);
  const [showAttractions, setShowAttractions] = useState(false);

  // Calculate discounted price if discount is provided
  const discountedPrice = discount ? price - (price * discount / 100) : price;

  return (
    <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 flex flex-col md:flex-row">
      <div className="relative md:w-1/2 h-64 md:h-auto">
        <Image
          src={imageSrc || "https://via.placeholder.com/600x400?text=Kashmir+Package"}
          alt={title}
          fill
          className="object-cover"
        />

        {isTrending && (
          <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 text-xs font-bold px-3 py-1 rounded-full flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
            </svg>
            Trending Now
          </div>
        )}

        {isPopular && !isTrending && (
          <div className="absolute top-4 left-4 bg-[#00A3C4] text-white text-xs font-bold px-3 py-1 rounded-full">
            Popular
          </div>
        )}

        {discount && (
          <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            {discount}% OFF
          </div>
        )}
      </div>

      <div className="p-6 md:w-1/2 bg-gray-900 text-white flex flex-col justify-between">
        <div>
          <div className="mb-3">
            <div className="text-gray-300 text-sm font-medium mb-1">{duration}</div>
            <div className="flex items-center flex-wrap gap-1 text-xs text-gray-400 mb-3">
              {itinerary.map((place, index) => (
                <span key={index} className="flex items-center">
                  {index > 0 && <span className="mx-1">→</span>}
                  {place}
                </span>
              ))}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
          </div>

          <div className="flex flex-wrap gap-3 mb-4">
            {inclusions.map((inclusion, index) => (
              <div key={index} className="flex items-center text-sm">
                <svg className="h-4 w-4 text-green-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">{inclusion}</span>
              </div>
            ))}
            <div className="flex items-center text-sm">
              <svg className="h-4 w-4 text-yellow-500 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span className="text-gray-300">Flights</span>
              <span className="ml-1 text-xs bg-orange-500 text-white px-2 py-0.5 rounded-sm">Additional</span>
            </div>
          </div>

          <div className="mb-3">
            <button
              onClick={() => setShowItinerary(!showItinerary)}
              className="w-full flex justify-between items-center py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200 mb-2"
            >
              <span className="font-medium text-sm">BRIEF ITINERARY</span>
              <svg className={`h-5 w-5 transition-transform duration-200 ${showItinerary ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showItinerary && (
              <div className="p-3 bg-gray-800 rounded-md mb-2 text-sm text-gray-300">
                <ul className="space-y-1 list-disc pl-5">
                  <li>Day 1: Arrival in Srinagar, Houseboat Stay</li>
                  <li>Day 2: Srinagar Local Sightseeing</li>
                  <li>Day 3: Gulmarg Day Trip</li>
                  <li>Day 4: Pahalgam Excursion</li>
                  <li>Day 5: Departure from Srinagar</li>
                </ul>
              </div>
            )}
          </div>

          <div className="mb-4">
            <button
              onClick={() => setShowAttractions(!showAttractions)}
              className="w-full flex justify-between items-center py-2 px-3 bg-gray-800 hover:bg-gray-700 rounded-md transition-colors duration-200"
            >
              <span className="font-medium text-sm">KEY ATTRACTIONS</span>
              <svg className={`h-5 w-5 transition-transform duration-200 ${showAttractions ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showAttractions && (
              <div className="p-3 bg-gray-800 rounded-md mt-2 text-sm text-gray-300">
                <ul className="space-y-1 list-disc pl-5">
                  {keyAttractions.map((attraction, index) => (
                    <li key={index}>{attraction}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs text-gray-400 uppercase">STARTS FROM</div>
            <div>
              <span className="text-xl font-bold text-white">₹{discountedPrice.toLocaleString()}</span>
              <span className="text-gray-400 text-sm">/-Per Person</span>
              {discount && (
                <span className="text-gray-400 line-through ml-2 text-sm">₹{price.toLocaleString()}</span>
              )}
            </div>
          </div>

          <a href="#contact" className="bg-[#00A3C4] hover:bg-[#0090b0] text-white py-2 px-6 rounded-md transition-colors duration-300 font-medium">
            Enquire Now
          </a>
        </div>
      </div>
    </div>
  );
}
