import React, { useState, useEffect } from 'react';

interface WelcomeSplashProps {
  onEnter: () => vazio;
  isDarkMode: booleano;
}

const WelcomeSplash: React.FC<WelcomeSplashProps> = ({ onEnter, isDarkMode }) => {
  const [montado, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Acionar entrada animada
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 100);

    // Acionar automaticamente a sequência de saída após 4100ms para que toda a experiência dure exatamente 5000ms (5 segundos)
    const autoExitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 4100);

    const completionTimer = setTimeout(() => {
      onEnter();
    }, 5000);

    retornar () => {
      clearTimeout(mountTimer);
      clearTimeout(autoExitTimer);
      clearTimeout(completionTimer);
    };
  }, [onEnter]);

  const handleEnterClick = () => {
    setIsExiting(true);
    setTimeout(() => {
      onEnter();
    }, 900); // duração da transição correspondente
  };

  retornar (
    <div
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden transition-all duration-[900ms] cubic-bezier(0.16, 1, 0.3, 1) ${
        está saindo
          ? 'opacidade-0 escala-105 eventos-ponteiro-nenhum'
          : 'opacidade-100 escala-100'
      } bg-[#080808]`}
    >
      {/* Elementos de fundo de design absolutamente luxuosos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)] opacity-80 animate-pulse" style={{ animationDuration: '6s' }}></div>
        {/* Brilhos/Partículas Flutuantes Luxuosas e Sutis */}
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-gold/50 rounded-full blur-[1px] animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-[25%] left-[25%] w-2 h-2 bg-gold/30 rounded-full blur-[1px] animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 bg-gold/40 rounded-full blur-[1px] animate-float" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute bottom-[15%] right-[15%] w-2.5 h-2.5 bg-gold/20 rounded-full blur-[2px] animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg flex flex-col items-center">
        {/* Símbolo do logotipo do brasão da marca animado */}
        <div
          className={`mb-8 w-24 h-24 rounded-full border border-gold/40 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-[1200ms] delay-300 transform shadow-[0_0_50px_rgba(212,175,55,0.1)] ${
            montado ? 'escala-100 opacidade-100 rotação-0' : 'escala-75 opacidade-0 rotação-12'
          }`}
        >
          <span className="font-serif text-gold text-4xl font-extrabold tracking-widest pl-1 leading-none select-none">
            UM
          </span>
        </div>

        {/* Saudação Dinâmica */}
        <div
          className={`space-y-4 transition-all duration-[1200ms] delay-[500ms] transform ${
            montado ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs md:text-sm block">
            Seja muito bem-vindo à
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-[0.15em] text-white font-serif leading-none select-none">
            AVAEVENTOS
          </h1>
          
          {/* Linha de progresso/cronômetro em vez de linha central estática */}
          <div className="relative h-[2px] w-32 bg-white/10 mx-auto my-6 overflow-hidden rounded-full">
            <div
              className={`absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 via-gold to-amber-500 transition-all ease-linear ${
                montado? 'w-full' : 'w-0'
              }`}
              estilo={{ transitionDuration: '4100ms' }}
            ></div>
          </div>

          <p className="text-gray-400 font-light text-sm md:text-base max-w-sm line-clamp-2 md:line-clamp-none italic leading-relaxed">
            "A arte de conceber casamentos extraordinários, banquetes premium e eventos de puro luxo em Angola."
          </p>
        </div>

        {/* Botão de entrada de luxo interativo com dica de tempo limite dinâmico */}
        <div
          className={`mt-12 transition-all duration-[1200ms] delay-[700ms] transform ${
            montado ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <botão
            onClick={handleEnterClick}
            className="group relative inline-flex items-center gap-3 px-12 py-5 overflow-hidden rounded-full font-bold uppercase text-[11px] tracking-[0.25em] text-white bg-transparent border border-gold/40 transition-all duration-500 hover:border-white shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:shadow-[0_0_40px_rgba(212,175,55,0.3)] active:scale-95 cursor-pointer"
          >
            {/* Efeito de derramamento ao passar o mouse sobre o fundo */}
            <span className="absolute inset-0 bg-gradient-to-r from-gold via-amber-500 to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></span>
            
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black font-bold">
              Entrar Agora
            </span>
            <svg
              className="w-4 h-4 text-gold group-hover:text-black transition-all duration-500 transform group-hover:translate-x-1.5"
              preencher="nenhum"
              traço="corAtual"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Detalhes decorativos de impressão fina nas bordas */}
      <div
        className={`absolute bottom-8 text-center transition-all duration-[1200ms] delay-[900ms] z-10 ${
          montado ? 'opacidade-40' : 'opacidade-0'
        }`}
      >
        <span className="text-[9px] text-gray-400 tracking-[0.3em] uppercase block">
          Luanda • Curadoria Exclusiva
        </span>
      </div>
    </div>
  );
};

export default WelcomeSplash;
