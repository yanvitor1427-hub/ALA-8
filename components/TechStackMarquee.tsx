import React from 'react';

const TECH_STACK = [
  "META ADS",
  "GOOGLE ADS",
  "TIKTOK ADS",
  "SEO / GOOGLE RANKING",
  "ADOBE PHOTOSHOP",
  "ADOBE PREMIERE",
  "AFTER EFFECTS",
  "CAPCUT PRO",
  "CHATGPT (OPENAI)",
  "GEMINI (GOOGLE)",
  "LOVABLE.DEV",
  "GOOGLE AI STUDIO"
];

export const TechStackMarquee: React.FC = () => {
  return (
    <div className="w-full bg-[#050505] border-t border-white/5 py-10 md:py-12 overflow-hidden relative flex z-20 select-none">
      
      {/* Gradient Fades (Left & Right) */}
      <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        {/* Renderizamos a lista 4 vezes para garantir um loop infinito suave em telas largas */}
        {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tool, index) => (
          <div key={index} className="flex items-center group cursor-crosshair">
            <span 
              className="text-4xl md:text-5xl font-anton text-[#222] px-4 md:px-6 transition-all duration-300 group-hover:text-white group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] whitespace-nowrap"
            >
              {tool}
            </span>
            <span className="text-[#333] text-xl md:text-2xl font-mono mx-2 md:mx-4 group-hover:text-white/50 transition-colors">
              ✦
            </span>
          </div>
        ))}
      </div>

      {/* Inline Styles for the Keyframes since we can't edit tailwind.config directly in this setup */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
};
