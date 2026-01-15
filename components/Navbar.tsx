
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Toggle compact mode
      setIsScrolled(window.scrollY > 50);

      // Calculate scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 ${isScrolled ? 'top-4' : 'top-0 md:top-6'}`}>
      <div className="max-w-6xl mx-auto relative">
        <div className={`
          bg-white/90 backdrop-blur-lg border-4 border-dark rounded-[2rem] 
          flex items-center justify-between px-6 py-3 md:px-10 md:py-4
          transition-all duration-500 shadow-[8px_8px_0px_#1A1A1A]
          ${isScrolled ? 'scale-95 md:scale-100' : 'scale-100'}
        `}>
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="text-4xl transform group-hover:rotate-12 transition-transform duration-300 filter drop-shadow-sm">
              🐔
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-cartoon font-bold text-xl md:text-2xl tracking-tight text-dark">
                EggMaster <span className="text-primary">3000</span>
              </span>
              <span className="text-[10px] font-bold text-dark/40 tracking-[0.2em] uppercase hidden md:block">
                The Science of Breakfast
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {['Πώς Λειτουργεί', 'Χαρακτηριστικά', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item === 'FAQ' ? 'faq' : item === 'Πώς Λειτουργεί' ? 'how-it-works' : 'features'}`}
                className="font-cartoon font-bold text-dark/70 hover:text-primary hover:scale-110 transition-all cursor-pointer relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <a 
              href="#pricing" 
              className="relative group hidden sm:block"
            >
              <div className="absolute inset-0 bg-dark rounded-xl translate-y-1 translate-x-1 group-hover:translate-y-1.5 group-hover:translate-x-1.5 transition-all"></div>
              <div className="relative bg-eggYolk text-dark px-6 py-3 rounded-xl font-cartoon font-bold border-2 border-dark flex items-center gap-2 transform group-hover:-translate-y-0.5 transition-all">
                ΑΓΟΡΑ <span className="bg-white/50 px-2 rounded-lg text-sm">€9.99</span>
              </div>
            </a>
            
            {/* Mobile Buy Button */}
            <a href="#pricing" className="sm:hidden text-2xl bg-primary p-2 rounded-xl border-2 border-dark shadow-[3px_3px_0px_#1A1A1A]">
              🛒
            </a>
          </div>
        </div>

        {/* Scroll Progress Bar (Boil Progress) */}
        <div className="absolute -bottom-1 left-12 right-12 h-2 bg-dark/10 rounded-full overflow-hidden border-2 border-dark/20">
          <div 
            className="h-full bg-gradient-to-r from-accent via-secondary to-primary transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
