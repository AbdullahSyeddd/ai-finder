// src/components/Navbar.js
"use client"; 

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/20 backdrop-blur-xl transition-all">
      <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
        
{/* Logo Section - Fixed Size Attributes */}
<Link href="/" className="flex items-center gap-2 z-50">
  <img 
    src="/Logo.png" 
    alt="AI Directory Logo" 
    width={200}  // ✅ Ye add karein (aapki md:h-20 ke mutabiq)
    height={80}  // ✅ Ye add karein
    className="h-10 md:h-20 w-auto object-contain transition-all" 
  />
</Link>

        {/* 🖥️ DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy & Policy</Link>
        </div>

        {/* 📱 MOBILE HAMBURGER BUTTON */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-white focus:outline-none z-50"
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>

        {/* 📱 MOBILE MENU OVERLAY */}
        {isOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-xl font-bold text-white md:hidden animate-fadeIn">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-400">About Us</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Contact</Link>
            <Link href="/privacy" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Privacy & Policy</Link>
          </div>
        )}

      </div>
    </nav>
  );
}