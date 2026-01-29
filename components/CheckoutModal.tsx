
import React, { useState } from 'react';
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
    guests: '50',
    paymentMethod: 'Transferência'
  });

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
          <form onSubmit={handleSubmit} className="p-10 md:p-12">
            <h2 className={`text-3xl md:text-4xl font-serif font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Solicitar {pkg.name}</h2>
            <p className="text-gray-500 mb-10 text-sm font-light">Os preços são calculados <span className="font-bold text-gold">por pessoa</span>. Nossa equipe retornará seu contato via WhatsApp.</p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="col-span-2">
                <label className={labelStyles}>Nome Completo</label>
                <input required type="text" className={inputStyles} value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
              </div>
              
              <div>
                <label className={labelStyles}>WhatsApp</label>
                <input required type="tel" className={inputStyles} placeholder="+244" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div>
                <label className={labelStyles}>Nº de Convidados</label>
                <input required type="number" className={inputStyles} value={formData.guests} onChange={e => setFormData({...formData, guests: e.target.value})} />
              </div>

              <div>
                <label className={labelStyles}>Data do Evento</label>
                <input required type="date" className={inputStyles} value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} />
              </div>

              <div>
                <label className={labelStyles}>Pagamento</label>
                <select className={inputStyles} value={formData.paymentMethod} onChange={e => setFormData({...formData, paymentMethod: e.target.value})}>
                  <option>Transferência</option>
                  <option>Multicaixa</option>
                  <option>Na Sede</option>
                </select>
              </div>
            </div>

            <div className={`p-8 rounded-[2rem] border flex flex-col md:flex-row justify-between items-center gap-6 transition-colors duration-1000 ${isDarkMode ? 'bg-white/5 border-white/5' : 'bg-gray-50 border-gray-100'}`}>
              <div className="text-center md:text-left">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-1">Total por Pessoa</p>
                <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{pkg.currency} {pkg.price}</p>
              </div>
              <button type="submit" className="w-full md:w-auto bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-gold transition-all shadow-xl active:scale-95 text-xs uppercase tracking-widest">
                Confirmar Pedido
              </button>
            </div>
          </form>
        ) : (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-gold/10 text-gold rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className={`text-4xl font-serif font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Pedido Enviado</h2>
            <p className={`mb-10 text-lg font-light leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Recebemos sua solicitação para o <span className="text-gold font-bold">{pkg.name}</span>.<br />
              Entraremos em contacto para o número {formData.phone} em breve.
            </p>
            <button onClick={onClose} className="w-full bg-gold text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-gray-900 transition-all duration-700">
              Concluir
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutModal;
