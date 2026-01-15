
import React, { useState } from 'react';

const BoilSimulator: React.FC = () => {
  const [level, setLevel] = useState<'soft' | 'medium' | 'hard'>('soft');

  const getColor = () => {
    switch(level) {
      case 'soft': return 'bg-accent';
      case 'medium': return 'bg-secondary';
      case 'hard': return 'bg-primary';
    }
  };

  const getEggVisual = () => {
    switch(level) {
      case 'soft': return '🍳 Μελάτο & Ζουμερό!';
      case 'medium': return '🥘 Τέλειο για Σαλάτα!';
      case 'hard': return '🥪 Σφιχτό για Σάντουιτς!';
    }
  };

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-[3rem] border-4 border-dark p-8 lg:p-16 shadow-[16px_16px_0px_#1A1A1A] relative overflow-hidden">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-cartoon font-bold mb-4">Δες το σε Δράση! 📽️</h2>
          <p className="text-xl text-dark/60">Πάτησε τα κουμπιά και δες πώς αλλάζει το χρώμα!</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <button 
              onClick={() => setLevel('soft')}
              className={`p-6 rounded-2xl border-4 border-dark font-cartoon font-bold text-2xl transition-all ${level === 'soft' ? 'bg-accent translate-x-2' : 'bg-gray-100 opacity-60'}`}
            >
              🥚 SOFT (Μελάτο)
            </button>
            <button 
              onClick={() => setLevel('medium')}
              className={`p-6 rounded-2xl border-4 border-dark font-cartoon font-bold text-2xl transition-all ${level === 'medium' ? 'bg-secondary translate-x-2' : 'bg-gray-100 opacity-60'}`}
            >
              🥘 MEDIUM (Μεσαίο)
            </button>
            <button 
              onClick={() => setLevel('hard')}
              className={`p-6 rounded-2xl border-4 border-dark font-cartoon font-bold text-2xl transition-all ${level === 'hard' ? 'bg-primary text-white translate-x-2' : 'bg-gray-100 opacity-60'}`}
            >
              🥪 HARD (Σφιχτό)
            </button>
          </div>

          <div className="flex flex-col items-center justify-center order-1 lg:order-2">
            <div className={`w-48 h-60 rounded-[50%_50%_45%_45%] border-4 border-dark transition-colors duration-1000 flex items-center justify-center relative ${getColor()}`}>
                <div className="absolute top-8 flex gap-4">
                  <div className="w-4 h-4 bg-dark rounded-full"></div>
                  <div className="w-4 h-4 bg-dark rounded-full"></div>
                </div>
                <div className="w-6 h-6 bg-orange-500 rotate-45 border-2 border-dark mt-4"></div>
                <div className="absolute bottom-4 font-cartoon font-bold text-dark/40">{level.toUpperCase()}</div>
            </div>
            <div className="mt-8 text-3xl font-cartoon font-bold text-primary animate-bounce">
              {getEggVisual()}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/20 rounded-full"></div>
      </div>
    </section>
  );
};

export default BoilSimulator;
