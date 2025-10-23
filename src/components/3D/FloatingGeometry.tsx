
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useTheme } from '../ThemeProvider';

interface FloatingGeometryProps {
  position: [number, number, number];
  geometry: 'box' | 'sphere' | 'torus' | 'octahedron';
  scale?: number;
}

export function FloatingGeometry({ position, geometry, scale = 1 }: FloatingGeometryProps) {
  const meshRef = useRef<Mesh>(null);
  const { theme } = useTheme();
  
  useFrame((state) => {
    if (meshRef.current) {
      // Enhanced rotation with more complex patterns
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.4 + Math.sin(state.clock.elapsedTime * 0.2) * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + Math.cos(state.clock.elapsedTime * 0.15) * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.2;
      
      // Enhanced floating motion with figure-8 patterns
      meshRef.current.position.y = position[1] + 
        Math.sin(state.clock.elapsedTime * 0.8 + position[0]) * 0.5 + 
        Math.cos(state.clock.elapsedTime * 0.4 + position[2]) * 0.3;
      
      meshRef.current.position.x = position[0] + 
        Math.cos(state.clock.elapsedTime * 0.6 + position[1]) * 0.2;
      
      meshRef.current.position.z = position[2] + 
        Math.sin(state.clock.elapsedTime * 0.5 + position[0]) * 0.3;
      
      // Dynamic scaling with breathing effect
      const breathScale = 1 + Math.sin(state.clock.elapsedTime * 1.5 + position[0] + position[1]) * 0.1;
      meshRef.current.scale.setScalar(scale * breathScale);
    }
  });

  const getGeometry = () => {
    switch (geometry) {
      case 'box':
        return <boxGeometry args={[1, 1, 1]} />;
      case 'sphere':
        return <sphereGeometry args={[0.5, 32, 32]} />;
      case 'torus':
        return <torusGeometry args={[0.5, 0.2, 16, 100]} />;
      case 'octahedron':
        return <octahedronGeometry args={[0.6]} />;
      default:
        return <boxGeometry args={[1, 1, 1]} />;
    }
  };

  const materialColor = theme === 'dark' ? '#a855f7' : '#7c3aed';

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {getGeometry()}
      <meshStandardMaterial
        color={materialColor}
        transparent={true}
        opacity={0.8}
        wireframe={true}
        emissive={materialColor}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}
