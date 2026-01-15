
import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-cartoon font-bold text-dark mb-6">Γιατί θα το <span className="text-primary">ΛΑΤΡΕΨΕΙΣ</span>;</h2>
          <div className="w-32 h-4 bg-accent rounded-full mx-auto border-2 border-dark"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Large Feature */}
          <div className="lg:col-span-2 p-12 bg-white cartoon-card rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
            <div className="text-9xl animate-wobble">🌡️</div>
            <div>
              <h3 className="text-3xl font-cartoon font-bold mb-4">Τεχνολογία Thermo-Smart</h3>
              <p className="text-xl text-dark/60 leading-relaxed font-medium">
                Δεν είναι ένας απλός χρονοδιακόπτης. Αντιδρά στη θερμότητα όπως ακριβώς το ασπράδι και ο κρόκος, δείχνοντας σου το εσωτερικό του αυγού... χωρίς να το ανοίξεις!
              </p>
            </div>
          </div>

          <div className="p-12 bg-eggYolk/20 cartoon-card rounded-[3rem] text-center">
            <div className="text-7xl mb-6">♻️</div>
            <h3 className="text-2xl font-cartoon font-bold mb-4">Επαναχρησιμοποιήσιμο</h3>
            <p className="font-medium text-dark/60">Το αγοράζεις μια φορά, το έχεις για μια ζωή. Φιλικό προς την τσέπη και το περιβάλλον.</p>
          </div>

          <div className="p-12 bg-secondary/20 cartoon-card rounded-[3rem] text-center">
            <div className="text-7xl mb-6">🐔</div>
            <h3 className="text-2xl font-cartoon font-bold mb-4">Χαριτωμένο Σχέδιο</h3>
            <p className="font-medium text-dark/60">Σχεδιασμένο για να φέρνει χαμόγελα στην κουζίνα σου κάθε πρωί.</p>
          </div>

          <div className="lg:col-span-2 p-12 bg-primary/10 cartoon-card rounded-[3rem] flex flex-col md:flex-row items-center gap-12">
            <div>
              <h3 className="text-3xl font-cartoon font-bold mb-4">Απόλυτη Ακρίβεια</h3>
              <p className="text-xl text-dark/60 leading-relaxed font-medium">
                Είτε θες μελάτο για να βουτάς το ψωμί, είτε σφιχτό για τη σαλάτα σου, το EggMaster 3000 δεν πέφτει ποτέ έξω.
              </p>
            </div>
            <div className="text-9xl">🎯</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
