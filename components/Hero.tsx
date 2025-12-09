import React from 'react';
import { motion, Variants, useMotionValue, useSpring, useTransform } from 'framer-motion';

const title = "ALA 8";

// Variantes de animação para o título principal (Letra por letra)
const letterContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const letterVariant: Variants = {
  hidden: { y: 100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.2, duration: 0.8 },
  },
};

const subTextVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const Hero: React.FC = () => {
  // Motion values para rastrear a posição do mouse (normalizado de -0.5 a 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Configuração da física do movimento (suave e pesado)
  const springConfig = { damping: 25, stiffness: 100, mass: 0.5 };

  // Transformações para o Título (Move-se levemente contra o mouse para profundidade)
  const titleX = useSpring(useTransform(x, [-0.5, 0.5], [-20, 20]), springConfig);
  const titleY = useSpring(useTransform(y, [-0.5, 0.5], [-20, 20]), springConfig);
  
  // Rotação sutil (Tilt) baseada na posição do mouse
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), springConfig);

  // Transformações para o Background (Move-se menos para criar paralaxe)
  const bgX = useSpring(useTransform(x, [-0.5, 0.5], [10, -10]), springConfig);
  const bgY = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-screen min-h-[600px] w-full flex flex-col justify-center items-center overflow-hidden bg-[#050505] perspective-1000"
      style={{ perspective: "1000px" }}
    >
      {/* --- BACKGROUND TECH LAYERS --- */}
      <motion.div 
        style={{ x: bgX, y: bgY }}
        className="absolute inset-[-50px] z-0 opacity-[0.15] pointer-events-none"
      >
        <div 
          className="w-full h-full"
          style={{ 
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }}
        ></div>
      </motion.div>
      
      {/* Vinheta Estática */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#050505]/60 to-[#050505] pointer-events-none"></div>

      {/* --- INFO CORNERS (Responsivo: Ajustado padding e tamanho de fonte) --- */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 flex flex-col font-mono text-[9px] md:text-xs text-gray-400 tracking-widest z-10 uppercase pointer-events-none">
        <span className="opacity-70">ALA 8 / BUREAU CRIATIVO</span>
        <span className="opacity-50">LAT: -25.4087 / LON: -49.2550</span>
      </div>

      <div className="absolute top-4 right-4 md:top-8 md:right-8 flex flex-col text-right font-mono text-[9px] md:text-xs text-gray-400 tracking-widest z-10 uppercase pointer-events-none">
        <span className="opacity-70">CURITIBA, PR</span>
        <span className="opacity-50">CABRAL / 80035-050</span>
      </div>

      {/* --- MAIN CONTENT (Com efeito de intenção/tilt) --- */}
      <motion.div
        style={{ 
          x: titleX, 
          y: titleY, 
          rotateX: rotateX, 
          rotateY: rotateY,
        }}
        className="z-10 flex flex-col items-center justify-center relative cursor-default"
      >
        {/* Main Title Animation */}
        <motion.div
          variants={letterContainer}
          initial="hidden"
          animate="show"
          className="flex text-[22vw] md:text-[18vw] lg:text-[16vw] font-bold leading-none tracking-tighter text-white select-none mix-blend-difference"
        >
          {Array.from(title).map((letter, i) => (
            <motion.span 
              key={i} 
              variants={letterVariant}
              className="hover:text-gray-200 transition-colors duration-300"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Sub-headline Copy */}
        <motion.p
          variants={subTextVariant}
          initial="hidden"
          animate="show"
          className="text-center text-gray-400 mt-4 md:mt-8 font-sans text-xs md:text-base lg:text-lg max-w-[85%] md:max-w-lg leading-relaxed tracking-wide pointer-events-none"
        >
          Posicionamento digital acelerado por Inteligência Artificial.
          <br className="hidden sm:block" /> Estratégia premium para marcas que não podem esperar.
        </motion.p>
      </motion.div>
      
      {/* Scroll Indicator (Opcional, ajuda na UX) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
      </motion.div>

    </section>
  );
};
