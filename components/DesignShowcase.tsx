import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Palette, Zap } from 'lucide-react';

export const DesignShowcase: React.FC = () => {
  const NEON_GREEN = "#39FF14";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[320px] lg:max-w-sm bg-white rounded-2xl overflow-hidden relative shadow-2xl border border-gray-100 font-sans"
    >
      {/* Background - White with subtle green accents */}
      <div className="absolute inset-0 bg-white" />
      <div 
        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-10"
        style={{ backgroundColor: NEON_GREEN }}
       />
      <div 
        className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-[80px] opacity-10"
        style={{ backgroundColor: NEON_GREEN }}
      />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
            backgroundImage: `linear-gradient(${NEON_GREEN} 1px, transparent 1px), linear-gradient(90deg, ${NEON_GREEN} 1px, transparent 1px)`, 
            backgroundSize: '30px 30px' 
        }}
      />

      <div className="relative z-10 p-6 flex flex-col h-full min-h-[300px]">
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <span 
            className="backdrop-blur-md border text-[10px] font-mono uppercase px-2 py-1 rounded-sm flex items-center gap-1"
            style={{ 
                backgroundColor: `rgba(57, 255, 20, 0.1)`, 
                borderColor: NEON_GREEN,
                color: '#16a34a' // Readable green
            }}
          >
            <Palette size={10} /> UI/UX
          </span>
          <span 
            className="backdrop-blur-md border text-[10px] font-mono uppercase px-2 py-1 rounded-sm flex items-center gap-1"
            style={{ 
                backgroundColor: `rgba(57, 255, 20, 0.1)`, 
                borderColor: NEON_GREEN,
                color: '#16a34a'
            }}
          >
            <Layers size={10} /> Sistema
          </span>
        </div>

        {/* Main Content */}
        <div className="mt-auto">
          <h3 className="text-3xl font-bold text-black leading-none mb-2 tracking-tight">
            DESIGN MEETS<br />
            <span style={{ color: NEON_GREEN }}>
              GROWTH
            </span>
          </h3>
          <p className="text-gray-500 text-xs font-mono mb-6 leading-relaxed">
            Sistemas visuais que convertem complexidade em clareza. 
            Estética não é ornamento. É função.
          </p>

          {/* Action Button */}
          <button className="w-full group bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300 rounded-xl p-3 flex items-center justify-between transition-all duration-300">
             <div className="flex items-center gap-3">
               <div 
                 className="w-8 h-8 rounded-full flex items-center justify-center"
                 style={{ backgroundColor: NEON_GREEN }}
               >
                 <Zap size={14} className="text-black fill-black" />
               </div>
               <div className="text-left">
                 <span className="block text-black group-hover:text-green-700 text-xs font-bold uppercase transition-colors">Ver Case</span>
                 <span className="block text-gray-400 text-[10px]">Projeto Recente</span>
               </div>
             </div>
             <ArrowRight size={16} className="text-black group-hover:text-green-600 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};