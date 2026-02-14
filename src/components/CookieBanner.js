// src/components/CookieBanner.js
"use client";

import React, { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    // Position: Bottom Right (Floating) with Animation
    <div className="fixed bottom-6 right-6 z-50 max-w-sm w-full mx-auto animate-fade-in-up px-4 md:px-0">
      
      {/* Glassmorphism Card */}
      <div className="relative overflow-hidden bg-[#0B1120]/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl">
        
        {/* Subtle Glow Effect behind the card */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl"></div>

        <div className="flex items-start gap-4 relative z-10">
          
          {/* Icon (Cookie/Shield) */}
          <div className="flex-shrink-0 bg-slate-800 p-3 rounded-full border border-slate-700 text-indigo-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"></path>
              <path d="M8.5 8.5v.01"></path>
              <path d="M16 15.5v.01"></path>
              <path d="M12 12v.01"></path>
              <path d="M11 17v.01"></path>
              <path d="M7 14v.01"></path>
            </svg>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-white font-bold text-lg mb-1">Cookies Policy</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              We use cookies to enhance your browsing experience and analyze our traffic. 
            </p>
            
            {/* Action Buttons */}
            <div className="flex gap-3">
              <button 
                onClick={handleDecline}
                className="px-4 py-2 text-sm text-slate-300 hover:text-white font-medium transition-colors"
              >
                Decline
              </button>
              <button 
                onClick={handleAccept}
                className="px-6 py-2 text-sm bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition-colors shadow-lg shadow-white/10"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}