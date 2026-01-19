
import React, { useState } from 'react';
import { getFoodRecommendations } from '../services/geminiService';
import { MenuItem, RecommendationResponse } from '../types';
import { MENU_ITEMS } from '../constants';

interface AiAssistantProps {
  onAddToCart: (item: MenuItem) => void;
}

const AiAssistant: React.FC<AiAssistantProps> = ({ onAddToCart }) => {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RecommendationResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!mood.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const recommendations = await getFoodRecommendations(mood, MENU_ITEMS);
      setResult(recommendations);
    } catch (err) {
      console.error(err);
      setError('Something went wrong with the AI. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getMenuItemById = (id: string) => MENU_ITEMS.find(item => item.id === id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-block p-4 bg-orange-50 rounded-2xl mb-4">
          <i className="fa-solid fa-wand-magic-sparkles text-orange-500 text-4xl"></i>
        </div>
        <h2 className="font-brand text-4xl text-stone-800 mb-2">Mood-to-Meal AI</h2>
        <p className="text-stone-500">Not sure what to eat? Tell us how you're feeling.</p>
      </div>

      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-stone-100 max-w-xl mx-auto mb-12">
        <form onSubmit={handleRecommend} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-stone-700 mb-2">How are you feeling?</label>
            <textarea
              value={mood}
              onChange={(e) => setMood(e.target.value)}
              placeholder="e.g. I'm exhausted after a long day at the office and want something spicy and comforting..."
              className="w-full p-4 bg-stone-50 border border-stone-200 rounded-2xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all h-32 resize-none"
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            disabled={loading || !mood.trim()}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-stone-300 text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center space-x-2"
          >
            {loading ? (
              <>
                <i className="fa-solid fa-spinner fa-spin"></i>
                <span>Thinking...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-sparkles"></i>
                <span>Get Recommendations</span>
              </>
            )}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}
      </div>

      {result && (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="bg-stone-900 text-white p-6 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <i className="fa-solid fa-quote-right text-6xl"></i>
            </div>
            <p className="text-lg italic leading-relaxed relative z-10">
              "{result.friendlyMessage}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {result.recommendations.map((rec, idx) => {
              const item = getMenuItemById(rec.itemId);
              if (!item) return null;
              return (
                <div key={idx} className="bg-white border border-stone-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col">
                  <div className="flex items-center p-4 border-b border-stone-50 bg-stone-50/50">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover mr-4" />
                    <div>
                      <h4 className="font-bold text-stone-800">{item.name}</h4>
                      <p className="text-orange-600 font-bold text-sm">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="p-4 flex-grow">
                    <p className="text-stone-600 text-sm italic">"{rec.reason}"</p>
                  </div>
                  <div className="p-4 bg-stone-50">
                    <button 
                      onClick={() => onAddToCart(item)}
                      className="w-full bg-stone-900 text-white py-2 rounded-xl font-bold text-sm hover:bg-orange-500 transition-colors"
                    >
                      Add to My Mood Box
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
