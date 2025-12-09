import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowUp, ArrowDown } from 'lucide-react';

export const TrafficChart: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-black text-white p-6 rounded-xl font-mono w-full max-w-lg shadow-2xl border border-gray-800 mt-8 relative overflow-hidden"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <h3 className="text-xl font-bold tracking-tight text-white">Relatório de Tráfego</h3>
        <div className="bg-gray-900 px-3 py-1 rounded text-xs text-gray-400 border border-gray-800">
          Últimos 7 Dias
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="relative h-56 mb-8 w-full">
        {/* Grid Lines */}
        <div className="absolute inset-0 flex justify-between px-8 z-0 opacity-20 pointer-events-none">
          <div className="w-[1px] h-full bg-gray-600 dashed" />
          <div className="w-[1px] h-full bg-gray-600" />
          <div className="w-[1px] h-full bg-gray-600" />
          <div className="w-[1px] h-full bg-gray-600" />
        </div>

        {/* SVG Funnel */}
        <svg className="absolute inset-0 w-full h-full z-10 drop-shadow-[0_0_15px_rgba(124,58,237,0.5)]" viewBox="0 0 500 220" preserveAspectRatio="none">
          <defs>
            <linearGradient id="funnelGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.9" />
              <stop offset="45%" stopColor="#7c3aed" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#c026d3" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,20 C150,20 180,60 250,90 C320,120 380,105 500,110 L500,115 C380,120 320,105 250,135 C180,165 150,200 0,200 Z"
            fill="url(#funnelGradient)"
            initial={{ d: "M0,110 C150,110 180,110 250,110 C320,110 380,110 500,110 L500,115 C380,115 320,115 250,115 C180,115 150,115 0,115 Z", opacity: 0 }}
            whileInView={{ 
              d: "M0,20 C150,20 180,60 250,90 C320,120 380,105 500,110 L500,115 C380,120 320,105 250,135 C180,165 150,200 0,200 Z",
              opacity: 1 
            }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          />
        </svg>

        {/* Data Labels */}
        <div className="absolute inset-0 flex justify-between items-center z-20 px-2 text-xs font-sans">
           <div className="flex flex-col items-start gap-1">
              <span className="font-bold text-lg md:text-xl">125k</span>
              <span className="text-gray-400 font-mono text-[10px] uppercase">Impressões</span>
           </div>
           <div className="flex flex-col items-start mt-16 gap-1">
              <span className="font-bold text-lg md:text-xl">45k</span>
              <span className="text-gray-400 font-mono text-[10px] uppercase">Cliques</span>
           </div>
           <div className="flex flex-col items-start mt-28 gap-1">
              <span className="font-bold text-lg md:text-xl">2.8k</span>
              <span className="text-gray-400 font-mono text-[10px] uppercase">Leads</span>
           </div>
           <div className="flex flex-col items-start mt-4 mr-2 gap-1 text-right">
              <span className="font-bold text-lg md:text-xl text-purple-300">850</span>
              <span className="text-gray-400 font-mono text-[10px] uppercase">Vendas</span>
           </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-8 mb-8 border-t border-gray-800 pt-6">
        <div>
           <div className="text-white text-sm font-bold mb-1">ROAS Médio</div>
           <div className="flex items-center gap-3">
             <span className="text-4xl font-bold tracking-tighter">12.5x</span>
             <span className="bg-[#3e1818] text-[#ff6b6b] text-xs px-2 py-1 rounded-full flex items-center gap-1 font-bold">
               <ArrowUp size={12} /> 12%
             </span>
           </div>
           <div className="text-gray-500 text-xs mt-2 font-mono">Comparado a 11.1x semana passada</div>
        </div>
        <div>
           <div className="text-white text-sm font-bold mb-1">Receita Gerada</div>
           <div className="flex items-center gap-3">
             <span className="text-4xl font-bold tracking-tighter">1.1M</span>
             <span className="bg-[#102a20] text-[#4ade80] text-xs px-2 py-1 rounded-full flex items-center gap-1 font-bold">
               <ArrowDown size={12} /> 4%
             </span>
           </div>
           <div className="text-gray-500 text-xs mt-2 font-mono">Comparado a 1.06M semana passada</div>
        </div>
      </div>

       {/* Footer Alert */}
       <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#ff6b6b]">
             <AlertTriangle size={16} />
             <span className="font-mono text-xs uppercase tracking-wider">Custo por Aquisição (CPA)</span>
          </div>
          <div className="flex items-center gap-3">
             <span className="font-bold text-xl">R$ 14,20</span>
             <span className="bg-[#3e1818] text-[#ff6b6b] text-xs px-2 py-1 rounded-full flex items-center gap-1 font-bold">
               <ArrowUp size={12} /> 12%
             </span>
          </div>
       </div>
    </motion.div>
  );
};