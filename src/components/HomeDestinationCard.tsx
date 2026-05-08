import React from 'react';

interface HomeDestinationCardProps {
  name: string;
  flagUrl: string;
  mapMaskUrl: string;
  bgColor?: string;
}

export default function HomeDestinationCard({ name, flagUrl, mapMaskUrl, bgColor }: HomeDestinationCardProps) {
  return (
    <div className="home-dest-card flex flex-col items-center gap-3 group cursor-pointer transition-transform duration-300 hover:-translate-y-1">
      {/* Map shape filled with flag */}
      <div 
        className="w-20 h-20 sm:w-24 sm:h-24 transition-all duration-300 group-hover:scale-105"
        style={{
          backgroundColor: bgColor || '#e2e8f0', // fallback color
          backgroundImage: bgColor ? 'none' : `url(${flagUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitMaskImage: `url(${mapMaskUrl})`,
          WebkitMaskSize: 'contain',
          WebkitMaskPosition: 'center',
          WebkitMaskRepeat: 'no-repeat',
          maskImage: `url(${mapMaskUrl})`,
          maskSize: 'contain',
          maskPosition: 'center',
          maskRepeat: 'no-repeat',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.15)) drop-shadow(0px 0px 1px rgba(0,0,0,0.2))'
        }}
        aria-hidden="true"
      />
      {/* Orange pill */}
      <div className="bg-[#e8a020] text-white font-semibold text-sm px-5 py-1.5 rounded-md shadow-md transition-colors duration-300 group-hover:bg-[#d68f18]">
        {name}
      </div>
    </div>
  );
}
