
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
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
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
        opacity={0.7}
        wireframe={true}
      />
    </mesh>
  );
}
