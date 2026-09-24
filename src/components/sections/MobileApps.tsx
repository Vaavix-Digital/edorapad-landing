"use client";

import { motion } from 'framer-motion';

export default function MobileApps() {
  return (
    <section id="apps" className="w-full bg-[#F5FAF9] py-20 md:py-28 border-t border-[#17343A]/10">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        >
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-[#155863] mb-4 uppercase">
              Always With You
            </p>
            <h2 className="font-heading text-2xl md:text-[2.5rem] leading-[1.1] tracking-tightest text-[#111416]">
              Edorapad in your pocket.
            </h2>
            <p className="mt-4 text-[#6B8185] leading-[1.6]">
              Full sync across Android, iOS, and web. Mark attendance, collect fees, and teach live — from anywhere.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-4 bg-[#17343A] text-white hover:bg-[#49A796] transition-colors duration-300 rounded-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-apple w-7 h-7">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></path>
                <path d="M10 2c1 .5 2 2 2 5"></path>
              </svg>
              <div className="text-left">
                <p className="text-[10px] tracking-wide opacity-70 uppercase">Download on the</p>
                <p className="text-base font-semibold leading-tight">App Store</p>
              </div>
            </a>
            
            <a 
              href="#" 
              className="flex items-center gap-3 px-6 py-4 bg-[#17343A] text-white hover:bg-[#49A796] transition-colors duration-300 rounded-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone w-7 h-7">
                <rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect>
                <path d="M12 18h.01"></path>
              </svg>
              <div className="text-left">
                <p className="text-[10px] tracking-wide opacity-70 uppercase">Get it on</p>
                <p className="text-base font-semibold leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
