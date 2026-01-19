
import React from 'react';
import { MenuItem } from '../types';

interface MenuItemCardProps {
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item, onAddToCart }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-stone-800 shadow-sm capitalize">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-lg text-stone-800">{item.name}</h3>
          <span className="font-bold text-orange-600">${item.price.toFixed(2)}</span>
        </div>
        <p className="text-stone-500 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1 mb-4">
          {item.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-semibold text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
              #{tag}
            </span>
          ))}
        </div>
        <button 
          onClick={() => onAddToCart(item)}
          className="w-full bg-stone-900 text-white py-2.5 rounded-xl font-bold hover:bg-orange-500 transition-colors flex items-center justify-center space-x-2"
        >
          <i className="fa-solid fa-plus text-xs"></i>
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default MenuItemCard;
