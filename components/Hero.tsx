
import React from 'react';
import { AppView } from '../types';

interface HeroProps {
  onStartOrdering: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartOrdering }) => {
  return (
    <div className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center overflow-hidden bg-stone-900">
      <img 
        src="https://picsum.photos/seed/foodcart/1200/800" 
        alt="Foodcart Hero" 
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />
      <div className="relative z-10 px-4 max-w-2xl">
        <h1 className="font-brand text-6xl md:text-8xl text-white mb-4 drop-shadow-lg tracking-wider">
          FUEL FOR THE <span className="text-orange-500 italic">STREETS</span>
        </h1>
        <p className="text-stone-200 text-lg md:text-xl mb-8 font-medium">
          Fresh, fast, and futuristic street food curated by AI. Experience the next level of flavor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onStartOrdering}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl shadow-orange-500/20"
          >
            ORDER NOW
          </button>
          <button 
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg transition-all"
          >
            VIEW LOCATION
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
