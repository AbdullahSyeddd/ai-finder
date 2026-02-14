// src/components/AICard.js
import React from 'react';

const AICard = ({ toolName, description, category, price, link }) => {
  
  const logoUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${link}&size=128`;

  return (
    <div className="group relative bg-[#0B1120] border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition-all duration-300 flex flex-col h-full hover:shadow-xl">
      
      {/* Header */}
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center gap-4">
          
          {/* Logo Box with subtle background */}
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-md bg-black/20 p-1">
            <img 
              src={logoUrl} 
              alt={toolName} 
              className="w-full h-full object-contain" 
              onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${toolName}&background=transparent&color=fff`; }}
            />
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight group-hover:underline decoration-gray-600 underline-offset-4 decoration-2">
              {toolName}
            </h3>
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">
              {category}
            </span>
          </div>
        </div>

        {/* ⬜ BADGES: Pure Black & White (No Colors) + Proper Corners */}
        <span className={`text-[10px] px-2 py-0.5 rounded font-bold border tracking-wide ${
             price === 'Free' 
               ? 'bg-black text-gray-300 border-gray-700'  // Free = Dark
               : 'bg-white text-black border-white'        // Paid/Freemium = White Box
        }`}>
          {price}
        </span>
      </div>

      <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2 flex-grow font-light">
        {description}
      </p>

      {/* Button */}
      <a 
        href={link} 
        target="_blank" 
        rel="nofollow noopener noreferrer"
        className="w-full block text-center bg-black text-white border border-gray-800 text-sm font-medium py-2.5 rounded-lg hover:bg-white hover:text-black hover:border-white transition-all duration-200"
      >
        Visit Website ↗
      </a>
    </div>
  );
};

export default AICard;