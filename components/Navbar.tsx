
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
          bg-gradient-to-r from-white via-eggWhite to-white/95 backdrop-blur-xl border-4 border-dark rounded-[2rem] 
          flex items-center justify-between px-6 py-3 md:px-10 md:py-4
          transition-all duration-500 shadow-[8px_8px_0px_#1A1A1A] hover:shadow-[12px_12px_0px_#1A1A1A]
          ${isScrolled ? 'scale-95 md:scale-100 shadow-[6px_6px_0px_#1A1A1A]' : 'scale-100'}
          relative overflow-hidden
        `}>
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5 pointer-events-none"></div>
          
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
              <div className="absolute inset-0 bg-accent rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src="/1.jpg" 
                alt="EggMaster Logo" 
                className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-[3px] border-dark shadow-[4px_4px_0px_#1A1A1A] relative z-10 transform group-hover:shadow-[6px_6px_0px_#1A1A1A] transition-all"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-cartoon font-bold text-xl md:text-2xl tracking-tight text-dark group-hover:text-primary transition-colors">
                EggMaster <span className="text-primary group-hover:text-secondary transition-colors">3000</span>
              </span>
              <span className="text-[10px] font-bold text-dark/40 tracking-[0.2em] uppercase hidden md:block group-hover:text-dark/60 transition-colors">
                The Science of Breakfast
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 relative z-10">
            {['Πώς Λειτουργεί', 'Χαρακτηριστικά', 'FAQ'].map((item) => (
              <a 
                key={item}
                href={`#${item === 'FAQ' ? 'faq' : item === 'Πώς Λειτουργεί' ? 'how-it-works' : 'features'}`}
                className="font-cartoon font-bold text-dark/70 hover:text-primary hover:scale-110 transition-all cursor-pointer relative group px-2 py-1 rounded-lg hover:bg-accent/10"
              >
                {item}
                <span className="absolute -bottom-1 left-2 right-2 h-1 bg-gradient-to-r from-accent via-secondary to-primary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4 relative z-10">
            <a 
              href="#pricing" 
              className="relative group hidden sm:block"
            >
              <div className="absolute inset-0 bg-dark rounded-xl translate-y-1 translate-x-1 group-hover:translate-y-1.5 group-hover:translate-x-1.5 transition-all blur-sm opacity-50"></div>
              <div className="relative bg-gradient-to-r from-eggYolk via-accent to-eggYolk bg-size-200 bg-pos-0 hover:bg-pos-100 text-dark px-6 py-3 rounded-xl font-cartoon font-bold border-2 border-dark flex items-center gap-2 transform group-hover:-translate-y-0.5 group-hover:scale-105 transition-all shadow-[4px_4px_0px_#1A1A1A] group-hover:shadow-[6px_6px_0px_#1A1A1A]">
                <span className="text-lg">🛒</span>
                <span>ΑΓΟΡΑ</span>
                <span className="bg-white/80 px-2.5 py-0.5 rounded-lg text-sm font-bold border border-dark/20">€9.99</span>
              </div>
            </a>
            
            {/* Mobile Buy Button */}
            <a href="#pricing" className="sm:hidden text-2xl bg-gradient-to-br from-primary to-secondary p-3 rounded-xl border-2 border-dark shadow-[3px_3px_0px_#1A1A1A] hover:shadow-[5px_5px_0px_#1A1A1A] hover:scale-110 transition-all">
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
