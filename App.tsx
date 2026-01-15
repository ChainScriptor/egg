
import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Reviews from './components/Reviews';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BoilSimulator from './components/BoilSimulator';
import VideoSection from './components/VideoSection';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans text-dark selection:bg-primary selection:text-white relative">
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <div className="reveal"><VideoSection /></div>
        <div className="reveal"><BoilSimulator /></div>
        <div className="reveal"><Features /></div>
        <div className="reveal"><HowItWorks /></div>
        <div className="reveal"><Reviews /></div>
        <div className="reveal"><Pricing /></div>
        <div className="reveal"><FAQ /></div>
      </main>

      <Footer />

      {/* Σταθερό Φόντο με την Εικόνα της Φάρμας (Restore) */}
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-transform duration-1000"
          style={{ 
            backgroundImage: 'url("https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/farm-landscape-ghibli.jpg")',
            filter: 'brightness(1.05) saturate(1.1)'
          }}
        >
          <div className="absolute inset-0 bg-[#FFF9F2]/75 backdrop-blur-[1px]"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
