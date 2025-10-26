
import { motion } from 'framer-motion';
import { Mail, Linkedin, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      href: "https://x.com/FenetDamen23140",
      label: "X (Twitter)"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/fenet-damena-488780280/",
      label: "LinkedIn"
    },
    {
      icon: () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 0 0-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      ),
      href: "https://t.me/Emuy_16",
      label: "Telegram"
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
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
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
              <span>© 2024 Fenet Damena.</span>
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
