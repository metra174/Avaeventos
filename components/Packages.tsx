
import React from 'react';
import { PACKAGES } from '../constants';
import { Package } from '../types';

interface PackagesProps {
  onSelect: (pkg: Package) => void;
  isDarkMode: boolean;
}

const Packages: React.FC<PackagesProps> = ({ onSelect, isDarkMode }) => {
  // Map color schemes for each package
  const getPackageStyles = (id: string) => {
    switch(id) {
      case 'rubi':
        return {
          border: 'border-t-red-600',
          accent: 'text-red-500',
          bg: 'hover:bg-red-500/5',
          glow: 'bg-red-500/10',
          btn: 'hover:bg-red-600 hover:border-red-600',
          label: 'bg-red-500/10 text-red-500'
        };
      case 'label':
        return {
          border: 'border-t-amber-500',
          accent: 'text-amber-500',
          bg: 'hover:bg-amber-500/5',
          glow: 'bg-amber-500/10',
          btn: 'hover:bg-amber-500 hover:border-amber-500',
          label: 'bg-amber-500/10 text-amber-500'
        };
      case 'damasco':
        return {
          border: 'border-t-stone-400',
          accent: 'text-stone-500',
          bg: 'hover:bg-stone-500/5',
          glow: 'bg-stone-500/10',
          btn: 'hover:bg-stone-500 hover:border-stone-500',
          label: 'bg-stone-500/10 text-stone-500'
        };
      case 'buffet':
        return {
          border: 'border-t-emerald-600',
          accent: 'text-emerald-500',
          bg: 'hover:bg-emerald-500/5',
          glow: 'bg-emerald-500/10',
          btn: 'hover:bg-emerald-600 hover:border-emerald-600',
          label: 'bg-emerald-500/10 text-emerald-500'
        };
      default:
        return {
          border: 'border-t-gold',
          accent: 'text-gold',
          bg: 'hover:bg-gold/5',
          glow: 'bg-gold/10',
          btn: 'hover:bg-gold hover:border-gold',
          label: 'bg-gold/10 text-gold'
        };
    }
  };

  return (
    <section id="pacotes" className="py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24 opacity-0 animate-reveal">
          <span className="text-gold uppercase tracking-[0.5em] font-bold mb-6 block text-sm">Investimento no seu Sonho</span>
          <h2 className={`text-5xl md:text-8xl font-bold mb-8 transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Planos <span className="italic font-serif text-gold">Exclusivos</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-10"></div>
          <p className={`max-w-3xl mx-auto text-xl font-light leading-relaxed transition-colors duration-1000 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Cada celebração é única. Escolha a base perfeita para sua história, com a qualidade inegociável da Avaeventos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PACKAGES.map((pkg) => {
            const styles = getPackageStyles(pkg.id);
            return (
              <div 
                key={pkg.id} 
                className={`flex flex-col h-full rounded-[2.5rem] p-8 md:p-12 border-x border-b shadow-xl transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.3)] hover:-translate-y-4 group overflow-hidden relative glass-panel text-center border-t-[10px] ${styles.border} ${styles.bg} ${isDarkMode ? 'border-white/5' : 'border-black/5'}`}
              >
                {/* Visual Flair */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[80px] transition-all duration-700 group-hover:scale-150 ${styles.glow}`}></div>
                
                <div className="mb-10 relative z-10">
                  <span className={`inline-block px-4 py-1 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] mb-6 ${styles.label}`}>
                    {pkg.tagline}
                  </span>
                  <h3 className={`text-3xl font-serif font-bold group-hover:scale-105 transition-transform duration-500 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                </div>
                
                <div className="mb-12 relative z-10">
                  <div className="flex flex-col items-center justify-center">
                     <div className="flex items-baseline gap-2">
                        <span className="text-gold text-lg font-bold">{pkg.currency}</span>
                        <span className={`text-5xl font-black tracking-tighter transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {pkg.price.split(',')[0]}
                          <span className="text-xl opacity-60">,{pkg.price.split(',')[1]}</span>
                        </span>
                     </div>
                     <span className={`text-[9px] uppercase tracking-[0.3em] font-bold mt-4 px-4 py-2 rounded-lg ${isDarkMode ? 'bg-white/5 text-gray-400' : 'bg-black/5 text-gray-500'}`}>
                       Por Pessoa
                     </span>
                  </div>
                </div>

                <div className="flex-grow space-y-5 mb-12 relative z-10 text-left">
                  {pkg.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-3 group/item">
                      <div className={`mt-1 flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center border transition-colors duration-500 ${isDarkMode ? 'border-white/20 group-hover/item:border-gold' : 'border-black/10 group-hover/item:border-gold'}`}>
                        <svg className={`w-2 h-2 ${styles.accent}`} fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                      </div>
                      <span className={`text-[11px] leading-relaxed transition-colors duration-500 ${isDarkMode ? 'text-gray-400 group-hover/item:text-white' : 'text-gray-600 group-hover/item:text-black'}`}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => onSelect(pkg)}
                  className={`relative z-10 w-full border-2 py-5 rounded-2xl font-bold uppercase tracking-[0.25em] text-[10px] transition-all duration-500 shadow-lg transform active:scale-95 overflow-hidden group/btn ${
                    isDarkMode 
                      ? `bg-transparent text-white border-white/10 ${styles.btn}` 
                      : `bg-white text-gray-900 border-black/5 ${styles.btn} hover:text-white`
                  }`}
                >
                  <span className="relative z-10">Solicitar Encomenda</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
