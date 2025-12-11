import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, BarChart3, ArrowUp, Monitor } from 'lucide-react';

export const TrafficChart: React.FC = () => {
  const NEON_GREEN = "#39FF14";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white text-black p-6 rounded-xl font-mono w-full max-w-lg shadow-2xl border border-gray-100 mt-8 relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{ 
            backgroundImage: `linear-gradient(${NEON_GREEN} 1px, transparent 1px), linear-gradient(90deg, ${NEON_GREEN} 1px, transparent 1px)`, 
            backgroundSize: '20px 20px' 
        }}
      />

      {/* Header */}
      <div className="flex justify-between items-center mb-12 relative z-10">
        <div className="flex items-center gap-2">
            <BarChart3 style={{ color: NEON_GREEN }} size={20} />
            <h3 className="text-xl font-bold tracking-tight text-black">Profit Scale</h3>
        </div>
        <div 
          className="px-3 py-1 rounded text-xs font-bold uppercase border flex items-center gap-2"
          style={{ 
            backgroundColor: `rgba(57, 255, 20, 0.05)`, 
            color: '#16a34a', 
            borderColor: NEON_GREEN 
          }}
        >
          <TrendingUp size={12} />
          Alta Performance
        </div>
      </div>

      {/* Main Illustration Area - 3D Composition */}
      <div className="relative h-64 w-full flex items-center justify-center z-10 pb-8">
        
        {/* Monitor Frame (Backplate) */}
        <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute w-64 h-48 bg-gray-50 border-4 border-gray-100 rounded-2xl flex flex-col items-center justify-center shadow-inner overflow-hidden"
        >
             {/* Screen Content Placeholder */}
             <div className="w-full h-8 bg-gray-100 border-b border-gray-200 mb-auto flex items-center px-4 gap-2">
                 <div className="w-2 h-2 rounded-full bg-gray-300" />
                 <div className="w-2 h-2 rounded-full bg-gray-300" />
             </div>
             <div className="w-full flex-1 bg-white opacity-50 relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-gray-50" />
             </div>
        </motion.div>

        {/* 3D Bars */}
        <div className="relative z-20 flex items-end gap-3 translate-y-4">
            {/* Bar 1 */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 80 }}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="w-14 rounded-t-lg shadow-lg border border-green-400 relative overflow-hidden group"
                style={{ backgroundColor: NEON_GREEN }}
            >
                <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12 translate-x-4" />
            </motion.div>
             {/* Bar 2 */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 120 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                className="w-14 rounded-t-lg shadow-lg border border-green-400 relative overflow-hidden"
                style={{ backgroundColor: NEON_GREEN }}
            >
                 <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12 translate-x-4" />
            </motion.div>
             {/* Bar 3 */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: 160 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
                className="w-14 rounded-t-lg shadow-lg border border-green-400 relative overflow-hidden"
                style={{ backgroundColor: NEON_GREEN }}
            >
                 <div className="absolute inset-0 bg-white opacity-20 transform -skew-x-12 translate-x-4" />
            </motion.div>
        </div>

        {/* Floating Coin */}
        <motion.div
            initial={{ y: -100, opacity: 0, rotateY: 180 }}
            whileInView={{ y: -80, opacity: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="absolute z-30 left-12 top-0"
        >
             <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 border-4 border-yellow-200 shadow-2xl flex items-center justify-center relative">
                 <div className="absolute inset-0 rounded-full border border-yellow-600 opacity-20" />
                 <DollarSign className="text-yellow-800 w-10 h-10 drop-shadow-sm" strokeWidth={3} />
             </div>
        </motion.div>

        {/* Floating Arrow */}
        <motion.div
            initial={{ opacity: 0, scale: 0, x: -20, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: -90 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="absolute z-30 right-10 top-10"
        >
             <div 
                className="p-3 rounded-full shadow-lg border-2 border-green-200 backdrop-blur-sm"
                style={{ backgroundColor: `${NEON_GREEN}33` }} 
             >
                <ArrowUp className="w-8 h-8" style={{ color: '#15803d' }} strokeWidth={4} />
             </div>
        </motion.div>

      </div>

      {/* Footer Specs */}
      <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6 relative z-10">
        <div>
           <div className="text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider">Investimento</div>
           <div className="flex items-center gap-2">
             <span className="text-2xl font-bold text-black font-sans tracking-tight">R$ 14.5k</span>
           </div>
        </div>
        <div>
           <div className="text-gray-400 text-[10px] font-bold mb-1 uppercase tracking-wider">Retorno</div>
           <div className="flex items-center gap-2">
             <span className="text-2xl font-bold text-black font-sans tracking-tight">R$ 92.3k</span>
             <div className="bg-green-100 text-green-700 text-[10px] px-1.5 py-0.5 rounded border border-green-200 font-bold">
               +536%
             </div>
           </div>
        </div>
      </div>

    </motion.div>
  );
};