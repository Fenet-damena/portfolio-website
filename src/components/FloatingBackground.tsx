
import { motion } from 'framer-motion';

interface FloatingBackgroundProps {
  className?: string;
}

export function FloatingBackground({ className = "" }: FloatingBackgroundProps) {
  const animatedTexts = [
    "Fenet",
    "Software Engineer", 
    "Web Developer",
    "Full Stack Developer"
  ];

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {/* Enhanced Floating Dots with 3D effects */}
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            background: `linear-gradient(45deg, hsl(var(--neon-purple)), hsl(var(--neon-cyan)), hsl(var(--neon-pink)))`,
            boxShadow: '0 0 8px hsl(var(--neon-purple))'
          }}
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * 800,
            opacity: 0,
            scale: 0,
            rotateZ: 0
          }}
          animate={{ 
            y: [null, -150, null],
            opacity: [0, 0.7, 0],
            scale: [0.2, 1.2, 0.2],
            rotateZ: [0, 360, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Very Very Small Moving Text - Multiple Layers */}
      {animatedTexts.map((text, index) => (
        <motion.div
          key={`layer1-${text}`}
          className="absolute font-orbitron font-bold text-muted-foreground/6 whitespace-nowrap"
          initial={{ x: "120%", opacity: 0 }}
          animate={{ 
            x: "-120%", 
            opacity: [0, 0.4, 0.4, 0] 
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            delay: index * 6,
            ease: "linear"
          }}
          style={{
            top: `${8 + (index * 12)}%`,
            fontSize: '6px'
          }}
        >
          {text}
        </motion.div>
      ))}

      {/* Second layer of even tinier text */}
      {animatedTexts.map((text, index) => (
        <motion.div
          key={`layer2-${text}`}
          className="absolute font-space font-medium text-muted-foreground/4 whitespace-nowrap"
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ 
            x: "120%", 
            opacity: [0, 0.3, 0.3, 0] 
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            delay: index * 7.5 + 12,
            ease: "linear"
          }}
          style={{
            top: `${55 + (index * 10)}%`,
            fontSize: '4px'
          }}
        >
          {text}
        </motion.div>
      ))}

      {/* Third layer with ultra tiny text */}
      {animatedTexts.map((text, index) => (
        <motion.div
          key={`layer3-${text}`}
          className="absolute font-orbitron font-light text-muted-foreground/3 whitespace-nowrap"
          initial={{ x: "120%", opacity: 0 }}
          animate={{ 
            x: "-120%", 
            opacity: [0, 0.2, 0.2, 0] 
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            delay: index * 8.75 + 20,
            ease: "linear"
          }}
          style={{
            top: `${25 + (index * 15)}%`,
            fontSize: '3px'
          }}
        >
          {text}
        </motion.div>
      ))}

      {/* Floating 3D Geometric Shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute"
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * 800,
            opacity: 0,
            scale: 0
          }}
          animate={{ 
            y: [null, -250, null],
            opacity: [0, 0.2, 0],
            scale: [0, 0.8, 0],
            rotateX: [0, 360, 0],
            rotateY: [0, 180, 360]
          }}
          transition={{
            duration: 15 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 6,
            ease: "easeInOut"
          }}
        >
          <div 
            className="w-4 h-4 border border-neon-purple/15"
            style={{
              background: 'linear-gradient(45deg, transparent, hsl(var(--neon-purple))/8)',
              transform: 'rotateX(45deg) rotateY(45deg)',
              clipPath: i % 3 === 0 ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 
                       i % 3 === 1 ? 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' :
                       'circle(50%)'
            }}
          />
        </motion.div>
      ))}

      {/* Pulsating Rings */}
      {[...Array(7)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute border border-neon-cyan/8 rounded-full"
          style={{
            width: 80 + i * 40,
            height: 80 + i * 40,
            left: '50%',
            top: '50%',
            marginLeft: -(40 + i * 20),
            marginTop: -(40 + i * 20)
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.2, 0.05],
            rotate: [0, 360]
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            delay: i * 2.5,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
