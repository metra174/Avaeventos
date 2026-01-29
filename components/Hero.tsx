
import React from 'react';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGES[0]} 
          alt="Evento de Luxo Avaeventos" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        {/* Layering Transitions */}
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-1000 ${isDarkMode ? 'from-black/70 via-black/30 to-black/60' : 'from-white/40 via-transparent to-white/20'}`}></div>
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[2px]"></div>
        <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-1000 ${isDarkMode ? 'from-[#080808] via-transparent to-transparent' : 'from-[#FDFBF7] via-transparent to-transparent'}`}></div>
      </div>

      <div className="relative z-10 text-center px-4 md:px-6 max-w-6xl">
        <div className="mb-6 md:mb-8 opacity-0 animate-reveal">
           <span className="text-gold uppercase tracking-[0.4em] md:tracking-[0.6em] text-[10px] md:text-sm font-bold block bg-white/5 backdrop-blur-md px-4 md:px-6 py-2 rounded-full inline-block border border-white/20">
            A Arte de Celebrar
          </span>
        </div>
        
        <h1 className={`text-4xl md:text-9xl font-bold mb-6 md:mb-10 leading-tight opacity-0 animate-reveal stagger-1 drop-shadow-2xl transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Essência & <br />
          <span className="italic font-serif text-gold">Sofisticação</span>
        </h1>
        
        <p className={`text-base md:text-2xl mb-10 md:mb-16 font-light max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2 transition-colors duration-1000 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Cuidamos de cada detalhe para que seu evento seja um reflexo impecável da sua história, envolto em luxo e clareza.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center opacity-0 animate-reveal stagger-3 px-4">
          <a 
            href="#pacotes" 
            className="w-full md:w-auto bg-gold text-white px-8 md:px-14 py-4 md:py-6 rounded-full text-base md:text-lg font-bold hover:bg-white hover:text-gold transition-all duration-700 transform hover:scale-105 shadow-xl active:scale-95 text-center"
          >
            Encomendar agora
          </a>
          <a 
            href="#galeria" 
            className="w-full md:w-auto glass-panel px-8 md:px-14 py-4 md:py-6 rounded-full text-base md:text-lg font-bold hover:bg-gold/20 transition-all duration-700 shadow-sm text-center"
          >
            Ver portfólio
          </a>
        </div>
      </div>

      {/* Decorative Bottom Transition */}
      <div className={`absolute bottom-0 left-0 w-full h-24 md:h-48 bg-gradient-to-t transition-colors duration-1000 ${isDarkMode ? 'from-[#080808]' : 'from-[#FDFBF7]'} to-transparent`}></div>
      
      {/* Delicate Scroll Indicator - Hidden on very small screens */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3 opacity-40">
        <span className={`text-[8px] md:text-[9px] uppercase tracking-[0.4em] font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Descobrir</span>
        <div className="w-[1px] h-10 md:h-16 bg-gradient-to-b from-gold to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;
