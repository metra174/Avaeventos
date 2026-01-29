
import React from 'react';

interface AboutProps {
  isDarkMode: boolean;
}

const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <section id="sobre" className="py-16 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <div className="glass-panel rounded-[2.5rem] md:rounded-[5rem] p-8 md:p-24 grid lg:grid-cols-2 gap-12 md:gap-24 items-center shadow-sm opacity-0 animate-reveal">
          <div className="relative group order-2 lg:order-1">
            <div className={`overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl p-2 border transition-all duration-1000 ${isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white/20 border-white/40'}`}>
              <img 
                src="https://i.imgur.com/uqMWmbx.png" 
                alt="Detalhes Avaeventos" 
                className="w-full h-full object-cover rounded-[1.2rem] md:rounded-[2.2rem] hover:scale-110 transition-transform duration-[2s] cubic-bezier(0.16, 1, 0.3, 1)"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 md:-bottom-8 md:-right-8 w-24 h-24 md:w-40 md:h-40 glass-panel border-gold/20 rounded-full flex flex-col items-center justify-center font-bold text-center leading-tight shadow-xl transform transition-transform duration-1000 group-hover:rotate-6">
              <span className="text-xl md:text-4xl text-gold">06</span>
              <span className={`text-[7px] md:text-[10px] uppercase tracking-[0.2em] font-bold ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Anos <br /> de Arte</span>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-10 order-1 lg:order-2 text-center lg:text-left">
            <div className="space-y-3 md:space-y-4">
              <span className="text-gold uppercase tracking-[0.3em] md:tracking-[0.5em] font-bold block text-[10px] md:text-xs">A Alma da Marca</span>
              <h2 className={`text-3xl md:text-7xl font-bold leading-tight transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Onde o sonho se <br /><span className="text-gold italic font-serif">torna visível</span>
              </h2>
            </div>
            
            <p className={`text-base md:text-xl font-light leading-relaxed italic border-l-0 lg:border-l-2 border-gold/20 pl-0 lg:pl-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              "Na Avaeventos, não decoramos apenas espaços; materializamos sentimentos através da transparência e do luxo sutil."
            </p>
            
            <p className={`text-sm md:text-lg leading-relaxed font-light transition-colors duration-1000 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Localizados estrategicamente no Projeto do Nando, nossa curadoria de eventos premium é reconhecida pela atenção meticulosa aos detalhes e pela entrega de experiências sensoriais completas.
            </p>
            
            <div className="grid grid-cols-2 gap-6 md:gap-12 border-t border-gold/10 pt-8 md:pt-12">
              <div className="group text-center lg:text-left">
                <h4 className="text-gold text-4xl md:text-6xl font-bold mb-1 transition-all duration-700 group-hover:tracking-wider">100%</h4>
                <p className={`uppercase text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.4em] font-bold ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Excelência</p>
              </div>
              <div className="group text-center lg:text-left">
                <h4 className="text-gold text-4xl md:text-6xl font-bold mb-1 transition-all duration-700 group-hover:tracking-wider">+500</h4>
                <p className={`uppercase text-[7px] md:text-[9px] tracking-[0.2em] md:tracking-[0.4em] font-bold ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Produções</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
