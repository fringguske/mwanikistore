'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';

const categories = [
  { 
    name: 'Vehicles', 
    slug: 'vehicles',
    description: 'Find the perfect vehicle for your needs',
    image: '/category-vehicles.jpg', // Add this image
    color: 'from-blue-500 to-indigo-600'
  },
  { 
    name: 'Property', 
    slug: 'property',
    description: 'Discover your dream home or investment',
    image: '/category-property.jpg', // Add this image
    color: 'from-green-500 to-emerald-600'
  },
  { 
    name: 'Electronics', 
    slug: 'electronics',
    description: 'Upgrade your tech with top devices',
    image: '/category-electronics.jpg', // Add this image
    color: 'from-purple-500 to-indigo-600'
  },
  { 
    name: 'Mobile & Tablets', 
    slug: 'mobile-phones-tablets',
    description: 'Stay connected with cutting-edge devices',
    image: '/category-mobile.jpg', // Add this image
    color: 'from-red-500 to-pink-600'
  },
];

export default function CategoryShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Browse by Category
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-80`}></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white text-sm mb-4">{category.description}</p>
                <Link 
                  href={`/category/${category.slug}`}
                  className="bg-white text-gray-800 py-2 px-4 rounded-lg font-medium inline-block w-max hover:bg-gray-100 transition-colors"
                >
                  Browse
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 