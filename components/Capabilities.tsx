import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

// --- VISUALIZATIONS (CSS/SVG UI ELEMENTS) ---

const TrafficDashboard = () => {
  return (
    <div className="w-[90%] md:w-[80%] aspect-[16/10] bg-[#111] rounded-xl border border-[#333] shadow-2xl flex flex-col overflow-hidden relative group">
      {/* Dashboard Header */}
      <div className="h-8 border-b border-[#222] bg-[#151515] flex items-center px-4 justify-between">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#333]" />
        </div>
        <div className="text-[10px] font-mono text-gray-500 uppercase">Analytics_View_01</div>
      </div>
      
      {/* Chart Area */}
      <div className="flex-1 relative p-6 flex items-end">
        {/* Grid Lines */}
        <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-10 pointer-events-none">
          <div className="w-full h-[1px] bg-white" />
          <div className="w-full h-[1px] bg-white" />
          <div className="w-full h-[1px] bg-white" />
          <div className="w-full h-[1px] bg-white" />
          <div className="w-full h-[1px] bg-white" />
        </div>

        {/* Floating Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute top-1/3 right-1/4 bg-[#39FF14]/10 border border-[#39FF14]/30 backdrop-blur-md px-3 py-1.5 rounded text-[#39FF14] text-xs font-mono font-bold flex items-center gap-1 z-20 shadow-[0_0_15px_rgba(57,255,20,0.1)]"
        >
          ▲ +245% ROI
        </motion.div>

        {/* Line Chart (SVG) */}
        <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 100 50" preserveAspectRatio="none">
          <defs>
            <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#39FF14" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#39FF14" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,50 L0,45 C10,45 15,35 25,35 C35,35 40,40 50,30 C60,20 65,25 75,15 C85,5 90,10 100,2"
            fill="url(#gradient)"
            stroke="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d="M0,45 C10,45 15,35 25,35 C35,35 40,40 50,30 C60,20 65,25 75,15 C85,5 90,10 100,2"
            fill="none"
            stroke="#39FF14"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </div>
  );
};

const VideoTimeline = () => {
  return (
    <div className="w-[90%] md:w-[80%] aspect-[16/10] bg-[#111] rounded-xl border border-[#333] shadow-2xl flex flex-col overflow-hidden relative">
      {/* Editor Header */}
      <div className="h-8 border-b border-[#222] bg-[#151515] flex items-center px-4 justify-between">
        <span className="text-[10px] text-gray-400 font-mono">SEQ_FINAL_CUT_V3</span>
        <div className="text-[#39FF14] text-[10px] font-mono">00:00:14:22</div>
      </div>

      {/* Timeline Tracks */}
      <div className="flex-1 bg-[#0a0a0a] p-3 flex flex-col justify-center gap-3 relative">
        {/* Playhead (Needle) */}
        <motion.div 
          className="absolute top-0 bottom-0 w-[1px] bg-red-500 z-30 shadow-[0_0_10px_rgba(239,68,68,0.5)]"
          initial={{ left: "10%" }}
          animate={{ left: "90%" }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-2.5 h-2.5 bg-red-500 -ml-[4px] absolute top-0 transform rotate-45" />
        </motion.div>

        {/* Video Track 1 (Purple) */}
        <div className="h-10 bg-[#1a1a1a] rounded w-full relative overflow-hidden border border-white/5">
          <motion.div 
            className="absolute top-1 bottom-1 left-[10%] w-[40%] bg-purple-600/80 rounded border border-purple-400/50"
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          />
          <motion.div 
             className="absolute top-1 bottom-1 left-[55%] w-[30%] bg-purple-600/80 rounded border border-purple-400/50"
             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          />
        </div>

        {/* Video Track 2 (Blue) */}
        <div className="h-10 bg-[#1a1a1a] rounded w-full relative overflow-hidden border border-white/5">
           <motion.div 
             className="absolute top-1 bottom-1 left-[5%] w-[25%] bg-blue-500/80 rounded border border-blue-400/50"
             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
           />
           <motion.div 
             className="absolute top-1 bottom-1 left-[35%] w-[60%] bg-blue-500/80 rounded border border-blue-400/50"
             initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
           />
        </div>

        {/* Audio Track (Orange) */}
        <div className="h-8 bg-[#1a1a1a] rounded w-full relative overflow-hidden border border-white/5 mt-2">
           <div className="absolute inset-0 flex items-center justify-around opacity-20">
               {[...Array(20)].map((_,i) => <div key={i} className="w-[2px] h-[60%] bg-white" style={{ height: `${Math.random() * 80 + 20}%`}} />)}
           </div>
           <motion.div 
             className="absolute top-1 bottom-1 left-[15%] right-[10%] bg-orange-500/40 rounded border border-orange-400/30"
             initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.6 }}
           />
        </div>
      </div>
    </div>
  );
};

const DesignInterface = () => {
    return (
      <div className="w-[90%] md:w-[80%] aspect-[16/10] bg-[#e5e5e5] rounded-xl border border-gray-300 shadow-2xl flex flex-col overflow-hidden relative">
        <div className="h-6 bg-white border-b border-gray-300 flex items-center px-3 space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-400" />
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
            <div className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 p-6 relative flex items-center justify-center">
             {/* Abstract Layout */}
             <div className="w-full max-w-[200px] aspect-square grid grid-cols-2 gap-2 transform -rotate-6">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black rounded-lg col-span-2 h-16 shadow-lg" 
                 />
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-400 rounded-lg h-24" 
                 />
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="border-2 border-black rounded-lg h-24 relative" 
                 >
                    <div className="absolute -bottom-2 -right-2 bg-[#39FF14] text-black text-[10px] font-bold px-1">HEX</div>
                 </motion.div>
             </div>
             
             {/* Cursor */}
             <motion.div
                initial={{ x: 100, y: 100, opacity: 0 }}
                animate={{ x: 0, y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="absolute"
             >
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="black" stroke="white" strokeWidth="2"/>
                 </svg>
             </motion.div>
        </div>
      </div>
    );
};

const SystemStack = () => {
    return (
        <div className="w-[90%] md:w-[80%] aspect-[16/10] bg-[#050505] rounded-xl border border-gray-800 shadow-2xl flex flex-col overflow-hidden font-mono text-xs p-4 relative">
             <div className="text-[#39FF14] mb-2">$ init_fullstack_protocol.sh</div>
             <div className="space-y-1 text-gray-400">
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                    {">"} Loading Core Modules... <span className="text-white">DONE</span>
                 </motion.div>
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                    {">"} Connecting to Neural Network... <span className="text-white">CONNECTED</span>
                 </motion.div>
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>
                    {">"} Optimizing conversion routes...
                 </motion.div>
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }} className="text-yellow-400">
                    WARN: High traffic volume detected.
                 </motion.div>
                 <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="border-t border-gray-800 pt-2 mt-2">
                    <span className="text-blue-400">root@ala8:~/</span> awaiting command<span className="animate-pulse">_</span>
                 </motion.div>
             </div>
             
             <div className="absolute right-4 bottom-4 w-12 h-12 border border-gray-800 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="w-8 h-8 border-t-2 border-[#39FF14] rounded-full" />
             </div>
        </div>
    );
};

// --- DATA ---

const services = [
  { 
    title: "TRÁFEGO PAGO", 
    desc: "Segmentação precisa. Arquitetura de alto ROI. Não adivinhamos; engenhamos o fluxo de tráfego.", 
    tag: "CRESCIMENTO",
    id: "traffic"
  },
  { 
    title: "DESIGN", 
    desc: "Brutalista, Funcional, De Conversão. Visuais que cortam o ruído.", 
    tag: "VISUAL",
    id: "design"
  },
  { 
    title: "EDIÇÃO DE VÍDEO", 
    desc: "Edição baseada em ritmo. Engenharia narrativa. Maximização da retenção.", 
    tag: "MÍDIA",
    id: "video"
  },
  { 
    title: "FULL STACK", 
    desc: "Do código ao copy. O ciclo criativo completo sob um único comando.", 
    tag: "SISTEMA",
    id: "stack"
  },
];

export const Capabilities: React.FC = () => {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-white relative">
      {/* LEFT PANEL - VISUALIZATIONS */}
      <div className="w-full md:w-1/2 h-[45vh] md:h-screen sticky top-0 z-20 bg-gray-50 flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 shadow-xl md:shadow-none">
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 font-mono text-[10px] md:text-xs select-none pointer-events-none text-gray-400">
          INTERFACE_VISUAL.sys <span className="text-green-600 animate-pulse">● ONLINE</span>
        </div>
        
        <div className="w-full h-full flex items-center justify-center p-8">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeServiceIndex}
               initial={{ opacity: 0, y: 20, scale: 0.95 }}
               animate={{ opacity: 1, y: 0, scale: 1 }}
               exit={{ opacity: 0, y: -20, scale: 0.95 }}
               transition={{ duration: 0.4, ease: "easeOut" }}
               className="w-full flex items-center justify-center"
             >
                {activeServiceIndex === 0 && <TrafficDashboard />}
                {activeServiceIndex === 1 && <DesignInterface />}
                {activeServiceIndex === 2 && <VideoTimeline />}
                {activeServiceIndex === 3 && <SystemStack />}
             </motion.div>
           </AnimatePresence>
        </div>
      </div>

      {/* RIGHT PANEL - CONTENT */}
      <div className="w-full md:w-1/2 min-h-screen p-6 md:p-16 flex flex-col justify-center bg-white pb-24">
        <div className="flex flex-col gap-16 md:gap-20">
            {services.map((s, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-30% 0px -30% 0px" }}
                onViewportEnter={() => setActiveServiceIndex(i)}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-2 border-l-4 border-black pl-6 md:pl-8 group cursor-default"
            >
                <span 
                className="font-mono text-[10px] font-bold w-fit px-2 py-1 text-black transition-colors duration-300"
                style={{ backgroundColor: activeServiceIndex === i ? '#39FF14' : '#f3f4f6' }}
                >
                <span className={activeServiceIndex === i ? 'text-black' : 'text-gray-600'}>
                    {s.tag}
                </span>
                </span>
                <h3 className={`text-3xl md:text-5xl font-sans font-bold leading-none uppercase transition-colors duration-300 ${activeServiceIndex === i ? 'text-black' : 'text-gray-300'}`}>
                    {s.title}
                </h3>
                <p className="font-mono text-gray-500 max-w-sm text-xs md:text-sm leading-relaxed">
                    {s.desc}
                </p>
            </motion.div>
            ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 pl-8">
            <button className="group relative px-6 py-3 border border-gray-300 bg-transparent overflow-hidden rounded-sm transition-all hover:border-black">
                <span className="absolute inset-0 w-full h-full bg-black transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative flex items-center gap-3 text-xs md:text-sm font-bold font-mono tracking-widest text-black group-hover:text-white transition-colors duration-300">
                    VER TODOS OS DETALHES <ArrowRight size={14} />
                </span>
            </button>
        </div>

      </div>
    </section>
  );
};
