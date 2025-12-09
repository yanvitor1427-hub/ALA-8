import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Layers, Palette, Zap } from 'lucide-react';

export const DesignShowcase: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-[320px] lg:max-w-sm bg-black rounded-2xl overflow-hidden relative shadow-2xl border border-gray-800 font-sans"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black opacity-80" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-40" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-600 rounded-full blur-[80px] opacity-40" />

      <div className="relative z-10 p-6 flex flex-col h-full min-h-[300px]">
        {/* Header Tags */}
        <div className="flex gap-2 mb-6">
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase px-2 py-1 rounded-full flex items-center gap-1">
            <Palette size={10} /> UI/UX
          </span>
          <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono uppercase px-2 py-1 rounded-full flex items-center gap-1">
            <Layers size={10} /> Sistema
          </span>
        </div>

        {/* Main Content */}
        <div className="mt-auto">
          <h3 className="text-3xl font-bold text-white leading-none mb-2 tracking-tight">
            DESIGN MEETS<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              INNOVATION
            </span>
          </h3>
          <p className="text-gray-400 text-xs font-mono mb-6 leading-relaxed">
            Sistemas visuais que convertem complexidade em clareza. 
            Estética não é ornamento. É função.
          </p>

          {/* Action Button */}
          <button className="w-full group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between transition-all duration-300">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
                 <Zap size={14} className="text-white fill-white" />
               </div>
               <div className="text-left">
                 <span className="block text-white text-xs font-bold uppercase">Ver Case</span>
                 <span className="block text-gray-500 text-[10px]">Projeto Recente</span>
               </div>
             </div>
             <ArrowRight size={16} className="text-white opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};
