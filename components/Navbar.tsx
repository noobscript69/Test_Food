
import React from 'react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  setView: (view: AppView) => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView, cartCount }) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-200 z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div 
            className="hidden md:flex items-center space-x-2 cursor-pointer"
            onClick={() => setView(AppView.HOME)}
          >
            <i className="fa-solid fa-truck-fast text-orange-500 text-2xl"></i>
            <span className="font-brand text-2xl tracking-wider uppercase">StreetBites</span>
          </div>

          <div className="flex w-full md:w-auto justify-around md:space-x-8">
            <button 
              onClick={() => setView(AppView.HOME)}
              className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 ${currentView === AppView.HOME ? 'text-orange-500' : 'text-stone-500'} transition-colors`}
            >
              <i className="fa-solid fa-house text-xl md:text-base"></i>
              <span className="text-xs md:text-sm font-medium">Home</span>
            </button>
            <button 
              onClick={() => setView(AppView.MENU)}
              className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 ${currentView === AppView.MENU ? 'text-orange-500' : 'text-stone-500'} transition-colors`}
            >
              <i className="fa-solid fa-utensils text-xl md:text-base"></i>
              <span className="text-xs md:text-sm font-medium">Menu</span>
            </button>
            <button 
              onClick={() => setView(AppView.AI_ASSISTANT)}
              className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 ${currentView === AppView.AI_ASSISTANT ? 'text-orange-500' : 'text-stone-500'} transition-colors`}
            >
              <i className="fa-solid fa-wand-magic-sparkles text-xl md:text-base"></i>
              <span className="text-xs md:text-sm font-medium">AI Recommend</span>
            </button>
            <button 
              onClick={() => setView(AppView.CART)}
              className={`flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-2 ${currentView === AppView.CART ? 'text-orange-500' : 'text-stone-500'} transition-colors relative`}
            >
              <div className="relative">
                <i className="fa-solid fa-cart-shopping text-xl md:text-base"></i>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="text-xs md:text-sm font-medium">Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
