"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { APP_STORE_URL, PLAY_STORE_URL } from '@/lib/appUrl';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-[#111416] text-[#FBFBF9]">
      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24 py-20 md:py-28 border-b border-[#FBFBF9]/10">
        <motion.a 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          href="#pricing" 
          className="group block font-heading text-[3rem] md:text-[6rem] leading-[0.95] tracking-tightest text-[#FBFBF9] hover:text-[#49A796] transition-colors duration-500"
        >
          Begin Architecture. <span className="inline-block transition-transform duration-500 group-hover:translate-x-4">→</span>
        </motion.a>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-[#FBFBF9]/50 max-w-lg leading-[1.6]"
        >
          Bring your institution, faculty, students, and parents into one synchronized platform — set up in minutes.
        </motion.p>
      </div>

      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24 py-16 grid grid-cols-2 md:grid-cols-5 gap-10">
        <div className="col-span-2 md:col-span-1">
          <Image src="https://media.base44.com/images/public/user_6a857d349dc49710b92336d0/1905a7cbc_edorapadicon.png" alt="Edorapad" width={1631} height={1725} sizes="40px" className="h-10 w-auto object-contain mb-4" />
          <p className="text-sm text-[#FBFBF9]/40">
            Educational Operating System — ERP, LMS & Live Classrooms.
          </p>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FBFBF9]/40 mt-8 mb-4">Get the app</p>
          <div className="flex flex-wrap gap-3">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store" className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#FBFBF9]/20 hover:border-[#49A796] hover:text-[#49A796] transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
                <path d="M16.37 12.6c-.02-2.35 1.92-3.48 2.01-3.54-1.1-1.6-2.8-1.82-3.4-1.85-1.45-.15-2.83.85-3.56.85-.74 0-1.87-.83-3.07-.81-1.58.02-3.04.92-3.85 2.33-1.64 2.85-.42 7.07 1.18 9.38.78 1.13 1.71 2.4 2.93 2.36 1.18-.05 1.62-.76 3.04-.76s1.82.76 3.06.74c1.27-.02 2.07-1.15 2.84-2.29.9-1.31 1.27-2.58 1.29-2.65-.03-.01-2.47-.95-2.47-3.76zM14.03 5.7c.65-.79 1.09-1.88.97-2.97-.94.04-2.07.62-2.74 1.41-.6.7-1.13 1.81-.99 2.88 1.05.08 2.11-.53 2.76-1.32z" />
              </svg>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] text-[#FBFBF9]/50">Download on the</span>
                <span className="text-sm font-medium">App Store</span>
              </span>
            </a>
            <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play" className="inline-flex items-center gap-2.5 px-4 py-2 border border-[#FBFBF9]/20 hover:border-[#49A796] hover:text-[#49A796] transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 shrink-0">
                <path d="M3.61 1.81 13.79 12 3.61 22.19a1.4 1.4 0 0 1-.61-1.18V2.99c0-.49.24-.92.61-1.18zM14.85 13.06l2.36 2.36-10.95 6.27 8.59-8.63zM18.53 9.37l2.74 1.57c.81.47.81 1.65 0 2.12l-2.74 1.57L15.91 12l2.62-2.63zM6.26 2.31l10.95 6.27-2.36 2.36-8.59-8.63z" />
              </svg>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] text-[#FBFBF9]/50">Get it on</span>
                <span className="text-sm font-medium">Google Play</span>
              </span>
            </a>
          </div>
        </div>
        
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FBFBF9]/40 mb-4">Product</p>
          <ul className="space-y-3">
            <li><Link href="/#features" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Features</Link></li>
            <li><Link href="/#architecture" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Architecture</Link></li>
            <li><Link href="/#pricing" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Pricing</Link></li>
          </ul>
        </div>
        
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FBFBF9]/40 mb-4">Company</p>
          <ul className="space-y-3">
            <li><a href="/about" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">About</a></li>
            <li><a href="/careers" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Careers</a></li>
            <li><a href="/contact" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FBFBF9]/40 mb-4">Resources</p>
          <ul className="space-y-3">
            <li><a href="/documentation" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Documentation</a></li>
            <li><a href="/status" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">System Status</a></li>
            <li><a href="/updates" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Updates</a></li>
          </ul>
        </div>
        
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FBFBF9]/40 mb-4">Legal</p>
          <ul className="space-y-3">
            <li><a href="/privacy-policy" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Privacy Policy</a></li>
            <li><a href="/terms-of-service" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Terms of Service</a></li>
            <li><a href="/sla" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">SLA</a></li>

          </ul>
        </div>
      </div>

      <div className="w-full max-w-[120rem] mx-auto px-6 md:px-16 lg:px-24 py-6 flex flex-col md:flex-row items-center justify-between gap-3 border-t border-[#FBFBF9]/10">
        <p className="text-xs text-[#FBFBF9]/40">© 2026 Edorapad. All rights reserved.</p>
        <p className="text-xs text-[#FBFBF9]/40">app.edorapad.com</p>
      </div>
    </footer>
  );
}
