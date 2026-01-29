
import React, { useState } from 'react';
import { getAiEventSuggestion } from '../services/gemini';

interface AIAssistantProps {
  isDarkMode: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ isDarkMode }) => {
  const [eventType, setEventType] = useState('Casamento');
  const [guests, setGuests] = useState(100);
  const [pref, setPref] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true);
    const res = await getAiEventSuggestion(eventType, guests, pref);
    setSuggestion(res);
    setLoading(false);
  };

  return (
    <section id="ai-assistant" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl glass-panel p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none blur-3xl"></div>
        
        <div className="text-center mb-12 relative z-10">
          <span className="bg-gold/90 text-white text-[10px] font-bold px-6 py-2 rounded-full uppercase tracking-[0.3em] mb-6 inline-block shadow-lg">
            Inteligência Avaeventos
          </span>
          <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Desenhe o seu <span className="text-gold italic font-serif">Conceito</span>
          </h2>
          <p className={`text-lg font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Fale conosco através da IA e receba uma visão instantânea para o seu próximo grande momento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10 relative z-10">
          <div>
            <label className={`block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Tipo de Celebração</label>
            <select 
              className={`w-full p-4 border rounded-2xl outline-none transition-all duration-500 ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-white/60 border-black/10 text-gray-900 focus:border-gold'}`}
              value={eventType}
              onChange={e => setEventType(e.target.value)}
            >
              <option>Casamento</option>
              <option>Festa de 15 Anos</option>
              <option>Evento Corporativo</option>
              <option>Aniversário VIP</option>
            </select>
          </div>
          <div>
            <label className={`block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Convidados</label>
            <input 
              type="number" 
              className={`w-full p-4 border rounded-2xl outline-none transition-all duration-500 ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-white/60 border-black/10 text-gray-900 focus:border-gold'}`}
              value={guests}
              onChange={e => setGuests(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="mb-12 relative z-10">
          <label className={`block text-[10px] font-bold mb-3 uppercase tracking-[0.2em] ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Desejos & Inspirações</label>
          <textarea 
            className={`w-full p-5 border rounded-2xl outline-none h-32 transition-all duration-500 resize-none ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-white/60 border-black/10 text-gray-900 focus:border-gold'}`}
            placeholder="Descreva tons, estilos ou referências..."
            value={pref}
            onChange={e => setPref(e.target.value)}
          ></textarea>
        </div>

        <button 
          onClick={handleGenerate}
          disabled={loading}
          className="relative z-10 w-full bg-gold text-white py-6 rounded-2xl font-bold text-lg hover:bg-gray-900 transition-all duration-700 disabled:opacity-50 shadow-xl transform active:scale-95"
        >
          {loading ? (
            <span className="flex items-center justify-center gap-3">
              <svg className="animate-spin h-6 w-6 text-white" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processando sua Visão...
            </span>
          ) : 'Consultar Ava IA'}
        </button>

        {suggestion && (
          <div className={`mt-12 p-10 glass-card rounded-3xl border-l-4 border-gold animate-reveal ${isDarkMode ? 'bg-white/5' : 'bg-white/60'}`}>
            <h4 className="text-gold font-bold uppercase text-[9px] tracking-[0.4em] mb-4">Proposta Conceitual Ava</h4>
            <p className={`italic text-2xl leading-relaxed font-serif transition-colors duration-1000 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
              "{suggestion}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AIAssistant;
