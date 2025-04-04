"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Update isScrolled state when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Vehicles", href: "/category/vehicles" },
    { name: "Electronics", href: "/category/electronics" },
    { name: "Property", href: "/category/property" },
    { name: "Fashion", href: "/category/fashion" },
    { name: "Home & Garden", href: "/category/home-garden" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-3 shadow-md" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <h1 className="text-2xl font-bold">NextCommerce</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="font-medium hover:text-foreground/70 transition-colors relative group"
            >
              {category.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="/search" className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </Link>
          
          <Link href="/cart" className="p-2 relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          
          <Button href="/signin" variant="secondary" size="sm">
            Sign In
          </Button>
          
          <Button href="/signup" size="sm">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-10 p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className="w-full h-0.5 bg-foreground block"
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className="w-full h-0.5 bg-foreground block"
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className="w-full h-0.5 bg-foreground block"
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background z-40 flex flex-col pt-24 px-6"
            >
              <nav className="flex flex-col space-y-6 text-lg">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    className="font-medium py-2 border-b border-foreground/10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {category.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-8 flex flex-col space-y-4">
                <Button href="/signin" variant="secondary" size="md" className="w-full">
                  Sign In
                </Button>
                
                <Button href="/signup" size="md" className="w-full">
                  Sign Up
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 