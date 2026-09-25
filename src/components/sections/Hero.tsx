"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Array of images for the carousel
// You can replace these with the actual paths to your 3 images in the public folder
const carouselImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200", // Dashboard / Analytics
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200", // Interface / Tech data
  "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200"  // Collaborative administration
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance the carousel every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-[#F5FAF9]">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-8"
          >
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] text-[#155863] mb-6 uppercase">
              Edorapad — Educational Operating System
            </p>
            <h1 className="font-heading text-[2.75rem] md:text-[4.5rem] leading-[1.03] tracking-tightest text-[#111416]">
              The Architecture of Elite Knowledge Transmission.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-[#6B8185] max-w-xl leading-[1.6]">
              One synchronized platform for institutes, tutors, students, and parents — attendance, live classrooms, fee collection, payroll, and AI facial verification, unified into a single system of record.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="#pricing"
                className="inline-flex items-center px-8 py-4 bg-[#155863] text-white text-sm font-medium tracking-wide hover:bg-[#49A796] transition-colors duration-300 rounded-md shadow-sm"
              >
                Begin Architecture
              </Link>
              <Link
                href="#architecture"
                className="text-sm font-medium text-[#17343A] border-b border-[#17343A]/40 hover:border-[#49A796] hover:text-[#49A796] transition-colors duration-300 pb-1"
              >
                Explore the System
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-4"
          >
            <div className="relative w-full aspect-[4/3] border border-[#17343A]/15 overflow-hidden bg-[#17343A] rounded-xl shadow-lg group">
              <div className="absolute inset-0 flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {carouselImages.map((src, index) => (
                  <div key={index} className="min-w-full h-full relative">
                    <img
                      src={src}
                      loading={index === 0 ? "eager" : "lazy"}
                      className="w-full h-full object-cover"
                      alt={`Edorapad platform preview ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentSlide === index ? 'w-6 bg-[#79CFC0]' : 'w-1.5 bg-[#F5FAF9]/40 hover:bg-[#79CFC0]/70'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            <p className="mt-4 text-xs tracking-[0.15em] uppercase text-[#6B8185]">
              Live Institute Dashboard — Real-Time Sync
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
