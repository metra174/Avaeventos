import React, { useState, useMemo } from 'react';
import { PACKAGES } from '../constants';
import { Package } from '../types';
import { Sparkles, Check, ArrowRight, RotateCcw, MessageSquare, Compass, ShieldCheck } from 'lucide-react';

interface PackageButlerProps {
  isDarkMode: boolean;
  onSelectPackage: (pkg: Package, guestCount?: number) => void;
}

export const PackageButler: React.FC<PackageButlerProps> = ({ isDarkMode, onSelectPackage }) => {
  const [eventType, setEventType] = useState<'casamento' | 'festa' | 'corporativo' | 'salao'>('casamento');
  const [priority, setPriority] = useState<'decor_essencial' | 'super_luxo' | 'buffet' | 'espaco_completo'>('decor_essencial');
  const [guestCount, setGuestCount] = useState<number>(100);
  const [viewMode, setViewMode] = useState<'guia' | 'comparador'>('guia');

  // Intelligent Butler Recommendation Logic
  const recommendation = useMemo(() => {
    let recommendedId = 'label';
    let matchReason = '';
    let highlight = '';

    if (priority === 'espaco_completo' || eventType === 'salao') {
      recommendedId = 'salao';
      matchReason = 'O Aluguer do Salão no Benfica oferece a infraestrutura física dos sonhos: DJ exclusivo, iluminação de pista, suíte para descanso, cozinha ampla e estacionamento seguro.';
      highlight = 'Ideal para quem busca o espaço perfeito e pode optar por adicionar decoração e buffet conforme a necessidade.';
    } else if (priority === 'super_luxo') {
      recommendedId = 'rubi';
      matchReason = 'O Pacote Rubi é a experiência de alta costura com estrutura de cristais de 10/10, vinil 10/10, poltronas de luxo e iluminação cênica dupla (ambiente + pista).';
      highlight = 'A escolha definitiva para noivas e celebrações que exigem impacto visual monumental e imponência.';
    } else if (priority === 'buffet') {
      recommendedId = 'buffet';
      matchReason = 'O Pacote Buffet foca no banquete gastronômico requintado: rodízio ou boi no espeto, pratos quentes e frios, salgados finos, entradas e serviço completo.';
      highlight = 'Perfeito para celebrar à mesa com fartura, sabor inesquecível e louça de apoio incluída.';
    } else {
      // Default / decor_essencial -> Pacote Label (Atualizado)
      recommendedId = 'label';
      matchReason = 'O Pacote Label foi atualizado com luz ambiente aconchegante e cartões de boas-vindas sofisticados, cadeiras ripadas/algodão doce e 4 cenários monumentais.';
      highlight = 'Melhor custo-benefício para eventos de alto padrão a apenas 18.000 Kz por pessoa.';
    }

    const pkg = PACKAGES.find(p => p.id === recommendedId) || PACKAGES[0];
    
    // Estimate total investment
    let estimatedTotal = 0;
    if (pkg.id === 'salao') {
      estimatedTotal = 1200000;
    } else {
      const priceNum = parseFloat(pkg.price.replace(/\./g, '').replace(',', '.'));
      estimatedTotal = priceNum * guestCount;
    }

    return {
      pkg,
      matchReason,
      highlight,
      estimatedTotal
    };
  }, [eventType, priority, guestCount]);

  const formatKz = (val: number) => {
    return new Intl.NumberFormat('pt-AO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(val);
  };

  const handleBookRecommended = () => {
    onSelectPackage(recommendation.pkg, guestCount);
  };

  const handleWhatsappButler = () => {
    const whatsappNumber = '244948757808';
    const text = `Olá Avaeventos! O Mordomo Virtual me sugeriu o *${recommendation.pkg.name}* para o meu evento:
    
🎉 *Tipo:* ${eventType.toUpperCase()}
👥 *Convidados Estimados:* ${guestCount}
💎 *Pacote Sugerido:* ${recommendation.pkg.name} (${recommendation.pkg.price} AKZ ${recommendation.pkg.id === 'salao' ? 'Base Fixo' : 'p/ pessoa'})
💰 *Estimativa de Investimento:* ${formatKz(recommendation.estimatedTotal)} AKZ

Gostaria de verificar a disponibilidade de datas para a temporada de Junho 2026!`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <section id="mordomo" className="py-20 md:py-32 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-reveal">
          <div className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-sm">
            <Compass className="w-4 h-4 text-gold" />
            Mordomo Avaeventos • Guia de Sugestões
          </div>
          <h2 className={`text-3xl sm:text-5xl md:text-7xl font-bold mb-4 font-serif ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Qual é o pacote <span className="text-gold italic">perfeito</span> para si?
          </h2>
          <p className={`max-w-2xl mx-auto text-base md:text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Não tem a certeza de qual opção escolher? O nosso Mordomo analisa o seu perfil em segundos e sugere a melhor combinação de orçamento e sofisticação.
          </p>

          {/* Mode Switcher */}
          <div className="inline-flex p-1.5 rounded-full mt-6 border border-gold/20 backdrop-blur-md bg-white/5">
            <button
              onClick={() => setViewMode('guia')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                viewMode === 'guia'
                  ? 'bg-gold text-white shadow-md'
                  : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              Guia Interativo (Mordomo)
            </button>
            <button
              onClick={() => setViewMode('comparador')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                viewMode === 'comparador'
                  ? 'bg-gold text-white shadow-md'
                  : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
              }`}
            >
              Comparador Rápido
            </button>
          </div>
        </div>

        {viewMode === 'guia' ? (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Questionnaire Side */}
            <div className={`lg:col-span-7 glass-panel p-6 sm:p-10 rounded-[2.5rem] border shadow-2xl transition-all duration-500 ${isDarkMode ? 'border-white/10' : 'border-black/5'}`}>
              
              {/* Step 1: Tipo de Evento */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-4">
                  <span className="w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center text-[10px] font-mono">1</span>
                  Tipo de Celebração
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: 'casamento', label: 'Casamento', icon: '💍' },
                    { id: 'festa', label: 'Festa / 15 Anos', icon: '✨' },
                    { id: 'corporativo', label: 'Gala / Banquete', icon: '🥂' },
                    { id: 'salao', label: 'Salão Benfica', icon: '🏰' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEventType(item.id as any)}
                      className={`p-4 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                        eventType === item.id
                          ? 'border-gold bg-gold/15 text-gold shadow-md scale-[1.02]'
                          : isDarkMode
                            ? 'border-white/5 bg-white/5 text-gray-300 hover:bg-white/10'
                            : 'border-black/5 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div className="text-2xl mb-1">{item.icon}</div>
                      <div className="text-xs font-bold">{item.label}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Prioridade Principal */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold mb-4">
                  <span className="w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center text-[10px] font-mono">2</span>
                  O que procura prioritariamente?
                </label>
                <div className="space-y-3">
                  {[
                    {
                      id: 'decor_essencial',
                      title: 'Decoração Completa & Cenários com Requinte',
                      desc: '4 Cenários monumentais, cadeiras ripadas, luz ambiente e cartões de boas-vindas.',
                      badge: 'Pacote Label (18.000 Kz/pes)'
                    },
                    {
                      id: 'super_luxo',
                      title: 'Luxo Monumental, Cristais & Poltronas',
                      desc: 'Estrutura com cristais 10/10, poltronas imperiais, vinil 10/10 e luzes de pista.',
                      badge: 'Pacote Rubi (35.000 Kz/pes)'
                    },
                    {
                      id: 'buffet',
                      title: 'Banquete Gastronómico Completo',
                      desc: 'Rodízio ou boi no espeto, pratos quentes e frios, doces, salgados e louça.',
                      badge: 'Pacote Buffet (25.000 Kz/pes)'
                    },
                    {
                      id: 'espaco_completo',
                      title: 'Espaço Físico Próprio com DJ & Suíte',
                      desc: 'Salão climatizado no Benfica, suíte de noivos, estacionamento e cozinha.',
                      badge: 'Aluguer do Salão (a partir 1.200.000 Kz)'
                    },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPriority(item.id as any)}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-start justify-between gap-4 ${
                        priority === item.id
                          ? 'border-gold bg-gold/15 text-gold shadow-md'
                          : isDarkMode
                            ? 'border-white/5 bg-white/5 text-gray-300 hover:bg-white/10'
                            : 'border-black/5 bg-white text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-sm mb-1">{item.title}</div>
                        <div className={`text-xs font-light ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{item.desc}</div>
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-gold/20 text-gold whitespace-nowrap self-center">
                        {item.badge}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Número de Convidados */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold">
                    <span className="w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center text-[10px] font-mono">3</span>
                    Previsão de Convidados
                  </label>
                  <span className="text-xl font-bold font-mono text-gold">
                    {guestCount} <span className="text-xs font-normal text-gray-400">pessoas</span>
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {[50, 80, 100, 150, 200, 250, 300, 400].map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => setGuestCount(val)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 ${
                        guestCount === val
                          ? 'bg-gold text-white shadow-sm'
                          : isDarkMode ? 'bg-white/5 text-gray-300 hover:bg-white/10' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {val}
                    </button>
                  ))}
                </div>

                <input
                  type="range"
                  min="20"
                  max="500"
                  step="10"
                  value={guestCount}
                  onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Recommendation Card Side */}
            <div className="lg:col-span-5">
              <div className={`glass-panel p-6 sm:p-10 rounded-[2.5rem] border-2 border-gold shadow-2xl relative overflow-hidden transition-all duration-700 ${isDarkMode ? 'bg-[#151515]/90' : 'bg-white/95'}`}>
                {/* Glow & Badge */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-gold text-white shadow-md">
                    <Sparkles className="w-3.5 h-3.5" /> Recomendação do Mordomo
                  </span>
                  <span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wider flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> 98% Compatível
                  </span>
                </div>

                <h3 className={`text-2xl sm:text-3xl font-serif font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {recommendation.pkg.name}
                </h3>
                <p className="text-xs font-semibold text-gold tracking-widest uppercase mb-4">
                  {recommendation.pkg.tagline}
                </p>

                {/* Image preview */}
                {recommendation.pkg.image && (
                  <div className="w-full h-44 rounded-2xl overflow-hidden mb-6 relative group">
                    <img
                      src={recommendation.pkg.image}
                      alt={recommendation.pkg.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <span className="text-white text-xs font-bold uppercase tracking-wider">
                        📍 {recommendation.pkg.location || 'Luanda, Angola'}
                      </span>
                    </div>
                  </div>
                )}

                {/* Investment Estimate Box */}
                <div className="bg-gold/10 border border-gold/30 rounded-2xl p-4 mb-6 text-center">
                  <div className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-1">
                    Estimativa para {guestCount} convidados
                  </div>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-xs font-bold text-gold">AKZ</span>
                    <span className={`text-2xl sm:text-3xl font-black font-mono ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {formatKz(recommendation.estimatedTotal)}
                    </span>
                  </div>
                  <div className="text-[10px] text-gray-400 mt-1">
                    {recommendation.pkg.id === 'salao'
                      ? 'Preço fixo do Salão Base (opções de buffet e decoração adicionais)'
                      : `${recommendation.pkg.price} AKZ por pessoa × ${guestCount} convidados`}
                  </div>
                </div>

                {/* Butler commentary */}
                <div className={`p-4 rounded-2xl mb-6 text-xs leading-relaxed border ${isDarkMode ? 'bg-white/5 border-white/5 text-gray-300' : 'bg-gray-50 border-gray-100 text-gray-600'}`}>
                  <p className="mb-2 font-medium italic text-gold">
                    "{recommendation.matchReason}"
                  </p>
                  <p className="font-light">
                    {recommendation.highlight}
                  </p>
                </div>

                {/* Included features preview */}
                <div className="space-y-2 mb-8 text-left">
                  <div className="text-[10px] uppercase tracking-widest font-bold text-gold mb-2">Destaques Inclusos:</div>
                  {recommendation.pkg.features.slice(0, 4).map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs">
                      <Check className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                      <span className={`truncate ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{f}</span>
                    </div>
                  ))}
                  {recommendation.pkg.features.length > 4 && (
                    <div className="text-[10px] text-gold font-medium pl-5">
                      + mais {recommendation.pkg.features.length - 4} itens inclusos
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleBookRecommended}
                    className="w-full bg-gold text-white py-4 rounded-2xl font-bold uppercase tracking-wider text-xs hover:bg-black transition-all duration-300 shadow-xl active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>Escolher Este Pacote ({guestCount} pessoas)</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleWhatsappButler}
                    className="w-full py-3.5 rounded-2xl font-bold uppercase tracking-wider text-xs border border-emerald-500/40 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Falar no WhatsApp com o Mordomo</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Mode 2: Comparador Rápido de Todos os Pacotes */
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PACKAGES.map((pkg) => {
              const isLabel = pkg.id === 'label';
              const isRubi = pkg.id === 'rubi';
              return (
                <div
                  key={pkg.id}
                  className={`glass-panel p-6 rounded-[2rem] border transition-all duration-300 flex flex-col justify-between ${
                    isLabel ? 'border-amber-500 shadow-xl relative' : (isDarkMode ? 'border-white/10' : 'border-black/5')
                  }`}
                >
                  {isLabel && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-white text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                      Mais Escolhido • Atualizado
                    </div>
                  )}
                  <div>
                    <h4 className={`text-xl font-serif font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h4>
                    <p className="text-xs text-gold uppercase tracking-wider font-medium mb-4">{pkg.tagline}</p>
                    
                    <div className="mb-6 p-4 rounded-xl bg-gold/10 text-center">
                      <div className="text-xs font-mono text-gold font-bold">AKZ</div>
                      <div className={`text-2xl font-black ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.price}</div>
                      <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">{pkg.id === 'salao' ? 'Salão Fixo' : 'Por Pessoa'}</div>
                    </div>

                    <div className="space-y-2 mb-6 text-left text-xs">
                      {pkg.features.slice(0, 5).map((f, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span className={`leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg, guestCount)}
                    className="w-full py-3 rounded-xl border border-gold text-gold hover:bg-gold hover:text-white transition-all text-xs font-bold uppercase tracking-wider"
                  >
                    Selecionar
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default PackageButler;
