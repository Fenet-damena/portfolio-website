
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Experience", href: "#experience" },
    { title: "Projects", href: "#projects" },
    { title: "Education", href: "#education" },
    { title: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Toggle Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 left-6 z-50 glass-card p-3 rounded-lg hover:neon-glow transition-all duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-neon-purple" />
        ) : (
          <Menu className="w-6 h-6 text-neon-purple" />
        )}
      </motion.button>

      {/* Vertical Navigation Menu */}
      <motion.nav
        initial={{ x: -300, opacity: 0 }}
        animate={{ 
          x: isOpen ? 0 : -300, 
          opacity: isOpen ? 1 : 0 
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 left-0 h-screen w-64 glass-card z-40 p-8 pt-20"
      >
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.title}
              initial={{ x: -50, opacity: 0 }}
              animate={{ 
                x: isOpen ? 0 : -50, 
                opacity: isOpen ? 1 : 0 
              }}
              transition={{ delay: index * 0.1 + 0.3 }}
              onClick={() => scrollToSection(item.href)}
              className="block w-full text-left px-4 py-3 rounded-lg text-foreground hover:bg-neon-purple/20 hover:text-neon-purple transition-all duration-300 font-medium"
            >
              {item.title}
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Backdrop */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
        />
      )}
    </>
  );
}
