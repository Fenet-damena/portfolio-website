
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/fenetdamena",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/fenetdamena",
      label: "LinkedIn"
    },
    {
      icon: Twitter,
      href: "https://twitter.com/fenetdamena",
      label: "Twitter"
    },
    {
      icon: Mail,
      href: "mailto:fenetdamena74@gmail.com",
      label: "Email"
    }
  ];

  const animatedTexts = [
    "Fenet",
    "Software Engineer",
    "Web Developer", 
    "Full Stack Developer"
  ];

  return (
    <footer className="relative py-16 bg-background/95 backdrop-blur-sm border-t border-border overflow-hidden">
      {/* Animated Background Text */}
      <div className="absolute inset-0 pointer-events-none">
        {animatedTexts.map((text, index) => (
          <motion.div
            key={text}
            className="absolute text-6xl md:text-8xl font-orbitron font-bold text-muted-foreground/10 whitespace-nowrap"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ 
              x: "-100%", 
              opacity: [0, 0.3, 0.3, 0] 
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              delay: index * 3.75,
              ease: "linear"
            }}
            style={{
              top: `${20 + (index * 20)}%`,
            }}
          >
            {text}
          </motion.div>
        ))}
        
        {/* Floating Dots */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-neon-purple/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: Math.random() * 400,
              opacity: 0 
            }}
            animate={{ 
              y: [null, -50, null],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-3xl md:text-4xl font-orbitron font-bold gradient-text mb-4">
              Fenet Damena
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Software Engineer • Web Developer • Full Stack Developer
            </p>
            <p className="text-sm text-muted-foreground/80 mb-8">
              Building innovative digital solutions with passion and creativity
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card p-3 rounded-full hover:neon-glow transition-all duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                <link.icon className="w-5 h-5 text-neon-purple group-hover:text-neon-cyan transition-colors" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Email */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <a
              href="mailto:fenetdamena74@gmail.com"
              className="inline-flex items-center space-x-2 text-neon-purple hover:text-neon-cyan transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">fenetdamena74@gmail.com</span>
            </a>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-border/50"
          >
            <p className="text-sm text-muted-foreground/60 flex items-center justify-center space-x-2">
              <span>© 2024 Fenet Damena. Made with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>and passion for innovation</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
