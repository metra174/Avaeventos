
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';

interface GalleryProps {
  isDarkMode: boolean;
}

const Gallery: React.FC<GalleryProps> = ({ isDarkMode }) => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Casamentos', 'Festas', 'Corporativo', 'Gastronomia', 'Especiais'];

  const filteredImages = filter === 'Todos' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <section id="galeria" className="py-24 relative z-10">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="mb-16 opacity-0 animate-reveal">
          <h2 className={`text-5xl md:text-7xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Galeria de <span className="text-gold italic font-serif">Sonhos</span>
          </h2>
          <div className="w-24 h-1 bg-gold/30 mx-auto mb-8"></div>
          <p className={`max-w-2xl mx-auto font-light text-lg md:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore os banquetes e produções reais capturados em nossas produções exclusivas Avaeventos.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16 opacity-0 animate-reveal stagger-1">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 md:px-10 py-3 rounded-full transition-all duration-700 text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] border ${
                filter === cat 
                  ? 'bg-gold border-gold text-white shadow-2xl scale-105' 
                  : (isDarkMode 
                      ? 'bg-transparent border-white/10 text-gray-400 hover:border-gold hover:text-gold' 
                      : 'bg-transparent border-black/5 text-gray-600 hover:border-gold hover:text-gold shadow-sm')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredImages.map((img, idx) => (
            <div 
              key={idx} 
              className="group relative overflow-hidden rounded-[2.5rem] shadow-xl aspect-[4/5] bg-gray-900/10 border border-white/10 cursor-pointer transform transition-all duration-1000 hover:shadow-[0_30px_60px_-15px_rgba(197,160,89,0.3)]"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-[3s] cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col items-center justify-end p-10 md:p-12 backdrop-blur-[1px]">
                <span className="text-gold text-[10px] font-bold tracking-[0.4em] mb-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 delay-100 uppercase">
                  {img.category}
                </span>
                <h3 className="text-white font-serif text-2xl md:text-3xl mb-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 delay-200 leading-tight">
                  {img.title}
                </h3>
                <div className="w-16 h-[1px] bg-gold/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 delay-300"></div>
              </div>

              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 transition-colors duration-1000 pointer-events-none rounded-[2.5rem]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
