"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 py-4">
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Edorapad Logo" width={150} height={40} className="h-8 w-auto" priority />
          </Link>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/#features" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">Features</Link>
          <Link href="/#audience" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">For You</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">How It Works</Link>
          <Link href="/#pricing" className="text-sm font-medium text-[#111416]/80 hover:text-[#111416] transition-colors tracking-wide">Pricing</Link>
        </nav>
        
        <div className="flex items-center gap-2">
          {/* Desktop Auth Buttons */}
          <Link href="https://app.edorapad.com/login" className="hidden md:inline-flex text-sm font-medium px-5 py-2.5 text-[#111416] hover:text-[#155863] transition-colors">Log in</Link>
          <Link href="https://app.edorapad.com/register" className="hidden md:inline-flex text-sm font-medium px-5 py-2.5 bg-[#111416] text-[#FBFBF9] hover:bg-[#155863] transition-colors duration-300">Sign up</Link>
          
          {/* Mobile Menu Lines Toggle */}
          <button 
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`block w-6 h-0.5 bg-[#111416] transition-transform duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-[#111416] transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-[#111416] transition-transform duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg py-4 px-6 flex flex-col gap-4 transition-all duration-300 origin-top ${isMenuOpen ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-0 invisible'}`}>
        <Link href="/#features" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[#111416]/80 hover:text-[#111416] py-2">Features</Link>
        <Link href="/#audience" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[#111416]/80 hover:text-[#111416] py-2">For You</Link>
        <Link href="/#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[#111416]/80 hover:text-[#111416] py-2">How It Works</Link>
        <Link href="/#pricing" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[#111416]/80 hover:text-[#111416] py-2">Pricing</Link>
        <div className="h-px w-full bg-gray-100 my-2"></div>
        <Link href="https://app.edorapad.com/login" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[#111416] py-2">Log in</Link>
        <Link href="https://app.edorapad.com/register" onClick={() => setIsMenuOpen(false)} className="text-base font-medium text-[#155863] py-2">Sign up</Link>
      </div>
    </header>
  );
}
