
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import AiAssistant from './components/AiAssistant';
import Cart from './components/Cart';
import { MenuItem, CartItem, AppView } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.HOME);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Smooth scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [view]);

  const handleAddToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    // Visual feedback could be added here
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleRemoveFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const cartTotalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-16">
      <Navbar currentView={view} setView={setView} cartCount={cartTotalItems} />
      
      <main>
        {view === AppView.HOME && (
          <div className="animate-in fade-in duration-700">
            <Hero onStartOrdering={() => setView(AppView.MENU)} />
            <section className="max-w-4xl mx-auto px-4 py-16">
              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1">
                  <span className="text-orange-500 font-bold uppercase tracking-widest text-sm mb-2 block">The Experience</span>
                  <h2 className="font-brand text-4xl text-stone-800 mb-6">STREET FOOD <br/>POWERED BY <span className="text-orange-500">GEMINI</span></h2>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    We've combined artisanal street cooking with advanced Gemini AI to curate a menu that adapts to your cravings. Every recipe is optimized for peak flavor profiles and street-smart efficiency.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                      <i className="fa-solid fa-bolt text-orange-500 mb-2"></i>
                      <h4 className="font-bold text-sm">Ultra Fast</h4>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm">
                      <i className="fa-solid fa-leaf text-green-500 mb-2"></i>
                      <h4 className="font-bold text-sm">Fresh Ingredients</h4>
                    </div>
                  </div>
                </div>
                <div className="flex-1 w-full h-80 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                  <img src="https://picsum.photos/seed/experience/800/800" alt="Experience" className="w-full h-full object-cover" />
                </div>
              </div>
            </section>

            <section className="bg-orange-500 py-16 text-white text-center">
              <div className="max-w-2xl mx-auto px-4">
                <h3 className="font-brand text-5xl mb-4 tracking-wider">Join the Flavor Revolution</h3>
                <p className="mb-8 opacity-90 text-lg">Download our app for exclusive AI-generated secret menu items available only to loyal explorers.</p>
                <div className="flex justify-center space-x-4">
                  <button className="bg-white text-orange-500 px-6 py-3 rounded-xl font-bold flex items-center space-x-2">
                    <i className="fa-brands fa-apple text-xl"></i>
                    <span>App Store</span>
                  </button>
                  <button className="bg-white text-orange-500 px-6 py-3 rounded-xl font-bold flex items-center space-x-2">
                    <i className="fa-brands fa-google-play text-xl"></i>
                    <span>Play Store</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {view === AppView.MENU && (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <Menu onAddToCart={handleAddToCart} />
          </div>
        )}

        {view === AppView.AI_ASSISTANT && (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <AiAssistant onAddToCart={handleAddToCart} />
          </div>
        )}

        {view === AppView.CART && (
          <div className="animate-in slide-in-from-right-4 duration-500">
            <Cart 
              items={cart} 
              onUpdateQuantity={handleUpdateQuantity} 
              onRemove={handleRemoveFromCart} 
            />
          </div>
        )}
      </main>

      <footer className="bg-stone-900 text-stone-500 py-12 px-4 mt-20 md:mb-0">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <i className="fa-solid fa-truck-fast text-orange-500 text-xl"></i>
              <span className="font-brand text-2xl text-white tracking-wider">StreetBites</span>
            </div>
            <p className="text-sm">Revolutionizing urban dining with technology and taste.</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="text-sm space-y-2">
              <li className="cursor-pointer hover:text-white" onClick={() => setView(AppView.HOME)}>Home</li>
              <li className="cursor-pointer hover:text-white" onClick={() => setView(AppView.MENU)}>Menu</li>
              <li className="cursor-pointer hover:text-white" onClick={() => setView(AppView.AI_ASSISTANT)}>AI Recs</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Find Us</h4>
            <p className="text-sm mb-2"><i className="fa-solid fa-location-dot mr-2"></i> Neon District, Ave 4</p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
              <i className="fa-brands fa-instagram hover:text-orange-500 cursor-pointer"></i>
              <i className="fa-brands fa-twitter hover:text-orange-500 cursor-pointer"></i>
              <i className="fa-brands fa-facebook hover:text-orange-500 cursor-pointer"></i>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto border-t border-stone-800 mt-12 pt-8 text-center text-xs">
          © {new Date().getFullYear()} StreetBites AI. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
