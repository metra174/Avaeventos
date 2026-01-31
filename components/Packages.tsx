
import React from 'react';
import { PACKAGES } from '../constants';
import { Package } from '../types';

interface PackagesProps {
  onSelect: (pkg: Package) => void;
  isDarkMode: boolean;
}

const Packages: React.FC<PackagesProps> = ({ onSelect, isDarkMode }) => {
  const getPackageStyles = (id: string) => {
    switch(id) {
      case 'rubi':
        return { border: 'border-t-red-600', accent: 'text-red-500', bg: 'hover:bg-red-500/5', glow: 'bg-red-500/10', btn: 'hover:bg-red-600 hover:border-red-600', label: 'bg-red-500/10 text-red-500' };
      case 'label':
        return { border: 'border-t-amber-500', accent: 'text-amber-500', bg: 'hover:bg-amber-500/5', glow: 'bg-amber-500/10', btn: 'hover:bg-amber-500 hover:border-amber-500', label: 'bg-amber-500/10 text-amber-500' };
      case 'damasco':
        return { border: 'border-t-stone-400', accent: 'text-stone-500', bg: 'hover:bg-stone-500/5', glow: 'bg-stone-500/10', btn: 'hover:bg-stone-500 hover:border-stone-500', label: 'bg-stone-500/10 text-stone-500' };
      case 'buffet':
        return { border: 'border-t-emerald-600', accent: 'text-emerald-500', bg: 'hover:bg-emerald-500/5', glow: 'bg-emerald-500/10', btn: 'hover:bg-emerald-600 hover:border-emerald-600', label: 'bg-emerald-500/10 text-emerald-500' };
      default:
        return { border: 'border-t-gold', accent: 'text-gold', bg: 'hover:bg-gold/5', glow: 'bg-gold/10', btn: 'hover:bg-gold hover:border-gold', label: 'bg-gold/10 text-gold' };
    }
  };

  return (
    <section id="pacotes" className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24 animate-reveal">
          <span className="text-gold uppercase tracking-[0.3em] font-bold mb-4 block text-xs">Curadoria Exclusiva</span>
          <h2 className={`text-5xl md:text-8xl font-bold mb-6 transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Planos de <span className="italic font-serif text-gold">Luxo</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Base de alta qualidade para sua celebração, com a sofisticação inegociável da Avaeventos.
          </p>
        </div>

        {/* Horizontal Container on Mobile, Grid on Desktop */}
        <div className="flex overflow-x-auto pb-12 gap-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-x-visible md:pb-0 scrollbar-hide snap-x snap-mandatory">
          {PACKAGES.map((pkg) => {
            const styles = getPackageStyles(pkg.id);
            return (
              <div 
                key={pkg.id} 
                className={`flex-shrink-0 w-[85vw] md:w-auto snap-center flex flex-col rounded-[2.5rem] border shadow-2xl transition-all duration-700 hover:-translate-y-3 glass-panel text-center border-t-[8px] ${styles.border} ${styles.bg} ${isDarkMode ? 'border-white/5' : 'border-black/5'} overflow-hidden group`}
              >
                {/* Header Image forced to Horizontal Aspect Ratio (16:9) */}
                {pkg.image && (
                  <div className="aspect-video w-full relative overflow-hidden bg-black/20">
                    <img 
                      src={pkg.image} 
                      alt={pkg.name} 
                      className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-0 w-full text-center">
                       <span className={`inline-block px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] shadow-lg ${styles.label}`}>
                        {pkg.tagline}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <div className="mb-6">
                    <h3 className={`text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
                  </div>
                  
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-gold text-sm font-bold">{pkg.currency}</span>
                      <span className={`text-4xl md:text-5xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 mt-2 block">Por Pessoa</span>
                  </div>

                  <div className="flex-grow space-y-4 mb-10 text-left">
                    {pkg.features.slice(0, 7).map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 group/item">
                        <svg className={`w-3 h-3 mt-1 flex-shrink-0 transition-transform group-hover/item:scale-125 ${styles.accent}`} fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                        <span className={`text-[12px] leading-relaxed transition-colors ${isDarkMode ? 'text-gray-400 group-hover/item:text-white' : 'text-gray-600 group-hover/item:text-black'}`}>{feat}</span>
                      </div>
                    ))}
                    {pkg.features.length > 7 && <p className="text-[10px] text-gold italic pt-2">+ Extras incluídos no plano</p>}
                  </div>

                  <button 
                    onClick={() => onSelect(pkg)}
                    className={`w-full border-2 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-all duration-500 active:scale-95 shadow-lg ${isDarkMode ? 'border-white/10 text-white hover:bg-gold hover:border-gold' : 'border-black/5 text-gray-900 hover:bg-gold hover:text-white'}`}
                  >
                    Solicitar Reserva
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
