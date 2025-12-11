import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, TorusKnot, Cone, Torus, Sphere, Float, MeshDistortMaterial, RoundedBox } from '@react-three/drei';
import * as THREE from 'three';

// --- PALETA MONOCROMÁTICA (GREYSCALE) ---
const C_ACCENT = "#808080"; // Grey for accents
const C_DARK = "#1a1a1a";   // Dark Grey/Black for main elements
const C_LIGHT = "#e5e5e5";  // Light Grey

// --- 3D ICONS ---

const TrafficIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Bar 1 - Small */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.2}>
         <group position={[-0.8, -0.6, 0]}>
             <RoundedBox args={[0.5, 1.2, 0.5]} radius={0.05} smoothness={4}>
                <meshStandardMaterial color={C_ACCENT} transparent opacity={0.4} roughness={0.2} metalness={0.5} />
             </RoundedBox>
         </group>
      </Float>
      {/* Bar 2 - Medium */}
      <Float speed={3} rotationIntensity={0} floatIntensity={0.2} floatingRange={[0.1, 0.3]}>
         <group position={[0, -0.2, 0.2]}>
             <RoundedBox args={[0.5, 2.0, 0.5]} radius={0.05} smoothness={4}>
                <meshStandardMaterial color={C_ACCENT} transparent opacity={0.7} roughness={0.2} metalness={0.5} />
             </RoundedBox>
         </group>
      </Float>
      {/* Bar 3 - Tall (Hero) */}
      <Float speed={2.5} rotationIntensity={0} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
         <group position={[0.8, 0.4, 0]}>
             <RoundedBox args={[0.5, 3.2, 0.5]} radius={0.05} smoothness={4}>
                <meshStandardMaterial color={C_DARK} roughness={0.1} metalness={0.6} />
             </RoundedBox>
         </group>
      </Float>
    </group>
  );
};

const DesignIcon = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
      <TorusKnot args={[0.9, 0.35, 128, 32]} ref={meshRef}>
        <MeshDistortMaterial 
          color={C_DARK} 
          speed={3} 
          distort={0.3} 
          roughness={0.2} 
          metalness={0.8}
        />
      </TorusKnot>
    </Float>
  );
};

const VideoIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
       groupRef.current.rotation.y += 0.01;
       groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
        {/* Ring */}
        <Torus args={[1.2, 0.15, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color={C_ACCENT} transparent opacity={0.5} roughness={0.2} metalness={0.8} />
        </Torus>
        {/* Play Triangle */}
        <Cone args={[0.8, 1.6, 3]} rotation={[0, 0, -Math.PI / 2]} position={[0.2, 0, 0]}>
          <meshStandardMaterial color={C_DARK} roughness={0.1} metalness={0.5} />
        </Cone>
      </Float>
    </group>
  );
};

// IMPLEMENTATION OF THE REFERENCE IMAGE: Black Sphere, Grey Planes, Vertical Rods
const FullStackIcon = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.1} floatIntensity={0.1}>
        {/* Central Core - Large Black Sphere */}
        <Sphere args={[0.85, 64, 64]}>
           <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.2} />
        </Sphere>
        
        {/* Planes - Grey */}
        {/* Top Plane */}
        <Box args={[2.5, 0.05, 2.5]} position={[0, 1.2, 0]}>
           <meshStandardMaterial color="#808080" transparent opacity={0.7} roughness={0.2} />
        </Box>
        
        {/* Middle Intersecting Plane */}
        <Box args={[3.0, 0.02, 3.0]} position={[0, 0, 0]}>
           <meshStandardMaterial color="#A0A0A0" transparent opacity={0.4} roughness={0.2} />
        </Box>
        
        {/* Bottom Plane */}
        <Box args={[2.5, 0.05, 2.5]} position={[0, -1.2, 0]}>
           <meshStandardMaterial color="#808080" transparent opacity={0.7} roughness={0.2} />
        </Box>
        
        {/* Vertical Poles - Black/Dark Grey - Framing the structure */}
        {/* Positioned at corners of the planes approx */}
        <Box args={[0.08, 3.2, 0.08]} position={[1.1, 0, 1.1]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[0.08, 3.2, 0.08]} position={[-1.1, 0, -1.1]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[0.08, 3.2, 0.08]} position={[1.1, 0, -1.1]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
        <Box args={[0.08, 3.2, 0.08]} position={[-1.1, 0, 1.1]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      </Float>
    </group>
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
  const [cameraPosition, setCameraPosition] = useState<[number, number, number]>([0, 0, 6]);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setCameraPosition([0, 0, 7.5]);
        } else {
          setCameraPosition([0, 0, 6]);
        }
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-white relative">
      {/* LEFT PANEL */}
      <div className="w-full md:w-1/2 h-[45vh] md:h-screen sticky top-0 z-20 bg-white flex items-center justify-center overflow-hidden border-b md:border-b-0 md:border-r border-gray-200 shadow-xl md:shadow-none">
        <div className="absolute top-4 left-4 md:top-8 md:left-8 z-10 font-mono text-[10px] md:text-xs select-none pointer-events-none text-gray-400">
          VISUALIZADOR_DE_REDE.exe <span className="text-gray-900 animate-pulse">● ONLINE</span>
        </div>
        
        <div className="w-full h-full">
           <Canvas camera={{ position: cameraPosition, fov: 40 }}>
             <ambientLight intensity={1.5} />
             <pointLight position={[10, 10, 10]} intensity={1.0} color="#ffffff" />
             <pointLight position={[-10, 0, -10]} intensity={0.5} color="#ffffff" />
             
             <group position={[0, 0, 0]}>
               {activeServiceIndex === 0 && <TrafficIcon />}
               {activeServiceIndex === 1 && <DesignIcon />}
               {activeServiceIndex === 2 && <VideoIcon />}
               {activeServiceIndex === 3 && <FullStackIcon />}
             </group>
           </Canvas>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="w-full md:w-1/2 min-h-screen p-6 md:p-16 flex flex-col justify-center gap-16 md:gap-20 bg-white pb-24">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-30% 0px -30% 0px" }}
            onViewportEnter={() => setActiveServiceIndex(i)}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-2 border-l-4 border-black pl-6 md:pl-8"
          >
            <span 
              className="font-mono text-[10px] font-bold w-fit px-2 py-1 text-black"
              style={{ backgroundColor: '#f3f4f6' }} // Light grey bg
            >
              <span className="text-gray-600">
                 {s.tag}
              </span>
            </span>
            <h3 className="text-3xl md:text-5xl font-sans font-bold leading-none uppercase text-black">{s.title}</h3>
            <p className="font-mono text-gray-500 max-w-sm text-xs md:text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
