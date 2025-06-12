
import { motion } from 'framer-motion';
import { ExternalLink, Github, Smartphone, ShoppingCart, MapPin, Hotel } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: "Addis Stay Hotel Booking",
      description: "Flutter mobile app with Firebase backend for seamless hotel reservations in Addis Ababa",
      tech: ["Flutter", "Firebase", "Dart", "REST API"],
      icon: Hotel,
      color: "text-neon-purple",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with advanced features and secure payment integration",
      tech: ["Django", "JavaScript", "PostgreSQL", "Stripe"],
      icon: ShoppingCart,
      color: "text-neon-cyan",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Traffic Management System",
      description: "AI-powered traffic optimization system for urban transportation efficiency",
      tech: ["Python", "Machine Learning", "OpenCV", "Django"],
      icon: MapPin,
      color: "text-neon-pink",
      gradient: "from-pink-500 to-red-500"
    },
    {
      title: "TILA Safety App",
      description: "3rd place hackathon winner - AI crime prediction mobile safety application",
      tech: ["AI/ML", "Mobile Dev", "Predictive Analytics"],
      icon: Smartphone,
      color: "text-secondary",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions spanning mobile development, web applications, 
            and AI-powered systems that make a real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
              className="glass-card p-6 rounded-2xl group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-full glass-card mb-4 ${project.color}`}>
                  <project.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-orbitron font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium glass-card rounded-full text-neon-purple border border-neon-purple/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-neon-purple hover:text-neon-cyan transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-neon-cyan hover:text-neon-pink transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
