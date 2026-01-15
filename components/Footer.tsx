
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">🐔</div>
              <span className="font-display font-bold text-2xl">EggTimer Pro</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8">
              Η αποστολή μας είναι να κάνουμε το μαγείρεμα απλό, διασκεδαστικό και τέλειο για κάθε ελληνικό σπίτι.
            </p>
            <div className="flex gap-4">
              {['facebook', 'instagram', 'twitter', 'tiktok'].map(social => (
                <div key={social} className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Σύνδεσμοι</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#hero" className="hover:text-primary transition-colors">Αρχική</a></li>
              <li><a href="#features" className="hover:text-primary transition-colors">Χαρακτηριστικά</a></li>
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">Πώς Λειτουργεί</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Αγορά</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Πληροφορίες</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#" className="hover:text-primary transition-colors">Επικοινωνία</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Όροι Χρήσης</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Πολιτική Απορρήτου</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Επιστροφές</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} EggTimer Pro. Με επιφύλαξη παντός δικαιώματος.</p>
          <p className="mt-2 text-xs opacity-50 font-mono">Σχεδιασμένο με ❤️ για την τέλεια κουζίνα.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
