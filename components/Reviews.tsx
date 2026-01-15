
import React from 'react';
import { Review } from '../types';

const reviews: Review[] = [
  {
    id: 1,
    name: 'Μαρία Κ.',
    rating: 5,
    text: 'Επιτέλους τρώω το αυγό μου ακριβώς όπως το θέλω! Παλιά πάντα το άφηνα παραπάνω ή λιγότερο.',
    avatar: 'https://picsum.photos/seed/maria/60/60'
  },
  {
    id: 2,
    name: 'Γιώργος Π.',
    rating: 5,
    text: 'Φανταστικό gadget! Τα παιδιά ενθουσιάστηκαν με το χρώμα που αλλάζει και πλέον τρώνε αυγά πιο συχνά.',
    avatar: 'https://picsum.photos/seed/giorgos/60/60'
  },
  {
    id: 3,
    name: 'Ελένη Σ.',
    rating: 4,
    text: 'Πολύ καλό και ποιοτικό. Οι οδηγίες στην επιφάνεια είναι ξεκάθαρες. Το προτείνω ανεπιφύλακτα.',
    avatar: 'https://picsum.photos/seed/eleni/60/60'
  }
];

const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-center mb-16">Τι λένε οι πελάτες μας</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="p-8 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col justify-between h-full">
              <div>
                <div className="flex text-accent mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < review.rating ? "text-secondary" : "text-gray-300"}>★</span>
                  ))}
                </div>
                <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full shadow-md" />
                <span className="font-bold text-dark">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
