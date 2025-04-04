'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const categories = [
    { name: 'Vehicles', count: '254,339 ads', slug: 'vehicles' },
    { name: 'Property', count: '33,371 ads', slug: 'property' },
    { name: 'Mobile Phones & Tablets', count: '84,660 ads', slug: 'mobile-phones-tablets' },
    { name: 'Electronics', count: '42,215 ads', slug: 'electronics' },
    { name: 'Home, Garden & Kids', count: '28,756 ads', slug: 'home-garden-kids' },
    { name: 'Fashion', count: '63,891 ads', slug: 'fashion' },
    { name: 'Jobs', count: '15,482 ads', slug: 'jobs' },
    { name: 'Services', count: '21,340 ads', slug: 'services' },
    // Add more categories as needed
  ];

  useEffect(() => {
    // Trigger the entrance animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <aside 
      className={`w-64 bg-gradient-to-b from-gray-200 to-gray-100 p-4 shadow-lg transition-all duration-700 ease-in-out ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <h2 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2 transition-all duration-300">
        Categories
      </h2>
      <ul>
        {categories.map((category, index) => (
          <li 
            key={index} 
            className="mb-3 transform transition-all duration-300 ease-in-out"
            onMouseEnter={() => setActiveCategory(index)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <Link 
              href={`/category/${category.slug}`}
              className={`flex justify-between px-3 py-2 rounded-md hover:bg-indigo-100 hover:shadow-md ${
                activeCategory === index ? 'bg-indigo-50 scale-105' : ''
              }`}
            >
              <span className="text-gray-800 font-medium">
                {category.name}
              </span>
              <span className={`text-sm px-2 py-1 rounded-full ${
                activeCategory === index ? 'bg-indigo-200 text-indigo-800' : 'text-gray-600'
              } transition-colors duration-300`}>
                {category.count}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
} 