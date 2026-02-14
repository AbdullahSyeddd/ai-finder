// src/app/about/page.js
"use client";

import React, { useState, useEffect } from 'react';

// Counter Component (Clean White Version)
const AnimatedCounter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    setHasStarted(true);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, hasStarted]);

  return <span>{count}{suffix}</span>;
};

export default function About() {
  return (
    // Background matched to your screenshot (Dark Slate/Black)
    <div className="min-h-screen bg-slate-950 text-white font-sans pt-24 pb-20">
      
      {/* ================= HERO SECTION ================= */}
      <div className="max-w-4xl mx-auto px-6 mb-24 text-center">
        
        {/* Simple Tag */}
        <span className="inline-block py-1 px-3 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-sm font-medium mb-6">
          Established 2024
        </span>

        {/* Heading - SEO Optimized */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight text-white">
          Navigating the Era of <br />
          <span className="text-slate-400">Artificial Intelligence</span>
        </h1>

        {/* Description - New Mission Statement */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The AI industry is exploding with new tools every week. We built this <strong>trusted AI tools directory</strong> to help you filter the noise and find curated, verified software that actually saves you time.
        </p>
      </div>

      {/* ================= STATS SECTION ================= */}
      <div className="w-full border-y border-slate-800 bg-slate-900/50 mb-24">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-white">
                <AnimatedCounter end={100} suffix="+" />
              </div>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Tools Indexed</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-white">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Categories</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-white">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Vetted Manually</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2 text-white">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-slate-500 uppercase text-xs font-bold tracking-widest">Accessible</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CONTENT GRID (Why & How) ================= */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          
          {/* Left: Text Content - SEO Optimized */}
          <div className="space-y-12">
            
            {/* Mission Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Our Mission
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Our mission is simple: to build a <strong>trusted AI tools directory</strong> that helps users discover the best AI tools without wasting time. 
              </p>
              <p className="text-slate-400 leading-relaxed">
                Instead of listing every tool available online, we focus on <strong>curated AI tools</strong> that are tested, verified, and genuinely useful. Our goal is to showcase high-quality AI solutions for business, productivity, marketing, and content creation.
              </p>
            </div>

            {/* Why Trust Us Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Why Trust Our Directory?
              </h2>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  Carefully curated AI software tools.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  No spam or low-quality listings.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  Transparent reviews and evaluations.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  Regularly updated database of top AI tools.
                </li>
              </ul>
            </div>

            {/* Editorial Standards Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-white">
                Editorial Standards
              </h2>
              <p className="text-slate-400 leading-relaxed mb-4">
                Quality matters. Before any tool is added to our AI tools directory, it goes through a strict review process. We verify:
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  Does the AI tool deliver the results it promises?
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  Is the pricing structure transparent?
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  Is the user interface easy and accessible?
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-slate-500 rounded-full"></span>
                  Is it secure and regularly updated?
                </li>
              </ul>
              <p className="text-slate-500 text-sm mt-4 italic">
                Only verified AI tools that meet our standards are listed on our platform.
              </p>
            </div>
          </div>

          {/* Right: Clean Cards (Matches your Home Cards) */}
          <div className="grid grid-cols-1 gap-4 sticky top-24">
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="mb-3 text-2xl">🚀</div>
              <div className="text-lg font-semibold mb-2 text-white">For Developers</div>
              <p className="text-slate-400 text-sm">Find coding assistants, database tools, and deployment solutions.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="mb-3 text-2xl">🎨</div>
              <div className="text-lg font-semibold mb-2 text-white">For Creatives</div>
              <p className="text-slate-400 text-sm">Discover image generators, video editors, and design inspiration.</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <div className="mb-3 text-2xl">📈</div>
              <div className="text-lg font-semibold mb-2 text-white">For Business</div>
              <p className="text-slate-400 text-sm">Optimize workflows with marketing, SEO, and productivity AI.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="py-12 border-t border-slate-800">
          <div className="text-2xl md:text-3xl font-bold mb-4 text-white">Ready to find the right tool?</div>
          <p className="text-slate-400 mb-8">
            Explore our curated list of the best AI software available today.
          </p>
          <a href="/" className="inline-block py-3 px-8 rounded-lg bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Explore Directory
          </a>
        </div>
      </div>

    </div>
  );
}