'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// DNA Helix Component
function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const helixPoints = useMemo(() => {
    const points = [];
    const sphereSize = isMobile ? 0.01 : 0.05; // TINY on mobile
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 4;
      const radius = isMobile ? 0.1 : 0.5; // Much smaller radius on mobile
      const x = Math.cos(angle) * radius;
      const y = (i / 50) * (isMobile ? 1.5 : 3) - (isMobile ? 0.75 : 1.5);
      const z = Math.sin(angle) * radius;
      points.push({ pos: new THREE.Vector3(x, y, z), size: sphereSize });
    }
    return points;
  }, [isMobile]);

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={groupRef} position={isMobile ? [-0.5, 0, 0] : [-2, 0, 0]}>
        {helixPoints.map((point, i) => (
          <mesh key={i} position={point.pos}>
            <sphereGeometry args={[point.size, 16, 16]} />
            <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.5} />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// Heart Component
function Heart() {
  const meshRef = useRef<THREE.Mesh>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const heartSize = isMobile ? 0.15 : 0.6; // TINY on mobile
  
  useFrame((state) => {
    if (meshRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={isMobile ? [0.5, 0, 0] : [2, 0, 0]}>
        <sphereGeometry args={[heartSize, 32, 32]} />
        <MeshDistortMaterial
          color="#ef4444"
          emissive="#ef4444"
          emissiveIntensity={0.3}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

// Stethoscope Ring
function StethoscopeRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const ringRadius = isMobile ? 0.2 : 0.8; // TINY on mobile
  const tubeRadius = isMobile ? 0.04 : 0.15; // TINY tube on mobile
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.6}>
      <mesh ref={ringRef} position={isMobile ? [0, 0.5, 0] : [0, 1, 0]}>
        <torusGeometry args={[ringRadius, tubeRadius, 16, 100]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </Float>
  );
}

// Floating Particles
function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  
  const particles = useMemo(() => {
    const positions = new Float32Array(100 * 3);
    const spread = isMobile ? 2 : 10; // Much smaller spread on mobile
    for (let i = 0; i < 100; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
    }
    return positions;
  }, [isMobile]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  const particleSize = isMobile ? 0.01 : 0.05; // TINY particles on mobile

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={particleSize} color="#10b981" transparent opacity={0.6} />
    </points>
  );
}

// Main Scene
export default function MedicalScene() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <spotLight position={[0, 5, 0]} intensity={0.5} angle={0.3} penumbra={1} color="#34d399" />
        
        <DNAHelix />
        <Heart />
        <StethoscopeRing />
        <Particles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
