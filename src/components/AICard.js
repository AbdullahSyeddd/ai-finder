import React from 'react';
import Link from 'next/link';

const AICard = ({ toolName, description, category, price, internalLink, websiteUrl }) => {
  
  // Use actual website URL for favicon
  const logoUrl = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${websiteUrl}&size=128`;

  // 'price' prop ab direct string hai ("Free", "Freemium", "Paid")
  const isFree = price === "Free";

  return (
    <Link href={internalLink} className="block h-full group">
      <div className="relative bg-[#0B1120] border border-gray-800 rounded-xl p-6 hover:border-gray-500 transition-all duration-300 flex flex-col h-full hover:shadow-xl">
        
        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-4">
            
            {/* Logo */}
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
          
          {/* BADGE: Logic based on text */}
          <span className={`text-[10px] px-2 py-0.5 rounded font-bold border tracking-wide ${
             isFree 
               ? 'bg-black text-gray-300 border-gray-700' // Free = Black
               : 'bg-white text-black border-white'       // Freemium/Paid = White
          }`}>
            {price}
          </span>
        </div>

        <p className="text-gray-400 text-sm mb-8 leading-relaxed line-clamp-2 flex-grow font-light">
          {description}
        </p>

        <div className="w-full block text-center bg-black text-white border border-gray-800 text-sm font-medium py-2.5 rounded-lg group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-200">
          View Details ↗
        </div>
      </div>
    </Link>
  );
};

export default AICard;