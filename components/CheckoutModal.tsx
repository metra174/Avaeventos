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
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  pkg, 
  isOpen, 
  onClose, 
  isDarkMode, 
  isLargeText, 
  selectedExtras = [] 
}) => {
  const [step, setStep] = useState(1);
  const [salaoSpec, setSalaoSpec] = useState<'base' | 'decor' | 'buffet' | 'completo'>('base');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '2026-06-21', 
    guests: 50,
    location: 'Luanda',
    exactAddress: '',
    notes: '',
    paymentMethod: 'Transferência'
  });

  const numericPrice = useMemo(() => {
    if (!pkg) return 0;
    if (pkg.id === 'salao') {
      if (salaoSpec === 'base') return 1200000;
      if (salaoSpec === 'decor') return 25000;
      if (salaoSpec === 'buffet') return 45000;
      if (salaoSpec === 'completo') return 65000;
    }
    // Verificação de segurança adicionada
    return pkg.price ? parseFloat(pkg.price.replace(/\./g, '').replace(',', '.')) : 0;
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
      if (salaoSpec === 'base') salaoSpecName = ' Base (Apenas Aluguer)';
      else if (salaoSpec === 'decor') salaoSpecName = ' com Decoração';
      else if (salaoSpec === 'buffet') salaoSpecName = ' com Decoração & Buffet';
      else if (salaoSpec === 'completo') salaoSpecName = ' Completo';
    }

    const text = `Olá Avaeventos! Gostaria de solicitar uma reserva:

💎 *Plano:* ${pkg.name}${salaoSpecName}
👤 *Cliente:* ${formData.name}
📱 *WhatsApp:* ${formData.phone}
📍 *Província:* ${formData.location}
🏠 *Endereço Exato:* ${formData.exactAddress}
👥 *Convidados:* ${formData.guests}
📅 *Data:* ${formData.date}
💳 *Pagamento:* ${formData.paymentMethod}${extrasText}

📝 *Desejos:* ${formData.notes || 'Sem observações.'}

💰 *Investimento Estimado:* ${pkg.currency} ${formatCurrency(totalInvestment)}`;

    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, '_blank');
    
    setStep(2);
  };

  const inputStyles = `w-full px-4 py-4 border rounded-2xl outline-none text-base transition-all duration-500 ${
    isDarkMode 
      ? 'bg-white/5 border-white/10 text-white focus:border-gold focus:bg-white/10' 
      : 'bg-gray-50 border-gray-100 text-gray-900 focus:border-gold focus:bg-white shadow-sm'
  }`;

  const labelStyles = `block text-[10px] font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-2xl md:rounded-[2.5rem] shadow-2xl overflow-hidden animate-reveal border-t-8 border-gold h-full md:h-auto md:max-h-[90vh] overflow-y-auto ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 z-10 text-gray-400 hover:text-gold p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-6 md:p-12 pt-16">
            <h2 className={`text-2xl md:text-4xl font-serif font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
              <div className="md:col-span-2">
                <label className={labelStyles}>Nome Completo</label>
                <input required type="text" className={inputStyles} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              
              {pkg.id === 'salao' && (
                <div className="md:col-span-2 border border-gold/20 p-5 rounded-[2rem]">
                  <label className="block text-[10px] font-bold text-gold mb-3">TIPO DE SERVIÇO</label>
                  <div className="grid grid-cols-2 gap-3">
                    {['base', 'decor', 'buffet', 'completo'].map((s) => (
                      <button key={s} type="button" onClick={() => setSalaoSpec(s as any)} className={`p-3 rounded-lg border ${salaoSpec === s ? 'border-gold bg-gold text-white' : 'border-gray-200'}`}>
                        {s.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              <div>
                <label className={labelStyles}>WhatsApp</label>
                <input required type="tel" className={inputStyles} value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div>
                <label className={labelStyles}>Nº de Convidados</label>
                <input required type="number" className={inputStyles} value={formData.guests} onChange={e => setFormData({...formData, guests: parseInt(e.target.value) || 0})} />
              </div>
            </div>

            <button type="submit" className="w-full bg-gold text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em]">
              Confirmar no WhatsApp
            </button>
          </form>
        ) : (
          <div className="p-16 text-center">
            <h2 className="text-3xl font-bold mb-4">Solicitação Enviada!</h2>
            <button onClick={onClose} className="text-gold font-bold underline">Voltar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
