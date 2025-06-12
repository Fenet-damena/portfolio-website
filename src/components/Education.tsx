
import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar, MapPin } from 'lucide-react';

export function Education() {
  const educationData = [
    {
      title: "Data Structures and Algorithms",
      organization: "A2SV | Africa to Silicon Valley",
      period: "Jan 2024 - Nov 2024",
      location: "Remote",
      icon: "/lovable-uploads/1886655d-c773-4120-ba3e-940af4ea4d68.png",
      description: "While at the A2SV Foundation, I participated in an intensive Data Structures and Algorithms training program that deepened my understanding of core concepts. Through hands-on coding challenges and problem-solving sessions, I enhanced my skills in data structures, algorithm optimization, and dynamic programming. Collaborating with peers and mentors further improved my critical thinking, coding efficiency, and ability to tackle complex technical challenges.",
      skills: ["Data Structures", "Algorithm Optimization", "Dynamic Programming", "Problem Solving", "Critical Thinking"]
    },
    {
      title: "Software Engineering",
      organization: "Adama Science and Technology University",
      period: "Mar 2022 - Present",
      location: "Adama, Oromia Region • On-site",
      icon: "/lovable-uploads/27af02be-e6cb-4fd5-91bd-ecfb767717c1.png",
      description: "I am pursuing a Software Engineering degree at Adama Science and Technology University, one of Ethiopia's leading universities. While maintaining strong academic performance, My studies cover key areas such as programming, data structures, databases, and software development. Additionally, I engage in hands-on projects and coding challenges to enhance my technical and problem-solving skills.",
      skills: ["Programming", "Data Structures", "Databases", "Software Development", "Project Management"]
    },
    {
      title: "ALX Software Engineering Program",
      organization: "ALX Africa",
      period: "2023 - 2024",
      location: "Remote",
      icon: BookOpen,
      description: "Completed the rigorous ALX Software Engineering program, gaining comprehensive knowledge in full-stack development, system design, and collaborative software development practices. The program emphasized practical skills through real-world projects and peer learning.",
      skills: ["Full-Stack Development", "System Design", "Collaboration", "Project-Based Learning"]
    }
  ];

  return (
    <section className="py-20 relative" id="education">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My educational journey in technology and software engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon/Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-neon-cyan/30 flex items-center justify-center glass-card">
                    {typeof edu.icon === 'string' ? (
                      <img 
                        src={edu.icon} 
                        alt={edu.organization}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <edu.icon className="w-8 h-8 text-neon-cyan" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold text-neon-purple mb-2">
                        {edu.title}
                      </h3>
                      <p className="text-lg font-semibold text-foreground mb-2">
                        {edu.organization}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {edu.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-neon-purple/20 text-neon-purple text-sm rounded-full border border-neon-purple/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
