
import React from 'react';
import { Step } from '../types';

const steps: Step[] = [
  {
    number: 1,
    title: 'Βάλε το μέσα!',
    description: 'Τοποθέτησέ το μαζί με τα αυγά σου στην κατσαρόλα.'
  },
  {
    number: 2,
    title: 'Βράσε!',
    description: 'Άναψε το μάτι και περίμενε το νερό να αρχίσει να ζεσταίνεται.'
  },
  {
    number: 3,
    title: 'Κοίτα το!',
    description: 'Δες το χρώμα να αλλάζει καθώς το αυγό σου ψήνεται.'
  },
  {
    number: 4,
    title: 'Απόλαυσε!',
    // Fixed: Escaped single quote by using double quotes to wrap the string
    description: "Βγάλ' τα στην ώρα τους και φάε το τέλειο αυγό!"
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Decorative Bubbles */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full border-5 border-sky opacity-20 animate-bounce"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full border-8 border-primary opacity-10 animate-wobble"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl lg:text-6xl font-cartoon font-bold mb-8 text-dark">Είναι Παιχνιδάκι! 🎮</h2>
          <div className="w-48 h-3 bg-secondary rounded-full mx-auto cartoon-border"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {steps.map((step, idx) => (
            <div key={step.number} className="group relative flex flex-col items-center text-center">
              {/* Connector Path for Large Screens */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[80%] w-[60%] h-4 border-t-8 border-dashed border-dark/20 z-0"></div>
              )}
              
              <div className="relative z-10 w-24 h-24 bg-white cartoon-border rounded-[2rem] flex items-center justify-center text-4xl font-cartoon font-bold text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {step.number}
              </div>
              
              <div className="bg-white p-8 rounded-3xl cartoon-border w-full h-full transform transition-transform group-hover:-translate-y-2">
                <h3 className="text-2xl font-cartoon font-bold mb-4 text-dark">{step.title}</h3>
                <p className="text-gray-600 font-medium">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dimension Box Redesign */}
        <div className="mt-24 p-12 rounded-[3rem] bg-dark text-white max-w-3xl mx-auto cartoon-border flex flex-col md:flex-row items-center gap-12 rotate-1">
          <div className="flex-1">
             <h4 className="text-3xl font-cartoon font-bold mb-4 text-accent">Μικρό αλλά Θαυματουργό!</h4>
             <p className="text-gray-300 text-lg">Μόλις 5.5 x 4 εκατοστά - χωράει ακόμα και στην πιο μικρή κατσαρόλα!</p>
          </div>
          <div className="w-48 h-48 bg-white/10 rounded-full border-5 border-white/20 flex flex-col items-center justify-center animate-wobble">
             <span className="text-4xl font-bold">5.5cm</span>
             <span className="text-xl opacity-50">x</span>
             <span className="text-4xl font-bold">4cm</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
