
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import MenuItemCard from './MenuItemCard';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', 'Burgers', 'Sides', 'Drinks', 'Desserts'];
  
  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="font-brand text-4xl text-stone-800 mb-6">Explore the Menu</h2>
        
        <div className="flex space-x-2 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                activeCategory === cat 
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30' 
                : 'bg-white text-stone-600 border border-stone-200 hover:border-orange-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map(item => (
          <MenuItemCard key={item.id} item={item} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
