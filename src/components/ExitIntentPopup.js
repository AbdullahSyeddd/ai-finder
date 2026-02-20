"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [wasShown, setWasShown] = useState(false);

  useEffect(() => {
    const shown = sessionStorage.getItem("exitPopupShown");
    if (shown) setWasShown(true);

    const handleMouseLeave = (e) => {
      if (e.clientY <= 0 && !wasShown) {
        setIsVisible(true);
        setWasShown(true);
        sessionStorage.setItem("exitPopupShown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [wasShown]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#0B1120] border border-indigo-500/30 rounded-3xl p-8 max-w-md w-full text-center shadow-[0_0_50px_rgba(79,70,229,0.2)] relative">
        <button onClick={() => setIsVisible(false)} className="absolute top-4 right-4 text-slate-500 hover:text-white">✕</button>
        <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Wait! Don't leave yet.</h2>
        <p className="text-slate-400 mb-8">Not sure which tool to pick? Let our AI builder create the perfect toolkit for you in 30 seconds.</p>
        <Link href="/stack" onClick={() => setIsVisible(false)} className="block w-full bg-white text-black py-4 rounded-xl font-bold hover:bg-slate-200 transition-all">
          Build My AI Stack 
        </Link>
      </div>
    </div>
  );
}