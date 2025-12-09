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
import { MapPin, Mail, Instagram, ArrowRight } from 'lucide-react';

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

      <div id={SectionId.CONTACT} className="min-h-screen flex flex-col relative">
        <div className="flex flex-col md:flex-row flex-1">
          <div className="w-full md:w-1/2 flex flex-col justify-center p-12 md:p-24 bg-white z-10 border-r border-gray-100">
             <h2 className="text-8xl font-black mb-8">ALCANCE<br />GLOBAL.</h2>
             <p className="font-mono text-gray-500 mb-12 max-w-sm">
               Operando de Curitiba. Servindo o mundo.
               Sinais digitais ignoram fronteiras.
             </p>
             
             <div className="space-y-6 font-mono text-sm">
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <MapPin className="text-black" />
                  <span>R. DOS FUNCIONÁRIOS, 961 - CABRAL, CURITIBA - PR</span>
                </div>
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <Mail className="text-black" />
                  <a href="mailto:contact@ala8.com" className="hover:bg-black hover:text-white transition-colors px-1">CONTACT@ALA8.COM</a>
                </div>
                <div className="flex items-center gap-4 border-b border-gray-100 pb-4">
                  <Instagram className="text-black" />
                  <a href="#" className="hover:bg-black hover:text-white transition-colors px-1">@ALA8.BUREAU</a>
                </div>
             </div>
          </div>
          <div className="w-full md:w-1/2 min-h-[50vh] md:min-h-0">
            <ThreeGlobe />
          </div>
        </div>

        <a 
          href="mailto:contact@ala8.com" 
          className="w-full bg-black text-white hover:bg-technical transition-colors duration-500 py-20 md:py-32 flex items-center justify-center cursor-pointer group overflow-hidden relative"
        >
           <span className="text-6xl md:text-[10vw] leading-none font-black uppercase tracking-tighter group-hover:scale-105 transition-transform duration-500 z-10 text-center">
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