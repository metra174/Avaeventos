
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Packages from './components/Packages';
import CheckoutModal from './components/CheckoutModal';
import Footer from './components/Footer';
import { Package } from './types';
import { ANGOLA_PROVINCES } from './constants';

const App: React.FC = () => {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  const [inquirySent, setInquirySent] = useState(false);
  const [inquiryData, setInquiryData] = useState({ 
    name: '', 
    phone: '', 
    location: 'Luanda', 
    exactAddress: '',
    message: '' 
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handlePackageSelect = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const whatsappNumber = "244948757808";

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `Olá Avaeventos! Tenho uma dúvida sobre um evento:
    
👤 *Nome:* ${inquiryData.name}
📱 *WhatsApp:* ${inquiryData.phone}
📍 *Província:* ${inquiryData.location}
🏠 *Endereço Exato:* ${inquiryData.exactAddress}
💬 *Mensagem / Perguntas:* 
${inquiryData.message}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryData({ name: '', phone: '', location: 'Luanda', exactAddress: '', message: '' });
    }, 5000);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`relative min-h-screen selection:bg-gold/30 transition-colors duration-1000 ${isDarkMode ? 'selection:text-white' : 'selection:text-gray-900'}`}>
      
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className={`absolute inset-0 transition-colors duration-1000 ${isDarkMode ? 'bg-[#080808]/80' : 'bg-[#FDFBF7]/70'}`}></div>
        <div className="ethereal-glow bg-gold/15 w-[250px] md:w-[800px] h-[250px] md:h-[800px] top-[-50px] left-[-50px] animate-float"></div>
        <div className={`ethereal-glow ${isDarkMode ? 'bg-indigo-900/10' : 'bg-white/20'} w-[200px] md:w-[600px] h-[200px] md:h-[600px] bottom-[5%] right-[-30px] animate-float`} style={{ animationDelay: '-7s' }}></div>
      </div>
      
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} />
        
        <section className="py-10 md:py-20 relative overflow-hidden border-y border-gold/5 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4 text-center">
            <div className={`flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-32 transition-all duration-1000 ${isDarkMode ? 'opacity-60' : 'opacity-40'}`}>
              <span className="font-serif text-lg md:text-3xl font-bold tracking-[0.2em]">VOGUE</span>
              <span className="font-serif text-lg md:text-3xl font-bold tracking-[0.2em]">LUXURY</span>
              <span className="font-serif text-lg md:text-3xl font-bold tracking-[0.2em]">ELEGANCE</span>
              <span className="font-serif text-lg md:text-3xl font-bold tracking-[0.2em]">CLASSIC</span>
            </div>
          </div>
        </section>

        <About isDarkMode={isDarkMode} />
        <Gallery isDarkMode={isDarkMode} />
        
        <div className="container mx-auto px-6">
          <div className={`h-[1px] w-full ${isDarkMode ? 'bg-white/5' : 'bg-black/5'}`}></div>
        </div>

        <Packages onSelect={handlePackageSelect} isDarkMode={isDarkMode} />

        <section id="duvidas" className="py-16 md:py-32 relative">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className={`glass-panel p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden transition-all duration-1000 ${isDarkMode ? 'border-white/10 shadow-2xl shadow-gold/5' : 'border-black/5 shadow-xl'}`}>
              <div className="text-center mb-10 md:mb-12">
                <span className="text-gold uppercase tracking-[0.3em] font-bold text-[10px] md:text-xs mb-3 block">Central de Atendimento</span>
                <h2 className={`text-3xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Fale com a <span className="text-gold italic font-serif">Curadoria</span></h2>
                <p className={`text-base md:text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Receba suporte personalizado e tire todas as suas dúvidas diretamente pelo WhatsApp.</p>
              </div>

              {inquirySent ? (
                <div className="text-center py-12 animate-reveal">
                  <div className="w-16 h-16 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Redirecionando...</h3>
                  <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>A abrir o WhatsApp para o seu atendimento exclusivo.</p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Nome Completo</label>
                       <input 
                        required 
                        type="text" 
                        placeholder="Ana Silva"
                        className={`w-full px-6 py-5 rounded-2xl outline-none transition-all duration-500 border text-base ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-gray-50 border-black/5 text-gray-900 focus:border-gold shadow-sm'}`}
                        value={inquiryData.name}
                        onChange={e => setInquiryData({...inquiryData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                       <label className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>WhatsApp</label>
                       <input 
                        required 
                        type="tel" 
                        placeholder="+244..."
                        className={`w-full px-6 py-5 rounded-2xl outline-none transition-all duration-500 border text-base ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-gray-50 border-black/5 text-gray-900 focus:border-gold shadow-sm'}`}
                        value={inquiryData.phone}
                        onChange={e => setInquiryData({...inquiryData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Província de Angola</label>
                      <select 
                        required
                        className={`w-full px-6 py-5 rounded-2xl outline-none transition-all duration-500 border text-base ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-gray-50 border-black/5 text-gray-900 focus:border-gold shadow-sm'}`}
                        value={inquiryData.location}
                        onChange={e => setInquiryData({...inquiryData, location: e.target.value})}
                      >
                        {ANGOLA_PROVINCES.map(prov => (
                          <option key={prov} value={prov} className={isDarkMode ? 'bg-neutral-900 text-white' : 'bg-white text-gray-900'}>{prov}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-2">
                       <label className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Endereço Exato / Bairro</label>
                       <input 
                        required 
                        type="text" 
                        placeholder="Rua, Bairro, Ponto de ref."
                        className={`w-full px-6 py-5 rounded-2xl outline-none transition-all duration-500 border text-base ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-gray-50 border-black/5 text-gray-900 focus:border-gold shadow-sm'}`}
                        value={inquiryData.exactAddress}
                        onChange={e => setInquiryData({...inquiryData, exactAddress: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className={`text-[10px] font-bold uppercase tracking-widest ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>O que pretende fazer? / Dúvidas</label>
                    <textarea 
                      required 
                      rows={4}
                      placeholder="Descreva o que deseja para o seu evento ou deixe sua pergunta..."
                      className={`w-full px-6 py-5 rounded-2xl outline-none transition-all duration-500 border resize-none text-base ${isDarkMode ? 'bg-white/5 border-white/10 text-white focus:border-gold' : 'bg-gray-50 border-black/5 text-gray-900 focus:border-gold shadow-sm'}`}
                      value={inquiryData.message}
                      onChange={e => setInquiryData({...inquiryData, message: e.target.value})}
                    ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-gold text-white py-5 md:py-7 rounded-2xl font-bold uppercase tracking-[0.2em] text-sm hover:bg-black transition-all duration-700 shadow-xl active:scale-95 flex items-center justify-center gap-3">
                    Falar com Consultor Agora
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section id="orcamento" className="py-24 md:py-56 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://i.imgur.com/scHAorL.png" 
               className={`w-full h-full object-cover transition-all duration-1000 transform scale-110 ${isDarkMode ? 'opacity-[0.3]' : 'opacity-[0.2]'} blur-[2px]`} 
             />
             <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-current transition-colors duration-1000 ${isDarkMode ? 'text-[#080808]' : 'text-[#FDFBF7]'}`}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className={`text-5xl md:text-9xl font-bold mb-8 md:mb-14 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Seu momento, <br />
              <span className="italic font-serif text-gold">nossa arte</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-5 md:gap-8 justify-center items-center">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                className="w-full md:w-auto bg-gold text-white px-12 md:px-16 py-5 md:py-7 rounded-full text-lg md:text-xl font-bold hover:bg-white hover:text-gold transition-all duration-700 shadow-2xl active:scale-95"
              >
                Orçamento WhatsApp
              </a>
              <a 
                href="#pacotes" 
                className="w-full md:w-auto glass-panel px-12 md:px-16 py-5 md:py-7 rounded-full text-lg md:text-xl font-bold hover:bg-gold/10 transition-all duration-700 backdrop-blur-3xl"
              >
                Ver Pacotes
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer isDarkMode={isDarkMode} />

      <CheckoutModal 
        pkg={selectedPackage} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        isDarkMode={isDarkMode}
      />
      
      <a 
        href={`https://wa.me/${whatsappNumber}`} 
        target="_blank" 
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-12 h-12 md:w-16 md:h-16 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.5)] hover:scale-110 transition-all duration-500 active:scale-90 flex items-center justify-center group"
        aria-label="WhatsApp Avaeventos"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20 group-hover:hidden"></div>
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </div>
  );
};

export default App;
