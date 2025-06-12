
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei';
import { FloatingGeometry } from './FloatingGeometry';
import { ParticleField } from './ParticleField';
import { useTheme } from '../ThemeProvider';

export function Scene3D() {
  const { theme } = useTheme();
  
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.8}
        />
        
        {/* Enhanced Lighting */}
        <ambientLight intensity={theme === 'dark' ? 0.4 : 0.7} />
        <pointLight position={[10, 10, 10]} intensity={theme === 'dark' ? 1.2 : 1} color="#a855f7" />
        <pointLight position={[-10, -10, -10]} intensity={theme === 'dark' ? 1 : 0.8} color="#06b6d4" />
        <pointLight position={[0, 15, 5]} intensity={theme === 'dark' ? 0.8 : 0.6} color="#ec4899" />
        <spotLight position={[5, 5, 5]} angle={0.3} penumbra={1} intensity={0.5} color="#8b5cf6" />
        
        {/* Stars Background */}
        <Stars 
          radius={100} 
          depth={50} 
          count={theme === 'dark' ? 3000 : 1500} 
          factor={4} 
          saturation={0} 
          fade 
          speed={1}
        />
        
        {/* Enhanced Particle Field */}
        <ParticleField />
        
        {/* More Floating Geometries with Enhanced Animations */}
        <FloatingGeometry position={[-4, 3, 0]} geometry="box" scale={0.9} />
        <FloatingGeometry position={[4, -2, 3]} geometry="sphere" scale={0.7} />
        <FloatingGeometry position={[0, 4, -3]} geometry="torus" scale={0.8} />
        <FloatingGeometry position={[-3, -3, 2]} geometry="octahedron" scale={0.6} />
        <FloatingGeometry position={[5, 2, -2]} geometry="box" scale={0.5} />
        <FloatingGeometry position={[-2, 0, 4]} geometry="sphere" scale={0.4} />
        <FloatingGeometry position={[2, -4, 1]} geometry="torus" scale={0.6} />
        <FloatingGeometry position={[-5, 1, -1]} geometry="octahedron" scale={0.7} />
        <FloatingGeometry position={[3, 3, -4]} geometry="box" scale={0.3} />
        <FloatingGeometry position={[0, -2, 5]} geometry="sphere" scale={0.8} />
      </Canvas>
    </div>
  );
}
