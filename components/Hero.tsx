import React from 'react';
import { motion, Variants } from 'framer-motion';

const title = "ALA 8";

const letterContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const letterVariant: Variants = {
  hidden: { y: 100, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", bounce: 0.2 } }
};

export const Hero: React.FC = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden bg-white">
      <div className="absolute top-8 left-8 flex flex-col font-mono text-xs text-technical tracking-widest">
        <span>ALA 8 / BUREAU CRIATIVO</span>
        <span>LAT: -25.4087 / LON: -49.2550</span>
      </div>

      <div className="absolute top-8 right-8 flex flex-col text-right font-mono text-xs text-technical tracking-widest">
        <span>CURITIBA, PR</span>
        <span>CABRAL / 80035-050</span>
      </div>

      <motion.div
        variants={letterContainer}
        initial="hidden"
        animate="show"
        className="flex overflow-hidden relative z-10 select-none cursor-default"
      >
        {title.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={letterVariant}
            whileHover={{ y: -40, transition: { type: 'spring', stiffness: 300 } }}
            className="text-[19vw] font-black leading-none tracking-tighter text-black hover:text-gray-900 transition-colors"
          >
            <motion.span
              className="inline-block"
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.15,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          </motion.span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-32 font-mono text-sm uppercase tracking-[0.5em] text-black"
      >
        Full Stack Creative
      </motion.div>
    </section>
  );
};
