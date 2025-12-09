import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';

interface EnhancedProject extends Project {
  image: string;
  tags: string[];
}

const projects: EnhancedProject[] = [
  { 
    id: '01', 
    name: 'NEURAL FLUX', 
    client: 'TECH_CORP', 
    year: '2024', 
    service: 'WEBGL', 
    status: 'LIVE',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    tags: ['Marca', 'Design de Interface']
  },
  { 
    id: '02', 
    name: 'URBAN ECHO', 
    client: 'CITY_LAB', 
    year: '2023', 
    service: 'BRANDING', 
    status: 'LIVE',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2725&auto=format&fit=crop',
    tags: ['Identidade Visual', 'Estratégia']
  },
  { 
    id: '03', 
    name: 'VOID RUNNER', 
    client: 'NIKE_LAB', 
    year: '2024', 
    service: 'VÍDEO', 
    status: 'WIP',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop',
    tags: ['Motion Graphics', 'Direção de Arte']
  },
  { 
    id: '04', 
    name: 'DATA HIVE', 
    client: 'FINTECH_X', 
    year: '2023', 
    service: 'TRÁFEGO', 
    status: 'ARCHIVED',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    tags: ['Performance', 'Analytics']
  },
  { 
    id: '05', 
    name: 'LUNASOL', 
    client: 'PRIVATE', 
    year: '2024', 
    service: 'ESTRATÉGIA', 
    status: 'LIVE',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?q=80&w=2670&auto=format&fit=crop',
    tags: ['Editorial', 'Print Design']
  },
];

const ProjectCard: React.FC<{ project: EnhancedProject }> = ({ project }) => {
  return (
    <motion.div 
      className="relative min-w-[300px] w-[85vw] md:w-[400px] h-[500px] md:h-[600px] shrink-0 rounded-2xl overflow-hidden group cursor-none"
      whileHover={{ scale: 0.98 }}
      transition={{ duration: 0.4 }}
    >
      <img 
        src={project.image} 
        alt={project.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Top Tags */}
      <div className="absolute top-6 left-6 flex flex-wrap gap-2">
        {project.tags.map((tag, i) => (
          <span key={i} className="bg-white text-black text-xs font-mono font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide">
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="absolute bottom-0 left-0 w-full p-8 text-white">
        <div className="flex justify-between items-end border-b border-white/30 pb-4 mb-4">
           <div>
             <span className="block font-mono text-xs text-gray-300 mb-1">CLIENTE: {project.client}</span>
             <h3 className="text-4xl font-sans font-bold uppercase leading-none">{project.name}</h3>
           </div>
           <span className="font-mono text-xs border border-white/30 px-2 py-1 rounded-full">{project.year}</span>
        </div>
        
        <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
           <span className="font-mono text-sm uppercase tracking-wider">{project.service}</span>
           <div className="bg-white text-black p-2 rounded-full">
             <ArrowRight size={16} />
           </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectLogs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-screen w-full bg-gray-50 py-32 relative overflow-hidden flex flex-col justify-center">
      <div className="max-w-[1920px] mx-auto w-full px-4 md:px-12 mb-12 flex flex-col md:flex-row justify-between items-end border-b-2 border-black pb-6">
        <div>
          <h2 className="text-6xl md:text-8xl font-sans font-bold tracking-tighter uppercase leading-none">
            PROJETOS<br/>SELECIONADOS
          </h2>
        </div>
        <div className="flex flex-col items-end mt-8 md:mt-0">
          <span className="font-mono text-technical text-sm text-right">
             ARQUIVO VISUAL<br/>
             2023 — 2024
          </span>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-12 snap-x snap-mandatory no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-center">
            <ProjectCard project={project} />
          </div>
        ))}
        {/* Spacer for right padding */}
        <div className="min-w-[4vw] shrink-0" />
      </div>

      <div className="absolute bottom-12 left-12 flex items-center gap-2 font-mono text-xs text-gray-400">
         <div className="w-2 h-2 bg-black rounded-full animate-pulse" />
         <span>ARRASTE PARA EXPLORAR</span>
      </div>
    </section>
  );
};