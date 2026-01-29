
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

interface FooterProps {
  isDarkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode }) => {
  return (
    <footer className={`relative py-32 border-t transition-all duration-1000 overflow-hidden ${isDarkMode ? 'bg-black/40 border-white/5 text-white' : 'bg-white/40 border-white/60 text-gray-900'} backdrop-blur-3xl`}>
      {/* Footer Glow */}
      <div className="ethereal-glow bg-gold/5 w-96 h-96 top-0 right-0"></div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-20 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <img 
              src="https://i.imgur.com/GWHQ6Y2.png" 
              alt="Avaeventos Logo" 
              className={`h-20 w-auto object-contain transition-all duration-700 ${isDarkMode ? 'brightness-125 contrast-125' : 'brightness-100'}`}
            />
            <h2 className="text-3xl font-bold tracking-[0.3em]">AVA<span className="text-gold">EVENTOS</span></h2>
          </div>
          <p className={`mb-10 max-w-sm leading-relaxed font-light text-lg transition-colors duration-1000 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            A curadoria definitiva para eventos que exigem alma, transparência e um toque inesquecível de sofisticação.
          </p>
          <div className="flex space-x-6">
            <a href={SOCIAL_LINKS.instagram} target="_blank" className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 transform hover:-translate-y-2 glass-panel hover:bg-gold hover:text-white`}>
              <img src="https://www.svgrepo.com/show/365479/instagram-logo-thin.svg" alt="Instagram" className={`w-6 h-6 transition-all duration-500 ${isDarkMode ? 'invert opacity-70' : 'opacity-70'}`} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-500 transform hover:-translate-y-2 glass-panel hover:bg-gold hover:text-white`}>
               <img src="https://www.svgrepo.com/show/448224/facebook.svg" alt="Facebook" className={`w-6 h-6 transition-all duration-500 ${isDarkMode ? 'invert opacity-70' : 'opacity-70'}`} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-gold font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Navegação</h4>
          <ul className={`space-y-5 font-light transition-colors duration-1000 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            <li><a href="#sobre" className="hover:text-gold transition-colors">A Marca</a></li>
            <li><a href="#galeria" className="hover:text-gold transition-colors">O Portfólio</a></li>
            <li><a href="#pacotes" className="hover:text-gold transition-colors">Pacotes & Preços</a></li>
            <li><a href="#ai-assistant" className="hover:text-gold transition-colors">Consultoria IA</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gold font-bold mb-10 uppercase tracking-[0.3em] text-[10px]">Sede Criativa</h4>
          <p className={`mb-6 leading-relaxed font-light transition-colors duration-1000 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Projeto do Nando, por detrás do Banco BIC,<br />
            Luanda, Angola
          </p>
          <a href="tel:+244924294406" className="font-bold hover:text-gold transition-colors text-xl">
            +244 924 294 406
          </a>
        </div>
      </div>
      
      <div className={`container mx-auto px-6 border-t mt-24 pt-12 text-center text-[9px] uppercase tracking-[0.5em] transition-all duration-1000 ${isDarkMode ? 'border-white/5 text-gray-600' : 'border-gold/10 text-gray-400'}`}>
        <p>&copy; {new Date().getFullYear()} Avaeventos. Luxo, Transparência e Arte.</p>
      </div>
    </footer>
  );
};

export default Footer;
