import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Package } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PackagesProps {
  onSelect: (pkg: Package) => void;
  isDarkMode: boolean;
  isLargeText: boolean;
}

// Tipagem explícita e segura para o objeto de estilos dinâmicos
interface PackageStyles {
  border: string;
  accent: string;
  bg: string;
  glow: string;
  btn: string;
  label: string;
}

interface PackageCardProps {
  pkg: Package;
  styles: PackageStyles;
  isDarkMode: boolean;
  isLargeText: boolean;
  onSelect: (pkg: Package) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, styles, isDarkMode, isLargeText, onSelect }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Fallback seguro garantindo que seja sempre um array de strings
  const imagesList: string[] = Array.isArray(pkg.images) && pkg.images.length > 0 
    ? pkg.images 
    : (pkg.image ? [pkg.image] : []);
    
  const hasMultipleImages = imagesList.length > 1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImgIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  return (
    <div 
      className={`flex flex-col rounded-[2.5rem] border shadow-2xl transition-all duration-700 hover:-translate-y-3 glass-panel text-center border-t-[8px] ${styles.border || ''} ${styles.bg || ''} ${isDarkMode ? 'border-white/5' : 'border-black/5'} overflow-hidden group h-full`}
    >
      {imagesList.length > 0 && (
        <div className="aspect-video w-full relative overflow-hidden bg-black/20 group/slider">
          <img 
            src={imagesList[activeImgIndex]} 
            alt={`${pkg.name || 'Pacote'} ${activeImgIndex + 1}`} 
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          {hasMultipleImages && (
            <>
              <button 
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-gold hover:text-white text-white/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm z-20 hover:scale-110 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-gold hover:text-white text-white/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm z-20 hover:scale-110 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {hasMultipleImages && (
            <div className="absolute bottom-11 left-0 w-full flex justify-center gap-1 z-20">
              {imagesList.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveImgIndex(i); }}
                  className={`h-1 cursor-pointer rounded-full transition-all duration-300 ${i === activeImgIndex ? 'w-3.5 bg-gold' : 'w-1 bg-white/40 hover:bg-white/75'}`}
                />
              ))}
            </div>
          )}

          {pkg.tagline && (
            <div className="absolute bottom-4 left-0 w-full text-center px-4">
               <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg ${styles.label || ''}`}>
                {pkg.tagline}
               </span>
            </div>
          )}
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className={`text-xl md:text-2xl font-serif font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
          {pkg.location && (
            <div className="flex items-center justify-center gap-2 mt-3 bg-gold/10 py-2 px-4 rounded-full border border-gold/20">
              <svg className="w-4 h-4 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-[10px] md:text-[11px] uppercase tracking-widest font-bold text-gold leading-tight">{pkg.location}</span>
            </div>
          )}
        </div>
        
        <div className="mb-8">
          <div className="flex items-baseline justify-center gap-1">
            <span className={`text-gold font-bold ${isLargeText ? 'text-xl' : 'text-base'}`}>{pkg.currency}</span>
            <span className={`font-black transition-all duration-500 ${isLargeText ? 'text-5xl md:text-6xl' : 'text-3xl md:text-4xl'} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</span>
          </div>
          <span className={`${isLargeText ? 'text-xs' : 'text-[10px]'} uppercase tracking-widest font-bold text-gray-500 mt-2 block`}>{pkg.id === 'salao' ? 'Valor Total' : 'Por Pessoa'}</span>
        </div>

        <div className="flex-grow space-y-4 mb-10 text-left">
          {Array.isArray(pkg.features) && pkg.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-4 group/item">
              <svg className={`w-4 h-4 mt-1 flex-shrink-0 transition-transform group-hover/item:scale-125 ${styles.accent || ''}`} fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              <span className={`leading-relaxed transition-all duration-500 ${isLargeText ? 'text-lg md:text-xl font-medium' : 'text-sm md:text-base'} ${isDarkMode ? 'text-gray-300 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-black'}`}>{feat}</span>
            </div>
          ))}
        </div>

        <button 
          type="button"
          onClick={() => onSelect(pkg)}
          className={`w-full border-2 py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-all duration-500 active:scale-95 shadow-lg ${isDarkMode ? 'border-white/10 text-white hover:bg-gold hover:border-gold' : 'border-black/5 text-gray-900 hover:bg-gold hover:text-white'}`}
        >
          Solicitar Reserva
        </button>
      </div>
    </div>
  );
};

const Packages: React.FC<PackagesProps> = ({ onSelect, isDarkMode, isLargeText }) => {
  const getPackageStyles = (id: string): PackageStyles => {
    switch(id) {
      case 'rubi':
        return { border: 'border-t-red-600', accent: 'text-red-500', bg: 'hover:bg-red-500/5', glow: 'bg-red-500/10', btn: 'hover:bg-red-600 hover:border-red-600', label: 'bg-red-500/10 text-red-500' };
      case 'label':
        return { border: 'border-t-amber-500', accent: 'text-amber-500', bg: 'hover:bg-amber-500/5', glow: 'bg-amber-500/10', btn: 'hover:bg-amber-500 hover:border-amber-500', label: 'bg-amber-500/10 text-amber-500' };
      case 'damasco':
        return { border: 'border-t-stone-400', accent: 'text-stone-500', bg: 'hover:bg-stone-500/5', glow: 'bg-stone-500/10', btn: 'hover:bg-stone-500 hover:border-stone-500', label: 'bg-stone-500/10 text-stone-500' };
      case 'buffet':
        return { border: 'border-t-emerald-600', accent: 'text-emerald-500', bg: 'hover:bg-emerald-500/5', glow: 'bg-emerald-500/10', btn: 'hover:bg-emerald-600 hover:border-emerald-600', label: 'bg-emerald-500/10 text-emerald-500' };
      case 'salao':
      case 'salao_decor':
      case 'salao_buffet':
      case 'salao_completo':
        return { border: 'border-t-blue-600', accent: 'text-blue-500', bg: 'hover:bg-blue-500/5', glow: 'bg-blue-500/10', btn: 'hover:bg-blue-600 hover:border-blue-600', label: 'bg-blue-500/10 text-blue-500' };
      default:
        return { border: 'border-t-gold', accent: 'text-gold', bg: 'hover:bg-gold/5', glow: 'bg-gold/10', btn: 'hover:bg-gold hover:border-gold', label: 'bg-gold/10 text-gold' };
    }
  };

  return (
    <section id="pacotes" className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-gold uppercase tracking-[0.3em] font-bold mb-4 block text-xs">Curadoria Exclusiva</span>
          <h2 className={`text-5xl md:text-8xl font-bold mb-6 transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Planos de <span className="italic font-serif text-gold">Luxo</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Base de alta qualidade para sua celebração, com a sofisticação inegociável da Avaeventos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
          {Array.isArray(PACKAGES) && PACKAGES.map((pkg) => {
            const styles = getPackageStyles(pkg.id);
            return (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                styles={styles}
                isDarkMode={isDarkMode}
                isLargeText={isLargeText}
                onSelect={onSelect}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
