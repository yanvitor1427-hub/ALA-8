import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Home, Layers, Activity, Terminal, Globe, Cpu, MessageSquareQuote } from 'lucide-react';
import { SectionId } from '../types';

interface NavigationProps {
  currentSection: SectionId;
  onNavigate: (section: SectionId) => void;
  toggleAI: () => void;
}

const NAV_ITEMS = [
  { id: SectionId.HERO, icon: Home, label: 'BASE' },
  { id: SectionId.CAPABILITIES, icon: Layers, label: 'STACK' },
  { id: SectionId.MANIFESTO, icon: Terminal, label: 'LOGS' },
  { id: SectionId.PROJECTS, icon: Activity, label: 'PROJETOS' },
  { id: SectionId.TESTIMONIALS, icon: MessageSquareQuote, label: 'FEEDBACK' },
  { id: SectionId.CONTACT, icon: Globe, label: 'ALCANCE' },
];

export const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate, toggleAI }) => {
  let mouseX = useMotionValue(Infinity);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-end gap-2 md:gap-4 pb-2 md:pb-3 px-3 md:px-4 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-2xl h-14 md:h-16 transition-all duration-300">
      {NAV_ITEMS.map((item) => (
        <DockIcon
          mouseX={mouseX}
          key={item.id}
          icon={item.icon}
          isActive={currentSection === item.id}
          onClick={() => onNavigate(item.id)}
          isMobile={isMobile}
        />
      ))}
      <div className="w-[1px] h-6 md:h-8 bg-gray-300 mx-0.5 md:mx-1 self-center" />
      <DockIcon
        mouseX={mouseX}
        icon={Cpu}
        isActive={false}
        onClick={toggleAI}
        isSpecial
        isMobile={isMobile}
      />
    </div>
  );
};

function DockIcon({ mouseX, icon: Icon, isActive, onClick, isSpecial, isMobile }: any) {
  let ref = useRef<HTMLDivElement>(null);

  const baseWidth = isMobile ? 32 : 40;
  const maxWidth = isMobile ? 48 : 80;
  const distanceBounds = isMobile ? 100 : 150;

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthSync = useTransform(distance, [-distanceBounds, 0, distanceBounds], [baseWidth, maxWidth, baseWidth]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className={`aspect-square rounded-full flex items-center justify-center cursor-pointer relative group ${isSpecial ? 'bg-black text-white' : 'bg-gray-100 text-black hover:bg-gray-200'}`}
      onClick={onClick}
    >
       <Icon size={isMobile ? 16 : 20} strokeWidth={1.5} />
       {isActive && (
         <span className="absolute -bottom-1 md:-bottom-2 w-1 h-1 bg-black rounded-full" />
       )}
    </motion.div>
  );
}