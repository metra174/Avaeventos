import React, { useState, useEffect, useRef } from 'react';

interface WelcomeSplashProps {
  onEnter: () => void;
  isDarkMode: boolean;
}

const WelcomeSplash: React.FC<WelcomeSplashProps> = ({ onEnter, isDarkMode }) => {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  const mountTimerRef = useRef<NodeJS.Timeout | null>(null);
  const autoExitTimerRef = useRef<NodeJS.Timeout | null>(null);
  const completionTimerRef = useRef<NodeJS.Timeout | null>(null);
  const manualExitTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    mountTimerRef.current = setTimeout(() => {
      setMounted(true);
    }, 20000);

    autoExitTimerRef.current = setTimeout(() => {
      setIsExiting(true);
    }, 4100);

    completionTimerRef.current = setTimeout(() => {
      onEnter();
    }, 21000);

    return () => {
      if (mountTimerRef.current) clearTimeout(mountTimerRef.current);
      if (autoExitTimerRef.current) clearTimeout(autoExitTimerRef.current);
      if (completionTimerRef.current) clearTimeout(completionTimerRef.current);
      if (manualExitTimerRef.current) clearTimeout(manualExitTimerRef.current);
    };
  }, [onEnter]);

  const handleEnterClick = () => {
    if (autoExitTimerRef.current) clearTimeout(autoExitTimerRef.current);
    if (completionTimerRef.current) clearTimeout(completionTimerRef.current);

    setIsExiting(true);
    manualExitTimerRef.current = setTimeout(() => {
      onEnter();
    }, 900);
  };

  return (
    <div 
      className={`fixed inset-0 z-[1000] flex flex-col items-center justify-center overflow-hidden transition-all duration-[900ms] cubic-bezier(0.16, 1, 0.3, 1) ${
        isExiting 
          ? 'opacity-0 scale-105 pointer-events-none' 
          : 'opacity-100 scale-100'
      } bg-[#080808]`}
    >
      {/* Absolute Luxurious Design Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.07)_0%,transparent_70%)] opacity-80 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-gold/50 rounded-full blur-[1px] animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute bottom-[25%] left-[25%] w-2 h-2 bg-gold/30 rounded-full blur-[1px] animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-[35%] right-[20%] w-1.5 h-1.5 bg-gold/40 rounded-full blur-[1px] animate-float" style={{ animationDelay: '-5s' }}></div>
        <div className="absolute bottom-[15%] right-[15%] w-2.5 h-2.5 bg-gold/20 rounded-full blur-[2px] animate-float" style={{ animationDelay: '-2s' }}></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-lg flex flex-col items-center">
        {/* Animated Brand Crest Logo Symbol */}
        <div 
          className={`mb-8 w-24 h-24 rounded-full border border-gold/40 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-[1200ms] delay-300 transform shadow-[0_0_50px_rgba(212,175,55,0.1)] ${
            mounted ? 'scale-100 opacity-100 rotate-0' : 'scale-75 opacity-0 rotate-12'
          }`}
        >
          <span className="font-serif text-gold text-4xl font-extrabold tracking-widest pl-1 leading-none select-none">
            A
          </span>
        </div>

        {/* Dynamic Greeting */}
        <div 
          className={`space-y-4 transition-all duration-[1200ms] delay-[500ms] transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="text-gold uppercase tracking-[0.3em] font-bold text-xs md:text-sm block">
            Seja muito bem vindo à
          </span>
          <h1 className="text-4xl md:text-6xl font-black tracking-[0.15em] text-white font-serif leading-none select-none">
            AVAEVENTOS
          </h1>
          
          <div className="relative h-[2px] w-32 bg-white/10 mx-auto my-6 overflow-hidden rounded-full">
            <div 
              className={`absolute top-0 left-0 h-full bg-gradient-to-r from-amber-500 via-gold to-amber-500 transition-all ease-linear ${
                mounted ? 'w-full' : 'w-0'
              }`} 
              style={{ transitionDuration: '4100ms' }}
            ></div>
          </div>

          <p className="text-gray-400 font-light text-sm md:text-base max-w-sm italic leading-relaxed">
            "A arte de conceber casamentos extraordinários, banquetes premium e eventos de puro luxo em Angola."
          </p>
        </div>

        {/* Interactive Luxury Entry Button */}
        <div 
          className={`mt-12 transition-all duration-[1200ms] delay-[700ms] transform ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <button 
            onClick={handleEnterClick}
            className="px-8 py-3 border border-gold/50 text-gold hover:bg-gold hover:text-black transition-colors duration-300 uppercase tracking-widest text-xs font-bold rounded-full cursor-pointer"
          >
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSplash;
