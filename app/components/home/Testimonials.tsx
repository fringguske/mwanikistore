"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import FadeIn from "../animations/FadeIn";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  // Sample testimonials data
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "Purchased a Tesla Model S",
      comment: "I was hesitant to buy a car online, but NextCommerce made the process incredibly smooth. The vehicle arrived exactly as described, and their customer service was exceptional throughout.",
      avatar: "/images/testimonials/avatar1.jpg",
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Bought a Beachfront Property",
      comment: "As a first-time property buyer, I needed guidance and NextCommerce delivered beyond expectations. Their property experts helped me find my dream home and handled all the paperwork seamlessly.",
      avatar: "/images/testimonials/avatar2.jpg",
      rating: 5,
    },
    {
      id: 3,
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      comment: "I've been shopping for electronics on many platforms, but NextCommerce consistently offers the best prices and fastest shipping. Their product descriptions are accurate and detailed.",
      avatar: "/images/testimonials/avatar3.jpg",
      rating: 4,
    },
  ];

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={i < rating ? "currentColor" : "none"}
        stroke={i < rating ? "none" : "currentColor"}
        className="w-5 h-5 text-yellow-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black" ref={ref}>
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            What Our Customers Say
          </h2>
          <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-16">
            Don't just take our word for it. Here's what our satisfied customers have to say about their shopping experience with us.
          </p>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-background rounded-2xl shadow-xl p-8 md:p-12">
            {/* Quote marks decoration */}
            <div className="absolute top-6 left-6 text-6xl text-primary/20">"</div>
            
            <div className="mb-8 flex items-center">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">{testimonials[activeIndex].name}</h3>
                <p className="text-foreground/60">{testimonials[activeIndex].role}</p>
                <div className="flex mt-1">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </div>
            </div>
            
            <blockquote className="text-xl md:text-2xl italic mb-8 relative z-10">
              {testimonials[activeIndex].comment}
            </blockquote>
            
            {/* Navigation dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "bg-foreground scale-125" : "bg-foreground/30"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 