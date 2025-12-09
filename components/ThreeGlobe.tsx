import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

const EARTH_RADIUS = 1.2;

// Curitiba Coordinates
const LATITUDE = -25.4284;
const LONGITUDE = -49.2733;

const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

const EarthMesh = () => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.07;
    }
  });

  const markerPosition = useMemo(() => latLonToVector3(LATITUDE, LONGITUDE, EARTH_RADIUS), []);

  return (
    <group rotation={[0, 0, 23.5 * (Math.PI / 180)]}> {/* Axial tilt */}
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          specularMap={specularMap}
          normalMap={normalMap}
          shininess={15}
        />
        
        {/* Curitiba Marker attached to Earth rotation */}
        <mesh position={markerPosition}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#ef4444" toneMapped={false} />
          <Html distanceFactor={15}>
            <div className="flex items-center gap-2 pointer-events-none select-none -translate-x-1/2 -translate-y-1/2">
              <div className="w-3 h-3 bg-red-600 rounded-full animate-ping absolute opacity-75" />
              <div className="w-3 h-3 bg-red-600 rounded-full relative shadow-[0_0_10px_rgba(239,68,68,0.8)]" />
              <span className="text-black text-[10px] font-mono font-bold whitespace-nowrap bg-white/80 backdrop-blur-md px-3 py-1 rounded-md shadow-lg border border-gray-100 ml-2">
                ALA 8 HQ
              </span>
            </div>
          </Html>
        </mesh>
      </mesh>

      {/* Clouds Sphere */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[EARTH_RADIUS + 0.02, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent={true}
          opacity={0.3}
          depthWrite={false}
          side={THREE.DoubleSide}
          blending={THREE.NormalBlending}
        />
      </mesh>
    </group>
  );
};

export const ThreeGlobe: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[600px] bg-white relative overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }}>
        <Suspense fallback={null}>
          {/* Reduced ambient light for deeper shadows */}
          <ambientLight intensity={0.6} />
          
          {/* Strong directional light for contrast */}
          <directionalLight position={[10, 5, 5]} intensity={2.5} color="#ffffff" />
          
          {/* Subtle fill light from the bottom left */}
          <pointLight position={[-10, -5, -5]} intensity={0.5} color="#blue" /> 
          
          <EarthMesh />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            rotateSpeed={0.5}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};
