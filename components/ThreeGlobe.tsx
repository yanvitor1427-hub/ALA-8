import React, { useRef, Suspense, useState, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const EARTH_RADIUS = 2.2;

const latLonToVector3 = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = (radius * Math.sin(phi) * Math.sin(theta));
  const y = (radius * Math.cos(phi));

  return new THREE.Vector3(x, y, z);
};

interface EarthMeshProps {
  scale?: number;
}

const EarthMesh: React.FC<EarthMeshProps> = ({ scale = 1 }) => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const [userPosition, setUserPosition] = useState<[number, number, number] | null>(null);

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg',
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png'
  ]);

  useEffect(() => {
    if (typeof navigator !== 'undefined' && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (position && position.coords) {
            const { latitude, longitude } = position.coords;
            const pos = latLonToVector3(latitude, longitude, EARTH_RADIUS);
            setUserPosition([pos.x, pos.y, pos.z]);
          }
        },
        (error) => {
          console.warn("Geolocation access denied or failed", error);
        }
      );
    }
  }, []);

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.07;
    }
  });

  return (
    <group rotation={[0, 0, 23.5 * (Math.PI / 180)]} scale={[scale, scale, scale]}> {/* Axial tilt & Scale */}
      {/* Earth Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[EARTH_RADIUS, 64, 64]} />
        <meshPhongMaterial
          map={colorMap}
          specularMap={specularMap}
          normalMap={normalMap}
          shininess={15}
        />
        
        {/* User Location Marker (Green Dot) */}
        {userPosition && (
          <mesh position={userPosition}>
            <sphereGeometry args={[0.04, 16, 16]} />
            <meshBasicMaterial color="#4ade80" toneMapped={false} />
            <pointLight position={[0, 0, 0]} color="#4ade80" distance={1.0} intensity={4} decay={2} />
          </mesh>
        )}
      </mesh>

      {/* Clouds Sphere */}
      <mesh ref={cloudsRef}>
        <sphereGeometry args={[EARTH_RADIUS + 0.04, 64, 64]} />
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
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      // Adjust scale for mobile screens to prevent cutting off
      if (typeof window !== 'undefined') {
        if (window.innerWidth < 768) {
          setScale(0.65);
        } else {
          setScale(1);
        }
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-full min-h-[500px] md:min-h-[600px] relative overflow-hidden flex items-center justify-center">
      <Canvas camera={{ position: [0, 0, 6.5], fov: 40 }}>
        <Suspense fallback={null}>
          {/* Reduced ambient light for deeper shadows */}
          <ambientLight intensity={0.6} />
          
          {/* Strong directional light for contrast */}
          <directionalLight position={[10, 5, 5]} intensity={2.5} color="#ffffff" />
          
          {/* Subtle fill light from the bottom left */}
          <pointLight position={[-10, -5, -5]} intensity={0.5} color="blue" /> 
          
          <EarthMesh scale={scale} />
          
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