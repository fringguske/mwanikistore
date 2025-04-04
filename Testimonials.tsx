'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Updated with placeholder avatars that will be visible even without actual images
const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Car Dealer',
    quote: "This marketplace has completely changed how I sell vehicles. The user interface is intuitive and the customer base is incredible.",
    avatar: '/placeholder-avatar-male.png', // Placeholder image
    initials: 'JD',
    bgColor: 'bg-blue-600',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Property Agent',
    quote: "I've been using this platform for over a year and the quality of leads I get is unmatched. Highly recommended for property listings!",
    avatar: '/placeholder-avatar-female.png', // Placeholder image
    initials: 'JS',
    bgColor: 'bg-purple-600',
  },
  {
    id: 3,
    name: 'Michael Brown',
    position: 'Electronics Seller',
    quote: "The response rate on my electronics listings is phenomenal. The built-in messaging system makes communication with buyers seamless.",
    avatar: '/placeholder-avatar-male.png', // Placeholder image
    initials: 'MB',
    bgColor: 'bg-green-600',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [imageError, setImageError] = useState<Record<number, boolean>>({});
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [current]);
  
  const handleImageError = (index: number) => {
    setImageError(prev => ({...prev, [index]: true}));
  };
  
  return (
    <section className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          What Our Users Say
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className={`w-24 h-24 relative rounded-full overflow-hidden border-4 border-indigo-200 shadow-md flex items-center justify-center ${testimonials[current].bgColor}`}>
                    {!imageError[current] ? (
                      <Image
                        src={testimonials[current].avatar}
                        alt={testimonials[current].name}
                        fill
                        style={{ objectFit: 'cover' }}
                        onError={() => handleImageError(current)}
                      />
                    ) : (
                      <span className="text-white text-2xl font-bold">
                        {testimonials[current].initials}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 italic text-lg mb-6 leading-relaxed">"{testimonials[current].quote}"</p>
                  <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-3 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900">{testimonials[current].name}</h3>
                    <p className="text-indigo-700 font-medium">{testimonials[current].position}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`mx-1 w-3 h-3 rounded-full ${
                  index === current ? 'bg-indigo-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 