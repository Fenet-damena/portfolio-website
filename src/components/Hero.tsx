
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/lovable-uploads/9487fa96-7ee6-4cd9-ac3b-c8e07c0c63c2.png",
    "/lovable-uploads/27af02be-e6cb-4fd5-91bd-ecfb767717c1.png"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleCVDownload = () => {
    // This will be triggered when user clicks download CV
    // For now, we'll show an alert - you can replace this with actual CV file
    alert('Please upload your CV file to enable download functionality');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Enhanced 3D Profile Photo with Octagon Shape - Made Larger */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.2, type: "spring", stiffness: 100 }}
            className="flex justify-center mb-8"
          >
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.1, 
                rotateY: 15, 
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Octagon container - Made Larger */}
              <div 
                className="w-64 h-64 md:w-80 md:h-80 overflow-hidden border-4 border-neon-purple/50 shadow-2xl relative"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
              >
                <motion.img 
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt="Fenet Damena"
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                />
                {/* 3D Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/30 to-neon-cyan/30"
                     style={{
                       clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                     }}></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-neon-purple/20 to-neon-pink/20 blur-lg animate-pulse-glow"
                     style={{
                       clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                     }}></div>
              </div>
              
              {/* Floating Ring Effect - Octagon shape - Adjusted for larger size */}
              <motion.div 
                className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 border-2 border-neon-cyan/40"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Additional 3D Ring - Octagon shape - Adjusted for larger size */}
              <motion.div 
                className="absolute -inset-2 w-68 h-68 md:w-84 md:h-84 border border-neon-pink/30"
                style={{
                  clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-orbitron font-bold gradient-text mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            FENET DAMENA
          </motion.h1>
          
          {/* Enhanced Animated Role Text - Made Larger and More Prominent */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-2xl md:text-4xl font-space text-muted-foreground mb-8"
          >
            <motion.span
              animate={{ 
                color: ["#8B5CF6", "#06B6D4", "#EC4899", "#8B5CF6"],
                textShadow: [
                  "0 0 10px #8B5CF6",
                  "0 0 20px #06B6D4", 
                  "0 0 30px #EC4899",
                  "0 0 10px #8B5CF6"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="block font-bold"
            >
              Web Developer • Software Engineer • Tech Innovator
            </motion.span>
          </motion.div>
          
          {/* Enhanced Description Text - Made Larger and More Animated */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8"
          >
            <motion.p
              animate={{ 
                opacity: [0.8, 1, 0.8],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="text-foreground/90 font-medium"
            >
              Passionate Software Engineering student specializing in full-stack web development. 
              Building innovative digital solutions with modern technologies and creative problem-solving.
            </motion.p>
          </motion.div>
          
          {/* CV Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex justify-center mt-8"
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
          
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-center space-x-6 mt-8"
          >
            {[
              { icon: Github, href: "#", label: "GitHub" },
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Mail, href: "#", label: "Email" }
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="glass-card p-4 rounded-full hover:neon-glow transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-6 h-6 text-neon-purple" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-neon-purple"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
