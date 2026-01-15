
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 px-6 overflow-hidden">
      
      {/* Floating Elements */}
      <div className="absolute top-40 left-20 text-6xl opacity-30 floating-egg hidden lg:block" style={{ animationDelay: '0s' }}>🥚</div>
      <div className="absolute bottom-40 right-20 text-6xl opacity-30 floating-egg hidden lg:block" style={{ animationDelay: '2s' }}>🔥</div>

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-eggYolk rounded-full border-4 border-dark font-cartoon font-bold text-dark mb-8 rotate-[-2deg] shadow-[4px_4px_0px_#1A1A1A]">
            <span className="animate-bounce">🏆</span> ΤΟ #1 GADGET ΚΟΥΖΙΝΑΣ
          </div>
          
          <h1 className="text-5xl lg:text-8xl font-cartoon font-bold text-dark leading-[0.9] mb-8">
            <span className="text-primary">ΤΕΛΕΙΑ</span> ΑΥΓΑ <br/>
            <span className="relative">
              ΚΑΘΕ ΦΟΡΑ!
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-accent/60 -z-10 rounded-full"></div>
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-dark/80 font-medium mb-10 leading-snug max-w-xl mx-auto lg:mx-0">
            Το έξυπνο κοτοπουλάκι αλλάζει χρώμα για να σου δείξει το μέλλον του πρωινού σου. <span className="underline decoration-primary decoration-4">Απλά, γρήγορα, τέλεια.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <a 
              href="#pricing" 
              className="group relative inline-block"
            >
              <div className="absolute inset-0 bg-dark rounded-2xl translate-y-2 translate-x-1"></div>
              <div className="relative px-10 py-5 bg-primary text-white rounded-2xl font-cartoon font-bold text-2xl border-4 border-dark transition-all group-hover:-translate-y-1 group-active:translate-y-1 group-active:translate-x-1">
                ΤΟ ΘΕΛΩ ΤΩΡΑ! 🚀
              </div>
            </a>
            
            <div className="flex flex-col items-center lg:items-start justify-center">
               <div className="flex text-eggYolk text-xl drop-shadow-sm">
                 {"★★★★★".split("").map((s,i) => <span key={i} className="animate-pulse" style={{animationDelay: `${i*0.1}s`}}>{s}</span>)}
               </div>
               <span className="font-bold text-dark/60 text-xs uppercase tracking-wider">2,400+ Ευχαριστημένοι Σεφ</span>
            </div>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="relative z-10 animate-float">
            <div className="relative w-72 h-84 lg:w-[400px] lg:h-[500px] bg-white/90 backdrop-blur-md rounded-[50%_50%_45%_45%] border-[6px] border-dark shadow-[15px_15px_0px_rgba(0,0,0,0.15)] flex flex-col items-center justify-center overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent opacity-60"></div>
               
               {/* Character Face */}
               <div className="absolute top-1/4 flex flex-col items-center z-20">
                  <div className="flex gap-10 mb-4">
                    <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center">
                       <div className="w-3 h-3 bg-white rounded-full -mt-2 -ml-2"></div>
                    </div>
                    <div className="w-10 h-10 bg-dark rounded-full flex items-center justify-center">
                       <div className="w-3 h-3 bg-white rounded-full -mt-2 -ml-2"></div>
                    </div>
                  </div>
                  <div className="w-10 h-10 bg-orange-500 rounded-lg border-4 border-dark rotate-45 shadow-lg"></div>
               </div>

               {/* Indicator Scale */}
               <div className="absolute bottom-12 flex flex-col gap-3 w-full px-12 z-20">
                  <div className="bg-dark text-white font-cartoon font-bold py-2 px-4 rounded-xl border-4 border-dark text-center text-sm transform -rotate-2">HARD</div>
                  <div className="bg-secondary text-dark font-cartoon font-bold py-2 px-4 rounded-xl border-4 border-dark text-center text-sm transform rotate-1">MEDIUM</div>
                  <div className="bg-accent text-dark font-cartoon font-bold py-3 px-4 rounded-xl border-4 border-dark text-center text-sm transform -rotate-1 shadow-[4px_4px_0px_#1A1A1A]">SOFT</div>
               </div>

               {/* Steam */}
               <div className="absolute bottom-4 flex gap-4">
                  {[1,2,3].map(i => <div key={i} className="steam w-3 h-3 bg-dark/20 rounded-full" style={{ animationDelay: `${i*0.5}s` }}></div>)}
               </div>
            </div>

            {/* Floaties */}
            <div className="absolute -top-6 -right-6 bg-accent p-4 rounded-2xl cartoon-card font-cartoon font-bold text-dark rotate-[12deg] text-sm">
               -50% ΜΟΝΟ <br/> ΓΙΑ ΣΗΜΕΡΑ! 🏷️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
