
import React, { useState } from 'react';
import { PACKAGES } from '../constants';
import { Package } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PackagesProps {
  onSelect: (pkg: Package) => void;
  isDarkMode: boolean;
  isLargeText: boolean;
}

interface PackageCardProps {
  pkg: Package;
  styles: any;
  isDarkMode: boolean;
  isLargeText: boolean;
  onSelect: (pkg: Package) => void;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg, styles, isDarkMode, isLargeText, onSelect }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const imagesList = pkg.images && pkg.images.length > 0 ? pkg.images : (pkg.image ? [pkg.image] : []);
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
      className={`relative flex flex-col rounded-[2.2rem] md:rounded-[2.5rem] border shadow-2xl transition-all duration-700 hover:-translate-y-3 glass-panel text-center border-t-[8px] ${styles.border} ${styles.bg} ${isDarkMode ? 'border-white/5 bg-gradient-to-b from-white/[0.04] to-transparent shadow-black/60' : 'border-black/5 bg-gradient-to-b from-black/[0.02] to-transparent shadow-xl'} overflow-hidden group h-full`}
    >
      {/* Header Image with fixed horizontal aspect ratio */}
      {imagesList.length > 0 && (
        <div className="aspect-[16/10] w-full relative overflow-hidden bg-black/20 group/slider">
          <img 
            src={imagesList[activeImgIndex]} 
            alt={`${pkg.name} ${activeImgIndex + 1}`} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
          
          {pkg.id === 'damasco' && (
            <div className="absolute top-3 left-3 z-20">
              <span className="bg-gradient-to-r from-amber-600 to-amber-500 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg backdrop-blur-md flex items-center gap-1.5 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                Novo Pacote
              </span>
            </div>
          )}

          {pkg.id === 'label' && (
            <div className="absolute top-3 left-3 z-20">
              <span className="bg-amber-500/95 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg backdrop-blur-md border border-white/20">
                Mais Escolhido
              </span>
            </div>
          )}

          {pkg.id === 'rubi' && (
            <div className="absolute top-3 left-3 z-20">
              <span className="bg-red-600/95 text-white text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-lg backdrop-blur-md border border-white/20">
                Experiência VIP
              </span>
            </div>
          )}
          
          {/* Navigation Arrows for multiple images */}
          {hasMultipleImages && (
            <>
              <button 
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-gold hover:text-white text-white/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm z-20 hover:scale-110 active:scale-95"
                aria-label="Foto anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 hover:bg-gold hover:text-white text-white/80 flex items-center justify-center transition-all duration-300 opacity-0 group-hover/slider:opacity-100 backdrop-blur-sm z-20 hover:scale-110 active:scale-95"
                aria-label="Próxima foto"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Dots Indicator */}
          {hasMultipleImages && (
            <div className="absolute bottom-11 left-0 w-full flex justify-center gap-1 z-20">
              {imagesList.map((_, i) => (
                <button
                  type="button"
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setActiveImgIndex(i); }}
                  className={`h-1 cursor-pointer rounded-full transition-all duration-300 ${i === activeImgIndex ? 'w-4 bg-gold' : 'w-1.5 bg-white/40 hover:bg-white/75'}`}
                  aria-label={`Ver foto ${i + 1}`}
                />
              ))}
            </div>
          )}

          <div className="absolute bottom-3 left-0 w-full text-center px-4">
             <span className={`inline-block px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-lg backdrop-blur-md border border-white/10 ${styles.label}`}>
              {pkg.tagline}
             </span>
          </div>
        </div>
      )}

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <div className="mb-6">
          <h3 className={`text-xl md:text-2xl font-serif font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h3>
          {pkg.location && (
            <div className="flex items-center justify-center gap-1.5 mt-3 bg-gold/10 py-1.5 px-3 rounded-full border border-gold/20">
              <svg className="w-3.5 h-3.5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-gold leading-tight line-clamp-1">{pkg.location}</span>
            </div>
          )}
        </div>
        
        <div className="mb-6 py-4 rounded-2xl bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5">
          <div className="flex items-baseline justify-center gap-1.5">
            <span className={`text-gold font-bold ${isLargeText ? 'text-xl' : 'text-sm md:text-base'}`}>{pkg.currency}</span>
            <span className={`font-black tracking-tight transition-all duration-500 ${isLargeText ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</span>
          </div>
          <span className={`${isLargeText ? 'text-xs' : 'text-[10px]'} uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 mt-1.5 block`}>{pkg.id === 'salao' ? 'Valor Total do Aluguer' : 'Por Pessoa'}</span>
        </div>

        <div className="flex-grow space-y-3.5 mb-8 text-left">
          {pkg.features.map((feat, i) => (
            <div key={i} className="flex items-start gap-3 group/item">
              <div className={`mt-0.5 p-0.5 rounded-full ${styles.glow} flex-shrink-0`}>
                <svg className={`w-3.5 h-3.5 transition-transform group-hover/item:scale-125 ${styles.accent}`} fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
              </div>
              <span className={`leading-relaxed transition-all duration-500 ${isLargeText ? 'text-base md:text-lg font-medium' : 'text-xs md:text-sm'} ${isDarkMode ? 'text-gray-300 group-hover/item:text-white' : 'text-gray-700 group-hover/item:text-black'}`}>{feat}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={() => onSelect(pkg)}
          className={`w-full py-4 md:py-5 rounded-2xl font-bold uppercase tracking-widest text-[11px] transition-all duration-500 active:scale-95 shadow-lg border-2 ${styles.btn} ${isDarkMode ? 'border-white/10 text-white bg-white/5 hover:bg-gold hover:border-gold hover:text-white' : 'border-black/5 text-gray-900 bg-white hover:bg-gold hover:text-white hover:border-gold'}`}
        >
          Solicitar Reserva
        </button>
      </div>
    </div>
  );
};

const Packages: React.FC<PackagesProps> = ({ onSelect, isDarkMode, isLargeText }) => {
  const getPackageStyles = (id: string) => {
    switch(id) {
      case 'damasco':
        return { 
          border: 'border-t-amber-600', 
          accent: 'text-amber-600', 
          bg: 'hover:bg-amber-600/5', 
          glow: 'bg-amber-600/10', 
          btn: 'hover:bg-amber-600 hover:border-amber-600', 
          label: 'bg-amber-600/15 text-amber-500 border border-amber-600/30' 
        };
      case 'rubi':
        return { 
          border: 'border-t-red-600', 
          accent: 'text-red-500', 
          bg: 'hover:bg-red-500/5', 
          glow: 'bg-red-500/10', 
          btn: 'hover:bg-red-600 hover:border-red-600', 
          label: 'bg-red-500/15 text-red-500 border border-red-500/30' 
        };
      case 'label':
        return { 
          border: 'border-t-amber-500', 
          accent: 'text-amber-500', 
          bg: 'hover:bg-amber-500/5', 
          glow: 'bg-amber-500/10', 
          btn: 'hover:bg-amber-500 hover:border-amber-500', 
          label: 'bg-amber-500/15 text-amber-500 border border-amber-500/30' 
        };
      case 'buffet':
        return { 
          border: 'border-t-emerald-600', 
          accent: 'text-emerald-500', 
          bg: 'hover:bg-emerald-500/5', 
          glow: 'bg-emerald-500/10', 
          btn: 'hover:bg-emerald-600 hover:border-emerald-600', 
          label: 'bg-emerald-500/15 text-emerald-500 border border-emerald-500/30' 
        };
      case 'salao':
        return { 
          border: 'border-t-blue-600', 
          accent: 'text-blue-500', 
          bg: 'hover:bg-blue-500/5', 
          glow: 'bg-blue-500/10', 
          btn: 'hover:bg-blue-600 hover:border-blue-600', 
          label: 'bg-blue-500/15 text-blue-500 border border-blue-500/30' 
        };
      default:
        return { 
          border: 'border-t-gold', 
          accent: 'text-gold', 
          bg: 'hover:bg-gold/5', 
          glow: 'bg-gold/10', 
          btn: 'hover:bg-gold hover:border-gold', 
          label: 'bg-gold/15 text-gold border border-gold/30' 
        };
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
            Soluções completas e transparentes com a assinatura de alta qualidade e sofisticação da Avaeventos.
          </p>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop, handles 5 cards balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 justify-center max-w-7xl mx-auto">
          {PACKAGES.map((pkg) => {
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
