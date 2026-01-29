
import React from 'react';
import { PACKAGES } from '../constants';
import { Package } from '../types';

interface PackagesProps {
  onSelect: (pkg: Package) => void;
  isDarkMode: boolean;
}

const Packages: React.FC<PackagesProps> = ({ onSelect, isDarkMode }) => {
  return (
    <section id="pacotes" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.4em] font-bold mb-6 block text-sm">Curadoria Exclusiva</span>
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Nossos <span className="italic font-serif text-gold">Pacotes</span></h2>
          <p className={`max-w-2xl mx-auto text-xl font-light transition-colors duration-1000 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Experiências exclusivas desenhadas por pessoa, garantindo harmonia em cada detalhe de sua celebração.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`flex flex-col h-full rounded-[2rem] p-8 md:p-10 border shadow-lg transition-all duration-1000 hover:shadow-2xl hover:-translate-y-4 group overflow-hidden relative glass-panel text-center ${isDarkMode ? 'border-white/10 border-b-gold/30' : 'border-white/60 border-b-gold/20'}`}
            >
              {/* Ethereal background accent */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-gold/5 rounded-full blur-2xl group-hover:bg-gold/10 transition-all duration-1000"></div>
              
              <div className="mb-8 relative z-10">
                <span className="text-gold font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block opacity-60">{pkg.tagline}</span>
                <h3 className={`text-3xl font-serif font-bold group-hover:text-gold transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                <div className="w-12 h-[1px] bg-gold/30 mx-auto mt-6 group-hover:w-24 transition-all duration-700"></div>
              </div>
              
              <div className="mb-10 relative z-10">
                <div className="flex flex-col items-center justify-center">
                   <span className={`text-4xl font-bold tracking-tighter transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.currency} {pkg.price}</span>
                   <span className="text-gold text-[9px] uppercase tracking-[0.3em] font-bold mt-2">Investimento p/ pessoa</span>
                </div>
              </div>

              <div className="flex-grow space-y-4 mb-10 relative z-10">
                {pkg.features.map((feat, i) => (
                  <div key={i} className={`text-xs leading-relaxed border-b border-gold/5 pb-3 last:border-0 italic font-light hover:text-gold transition-colors duration-500 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {feat}
                  </div>
                ))}
              </div>

              <button 
                onClick={() => onSelect(pkg)}
                className={`relative z-10 w-full border py-4 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] transition-all duration-700 shadow-sm transform active:scale-95 ${
                  isDarkMode 
                    ? 'bg-transparent text-white border-gold/40 hover:bg-gold hover:border-gold' 
                    : 'bg-white text-gray-900 border-gold/30 hover:bg-gold hover:text-white hover:border-gold'
                }`}
              >
                Solicitar Encomenda
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
