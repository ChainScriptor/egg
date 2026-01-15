
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
            <div className="relative w-72 h-84 lg:w-[400px] lg:h-[500px] bg-white/90 backdrop-blur-md rounded-[2.5rem] border-[6px] border-dark shadow-[15px_15px_0px_rgba(0,0,0,0.15)] overflow-hidden cartoon-card">
              <video 
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/vid2.mp4" type="video/mp4" />
                Το πρόγραμμα περιήγησής σας δεν υποστηρίζει την αναπαραγωγή βίντεο.
              </video>
            </div>

            {/* Floaties */}
            <div className="absolute -top-6 -right-6 bg-accent p-4 rounded-2xl cartoon-card font-cartoon font-bold text-dark rotate-[12deg] text-sm z-20">
               -50% ΜΟΝΟ <br/> ΓΙΑ ΣΗΜΕΡΑ! 🏷️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
