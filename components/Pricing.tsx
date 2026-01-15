
import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-32 relative overflow-hidden bg-primary/10">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#FFF9F2] to-transparent"></div>
      
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Floating "Flash Sale" Badge */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-eggYolk text-dark font-cartoon font-bold px-10 py-4 rounded-full border-4 border-dark shadow-juicy z-20 animate-pulse text-2xl rotate-2">
          ⚡ ΜΟΝΟ ΓΙΑ ΣΗΜΕΡΑ!
        </div>

        <div className="bg-white rounded-[4rem] border-4 border-dark p-12 lg:p-24 shadow-[24px_24px_0px_#1A1A1A] text-center relative">
          <div className="mb-12">
            <h2 className="text-5xl lg:text-7xl font-cartoon font-bold text-dark mb-6">Γίνε Master του Αυγού!</h2>
            <p className="text-2xl text-dark/60 font-medium">Ξέχασες τα "ατύχηματα" στην κουζίνα. Η λύση είναι εδώ.</p>
          </div>

          <div className="flex flex-col items-center mb-16">
            <div className="relative">
              <span className="absolute -top-6 -left-12 text-3xl font-bold text-primary line-through opacity-50">€19.99</span>
              <div className="text-8xl lg:text-9xl font-cartoon font-bold text-dark flex items-start">
                <span className="text-4xl mt-6">€</span>9.99
              </div>
            </div>
            <div className="mt-4 bg-green-100 text-green-700 font-bold px-6 py-2 rounded-full border-2 border-green-200">
               🎁 + ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ (Αξίας €4.50)
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-2xl mx-auto text-left">
            {[
              "100% Εγγύηση Επιστροφής Χρημάτων",
              "Υλικά Υψηλής Αντοχής (BPA Free)",
              "Πάνω από 20,000 πωλήσεις παγκοσμίως",
              "Παράδοση σε 24-48 ώρες"
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-4 text-xl font-bold text-dark/80">
                <div className="w-8 h-8 bg-accent rounded-full border-2 border-dark flex items-center justify-center flex-shrink-0">✓</div>
                {t}
              </div>
            ))}
          </div>

          <button className="group relative w-full max-w-xl">
             <div className="absolute inset-0 bg-dark rounded-[2rem] translate-y-4 translate-x-2"></div>
             <div className="relative bg-primary text-white py-10 rounded-[2rem] border-4 border-dark font-cartoon font-bold text-4xl shadow-xl transition-all group-hover:-translate-y-2 group-active:translate-y-2 group-active:translate-x-1">
                ΑΓΟΡΑ ΤΩΡΑ (ΚΛΙΚ) 🛒
             </div>
          </button>
          
          <div className="mt-12 flex flex-col items-center gap-4">
             <div className="flex gap-4 grayscale opacity-60">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-6" alt="Visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-10" alt="Mastercard" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-8" alt="PayPal" />
             </div>
             <p className="text-sm font-bold text-dark/40 uppercase tracking-widest">Ασφαλείς Συναλλαγές • 256-bit Encryption</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
