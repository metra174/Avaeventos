
import React from 'react';

interface ExtraServicesProps {
  isDarkMode: booleano;
  selectedExtras: string[];
  onToggleExtra: (nome: string) => void;
}

const SERVIÇOS_EXTRAS = [
  { nome: "Decoração do carro da noiva, turismo", detalhe: "Sob consulta" },
  { nome: "Decoração do carro da noiva, jipe", detalhe: "Sob consulta" },
  { nome: "Serviços de Cocktail por pessoa", detalhe: "Sob consulta" },
  { nome: "Rodízio por pessoa", detalhe: "Sob consulta" },
  { nome: "Forragem de tecido", detalhe: "Sob consulta" },
  { nome: "Protocolo", detalhe: "De acordo com o número de lugares (Sob consulta)" },
  { nome: "Segurança", detalhe: "Sob consulta" },
  { nome: "Tochas de fogo de artifício", detalhe: "Incluindo corte do bolo e entradas especiais (Sob consulta)" },
  { nome: "Máquinas de fumo", detalhe: "Sob consulta" },
  { nome: "Pista em vinil", detalhe: "Sob consulta" },
  { nome: "Cenários de fotos diferenciadas", detalhe: "Sob consulta" },
  { nome: "Cartões de mesa", detalhe: "De acordo com o número de lugares (Sob consulta)" },
  { nome: "Iluminação ambiente para todo o espaço", detalhe: "Sob consulta" },
  { nome: "Área lounge", detalhe: "Sob consulta" },
  { nome: "Pista luminosa", detalhe: "Sob consulta" },
  { nome: "Flores artificiais no teto", detalhe: "Sob consulta" },
  { nome: "Folhagem natural no teto", detalhe: "Sob consulta" }
];

const ExtraServices: React.FC<ExtraServicesProps> = ({ isDarkMode, selectedExtras, onToggleExtra }) => {
  const whatsappNumber = "244948757808";

  const handleConsult = (serviceName: string) => {
    const text = `Olá Avaeventos! Gostaria de consultar a disponibilidade para o serviço extra: *${serviceName}*`;
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  retornar (
    <section id="extras" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 md:mb-24 animate-reveal">
          <span className="text-gold uppercase tracking-[0.3em] font-bold mb-4 block text-xs">AVAEVENTOS.S</span>
          <h2 className={`text-4xl md:text-7xl font-bold mb-6 transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Serviços <span className="italic font-serif text-gold">Extras</span>
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Personalize sua celebração com nossos serviços exclusivos de alta gama.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EXTRA_SERVICES.map((service, index) => {
            const isSelected = selectedExtras.includes(service.name);
            retornar (
              <div
                chave={índice}
                className={`group p-8 rounded-[2.5rem] border transition-all duration-700 ${
                  é o Modo Escuro
                    ? 'bg-white/5 border-white/10 hover:border-gold/50'
                    : 'bg-gray-50 border-black/5 hover:border-gold/50 shadow-sm'
                } ${isSelected ? 'border-gold bg-gold/5' : ''}`}
              >
                <div className="mb-6">
                  <h3 className={`text-lg font-bold mb-2 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.name}
                  </h3>
                  <p className={`text-[10px] uppercase tracking-widest font-bold ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    {service.detail}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <botão
                    onClick={() => onToggleExtra(service.name)}
                    className={`w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 ${
                      é selecionado
                        ? 'bg-gold text-white shadow-lg shadow-gold/20'
                        : isDarkMode ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-white text-gray-900 border border-black/5 hover:bg-gray-50'
                    }`}
                  >
                    {isSelecionado ? (
                      <>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                        Adicionado
                      </>
                    ) : (
                      <>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                        ️ na Reserva
                      </>
                    )}
                  </button>

                  <botão
                    onClick={() => handleConsult(service.name)}
                    className={`w-full py-4 rounded-2xl text-[10px] font-bold uppercase tracking-widest transition-all duration-500 flex items-center justify-center gap-2 border ${
                      isDarkMode ? 'border-white/10 text-gray-400 hover:text-white hover:border-white/20' : 'border-black/5 text-gray-500 hover:text-gray-900 hover:border-black/10'
                    }`}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                    Disponibilidade do Consultor
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {selectedExtras.length > 0 && (
          <div className="mt-16 text-center animate-reveal">
            <p className={`mb-6 text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Você selecionou <span className="text-gold font-bold">{selectedExtras.length}</span> serviços extras.
            </p>
            <a
              href="#pacotes"
              className="inline-block bg-gold text-white px-12 py-6 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-black transition-all duration-700 shadow-2xl shadow-gold/20 active:scale-95"
            >
              Escolher Plano e Finalizar Reserva
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

exportar serviços extras padrão;
