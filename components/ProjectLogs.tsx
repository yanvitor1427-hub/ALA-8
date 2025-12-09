import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';
import { Plus } from 'lucide-react';

interface EnhancedProject extends Project {
  image: string;
  tags: string[];
  description: string;
}

const projects: EnhancedProject[] = [
  { 
    id: '01', 
    name: 'Neural Flux', 
    client: 'Tech Corp', 
    year: '2024', 
    service: 'WEBGL', 
    status: 'LIVE',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    tags: ['Marca', 'Interface'],
    description: 'Uma experiência imersiva de dados em tempo real.'
  },
  { 
    id: '02', 
    name: 'Urban Echo', 
    client: 'City Lab', 
    year: '2023', 
    service: 'BRANDING', 
    status: 'LIVE',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2725&auto=format&fit=crop',
    tags: ['Identidade', 'Estratégia'],
    description: 'Rebranding completo para o maior laboratório urbano.'
  },
  { 
    id: '03', 
    name: 'Void Runner', 
    client: 'Nike Lab', 
    year: '2024', 
    service: 'VÍDEO', 
    status: 'WIP',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop',
    tags: ['Motion', 'Direção de Arte'],
    description: 'Campanha global de lançamento com estética futurista.'
  },
  { 
    id: '04', 
    name: 'Data Hive', 
    client: 'Fintech X', 
    year: '2023', 
    service: 'TRÁFEGO', 
    status: 'ARCHIVED',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop',
    tags: ['Performance', 'Analytics'],
    description: 'Otimização de conversão baseada em IA.'
  },
];

const ProjectCard: React.FC<{ project: EnhancedProject }> = ({ project }) => {
  return (
    <motion.div 
      className="relative min-w-[320px] md:min-w-[400px] w-[85vw] md:w-[400px] h-[520px] md:h-[580px] shrink-0 bg-white rounded-[32px] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100 flex flex-col"
      whileHover={{ scale: 1.02 }}
    >
      {/* Content Top */}
      <div className="p-8 md:p-10 flex flex-col items-start z-10">
        <span className="text-[11px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 font-mono">
          {project.service} • {project.year}
        </span>
        <h3 className="text-3xl md:text-4xl font-mono font-bold text-gray-900 leading-tight mb-3 tracking-tighter uppercase">
          {project.name}
        </h3>
        <p className="text-gray-500 text-sm md:text-base font-mono font-medium leading-relaxed max-w-[90%]">
          {project.description}
        </p>
      </div>

      {/* Image Container */}
      <div className="flex-1 w-full relative px-6 pb-6 md:px-8 md:pb-8 overflow-hidden">
        <div className="w-full h-full rounded-[20px] overflow-hidden relative shadow-inner">
           <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Tag Floating Badge */}
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
             <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black flex items-center gap-1">
               Ver Case <Plus size={10} strokeWidth={3} />
             </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ProjectLogs: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="min-h-screen w-full bg-[#F5F5F7] py-32 relative overflow-hidden flex flex-col justify-center">
      
      {/* Header Styled cleanly */}
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 mb-16 flex flex-col md:flex-row justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-gray-900 tracking-tighter uppercase">
            Projetos Selecionados.
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 mt-4 max-w-2xl font-mono tracking-tight">
            Onde a estratégia encontra a execução.
          </p>
        </div>
        <div className="hidden md:block">
           <a href="#" className="text-blue-600 font-mono font-bold hover:underline text-lg uppercase tracking-tight">Ver todos os projetos &gt;</a>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div 
        ref={containerRef}
        className="flex overflow-x-auto gap-6 md:gap-8 px-6 md:px-16 pb-20 snap-x snap-mandatory no-scrollbar"
        style={{ scrollBehavior: 'smooth' }}
      >
        {projects.map((project) => (
          <div key={project.id} className="snap-center">
            <ProjectCard project={project} />
          </div>
        ))}
        
        {/* "See More" Card mimicking the style */}
        <div className="snap-center min-w-[320px] md:min-w-[400px] h-[520px] md:h-[580px] shrink-0 bg-white rounded-[32px] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors shadow-sm border border-gray-100 group">
           <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Plus className="text-gray-400" />
              </div>
              <span className="font-mono font-bold text-gray-900 text-xl uppercase tracking-tight">Ver Arquivo Completo</span>
           </div>
        </div>

        {/* Spacer for right padding */}
        <div className="min-w-[4vw] shrink-0" />
      </div>

    </section>
  );
};
