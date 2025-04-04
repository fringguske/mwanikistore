"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProductCard from "../ui/ProductCard";
import FadeIn from "../animations/FadeIn";
import Button from "../ui/Button";

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  imageSrc: string;
  discount?: number;
}

export default function FeaturedProducts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Sample featured products data
  const featuredProducts: Product[] = [
    {
      id: "1",
      name: "Tesla Model S Plaid",
      price: 129990,
      category: "Vehicles",
      imageSrc: "/images/products/tesla-model-s.jpg",
      discount: 5,
    },
    {
      id: "2",
      name: "Apple MacBook Pro 16\" M2 Max",
      price: 3499,
      category: "Electronics",
      imageSrc: "/images/products/macbook-pro.jpg",
    },
    {
      id: "3",
      name: "Luxury Beachfront Villa",
      price: 2500000,
      category: "Property",
      imageSrc: "/images/products/beachfront-villa.jpg",
      discount: 12,
    },
    {
      id: "4",
      name: "Rolex Submariner Date",
      price: 14000,
      category: "Fashion",
      imageSrc: "/images/products/rolex-submariner.jpg",
    },
    {
      id: "5", 
      name: "Sony A7S III Mirrorless Camera",
      price: 3499,
      category: "Electronics",
      imageSrc: "/images/products/sony-a7siii.jpg",
      discount: 8,
    },
    {
      id: "6",
      name: "Porsche 911 Turbo S",
      price: 216300,
      category: "Vehicles",
      imageSrc: "/images/products/porsche-911.jpg",
    },
    {
      id: "7",
      name: "Modern Penthouse Apartment",
      price: 1200000,
      category: "Property",
      imageSrc: "/images/products/penthouse.jpg",
    },
    {
      id: "8",
      name: "Tom Ford Tailored Suit",
      price: 5800,
      category: "Fashion",
      imageSrc: "/images/products/tom-ford-suit.jpg",
      discount: 15,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-20 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Featured Products
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-12">
            Explore our handpicked selection of premium products across various categories.
            These featured items represent the best of what we offer.
          </p>
        </FadeIn>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                imageSrc={product.imageSrc}
                discount={product.discount}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Button href="/products" variant="secondary" size="lg">
            View All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
} 