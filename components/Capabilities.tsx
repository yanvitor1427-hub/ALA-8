import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, TorusKnot, Cone, Torus, Sphere, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D ICONS ---

const TrafficIcon = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating rotation
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Bar 1 */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.2}>
         <Box args={[0.4, 1.2, 0.4]} position={[-0.6, 0.6, 0]}>
            <meshStandardMaterial color="#d4d4d4" roughness={0.2} metalness={0.5} />
         </Box>
      </Float>
      {/* Bar 2 (Taller) */}
      <Float speed={3} rotationIntensity={0} floatIntensity={0.2} floatingRange={[0.1, 0.3]}>
         <Box args={[0.4, 2.0, 0.4]} position={[0, 1.0, 0.2]}>
            <meshStandardMaterial color="#a3a3a3" roughness={0.2} metalness={0.5} />
         </Box>
      </Float>
      {/* Bar 3 (Tallest) */}
      <Float speed={2.5} rotationIntensity={0} floatIntensity={0.2} floatingRange={[-0.1, 0.1]}>
         <Box args={[0.4, 2.8, 0.4]} position={[0.6, 1.4, 0]}>
            <meshStandardMaterial color="#737373" roughness={0.2} metalness={0.5} />
         </Box>
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
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <TorusKnot args={[0.8, 0.3, 128, 16]} ref={meshRef}>
        <MeshDistortMaterial 
          color="#525252" 
          speed={2} 
          distort={0.4} 
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
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={4} rotationIntensity={0.5} floatIntensity={1}>
        {/* Ring */}
        <Torus args={[1, 0.1, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial color="#737373" roughness={0.2} metalness={0.8} />
        </Torus>
        {/* Play Triangle */}
        <Cone args={[0.6, 1.2, 3]} rotation={[0, 0, -Math.PI / 2]} position={[0.2, 0, 0]}>
          <meshStandardMaterial color="#171717" roughness={0.2} metalness={0.5} />
        </Cone>
      </Float>
    </group>
  );
};

const FullStackIcon = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = -state.clock.elapsedTime * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Central Core */}
        <Sphere args={[0.5, 32, 32]}>
           <meshStandardMaterial color="#171717" roughness={0.1} metalness={1} />
        </Sphere>
        
        {/* Orbital Layers */}
        <Box args={[2.2, 0.05, 2.2]} position={[0, -0.8, 0]}>
           <meshStandardMaterial color="#333" transparent opacity={0.5} />
        </Box>
        <Box args={[1.8, 0.05, 1.8]} position={[0, 0, 0]}>
           <meshStandardMaterial color="#666" transparent opacity={0.3} />
        </Box>
        <Box args={[2.2, 0.05, 2.2]} position={[0, 0.8, 0]}>
           <meshStandardMaterial color="#333" transparent opacity={0.5} />
        </Box>
        
        {/* Connecting Lines */}
        <Box args={[0.05, 2, 0.05]} position={[1, 0, 1]}>
          <meshStandardMaterial color="#525252" />
        </Box>
        <Box args={[0.05, 2, 0.05]} position={[-1, 0, -1]}>
          <meshStandardMaterial color="#a3a3a3" />
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

  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-white relative">
      {/* LEFT PANEL (STICKY) */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen sticky top-0 bg-gray-50 flex items-center justify-center overflow-hidden border-r border-gray-100">
        <div className="absolute top-8 left-8 z-10 font-mono text-xs select-none pointer-events-none">
          VISUALIZADOR_DE_REDE.exe
        </div>
        
        <div className="w-full h-full">
           <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
             <ambientLight intensity={1} />
             <pointLight position={[10, 10, 10]} intensity={2} />
             <pointLight position={[-10, -10, -5]} intensity={1} color="#e5e5e5" />
             
             {/* Render Active Icon */}
             <group>
               {activeServiceIndex === 0 && <TrafficIcon />}
               {activeServiceIndex === 1 && <DesignIcon />}
               {activeServiceIndex === 2 && <VideoIcon />}
               {activeServiceIndex === 3 && <FullStackIcon />}
             </group>
           </Canvas>
        </div>
      </div>

      {/* RIGHT PANEL (SCROLL) */}
      <div className="w-full md:w-1/2 min-h-screen p-8 md:p-24 flex flex-col justify-center gap-32 bg-white">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ margin: "-20% 0px -20% 0px" }}
            onViewportEnter={() => setActiveServiceIndex(i)}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-4 border-l-4 border-black pl-8"
          >
            <span className="font-mono text-xs bg-black text-white w-fit px-2 py-1">{s.tag}</span>
            <h3 className="text-6xl md:text-7xl font-sans font-bold leading-none uppercase">{s.title}</h3>
            <p className="font-mono text-gray-500 max-w-md">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};