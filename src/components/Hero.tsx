
import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/uploads/short.png",
    "/uploads/side.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleCVDownload = () => {
    // Create a link to download the CV from the assets folder
    const link = document.createElement('a');
    link.href = '/assets/Fenet_Damena_CV.pdf';
    link.download = 'Fenet_Damena_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced 3D Background Layers */}
      <div className="absolute inset-0 perspective-1000">
        {/* Multiple parallax layers for depth */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            style={{
              transform: `translateZ(${-i * 100}px)`,
            }}
            animate={{
              rotateX: [0, 5, 0, -5, 0],
              rotateY: [0, 3, 0, -3, 0],
            }}
            transition={{
              duration: 20 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            {[...Array(3)].map((_, j) => (
              <motion.div
                key={j}
                className="absolute w-1 h-1 bg-neon-purple/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.2, 0.8, 0.2],
                  z: [0, 50, 0],
                }}
                transition={{
                  duration: 4 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Enhanced 3D Profile Photo with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: -180, z: -200 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, z: 0 }}
            transition={{ duration: 2, delay: 0.2, type: "spring", stiffness: 80 }}
            className="flex justify-center mb-8"
          >
            <motion.div 
              className="relative"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ 
                scale: 1.15, 
                rotateY: 20, 
                rotateX: 10,
                z: 50,
                transition: { duration: 0.4 }
              }}
              animate={{ 
                y: [0, -15, 0],
                rotateZ: [0, 3, -3, 0],
                rotateX: [0, 2, 0, -2, 0],
                rotateY: [0, 1, 0, -1, 0],
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Enhanced 3D Octagon container */}
              <div 
                className="w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-neon-purple/50 shadow-2xl relative"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  transformStyle: "preserve-3d",
                  transform: "translateZ(20px)"
                }}
              >
                <motion.img 
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Fenet Damena"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.2, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.8 }}
                  style={{ transformStyle: "preserve-3d" }}
                />
                
                {/* Enhanced 3D Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/30 to-neon-cyan/30"
                     style={{
                       clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                       transform: "translateZ(10px)"
                     }}></div>
                <motion.div 
                  className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 blur-xl"
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    transform: "translateZ(-10px)"
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </div>
              
              {/* Multiple Floating 3D Rings */}
              {[...Array(4)].map((_, index) => (
                <motion.div 
                  key={index}
                  className={`absolute inset-${index * 2} w-${64 + index * 16} h-${64 + index * 16} md:w-${80 + index * 20} md:h-${80 + index * 20} border-2 border-neon-cyan/30`}
                  style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                    transform: `translateZ(${30 + index * 10}px)`
                  }}
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    rotate: { duration: 25 + index * 5, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4 + index, repeat: Infinity, ease: "easeInOut" }
                  }}
                />
              ))}
              
              {/* Additional Counter-rotating 3D Ring */}
              <motion.div 
                className="absolute -inset-3 w-70 h-70 md:w-86 md:h-86 border border-neon-pink/25"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                  transform: "translateZ(40px)"
                }}
                animate={{ 
                  rotate: -360,
                  rotateX: [0, 10, 0, -10, 0],
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Enhanced 3D Name Animation */}
          <motion.h1 
            className="text-5xl md:text-7xl font-orbitron font-bold gradient-text mb-4"
            initial={{ opacity: 0, scale: 0.5, z: -100 }}
            animate={{ opacity: 1, scale: 1, z: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              z: 30,
              transition: { duration: 0.3 }
            }}
          >
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px #8B5CF6, 0 0 40px #8B5CF6",
                  "0 0 30px #06B6D4, 0 0 60px #06B6D4",
                  "0 0 25px #EC4899, 0 0 50px #EC4899",
                  "0 0 20px #8B5CF6, 0 0 40px #8B5CF6"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              FENET DAMENA
            </motion.span>
          </motion.h1>
          
          {/* Enhanced 3D Role Text Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50, z: -50 }}
            animate={{ opacity: 1, x: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-space text-muted-foreground mb-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span
              animate={{ 
                color: ["#8B5CF6", "#06B6D4", "#EC4899", "#8B5CF6"],
                textShadow: [
                  "0 0 10px #8B5CF6, 0 5px 20px rgba(139, 92, 246, 0.3)",
                  "0 0 20px #06B6D4, 0 8px 30px rgba(6, 182, 212, 0.3)", 
                  "0 0 30px #EC4899, 0 10px 40px rgba(236, 72, 153, 0.3)",
                  "0 0 10px #8B5CF6, 0 5px 20px rgba(139, 92, 246, 0.3)"
                ],
                rotateX: [0, 2, 0, -2, 0],
                z: [0, 10, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="block font-bold"
              style={{ transformStyle: "preserve-3d" }}
            >
              Web Developer • Software Engineer • Tech Innovator
            </motion.span>
          </motion.div>
          
          {/* Enhanced 3D Description Text */}
          <motion.div
            initial={{ opacity: 0, y: 20, z: -30 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.p
              animate={{ 
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.02, 1],
                rotateX: [0, 1, 0, -1, 0],
                z: [0, 5, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="text-foreground/90 font-medium"
              style={{ transformStyle: "preserve-3d" }}
            >
              Passionate Software Engineering student specializing in full-stack web development. 
              Building innovative digital solutions with modern technologies and creative problem-solving.
            </motion.p>
          </motion.div>
          
          {/* Enhanced 3D CV Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20, z: -20 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center mt-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.1, 
                rotateX: 10,
                rotateY: 5,
                z: 20,
                transition: { duration: 0.3 }
              }}
              whileTap={{ 
                scale: 0.95,
                rotateX: -5,
                z: -10,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button 
                onClick={handleCVDownload}
                className="glass-card bg-neon-purple/20 hover:bg-neon-purple/30 text-neon-purple border border-neon-purple/30 hover:border-neon-purple/50 transition-all duration-300 hover:neon-glow"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Enhanced 3D Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20, z: -15 }}
            animate={{ opacity: 1, y: 0, z: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mt-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            {[
              { 
                icon: () => (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ), 
                href: "https://x.com/FenetDamen23140", 
                label: "X (Twitter)" 
              },
              { icon: Linkedin, href: "https://www.linkedin.com/in/fenet-damena-488780280/", label: "LinkedIn" },
              { 
                icon: () => (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                  </svg>
                ), 
                href: "https://t.me/Emuy_16", 
                label: "Telegram" 
              },
              { icon: Mail, href: "mailto:fenetdamena74@gmail.com", label: "Email" }
            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card p-4 rounded-full hover:neon-glow transition-all duration-300"
                style={{ transformStyle: "preserve-3d" }}
                whileHover={{ 
                  scale: 1.15, 
                  rotate: 10,
                  rotateX: 15,
                  rotateY: 10,
                  z: 25,
                }}
                whileTap={{ 
                  scale: 0.9,
                  rotateX: -10,
                  z: -10,
                }}
                initial={{ opacity: 0, z: -20 }}
                animate={{ opacity: 1, z: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.4 + index * 0.1,
                }}
              >
                <Icon className="w-6 h-6 text-neon-purple" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Enhanced 3D Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, z: -30 }}
          animate={{ opacity: 1, z: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            animate={{ 
              y: [0, 15, 0],
              rotateX: [0, 10, 0],
              z: [0, 10, 0],
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-neon-purple"
            style={{ transformStyle: "preserve-3d" }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
