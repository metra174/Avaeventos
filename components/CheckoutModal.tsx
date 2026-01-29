
import React, { useState, useMemo } from 'react';
import { Package } from '../types';

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
    paymentMethod: 'Transferência'
  });

  // Helper to parse price string like "18.000,00" to number 18000
  const numericPrice = useMemo(() => {
    if (!pkg) return 0;
    return parseFloat(pkg.price.replace(/\./g, '').replace(',', '.'));
  }, [pkg]);

  // Calculate total investment
  const totalInvestment = useMemo(() => {
    return numericPrice * formData.guests;
  }, [numericPrice, formData.guests]);

  // Format number to currency string
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-AO', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };

  if (!isOpen || !pkg) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const inputStyles = `w-full px-4 py-4 border rounded-2xl outline-none text-sm transition-all duration-500 ${
    isDarkMode 
      ? 'bg-white/5 border-white/10 text-white focus:border-gold focus:bg-white/10' 
      : 'bg-gray-50 border-gray-100 text-gray-900 focus:border-gold focus:bg-white'
  }`;

  const labelStyles = `block text-[10px] font-bold uppercase tracking-widest mb-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose}></div>
      
      <div className={`relative w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden animate-reveal border-t-8 border-gold transition-colors duration-1000 ${isDarkMode ? 'bg-[#121212]' : 'bg-white'}`}>
        <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gold transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="p-8 md:p-12">
            <div className="mb-8">
              <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.name}</h2>
              <p className="text-gold font-medium text-xs uppercase tracking-widest">Calculadora de Investimento em Tempo Real</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="col-span-2">
                <label className={labelStyles}>Nome Completo</label>
                <input required type="text" placeholder="Ex: Ana Silva" className={inputStyles} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              
              <div className="col-span-2 sm:col-span-1">
                <label className={labelStyles}>WhatsApp</label>
                <input required type="tel" className={inputStyles} placeholder="+244" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className={labelStyles}>Nº de Convidados</label>
                <div className="relative">
                  <input 
                    required 
                    type="number" 
                    min="1"
                    className={`${inputStyles} pr-12`} 
                    value={formData.guests} 
                    onChange={e => setFormData({...formData, guests: parseInt(e.target.value) || 0})} 
                  />
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gold pointer-events-none">PESSOAS</div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className={labelStyles}>Data do Evento</label>
                <input required type="date" className={inputStyles} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
              </div>

              <div className="col-span-2 sm:col-span-1">
                <label className={labelStyles}>Método de Pagamento</label>
                <select className={inputStyles} value={formData.paymentMethod} onChange={e => setFormData({...formData, paymentMethod: e.target.value})}>
                  <option>Transferência</option>
                  <option>Multicaixa</option>
                  <option>Na Sede (Reserva)</option>
                </select>
              </div>
            </div>

            {/* Dynamic Calculator Summary */}
            <div className={`p-6 rounded-[2rem] border mb-8 transition-all duration-700 ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100 shadow-inner'}`}>
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-gold/10">
                <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Investimento p/ Pessoa</span>
                <span className={`text-sm font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.currency} {pkg.price}</span>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Investimento Total</span>
                  <span className="text-[9px] text-gold font-medium mt-1">Estimativa baseada em {formData.guests} convidados</span>
                </div>
                <div className="text-right">
                  <span className="text-gold text-2xl md:text-3xl font-black tracking-tighter transition-all duration-300 transform scale-110">
                    {pkg.currency} {formatCurrency(totalInvestment)}
                  </span>
                </div>
              </div>
            </div>

            <button type="submit" className="w-full bg-gold text-white py-6 rounded-2xl font-bold hover:bg-white hover:text-gold border-2 border-gold transition-all shadow-[0_20px_40px_rgba(197,160,89,0.3)] active:scale-95 text-[11px] uppercase tracking-[0.2em]">
              Confirmar Reserva Agora
            </button>
          </form>
        ) : (
          <div className="p-16 text-center">
            <div className="w-24 h-24 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner animate-pulse">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className={`text-4xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pedido Recebido!</h2>
            <p className={`mb-10 text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              A sua solicitação para o <span className="text-gold font-bold">{pkg.name}</span> foi processada.<br />
              Um consultor entrará em contacto para o número <span className="font-bold text-white">{formData.phone}</span> para formalizar o contrato de <span className="text-gold">{pkg.currency} {formatCurrency(totalInvestment)}</span>.
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
