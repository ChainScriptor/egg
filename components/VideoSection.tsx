
import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 bg-sky/20 text-sky-700 rounded-full border-2 border-sky/30 font-cartoon font-bold text-sm mb-4">
            ΔΕΙΤΕ ΤΟ LIVE! 📺
          </div>
          <h2 className="text-4xl lg:text-6xl font-cartoon font-bold text-dark mb-4">
            Δες το σε <span className="text-primary italic">Πραγματικές</span> Συνθήκες
          </h2>
          <p className="text-xl text-dark/60 font-medium">
            Ένα σύντομο βίντεο που θα σας δείξει γιατί αυτό το κοτοπουλάκι είναι ο καλύτερος φίλος της κουζίνας σας.
          </p>
        </div>

        <div className="relative group">
          {/* Decorative shapes behind video */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent rounded-full border-4 border-dark -z-10 animate-wobble"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary rounded-full border-4 border-dark -z-10 animate-float"></div>

          {/* Video Container with Cartoon Border */}
          <div className="cartoon-card bg-dark rounded-[2.5rem] overflow-hidden aspect-video relative">
            <video 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/vid.mp4" type="video/mp4" />
              Το πρόγραμμα περιήγησής σας δεν υποστηρίζει την αναπαραγωγή βίντεο.
            </video>
          </div>
          
          <div className="mt-8 flex justify-center gap-8">
            <div className="flex flex-col items-center">
               <span className="text-3xl">🎥</span>
               <span className="font-cartoon font-bold text-sm mt-2">4K Ποιότητα</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl">🔄</span>
               <span className="font-cartoon font-bold text-sm mt-2">Συνεχής Αναπαραγωγή</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl">⏱️</span>
               <span className="font-cartoon font-bold text-sm mt-2">Διάρκεια: 45"</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
