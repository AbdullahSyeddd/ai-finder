"use client"; 

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-black/20 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <img 
            src="/Logo.png" 
            alt="AI Directory Logo" 
            width={200}  
            height={80}  
            className="h-10 md:h-14 w-auto object-contain transition-all" 
          />
        </Link>

        {/* 🖥️ DESKTOP MENU (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          
          {/* NEW: Compare Link */}
          <Link href="/compare" className="hover:text-white transition-colors flex items-center gap-1">
            Compare 
          </Link>
          
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          
          {/* NEW: Premium Call-to-Action Button */}
          <Link 
            href="/stack" 
            className="bg-white text-black px-5 py-2.5 rounded-md hover:bg-gray-200 transition-colors font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          >
            Build AI Stack 
          </Link>
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
          <div className="absolute top-0 left-0 w-full h-screen bg-[#0a0a0a]/98 backdrop-blur-xl flex flex-col items-center justify-center space-y-8 text-xl font-bold text-white md:hidden animate-fadeIn">
            <Link href="/" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Home</Link>
            
            {/* NEW: Compare Link (Mobile) */}
            <Link 
  href="/compare" 
  onClick={() => setIsOpen(false)} 
  className="hover:text-gray-400"
>
  Compare Tools 
</Link>
            
            <Link href="/about" onClick={() => setIsOpen(false)} className="hover:text-gray-400">About Us</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="hover:text-gray-400">Contact</Link>
            
            {/* NEW: Premium CTA Button (Mobile) */}
            <Link 
              href="/stack" 
              onClick={() => setIsOpen(false)} 
              className="bg-white text-black px-8 py-4 rounded-md hover:bg-gray-200 transition-colors font-bold mt-4"
            >
              Build AI Stack 
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}