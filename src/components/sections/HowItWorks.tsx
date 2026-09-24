"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function HowItWorks() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section id="how-it-works" className="w-full bg-[#17343A] pt-12 md:pt-16 pb-24 md:pb-36">
        <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl mb-12"
          >
            <p className="text-xs font-semibold tracking-[0.25em] text-[#79CFC0] mb-6 uppercase">
              See It In Motion
            </p>
            <h2 className="font-heading text-3xl md:text-[3rem] leading-[1.08] tracking-tightest text-[#F5FAF9]">
              How Edorapad Works.
            </h2>
            <p className="mt-6 text-lg text-[#F5FAF9]/70 leading-[1.6]">
              From admissions to attendance to fee collection — watch how one synchronized platform replaces a dozen disconnected tools.
            </p>
          </motion.div>

          <motion.button 
            onClick={() => setIsVideoModalOpen(true)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="group relative block w-full aspect-[16/9] border border-[#F5FAF9]/15 overflow-hidden text-left cursor-pointer"
          >
            <img 
              src="https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png" 
              alt="How Edorapad works" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-[#17343A]/40 flex items-center justify-center transition-colors duration-500 group-hover:bg-[#17343A]/50">
              <div className="flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#F5FAF9] group-hover:bg-[#49A796] transition-colors duration-500 shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-play w-8 h-8 md:w-10 md:h-10 text-[#17343A] group-hover:text-white ml-1 transition-colors duration-500">
                  <polygon points="6 3 20 12 6 21 6 3"></polygon>
                </svg>
              </div>
            </div>
            <p className="absolute bottom-6 left-6 text-[#F5FAF9] text-sm tracking-[0.15em] uppercase">
              Watch the 2-minute overview
            </p>
          </motion.button>
          
        </div>
      </section>

      <AnimatePresence>
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setIsVideoModalOpen(false)}
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative w-full max-w-3xl bg-[#111416] border border-white/10 rounded-lg shadow-2xl overflow-hidden flex flex-col items-center justify-center text-center p-12 md:p-20"
            >
              <button 
                onClick={() => setIsVideoModalOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 text-white/50 hover:text-white transition-colors p-2"
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <h3 className="font-heading text-3xl md:text-4xl text-[#F5FAF9] mb-6 tracking-tightest">
                Product walkthrough coming soon
              </h3>
              <p className="text-[#F5FAF9]/70 text-lg max-w-lg mb-10 leading-[1.6]">
                We're putting the final polish on the Edorapad demo video. In the meantime, explore the platform features or start your free trial.
              </p>
              
              <Link 
                href="/pricing" 
                onClick={() => setIsVideoModalOpen(false)}
                className="inline-flex items-center px-8 py-3.5 bg-white text-[#111416] text-sm font-semibold tracking-wide hover:bg-gray-200 transition-colors duration-300 rounded-sm"
              >
                Explore Pricing
              </Link>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
