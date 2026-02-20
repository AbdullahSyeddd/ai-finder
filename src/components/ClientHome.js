"use client";

import React, { useState, useEffect } from 'react';
import AICard from './AICard'; 
import { toolsData } from "@/data/tools"; 
import Link from "next/link"; 

// Minimalist Pro Icons (SVGs)
const Icons = {
  Writing: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
  Coding: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
  Image: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>,
  Video: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  Productivity: () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
};

export default function ClientHome() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [placeholder, setPlaceholder] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["Coding Assistants...", "Video Generators...", "Free Writing Tools...", "Logo Makers...", "3D Models..."];

  useEffect(() => {
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(() => {
      setPlaceholder((prev) => 
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );
      if (!isDeleting && placeholder === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && placeholder === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, typeSpeed);
    return () => clearTimeout(timer);
  }, [placeholder, isDeleting, wordIndex]);

  const featuredCategories = [
    { name: "Writing", slug: "writing", icon: <Icons.Writing /> },
    { name: "Coding", slug: "coding", icon: <Icons.Coding /> },
    { name: "Image Gen", slug: "image gen", icon: <Icons.Image /> },
    { name: "Video", slug: "video", icon: <Icons.Video /> },
    { name: "Productivity", slug: "productivity", icon: <Icons.Productivity /> },
  ];

  const categories = ["All", "Writing", "Image Gen", "Video", "Audio", "Marketing", "Coding", "Productivity", "3D", "Fun"];

  const getPriceLabel = (pricing) => {
    if (!pricing) return "Free";
    const hasFree = pricing.some(p => (p.cost === "$0" || p.plan === "Free"));
    const hasPaid = pricing.some(p => (p.cost !== "$0" && p.plan !== "Free"));
    if (hasFree && hasPaid) return "Freemium";
    if (hasFree && !hasPaid) return "Free";
    return "Paid";
  };

  const filteredTools = toolsData.filter((tool) => {
    const lowerQuery = searchQuery.toLowerCase();
    const priceMatch = tool.pricing?.some(p => {
         const priceText = typeof p === 'object' ? `${p.plan} ${p.cost}` : p;
         return priceText.toLowerCase().includes(lowerQuery);
    });
    const matchesSearch = 
      tool.name.toLowerCase().includes(lowerQuery) || 
      tool.category.toLowerCase().includes(lowerQuery) || 
      tool.shortDescription.toLowerCase().includes(lowerQuery) || 
      priceMatch;

    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 md:px-6">
      
      {/* 1. HERO SECTION (REVERTED) */}
      <header className="text-center max-w-5xl mx-auto mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium text-gray-300 mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Directly linking 100+ AI solutions
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-4 md:mb-6 leading-[1.1]">
          Supercharge your workflow with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
            Artificial Intelligence.
          </span>
        </h1>
        
        <p className="text-sm md:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed font-light px-4">
          Discover the best AI tools for coding, writing, and design. <br className="hidden md:block" />
          Stop searching, start building.
        </p>

        {/* SEARCH BAR */}
        <div className="relative max-w-xl mx-auto mb-12 z-20">
          <div className="p-[1px] rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
            <div className="relative flex items-center w-full h-16 rounded-full bg-[#050505]">
              <div className="pl-6 pr-4 text-gray-500">🔍</div>
              <input
                type="text"
                className="w-full h-full bg-transparent text-lg text-white placeholder-transparent focus:outline-none font-medium tracking-wide pb-1"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery === "" && (
                <div className="absolute left-16 top-0 h-full flex items-center pointer-events-none">
                  <span className="text-gray-500 text-lg font-light flex items-center">
                    {placeholder}<span className="animate-pulse text-indigo-500 ml-1">|</span>
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 2. MINIMAL CATEGORY GRID */}
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-3 mb-16">
          {featuredCategories.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/category/${cat.slug.replace(" ", "-")}`}
              className="group flex flex-col items-center justify-center py-5 px-4 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 ease-out"
            >
              <div className="text-gray-500 group-hover:text-white transition-colors duration-300 scale-90 group-hover:scale-100 mb-2">
                {cat.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 group-hover:text-gray-200 transition-colors duration-300">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>

        {/* CATEGORY CHIPS */}
        <div className="flex flex-wrap justify-center gap-2 px-2 border-t border-white/5 pt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-xs font-bold uppercase tracking-widest border transition-all duration-200 ${
                activeCategory === cat 
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105" 
                  : "bg-transparent text-gray-500 border-gray-800 hover:border-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      
      {/* 3. RESULTS SECTION */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 px-2">
          <h2 className="text-lg md:text-xl font-bold text-white tracking-tight uppercase">
            {activeCategory === "All" ? "Trending Tools" : `${activeCategory} Tools`}
          </h2>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">
            {filteredTools.length} Database Matches
          </span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {filteredTools.map((tool) => (
              <AICard 
                key={tool.id}
                toolName={tool.name}
                description={tool.shortDescription} 
                category={tool.category}
                price={getPriceLabel(tool.pricing)}
                internalLink={`/tool/${tool.slug}`} 
                websiteUrl={tool.websiteUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-3xl bg-gray-900/20 mx-2">
            <p className="text-gray-500 font-medium italic">No tools found matching your search.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
              className="mt-4 text-indigo-400 font-bold hover:underline"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* 4. FOOTER CTA */}
      <div className="max-w-5xl mx-auto mt-24 p-12 rounded-[2rem] bg-gradient-to-br from-indigo-900/10 to-transparent border border-white/5 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">Can't find the right tool?</h3>
        <p className="text-gray-400 mb-8 max-w-lg mx-auto font-light">Use our algorithmic stack builder to get a personalized AI toolkit based on your specific goals.</p>
        <Link 
          href="/stack" 
          className="inline-block bg-white text-black px-10 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all hover:-translate-y-1 shadow-2xl"
        >
          Build AI Stack 
        </Link>
      </div>
    </div>
  );
}