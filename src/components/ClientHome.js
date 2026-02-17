"use client";

import React, { useState, useEffect } from 'react';
import AICard from './AICard'; 
import { toolsData } from "@/data/tools"; 
import Link from "next/link"; 

export default function ClientHome() {
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Typing Effect States
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

  const categories = ["All", "Writing", "Image Gen", "Video", "Audio", "Marketing", "Coding", "Productivity", "3D", "Fun"];

  // 👇 HELPER FUNCTION: Ye Pricing Array ko check karke bata dega ke "Freemium" hai ya "Paid"
  const getPriceLabel = (pricing) => {
    if (!pricing) return "Free";
    
    // Check if user has mixed Old (Strings) and New (Objects) data
    // Hum assume kar rahe hain ab sab Objects hain jesa aapne bheja
    const hasFree = pricing.some(p => (p.cost === "$0" || p.plan === "Free"));
    const hasPaid = pricing.some(p => (p.cost !== "$0" && p.plan !== "Free"));

    if (hasFree && hasPaid) return "Freemium"; // $0 bhi hai aur Paid bhi
    if (hasFree && !hasPaid) return "Free";    // Sirf $0 hai
    return "Paid";                             // Sirf Paid hai (Jasper)
  };

  const filteredTools = toolsData.filter((tool) => {
    const lowerQuery = searchQuery.toLowerCase();
    
    // Search Logic handles both text and objects
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
      
      {/* HERO SECTION */}
      <header className="text-center max-w-5xl mx-auto mb-16 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 rounded-full text-[10px] md:text-xs font-medium text-gray-300 mb-6 backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
          Updated Daily
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-4 md:mb-6 leading-[1.1]">
          Supercharge your workflow with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">
            Artificial Intelligence.
          </span>
        </h1>
        
        <p className="text-sm md:text-lg text-gray-400 mb-8 max-w-xl mx-auto leading-relaxed font-light px-4">
          Discover the best AI tools for coding, writing, and design. 
          Stop searching, start building.
        </p>

        {/* SEARCH BAR */}
        <div className="relative max-w-xl mx-auto mb-16 z-20">
          <div className="p-[1px] rounded-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800">
            <div className="relative flex items-center w-full h-16 rounded-full bg-[#050505] shadow-[0_0_50px_-10px_rgba(255,255,255,0.05)]">
              <div className="pl-6 pr-4 text-gray-500">🔍</div>
              <input
                type="text"
                className="w-full h-full bg-transparent text-lg text-white placeholder-transparent focus:outline-none font-medium tracking-wide pb-1 relative z-10"
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

        {/* CATEGORY CHIPS */}
        <div className="flex flex-wrap justify-center gap-2 px-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[11px] md:text-xs font-medium border transition-all duration-200 ${
                activeCategory === cat 
                  ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)] scale-105" 
                  : "bg-transparent text-gray-400 border-gray-800 hover:border-gray-500 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>
      
      {/* RESULTS SECTION */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6 px-2">
          <h2 className="text-lg md:text-xl font-bold text-white tracking-tight">
            {activeCategory === "All" ? "Trending Tools" : `${activeCategory} Tools`}
          </h2>
          <span className="text-xs md:text-sm text-gray-500">
            {filteredTools.length} results
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
                
                // 👇 MAGIC IS HERE: Hum 'Pricing Array' bhej kar 'Label' mangwa rahe hain
                price={getPriceLabel(tool.pricing)}
                
                internalLink={`/tool/${tool.slug}`} 
                websiteUrl={tool.websiteUrl}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl bg-gray-900/20 mx-2">
            <p className="text-gray-500">No tools found matching your search.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
              className="mt-4 text-indigo-400 underline"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}