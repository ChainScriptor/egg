
import React, { useState } from 'react';
import { FAQItem } from '../types';

const faqItems: FAQItem[] = [
  {
    question: "Πώς ακριβώς αλλάζει χρώμα ο χρονοδιακόπτης;",
    answer: "Είναι κατασκευασμένος από ειδικό θερμοευαίσθητο πολυμερές υλικό που αντιδρά στη θερμοκρασία του νερού, ακριβώς όπως και το αυγό."
  },
  {
    question: "Είναι ασφαλές για τρόφιμα;",
    answer: "Ναι, είναι κατασκευασμένος από μη τοξικά, πιστοποιημένα υλικά υψηλής αντοχής, σχεδιασμένα ειδικά για χρήση σε βραστό νερό."
  },
  {
    question: "Μπορώ να τον χρησιμοποιήσω ξανά αμέσως;",
    answer: "Ναι, απλά αφήστε τον να κρυώσει φυσικά (μην τον βάζετε απότομα σε παγωμένο νερό) και θα επανέλθει στο αρχικό του χρώμα."
  },
  {
    question: "Λειτουργεί με οποιοδήποτε μέγεθος αυγών;",
    answer: "Φυσικά! Ο χρονοδιακόπτης αντιδρά στη θερμότητα, οπότε υπολογίζει τον χρόνο βρασμού ανεξάρτητα από το αν τα αυγά είναι μικρά ή μεγάλα."
  },
  {
    question: "Πόσο διαρκεί η αποστολή;",
    answer: "Η αποστολή γίνεται συνήθως την επόμενη εργάσιμη ημέρα και η παράδοση ολοκληρώνεται σε 1-3 ημέρες με Courier."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-12">Συχνές Ερωτήσεις</h2>
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg">{item.question}</span>
                <span className={`transform transition-transform text-2xl ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
