import React from 'react';
import { WHATSAPP_CONTACT } from '../constants'; 

interface ExtraServicesProps {
  isDarkMode: boolean;
  selectedExtras: string[];
  onToggleExtra: (name: string) => void;
}

const EXTRA_SERVICES = [
  { name: "Decoração do carro da noiva, turismo", detail: "Sob-consulta" },
  { name: "Decoração do carro da noiva, jeep", detail: "Sob-consulta" },
  { name: "Serviços de Cocktail por pessoa", detail: "Sob-consulta" },
  { name: "Rodízio por pessoa", detail: "Sob-consulta" },
  { name: "Forragem de tecido", detail: "Sob-consulta" },
  { name: "Protocolo", detail: "Sob-consulta" },
  { name: "Segurança", detail: "Sob-consulta" },
  { name: "Tochas de fogo de artifício", detail: "Sob-consulta" },
  { name: "Maquinas de fumo", detail: "Sob-consulta" },
  { name: "Pista em vinil", detail: "Sob-consulta" },
  { name: "Cenário de fotos diferenciados", detail: "Sob-consulta" },
  { name: "Cartões de mesa", detail: "Sob-consulta" },
  { name: "Iluminação ambiente para todo espaço", detail: "Sob-consulta" },
  { name: "Área lounge", detail: "Sob-consulta" },
  { name: "Pista luminosa", detail: "Sob-consulta" },
  { name: "Flores no tecto artifício", detail: "Sob-consulta" },
  { name: "Verdura natural no tecto", detail: "Sob-consulta" }
];

const ExtraServices: React.FC<ExtraServicesProps> = ({ isDarkMode, selectedExtras, onToggleExtra }) => {
  
  const handleConsult = (serviceName: string) => {
    const text = `*Olá AVA Eventos! Gostaria de consultar o serviço extra: ${serviceName}*`;
    window.open(`https://wa.me/${WHATSAPP_CONTACT}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="extras" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-reveal">
          <span className="text-gold uppercase tracking-[0.3em] font-bold mb-4 block text-xs">AVAEVENTOS.S</span>
          <h2 className={`text-4xl md:text-7xl font-bold mb-6 transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Serviços <span className="italic font-serif text-gold">Extras</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTRA_SERVICES.map((service, index) => {
            const isSelected = selectedExtras.includes(service.name);
            return (
              <div
                key={index}
                onClick={() => onToggleExtra(service.name)}
                className={`group p-8 rounded-[2.5rem] border transition-all duration-700 cursor-pointer ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:border-gold/50' 
                    : 'bg-gray-50 border-black/5 hover:border-gold/50 shadow-sm'
                } ${isSelected ? 'border-gold bg-gold/5' : ''}`}
              >
                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.name}
                  </h3>
                  <p className="text-gold text-sm font-medium">{service.detail}</p>
                </div>
                
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleConsult(service.name);
                  }}
                  className="text-xs uppercase tracking-widest font-bold text-gold hover:opacity-70 transition-opacity"
                >
                  Consultar via WhatsApp →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExtraServices;
