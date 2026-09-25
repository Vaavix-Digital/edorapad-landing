"use client";

import { motion } from 'framer-motion';

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
          <img 
            src="https://media.base44.com/images/public/user_6a857d349dc49710b92336d0/1905a7cbc_edorapadicon.png" 
            alt="Edorapad" 
            className="h-10 w-auto object-contain mb-4" 
          />
          <p className="text-sm text-[#FBFBF9]/40">
            Educational Operating System — ERP, LMS & Live Classrooms.
          </p>
        </div>
        
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#FBFBF9]/40 mb-4">Product</p>
          <ul className="space-y-3">
            <li><a href="/#features" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Features</a></li>
            <li><a href="/#architecture" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Architecture</a></li>
            <li><a href="/#pricing" className="text-sm text-[#FBFBF9]/70 hover:text-[#FBFBF9] transition-colors">Pricing</a></li>
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
