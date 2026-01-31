
import React from 'react';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  return (
    <section className="relative min-h-[95vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden py-12 md:py-20">
      {/* Background Visual */}
      <div className="absolute inset-0 z-0">
        <img 
          src={HERO_IMAGES[0]} 
          alt="Evento de Luxo Avaeventos" 
          className="w-full h-full object-cover animate-slow-zoom"
        />
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-1000 ${isDarkMode ? 'from-black/75 via-black/40 to-black/85' : 'from-white/70 via-transparent to-white/50'}`}></div>
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]"></div>
        <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-1000 ${isDarkMode ? 'from-[#080808]' : 'from-[#FDFBF7]'} via-transparent to-transparent`}></div>
      </div>

      <div className="relative z-10 text-center px-5 md:px-6 max-w-6xl w-full">
        <div className="mb-6 md:mb-8 animate-reveal">
           <span className="text-gold uppercase tracking-[0.3em] md:tracking-[0.6em] text-[11px] md:text-sm font-bold block bg-black/20 backdrop-blur-md px-5 md:px-6 py-2.5 rounded-full inline-block border border-white/20">
            A Arte de Celebrar
          </span>
        </div>
        
        <h1 className={`text-6xl md:text-9xl font-bold mb-8 md:mb-10 leading-[1.1] opacity-0 animate-reveal stagger-1 drop-shadow-2xl transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Essência & <br />
          <span className="italic font-serif text-gold">Sofisticação</span>
        </h1>
        
        <p className={`text-lg md:text-2xl mb-12 md:mb-16 font-light max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2 transition-colors duration-1000 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Cuidamos de cada detalhe para que seu evento seja um reflexo impecável da sua história, envolto em puro luxo.
        </p>
        
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center opacity-0 animate-reveal stagger-3">
          <a 
            href="#pacotes" 
            className="w-full md:w-auto bg-gold text-white px-10 md:px-14 py-5 md:py-6 rounded-full text-lg font-bold hover:bg-white hover:text-gold transition-all duration-700 transform hover:scale-105 shadow-xl text-center active:scale-95"
          >
            Ver Pacotes
          </a>
          <a 
            href="#duvidas" 
            className="w-full md:w-auto glass-panel px-10 md:px-14 py-5 md:py-6 rounded-full text-lg font-bold hover:bg-gold/20 transition-all duration-700 text-center border-gold/20 active:scale-95"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
