
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove }) => {
  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="inline-block p-6 bg-stone-100 rounded-full mb-6">
          <i className="fa-solid fa-cart-arrow-down text-stone-400 text-5xl"></i>
        </div>
        <h2 className="text-2xl font-bold text-stone-800 mb-2">Your cart is empty</h2>
        <p className="text-stone-500 mb-8">Looks like you haven't added anything yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="font-brand text-4xl text-stone-800 mb-8">Your Street Box</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-white p-4 rounded-2xl flex items-center shadow-sm border border-stone-100">
              <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover mr-4" />
              <div className="flex-grow">
                <h4 className="font-bold text-stone-800">{item.name}</h4>
                <p className="text-stone-400 text-xs mb-2">Unit: ${item.price.toFixed(2)}</p>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"
                  >
                    <i className="fa-solid fa-minus text-xs"></i>
                  </button>
                  <span className="font-bold text-stone-700">{item.quantity}</span>
                  <button 
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-8 h-8 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"
                  >
                    <i className="fa-solid fa-plus text-xs"></i>
                  </button>
                </div>
              </div>
              <div className="text-right ml-4">
                <p className="font-bold text-stone-800 mb-2">${(item.price * item.quantity).toFixed(2)}</p>
                <button 
                  onClick={() => onRemove(item.id)}
                  className="text-stone-300 hover:text-red-500 transition-colors"
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 h-fit sticky top-24">
          <h3 className="font-bold text-xl mb-6 text-stone-800">Order Summary</h3>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-stone-500">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-stone-500">
              <span>Tax (8%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t border-stone-100 pt-3 flex justify-between font-bold text-xl text-stone-900">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-orange-500/20">
            CHECKOUT NOW
          </button>
          <div className="mt-4 flex items-center justify-center space-x-2 text-stone-400 text-xs">
            <i className="fa-solid fa-lock"></i>
            <span>Secure Street Checkout</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
