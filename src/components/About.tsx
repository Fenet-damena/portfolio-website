
import { motion } from 'framer-motion';
import { Award, BookOpen, Users, Target } from 'lucide-react';

export function About() {
  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      description: "3.83/4.0 GPA • Top Female Student at ASTU",
      color: "text-neon-purple"
    },
    {
      icon: BookOpen,
      title: "ALX Graduate",
      description: "Completed rigorous Software Engineering program",
      color: "text-neon-cyan"
    },
    {
      icon: Users,
      title: "Leadership",
      description: "e-SHE Ambassador • President of Young Advisory Group",
      color: "text-neon-pink"
    },
    {
      icon: Target,
      title: "Hackathon Winner",
      description: "3rd place TILA • 1st place AI Solar Estimator",
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 relative" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer thriving at the intersection of technology, 
            education, and impact. As an ALX graduate and A2SV trainee, I'm dedicated to 
            building meaningful solutions and uplifting communities through technology.
          </p>
        </motion.div>

        {/* New section with photo and content side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          {/* Photo Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="w-64 h-80 md:w-72 md:h-88 rounded-2xl overflow-hidden border-2 border-neon-cyan/30 shadow-xl relative"
              >
                <img 
                  src="/uploads/mypic2.png"
                  alt="Fenet Damena - About"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neon-cyan/20 to-transparent"></div>
              </motion.div>
              {/* Floating accent */}
              <motion.div 
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-neon-pink/20 rounded-full blur-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-orbitron font-bold gradient-text">
              My Passion
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technology has the power to transform lives and communities. Through my journey 
              in software engineering, I've discovered the incredible potential of code to 
              solve real-world problems and create meaningful impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in continuous learning, collaboration, and using technology as a 
              force for positive change. Every project I work on is an opportunity to 
              make a difference.
            </p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="glass-card p-6 rounded-xl text-center floating-animation"
              style={{ animationDelay: `${index * 0.5}s` }}
            >
              <div className={`inline-flex p-3 rounded-full glass-card mb-4 ${achievement.color}`}>
                <achievement.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-orbitron">
                {achievement.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}
