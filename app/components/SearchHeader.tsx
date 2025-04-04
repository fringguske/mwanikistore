'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SearchHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  
  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'vehicles', label: 'Vehicles' },
    { value: 'property', label: 'Property' },
    { value: 'electronics', label: 'Electronics' },
    { value: 'mobile-phones-tablets', label: 'Mobile & Tablets' },
  ];
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-4xl -mt-24 relative z-20">
      <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <div className="flex-1">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="What are you looking for?"
            />
          </div>
        </div>
        
        <div className="md:w-1/4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-end">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full md:w-auto px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
          >
            Search
          </motion.button>
        </div>
      </div>
      
      <AnimatePresence>
        {searchTerm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 p-3 bg-gray-50 rounded-md"
          >
            <p className="text-sm text-gray-500">
              Searching for <span className="font-semibold">"{searchTerm}"</span> in {
                categories.find(cat => cat.value === category)?.label || 'All Categories'
              }
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 