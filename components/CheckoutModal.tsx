
import React, { useState, useMemo } from 'react';
import { Package } from '../types';
import { ANGOLA_PROVINCES } from '../constants';

interface CheckoutModalProps {
  pkg: Package | null;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
  isLargeText: boolean;
  selectedExtras?: string[];
  initialGuests?: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  pkg, 
  isOpen, 
  onClose, 
  isDarkMode, 
  isLargeText, 
  selectedExtras = [],
  initialGuests = 50
}) => {
  const [step, setStep] = useState(1);
  const [salaoSpec, setSalaoSpec] = useState<'base' | 'decor' | 'buffet' | 'completo'>('base');
  const [tableChoice, setTableChoice] = useState<'Mesas especiais' | 'Mesas com toalhas'>('Mesas especiais');
  const [dishwareChoice, setDishwareChoice] = useState<'Louça branca' | 'Louça de cristal'>('Louça de cristal');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '2026-06-20', // Default pre-set date representing June 20, 2026
    guests: initialGuests || 50,
    location: 'Luanda',
    exactAddress: '',
    notes: '',
    paymentMethod: 'Transferência'
  });

  React.useEffect(() => {
    if (initialGuests && initialGuests > 0) {
      setFormData(prev => ({ ...prev, guests: initialGuests }));
    }
  }, [initialGuests, isOpen]);

  const supportsTableAndDishwareCustomization = useMemo(() => {
    if (!pkg) return false;
    return ['damasco', 'label', 'rubi'].includes(pkg.id) || (pkg.id === 'salao' && salaoSpec !== 'base');
  }, [pkg, salaoSpec]);

  const numericPrice = useMemo(() => {
    if (!pkg) return 0;
    if (pkg.id === 'salao') {
      if (salaoSpec === 'base') return 1200000;
      if (salaoSpec === 'decor') return 25000;
      if (salaoSpec === 'buffet') return 45000;
      if (salaoSpec === 'completo') return 65000;
    }
    return parseFloat(pkg.price.replace(/\./g, '').replace(',', '.'));
  }, [pkg, salaoSpec]);

  const totalInvestment = useMemo(() => {
    if (!pkg) return 0;
    if (pkg.id === 'salao' && salaoSpec === 'base') return 1200000;
    return numericPrice * (formData.guests || 0);
  }, [numericPrice, formData.guests, pkg?.id, salaoSpec]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-AO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  if (!isOpen || !pkg) return null;

  const whatsappNumber = "244948757808";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const extrasText = selectedExtras.length > 0 
      ? `\n✨ *Serviços Extras Selecionados:*\n${selectedExtras.map(ex => `• ${ex}`).join('\n')}`
      : '';

    let salaoSpecName = '';
    if (pkg.id === 'salao') {
      if (salaoSpec === 'base') salaoSpecName = ' - Apenas Salão Base (1.200.000,00 AKZ)';
      else if (salaoSpec === 'decor') salaoSpecName = ' - Salão com Decoração (25.000,00 AKZ por pessoa)';
      else if (salaoSpec === 'buffet') salaoSpecName = ' - Salão, Decoração & Buffet (sem bebidas) (45.000,00 AKZ por pessoa)';
      else if (salaoSpec === 'completo') salaoSpecName = ' - Salão Completo com Decoração, Buffet & Bebidas (65.000,00 AKZ por pessoa)';
    }

    const customizationText = supportsTableAndDishwareCustomization
      ? `\n🪑 *Tipo de Mesa Escolhido:* ${tableChoice}\n🍽️ *Tipo de Louça Escolhido:* ${dishwareChoice}`
      : '';

    const text = `Olá Avaeventos! Gostaria de solicitar uma reserva:

💎 *Plano:* ${pkg.name}${salaoSpecName}${customizationText}
👤 *Cliente:* ${formData.name}
📱 *WhatsApp:* ${formData.phone}
📍 *Província:* ${formData.location}
🏠 *Endereço Exato:* ${formData.exactAddress}
👥 *Convidados:* ${formData.guests}
📅 *Data:* ${formData.date}
💳 *Pagamento:* ${formData.paymentMethod}${extrasText}

📝 *Desejos e Observações:* 
${formData.notes || 'Sem observações adicionais.'}

💰 *Investimento Estimado:* ${pkg.currency} ${formatCurrency(totalInvestment)}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    
    setStep(2);
  };

  const inputStyles = `w-full px-4 py-4 border rounded-2xl outline-none text-base md:text-sm transition-all duration-500 ${
    isDarkMode 
      ? 'bg-white/5 border-white/10 text-white focus:border-gold focus:bg-white/10' 
      : 'bg-gray-50 border-gray-100 text-gray-900 focus:border-gold focus:bg-white shadow-sm'
  }`;

  const labelStyles = `block text-[10px] font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden animate-reveal border-t-8 border-gold transition-colors duration-1000 h-full md:h-auto md:max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gold transition-colors p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-12 pt-16 md:pt-12">
            <div className="mb-8">
              <h2 className={`text-2xl md:text-4xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h2>
              {pkg.location && (
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <span className="text-gold font-bold text-[10px] uppercase tracking-widest">{pkg.location}</span>
                </div>
              )}
              <p className="text-gold font-medium text-[10px] uppercase tracking-widest opacity-70">Complete os detalhes para o seu orçamento</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 mb-8">
              <div className="md:col-span-2">
                <label className={labelStyles}>Nome Completo</label>
                <input required type="text" placeholder="Ex: Ana Silva" className={inputStyles} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              
              {pkg.id === 'salao' && (
                <div className="md:col-span-2 border border-gold/20 bg-gold/5 p-5 rounded-[2rem] my-2">
                  <label className="block text-[10px] font-bold uppercase tracking-widest mb-3 text-gold">Especificação do Aluguer / Tipo de Serviço</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSalaoSpec('base')}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        salaoSpec === 'base'
                          ? 'border-gold bg-gold text-white shadow-md'
                          : isDarkMode 
                            ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                      }`}
                    >
                      <div className="font-bold text-xs uppercase tracking-wider mb-1">Apenas Salão Base</div>
                      <div className={`text-[10px] uppercase font-mono ${salaoSpec === 'base' ? 'text-white/80' : 'text-gold'}`}>
                        1.200.000,00 AKZ Fixo
                      </div>
                    </button>
                    
                    <button
                      type="button"
                      onClick={() => setSalaoSpec('decor')}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        salaoSpec === 'decor'
                          ? 'border-gold bg-gold text-white shadow-md'
                          : isDarkMode 
                            ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                      }`}
                    >
                      <div className="font-bold text-xs uppercase tracking-wider mb-1">Salão com Decoração</div>
                      <div className={`text-[10px] uppercase font-mono ${salaoSpec === 'decor' ? 'text-white/80' : 'text-gold'}`}>
                        25.000,00 AKZ / pessoa
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSalaoSpec('buffet')}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        salaoSpec === 'buffet'
                          ? 'border-gold bg-gold text-white shadow-md'
                          : isDarkMode 
                            ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                      }`}
                    >
                      <div className="font-bold text-xs uppercase tracking-wider mb-1">Salão, Decor & Buffet</div>
                      <div className={`text-[10px] uppercase font-mono ${salaoSpec === 'buffet' ? 'text-white/80' : 'text-gold'}`}>
                        45.000,00 AKZ / pessoa (sem bebidas)
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSalaoSpec('completo')}
                      className={`p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer ${
                        salaoSpec === 'completo'
                          ? 'border-gold bg-gold text-white shadow-md'
                          : isDarkMode 
                            ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                            : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                      }`}
                    >
                      <div className="font-bold text-xs uppercase tracking-wider mb-1">Salão Completo</div>
                      <div className={`text-[10px] uppercase font-mono ${salaoSpec === 'completo' ? 'text-white/80' : 'text-gold'}`}>
                        65.000,00 AKZ / pessoa (com bebidas)
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {/* Personalização de Mesas e Louça */}
              {supportsTableAndDishwareCustomization && (
                <div className="md:col-span-2 border border-gold/30 bg-gold/[0.04] p-5 md:p-6 rounded-[2rem] my-2 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-gold">
                      Personalização do Pacote • Escolha de Mesas & Louça
                    </h4>
                  </div>

                  {/* Seleção do Tipo de Mesa */}
                  <div>
                    <label className={labelStyles}>Tipo de Mesa Desejado</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setTableChoice('Mesas especiais')}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                          tableChoice === 'Mesas especiais'
                            ? 'border-gold bg-gold text-white shadow-lg'
                            : isDarkMode 
                              ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-xs uppercase tracking-wider mb-0.5">Mesas especiais</div>
                          <div className={`text-[10px] ${tableChoice === 'Mesas especiais' ? 'text-white/85' : 'text-gray-400'}`}>
                            Design exclusivo e moderno
                          </div>
                        </div>
                        {tableChoice === 'Mesas especiais' && (
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setTableChoice('Mesas com toalhas')}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                          tableChoice === 'Mesas com toalhas'
                            ? 'border-gold bg-gold text-white shadow-lg'
                            : isDarkMode 
                              ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-xs uppercase tracking-wider mb-0.5">Mesas com toalhas</div>
                          <div className={`text-[10px] ${tableChoice === 'Mesas com toalhas' ? 'text-white/85' : 'text-gray-400'}`}>
                            Toalhas finas de alta costura
                          </div>
                        </div>
                        {tableChoice === 'Mesas com toalhas' && (
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Seleção do Tipo de Louça */}
                  <div>
                    <label className={labelStyles}>Tipo de Louça Desejado</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setDishwareChoice('Louça branca')}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                          dishwareChoice === 'Louça branca'
                            ? 'border-gold bg-gold text-white shadow-lg'
                            : isDarkMode 
                              ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-xs uppercase tracking-wider mb-0.5">Louça branca</div>
                          <div className={`text-[10px] ${dishwareChoice === 'Louça branca' ? 'text-white/85' : 'text-gray-400'}`}>
                            Porcelana branca clássica e requintada
                          </div>
                        </div>
                        {dishwareChoice === 'Louça branca' && (
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => setDishwareChoice('Louça de cristal')}
                        className={`p-4 rounded-2xl border text-left transition-all duration-300 cursor-pointer flex items-center justify-between ${
                          dishwareChoice === 'Louça de cristal'
                            ? 'border-gold bg-gold text-white shadow-lg'
                            : isDarkMode 
                              ? 'border-white/10 bg-white/5 text-gray-300 hover:bg-white/10' 
                              : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-xs uppercase tracking-wider mb-0.5">Louça de cristal</div>
                          <div className={`text-[10px] ${dishwareChoice === 'Louça de cristal' ? 'text-white/85' : 'text-gray-400'}`}>
                            Transparência nobre & cristais de luxo
                          </div>
                        </div>
                        {dishwareChoice === 'Louça de cristal' && (
                          <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                          </div>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <label className={labelStyles}>WhatsApp</label>
                <input required type="tel" className={inputStyles} placeholder="+244" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div>
                <label className={labelStyles}>Nº de Convidados</label>
                <input required type="number" min="1" className={inputStyles} value={formData.guests} onChange={e => setFormData({...formData, guests: parseInt(e.target.value) || 0})} />
              </div>

              <div>
                <label className={labelStyles}>Província</label>
                <select className={inputStyles} value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})}>
                  {ANGOLA_PROVINCES.map(prov => (
                    <option key={prov} value={prov} className={isDarkMode ? 'bg-neutral-900' : 'bg-white'}>{prov}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelStyles}>Data do Evento (Temporada de Junho)</label>
                <input 
                  required 
                  type="date" 
                  min="2026-06-01" 
                  max="2026-06-30" 
                  className={inputStyles} 
                  value={formData.date} 
                  onChange={e => setFormData({...formData, date: e.target.value})} 
                />
                <span className="text-[9px] md:text-[10px] text-amber-500 mt-1.5 block font-bold tracking-wider uppercase">
                  ✨ Curadoria Ativa • Junho de 2026
                </span>
              </div>

              <div className="md:col-span-2">
                <label className={labelStyles}>Endereço Exato do Local</label>
                <textarea 
                  required 
                  placeholder="Descreva a localização exata..." 
                  className={`${inputStyles} h-24 resize-none`} 
                  value={formData.exactAddress} 
                  onChange={e => setFormData({...formData, exactAddress: e.target.value})} 
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyles}>O que pretende fazer? / Desejos</label>
                <textarea 
                  placeholder="Descreva o que deseja para o evento..." 
                  className={`${inputStyles} h-32 resize-none`} 
                  value={formData.notes} 
                  onChange={e => setFormData({...formData, notes: e.target.value})} 
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyles}>Método de Pagamento</label>
                <select className={inputStyles} value={formData.paymentMethod} onChange={e => setFormData({...formData, paymentMethod: e.target.value})}>
                  <option>Transferência</option>
                  <option>Multicaixa Express</option>
                  <option>Depósito em Conta</option>
                  <option>Presencial na Sede</option>
                </select>
              </div>
            </div>

            <div className={`p-6 rounded-[2rem] border mb-8 transition-all duration-700 ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100 shadow-inner'}`}>
              {supportsTableAndDishwareCustomization && (
                <div className="flex flex-wrap items-center gap-2 mb-4 pb-4 border-b border-gold/10">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Configuração:</span>
                  <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 flex items-center gap-1">
                    🪑 {tableChoice}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/20 flex items-center gap-1">
                    🍽️ {dishwareChoice}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gold/10 text-xs">
                <span className={`font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {(pkg.id === 'salao' && salaoSpec === 'base') ? 'Valor do Aluguer' : 'Preço por Pessoa'}
                </span>
                <span className={`font-bold ${isLargeText ? 'text-lg' : ''} ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.currency} {formatCurrency(numericPrice)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {(pkg.id === 'salao' && salaoSpec === 'base') ? 'Investimento Total' : 'Total Estimado'}
                </span>
                <span className={`text-gold font-black transition-all duration-500 ${isLargeText ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'}`}>
                  {pkg.currency} {formatCurrency(totalInvestment)}
                </span>
              </div>
            </div>

            <button type="submit" className="w-full bg-gold text-white py-5 md:py-6 rounded-2xl font-bold hover:bg-black transition-all shadow-xl active:scale-95 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 cursor-pointer">
              Confirmar Reserva no WhatsApp
            </button>
          </form>
        ) : (
          <div className="p-10 md:p-16 text-center h-full flex flex-col justify-center">
            <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Solicitação Enviada!</h2>
            <p className={`mb-10 text-base md:text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Abra o seu WhatsApp para concluir o atendimento exclusivo com a nossa equipa.
            </p>
            <button onClick={onClose} className="w-full bg-gold text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-gray-900 transition-all duration-700">
              Voltar ao Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
