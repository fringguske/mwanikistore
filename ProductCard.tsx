'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductItem {
  id: string;
  title: string;
  price: string;
  location: string;
  image: string;
  featured?: boolean;
  category?: string;
}

export default function ProductCard({ item, category }: { item: ProductItem, category?: string }) {
  const isMobileDevice = category === 'mobile-phones-tablets' || item.id?.startsWith('m');

  return (
    <motion.div
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`border rounded-lg overflow-hidden shadow-lg hover:shadow-xl ${
        item.featured ? 'ring-2 ring-indigo-500' : ''
      }`}
    >
      <div className="relative h-48 w-full">
        <Image
          src={item.image}
          alt={item.title}
          fill
          style={{ objectFit: isMobileDevice ? 'contain' : 'cover' }}
          className="transition-transform duration-300 hover:scale-105"
        />
        {item.featured && (
          <div className="absolute top-2 right-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
            Featured
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{item.title}</h3>
        <p className="text-green-600 font-bold text-xl mb-2">{item.price}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {item.location}
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 p-2 rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
} 