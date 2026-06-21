
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  isLargeText: boolean;
  toggleTextSize: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, isLargeText, toggleTextSize }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'sobre', label: 'A Marca' },
    { id: 'galeria', label: 'Galeria' },
    { id: 'pacotes', label: 'Pacotes' },
    { id: 'extras', label: 'Extras' },
    { id: 'duvidas', label: 'Dúvidas' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled || isMenuOpen ? (isDarkMode ? 'bg-black/90 border-white/10' : 'bg-white/90 border-black/5') : 'bg-transparent py-4 md:py-8'} backdrop-blur-xl py-3 border-b`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group transition-transform duration-500 hover:scale-105">
          <img 
            src="https://i.imgur.com/GWHQ6Y2.png" 
            alt="Avaeventos Logo" 
            className={`h-8 md:h-14 w-auto object-contain transition-all duration-700 ${isDarkMode ? 'brightness-125 contrast-125' : 'brightness-100'}`}
          />
          <div className="flex flex-col">
            <span className={`text-sm md:text-lg font-bold tracking-[0.1em] md:tracking-[0.3em] transition-colors duration-700 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              AVA<span className="text-gold">EVENTOS</span>
            </span>
            <span className="text-[6px] md:text-[8px] uppercase tracking-[0.3em] text-gold font-medium -mt-1">Premium Decor</span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-10 items-center">
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`} 
              className={`capitalize text-[10px] font-bold tracking-[0.3em] hover:text-gold transition-all duration-500 relative group ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gold transition-all duration-500 group-hover:w-8"></span>
            </a>
          ))}
          
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleTextSize}
              title="Aumentar Tamanho do Texto"
              className={`p-2 rounded-full transition-all duration-500 flex items-center justify-center ${isLargeText ? 'bg-gold text-white' : (isDarkMode ? 'bg-white/10 text-gold hover:bg-white/20' : 'bg-black/5 text-gray-900 hover:bg-black/10')}`}
            >
              <span className="text-[10px] font-bold">A+</span>
            </button>

            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all duration-500 ${isDarkMode ? 'bg-white/10 text-gold hover:bg-white/20' : 'bg-black/5 text-gray-900 hover:bg-black/10'}`}
            >
              {isDarkMode ? (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              ) : (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </div>

          <a href="#orcamento" className="bg-gold text-white px-8 py-3 rounded-full hover:bg-white hover:text-gold border border-gold transition-all duration-700 font-bold text-[9px] tracking-[0.2em] shadow-lg">
            ORÇAMENTO
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-4">
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
             {isDarkMode ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg> : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>}
          </button>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`p-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 border-t border-gold/10' : 'max-h-0 opacity-0'}`}>
        <div className={`flex flex-col p-6 space-y-6 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
          {navItems.map((item) => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-sm font-bold tracking-widest uppercase hover:text-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-4">
            <button 
              onClick={toggleTextSize}
              className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest"
            >
              <span className={`w-8 h-8 rounded-full flex items-center justify-center ${isLargeText ? 'bg-gold text-white' : 'bg-gold/10 text-gold'}`}>A+</span>
              {isLargeText ? 'Texto Normal' : 'Aumentar Texto'}
            </button>
            <a 
              href="#orcamento" 
              onClick={() => setIsMenuOpen(false)}
              className="bg-gold text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg"
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
