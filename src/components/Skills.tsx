
import { motion } from 'framer-motion';

export function Skills() {
 const skillCategories = [
  {
    title: "Languages",
    skills: [
      "JavaScript", "TypeScript", "Python","Go","c"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "Django", "React.js", "Next.js", "Tailwind CSS", "Framer Motion",
      "Node.js", "Express.js", "Redux", "Bootstrap", "Material-UI"
    ],
    color: "from-cyan-500 to-blue-500"
  },
  {
    title: "Databases, Tools & Platforms",
    skills: [
      "Firebase", "PostgreSQL", "MongoDB", "MySQL",
      "SQLite", "Redis", "Oracle DB", "Supabase",
      "Git", "GitHub", "VS Code", "Google Cloud", "Linux"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Core Competencies",
    skills: [
      "Data Structures", "Algorithms", "Agile", "Leadership", "AI/ML"
    ],
    color: "from-orange-500 to-red-500"
  }
];

  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Technical Arsenal
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, 
            mobile applications, and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 rounded-2xl group"
            >
              <div className={`h-1 w-full bg-gradient-to-r ${category.color} rounded-full mb-6`} />
              
              <h3 className="text-xl font-orbitron font-bold mb-4 text-center gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="glass-card p-3 rounded-lg text-center cursor-pointer group-hover:neon-glow transition-all duration-300"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
