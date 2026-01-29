
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? (isDarkMode ? 'bg-black/60 border-white/10' : 'bg-white/60 border-black/5') : 'bg-transparent py-10'} backdrop-blur-2xl py-4 border-b`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 md:gap-3 group transition-transform duration-500 hover:scale-105">
          <img 
            src="https://i.imgur.com/GWHQ6Y2.png" 
            alt="Avaeventos Logo" 
            className={`h-10 md:h-16 w-auto object-contain transition-all duration-700 ${isDarkMode ? 'brightness-125 contrast-125' : 'brightness-100'}`}
          />
          <div className="flex flex-col">
            <span className={`text-base md:text-xl font-bold tracking-[0.2em] md:tracking-[0.3em] transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AVA<span className="text-gold">EVENTOS</span>
            </span>
            <span className="text-[7px] md:text-[9px] uppercase tracking-[0.4em] text-gold font-medium -mt-1">Premium Decor</span>
          </div>
        </a>
        
        <div className="hidden lg:flex space-x-12 items-center">
          {['sobre', 'galeria', 'pacotes'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              className={`capitalize text-[10px] font-bold tracking-[0.3em] hover:text-gold transition-all duration-500 relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {item === 'sobre' ? 'A Marca' : item === 'pacotes' ? 'Pacotes' : item}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-8"></span>
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-all duration-500 ${isDarkMode ? 'bg-white/10 text-gold hover:bg-white/20' : 'bg-black/5 text-gray-900 hover:bg-black/10'}`}
            title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>

          <a href="#orcamento" className="bg-gold text-white px-10 py-3 rounded-full hover:bg-white hover:text-gold border border-gold transition-all duration-700 font-bold text-[10px] tracking-[0.2em] shadow-lg">
            ORÇAMENTO
          </a>
        </div>

        <div className="lg:hidden flex items-center space-x-3">
          <button onClick={toggleTheme} className={`p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
             {isDarkMode ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
          </button>
          <a href="#orcamento" className="bg-gold text-white px-4 py-2 rounded-full text-[8px] font-bold tracking-widest shadow-md">
            CONTATO
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
