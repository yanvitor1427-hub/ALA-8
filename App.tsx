import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Capabilities } from './components/Capabilities';
import { Manifesto } from './components/Manifesto';
import { ProjectLogs } from './components/ProjectLogs';
import { Testimonials } from './components/Testimonials';
import { ThreeGlobe } from './components/ThreeGlobe';
import { Navigation } from './components/Navigation';
import { GeminiAssistant } from './components/GeminiAssistant';
import { SectionId } from './types';
import { MapPin, Mail, Instagram } from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionId>(SectionId.HERO);
  const [isAiOpen, setIsAiOpen] = useState(false);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setCurrentSection(id);
  };

  // Simple scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(SectionId);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -200 && rect.top <= window.innerHeight / 2) {
            setCurrentSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen relative font-sans selection:bg-black selection:text-white">
      
      {/* Sections */}
      <div id={SectionId.HERO}>
        <Hero />
      </div>

      <div id={SectionId.CAPABILITIES}>
        <Capabilities />
      </div>

      <div id={SectionId.MANIFESTO}>
        <Manifesto />
      </div>

      <div id={SectionId.PROJECTS}>
        <ProjectLogs />
      </div>

      <div id={SectionId.TESTIMONIALS}>
        <Testimonials />
      </div>

      <div id={SectionId.CONTACT} className="min-h-screen flex flex-col relative bg-white">
        <div className="flex flex-col w-full pt-20 md:pt-32 pb-16">
          
          {/* Centered Text Content */}
          <div className="w-full flex flex-col justify-center items-center px-6 md:px-12 z-10 text-center mb-8">
             <h2 className="text-[12vw] md:text-[9rem] font-black leading-[0.85] tracking-tighter uppercase mb-6 md:mb-8">
               ALCANCE<br />GLOBAL.
             </h2>
             <p className="font-mono text-gray-500 max-w-lg text-sm md:text-base leading-relaxed">
               Operando de Curitiba. Servindo o mundo.<br />
               Sinais digitais ignoram fronteiras.
             </p>
          </div>
          
          {/* 3D Globe */}
          <div className="w-full h-[400px] md:h-[600px] relative -mt-8 md:-mt-12 z-0 mb-16">
            <ThreeGlobe />
          </div>

          {/* Contact Info Grid - Below Globe */}
          <div className="w-full max-w-5xl mx-auto px-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 font-mono text-center">
                <div className="flex flex-col items-center gap-3">
                  <MapPin className="text-black mb-1" size={28} strokeWidth={1.5} />
                  <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">Base</span>
                  <span className="font-bold text-base md:text-lg uppercase tracking-tight">CURITIBA, BRASIL</span>
                </div>
                <div className="flex flex-col items-center gap-3">
                   <Mail className="text-black mb-1" size={28} strokeWidth={1.5} />
                   <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">Email</span>
                   <a href="mailto:contact@ala8.com" className="font-bold text-base md:text-lg uppercase tracking-tight hover:text-gray-600 transition-colors">CONTACT@ALA8.COM</a>
                </div>
                <div className="flex flex-col items-center gap-3">
                   <Instagram className="text-black mb-1" size={28} strokeWidth={1.5} />
                   <span className="text-gray-400 font-bold uppercase tracking-wider text-xs">Social</span>
                   <a href="#" className="font-bold text-base md:text-lg uppercase tracking-tight hover:text-gray-600 transition-colors">@ALA8.BUREAU</a>
                </div>
             </div>
          </div>
        </div>

        <a 
          href="mailto:contact@ala8.com" 
          className="w-full bg-black text-white hover:bg-technical transition-colors duration-500 py-16 md:py-24 flex items-center justify-center cursor-pointer group overflow-hidden relative"
        >
           <span className="text-5xl md:text-[8vw] leading-none font-black uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500 z-10 text-center">
             INICIAR PROJETO
           </span>
        </a>
      </div>

      {/* Floating UI */}
      <Navigation 
        currentSection={currentSection} 
        onNavigate={scrollToSection}
        toggleAI={() => setIsAiOpen(true)}
      />

      {/* AI Assistant Overlay */}
      <GeminiAssistant 
        isOpen={isAiOpen} 
        onClose={() => setIsAiOpen(false)} 
      />

    </div>
  );
};

export default App;