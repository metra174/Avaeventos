
import React, { useState, useMemo } from 'react';
import { Package } from '../types';
import { ANGOLA_PROVINCES } from '../constants';

interface CheckoutModalProps {
  pkg: Package | null;
  isOpen: boolean;
  onClose: () => void;
  isDarkMode: boolean;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ pkg, isOpen, onClose, isDarkMode }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: 50,
    location: 'Luanda',
    exactAddress: '',
    notes: '',
    paymentMethod: 'Transferência'
  });

  const numericPrice = useMemo(() => {
    if (!pkg) return 0;
    return parseFloat(pkg.price.replace(/\./g, '').replace(',', '.'));
  }, [pkg]);

  const totalInvestment = useMemo(() => {
    return numericPrice * (formData.guests || 0);
  }, [numericPrice, formData.guests]);

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
    
    const text = `Olá Avaeventos! Gostaria de solicitar uma reserva:

💎 *Plano:* ${pkg.name}
👤 *Cliente:* ${formData.name}
📱 *WhatsApp:* ${formData.phone}
📍 *Província:* ${formData.location}
🏠 *Endereço Exato:* ${formData.exactAddress}
👥 *Convidados:* ${formData.guests}
📅 *Data:* ${formData.date}
💳 *Pagamento:* ${formData.paymentMethod}

📝 *Desejos e Perguntas:* 
${formData.notes || 'Sem observações adicionais.'}

💰 *Investimento Estimado:* ${pkg.currency} ${formatCurrency(totalInvestment)}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    
    setStep(2);
  };

  const inputStyles = `w-full px-4 py-4 border rounded-2xl outline-none text-sm transition-all duration-500 ${
    isDarkMode 
      ? 'bg-white/5 border-white/10 text-white focus:border-gold focus:bg-white/10' 
      : 'bg-gray-50 border-gray-100 text-gray-900 focus:border-gold focus:bg-white shadow-sm'
  }`;

  const labelStyles = `block text-[10px] font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-2xl rounded-[2.5rem] shadow-2xl overflow-hidden animate-reveal border-t-8 border-gold transition-colors duration-1000 max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h2>
              <p className="text-gold font-medium text-xs uppercase tracking-widest">Complete os detalhes para o seu orçamento no WhatsApp</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="md:col-span-2">
                <label className={labelStyles}>Nome Completo</label>
                <input required type="text" placeholder="Ex: Ana Silva" className={inputStyles} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              
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
                <label className={labelStyles}>Data do Evento</label>
                <input required type="date" className={inputStyles} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyles}>Endereço Exato do Local</label>
                <textarea 
                  required 
                  placeholder="Descreva a localização exata (Rua, bairro, pontos de referência...)" 
                  className={`${inputStyles} h-24 resize-none`} 
                  value={formData.exactAddress} 
                  onChange={e => setFormData({...formData, exactAddress: e.target.value})} 
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyles}>O que pretende fazer? / Suas perguntas</label>
                <textarea 
                  placeholder="Descreva o que deseja para o evento ou tire suas dúvidas sobre este pacote..." 
                  className={`${inputStyles} h-32 resize-none`} 
                  value={formData.notes} 
                  onChange={e => setFormData({...formData, notes: e.target.value})} 
                />
              </div>

              <div className="md:col-span-2">
                <label className={labelStyles}>Método de Pagamento Preferido</label>
                <select className={inputStyles} value={formData.paymentMethod} onChange={e => setFormData({...formData, paymentMethod: e.target.value})}>
                  <option>Transferência</option>
                  <option>Multicaixa Express</option>
                  <option>Depósito em Conta</option>
                  <option>Presencial na Sede</option>
                </select>
              </div>
            </div>

            <div className={`p-6 rounded-[2rem] border mb-8 transition-all duration-700 ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100 shadow-inner'}`}>
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gold/10">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Preço p/ Pessoa</span>
                <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.currency} {pkg.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Total Estimado</span>
                <span className="text-gold text-2xl font-black">
                  {pkg.currency} {formatCurrency(totalInvestment)}
                </span>
              </div>
            </div>

            <button type="submit" className="w-full bg-gold text-white py-6 rounded-2xl font-bold hover:bg-black hover:border-black transition-all shadow-xl active:scale-95 text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3">
              Confirmar & Falar no WhatsApp
            </button>
          </form>
        ) : (
          <div className="p-16 text-center">
            <div className="w-24 h-24 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-pulse">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className={`text-4xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Solicitação Enviada!</h2>
            <p className={`mb-10 text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Estamos prontos para atender você no WhatsApp.<br />
              Um consultor responderá em breve com a sua proposta personalizada.
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
