"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  imageSrc: string;
  discount?: number;
}

export default function ProductCard({
  id,
  name,
  price,
  category,
  imageSrc,
  discount,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const finalPrice = discount ? price * (1 - discount / 100) : price;
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative rounded-xl overflow-hidden bg-white dark:bg-black/40 shadow-md hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={`/product/${id}`} className="block">
        <div className="relative h-60 overflow-hidden">
          {discount && (
            <div className="absolute top-2 left-2 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-sm">
              {discount}% OFF
            </div>
          )}
          
          <motion.div
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full"
          >
            <Image 
              src={imageSrc} 
              alt={name}
              fill
              className="object-cover"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <div className="p-4">
          <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{category}</div>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{name}</h3>
          
          <div className="flex items-end">
            <span className="text-lg font-bold">
              ${finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            
            {discount && (
              <span className="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">
                ${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 bg-foreground text-background text-center py-3 font-medium"
        initial={{ y: "100%" }}
        animate={{ y: isHovered ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
      >
        View Product
      </motion.div>
    </motion.div>
  );
} 