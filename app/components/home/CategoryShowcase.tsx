"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import FadeIn from "../animations/FadeIn";

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
}

export default function CategoryShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Replace with your actual categories
  const categories: Category[] = [
    {
      id: "vehicles",
      name: "Vehicles",
      description: "Luxury cars, motorcycles, and more",
      image: "/images/categories/vehicles.jpg",
      itemCount: 1240,
    },
    {
      id: "electronics",
      name: "Electronics",
      description: "Latest gadgets and devices",
      image: "/images/categories/electronics.jpg",
      itemCount: 3568,
    },
    {
      id: "property",
      name: "Property",
      description: "Homes, apartments, and commercial spaces",
      image: "/images/categories/property.jpg",
      itemCount: 856,
    },
    {
      id: "fashion",
      name: "Fashion",
      description: "Clothing, accessories, and footwear",
      image: "/images/categories/fashion.jpg",
      itemCount: 5432,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
      }
    },
  };

  return (
    <section className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Explore Our Categories
          </h2>
          <p className="text-foreground/70 text-center max-w-2xl mx-auto mb-12">
            Discover our wide range of product categories, each offering a premium selection
            of items to suit your needs and preferences.
          </p>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl h-80 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-end p-6 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-white/80 mb-3">{category.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white/70">{category.itemCount} items</span>
                    <Link 
                      href={`/category/${category.id}`}
                      className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Explore
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 