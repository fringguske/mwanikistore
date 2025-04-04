'use client';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative w-full">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="w-full h-[500px] relative"
      >
        <Image
          src="/landing.jpg"
          alt="Hero Image"
          fill
          priority
          style={{ objectFit: 'cover' }}
          className="z-0"
        />
        <motion.div 
          style={{ opacity, y: textY }}
          className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-indigo-900 to-purple-800 bg-opacity-80 text-white p-8 z-10"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl font-bold"
          >
            Welcome to Our Marketplace ,Mwaniki Store
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-lg mt-2"
          >
            Find the best deals on vehicles, property, and more.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mt-4 bg-white text-indigo-900 font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all"
          >
            Browse Now
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
} 