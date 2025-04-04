'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const stats = [
  { label: 'Active Users', value: 45000 },
  { label: 'Items Listed', value: 125000 },
  { label: 'Successful Deals', value: 34500 },
  { label: 'Satisfied Customers', value: 18700 },
];

export default function Statistics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Our Marketplace in Numbers
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <CountUpNumber 
                from={0} 
                to={stat.value} 
                duration={2} 
                delay={index * 0.1} 
                inView={inView} 
              />
              <p className="text-gray-600 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CountUpNumber({ from, to, duration, delay, inView }: { from: number, to: number, duration: number, delay: number, inView: boolean }) {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    if (!inView) return;
    
    let start = from;
    const step = (to - from) / (duration * 60);
    
    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += step;
        setCount(Math.min(start, to));
        
        if (start >= to) {
          clearInterval(timer);
        }
      }, 1000/60);
      
      return () => clearInterval(timer);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [from, to, duration, delay, inView]);
  
  return (
    <h3 className="text-3xl font-bold text-indigo-600">
      {Math.floor(count).toLocaleString()}+
    </h3>
  );
} 