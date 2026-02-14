// src/components/ClientHome.js
"use client";

import React, { useState, useEffect } from 'react';
import AICard from './AICard'; 
import { aiTools } from '../data/tools';

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

  const synonymMap = {
    "assignment": "Writing", "essay": "Writing", "homework": "Writing", 
    "blog": "Writing", "copy": "Writing", "email": "Writing",
    "website": "Coding", "web": "Coding", "app": "Coding", 
    "code": "Coding", "program": "Coding", "bug": "Coding",
    "logo": "Image Gen", "design": "Image Gen", "art": "Image Gen", 
    "photo": "Image Gen", "picture": "Image Gen", "drawing": "Image Gen",
    "movie": "Video", "clip": "Video", "edit": "Video", "animation": "Video",
    "song": "Audio", "music": "Audio", "voice": "Audio", 
    "sound": "Audio", "podcast": "Audio",
    "ad": "Marketing", "social": "Marketing", "seo": "Marketing", "instagram": "Marketing",
    "meme": "Fun", "funny": "Fun", "joke": "Fun",
    "plan": "Productivity", "schedule": "Productivity", "notes": "Productivity", "organize": "Productivity",
  };

  const categories = ["All", "Writing", "Image Gen", "Video", "Audio", "Marketing", "Coding", "Productivity", "3D", "Fun"];

  const filteredTools = aiTools.filter((tool) => {
    const lowerQuery = searchQuery.toLowerCase();
    
    const exactMatch = 
      tool.name.toLowerCase().includes(lowerQuery) || 
      tool.category.toLowerCase().includes(lowerQuery) || 
      tool.description.toLowerCase().includes(lowerQuery) || 
      tool.price.toLowerCase().includes(lowerQuery);

    let smartMatch = false;
    Object.keys(synonymMap).forEach((key) => {
      if (lowerQuery.includes(key)) {
        if (tool.category === synonymMap[key]) {
          smartMatch = true;
        }
      }
    });

    const matchesCategory = activeCategory === "All" || tool.category === activeCategory;
    return (exactMatch || smartMatch) && matchesCategory;
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

        {/* H1 Tag for SEO Structure */}
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
              <div className="pl-6 pr-4 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <input
                type="text"
                className="w-full h-full bg-transparent text-lg text-white placeholder-transparent focus:outline-none font-medium tracking-wide pb-1 relative z-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery === "" && (
                <div className="absolute left-16 top-0 h-full flex items-center pointer-events-none">
                  <span className="text-gray-500 text-lg font-light flex items-center">
                    {placeholder}
                    <span className="animate-pulse text-indigo-500 ml-1">|</span>
                  </span>
                </div>
              )}
              <div className="pr-2 z-20">
                <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path></svg>
                </button>
              </div>
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
          {/* H2 Tag for Structure */}
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
                description={tool.description}
                category={tool.category}
                price={tool.price}
                link={tool.link}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-800 rounded-xl bg-gray-900/20 mx-2">
            <p className="text-2xl mb-2">🤔</p>
            <p className="text-gray-500 mb-2">We couldn't find a direct match for "{searchQuery}"</p>
            <p className="text-gray-600 text-sm">Try searching for categories like "Video", "Writing" or "Free".</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
              className="mt-4 text-indigo-400 underline underline-offset-4 hover:text-indigo-300"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}