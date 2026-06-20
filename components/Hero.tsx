
import React, { useState, useEffect } from 'react';
import { HERO_IMAGES } from '../constants';

interface HeroProps {
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDarkMode }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % HERO_IMAGES.length);
    }, 6000); // Crossfade image every 6 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden py-12 md:py-20">
      {/* Dynamic Background Visual Carousel */}
      <div className="absolute inset-0 z-0">
        {HERO_IMAGES.map((img, index) => (
          <img 
            key={img}
            src={img} 
            alt={`Evento de Luxo Avaeventos ${index + 1}`} 
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{ transition: 'opacity 1.5s ease-in-out, transform 8s ease' }}
          />
        ))}
        {/* Gradients and Overlays */}
        <div className={`absolute inset-0 bg-gradient-to-br transition-colors duration-1000 ${isDarkMode ? 'from-black/75 via-black/45 to-black/85' : 'from-white/75 via-transparent to-white/60'}`}></div>
        <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px]"></div>
        <div className={`absolute inset-0 bg-gradient-to-t transition-colors duration-1000 ${isDarkMode ? 'from-[#080808]' : 'from-[#FDFBF7]'} via-transparent to-transparent`}></div>
        
        {/* Carousel Indicators */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
          {HERO_IMAGES.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveImageIndex(index)}
              className={`h-1 rounded-full transition-all duration-500 ${
                index === activeImageIndex ? 'w-8 bg-gold' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              title={`Ver imagem ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 text-center px-5 md:px-6 max-w-6xl w-full">
        <div className="mb-6 md:mb-8 animate-reveal">
           <span className="text-gold uppercase tracking-[0.3em] md:tracking-[0.6em] text-[11px] md:text-sm font-bold block bg-black/20 backdrop-blur-md px-5 md:px-6 py-2.5 rounded-full inline-block border border-white/20">
            A Arte de Celebrar • Curadoria Exclusiva
          </span>
        </div>
        
        <h1 className={`text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold mb-6 md:mb-10 leading-[1.1] opacity-0 animate-reveal stagger-1 drop-shadow-2xl transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Essência & <br />
          <span className="italic font-serif text-gold">Sofisticação</span>
        </h1>
        
        <p className={`text-base sm:text-lg md:text-2xl mb-10 md:mb-16 font-light max-w-2xl mx-auto leading-relaxed opacity-0 animate-reveal stagger-2 transition-colors duration-1000 ${isDarkMode ? 'text-gray-200 font-normal' : 'text-gray-800'}`}>
          Cuidamos de cada detalhe para que seu evento seja um reflexo impecável da sua história, envolto em puro luxo.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center items-center opacity-0 animate-reveal stagger-3">
          <a 
            href="#pacotes" 
            className="w-full sm:w-auto bg-gold text-white px-8 md:px-14 py-4 md:py-6 rounded-full text-base md:text-lg font-bold hover:bg-white hover:text-gold transition-all duration-700 transform hover:scale-105 shadow-xl text-center active:scale-95"
          >
            Ver Pacotes de Luxo
          </a>
          <a 
            href="#duvidas" 
            className="w-full sm:w-auto glass-panel px-8 md:px-14 py-4 md:py-6 rounded-full text-base md:text-lg font-bold hover:bg-gold/20 transition-all duration-700 text-center border-gold/20 active:scale-95"
          >
            Saber Mais
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

