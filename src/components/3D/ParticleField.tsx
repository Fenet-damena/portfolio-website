
import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const particlesCount = 1500;
  const positions = useMemo(() => {
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      // Enhanced rotation with wave patterns
      ref.current.rotation.x = state.clock.elapsedTime * 0.08 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      ref.current.rotation.y = state.clock.elapsedTime * 0.05 + Math.cos(state.clock.elapsedTime * 0.15) * 0.08;
      ref.current.rotation.z = state.clock.elapsedTime * 0.03;
      
      // Dynamic particle movement
      const positions = ref.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        const i3 = i * 3;
        // Create wave-like motion
        positions[i3 + 1] += Math.sin(state.clock.elapsedTime + positions[i3]) * 0.001;
        positions[i3] += Math.cos(state.clock.elapsedTime + positions[i3 + 2]) * 0.0005;
        positions[i3 + 2] += Math.sin(state.clock.elapsedTime * 0.5 + positions[i3]) * 0.0008;
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}
