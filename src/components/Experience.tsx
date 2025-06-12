
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Ambassador",
      company: "e-Learning for Strengthening Higher Education in Ethiopia (e-SHE)",
      type: "Part-time",
      period: "Mar 2025 - Present • 4 mos",
      location: "Remote",
      description: "Serving as an e-SHE Ambassador for the Ministry of Education, promoting digital learning initiatives and strengthening higher education infrastructure across Ethiopia.",
      skills: ["Leadership", "Educational Technology", "Community Engagement"],
      logo: "/lovable-uploads/1886655d-c773-4120-ba3e-940af4ea4d68.png"
    },
    {
      title: "Web Developer",
      company: "Prodigy InfoTech",
      type: "Internship",
      period: "Aug 2024 - Oct 2024 • 3 mos",
      location: "Maharashtra, India • Remote",
      description: "Developed responsive web applications using modern frontend technologies. Collaborated with cross-functional teams to deliver high-quality user interfaces and enhanced user experiences.",
      skills: ["Front-End Development", "JavaScript", "React", "Responsive Design"],
      achievements: ["helped me get this job"],
      logo: "/lovable-uploads/27af02be-e6cb-4fd5-91bd-ecfb767717c1.png"
    },
    {
      title: "Web Developer",
      company: "Adama Science and Technology University",
      type: "Internship",
      period: "Jul 2024 - Sep 2024 • 3 mos",
      location: "Adama, Oromia Region • On-site",
      description: "As a Frontend Web Developer Intern at the ASTU ICT Center, I leveraged my expertise in HTML, CSS, JavaScript, and frontend frameworks to design and implement engaging user interfaces for the organization's web applications.",
      skills: ["Teamwork", "JavaScript", "HTML", "CSS", "Frontend Frameworks"],
      logo: "/lovable-uploads/2aa77a48-1b48-4964-8622-5284de82607c.png"
    }
  ];

  return (
    <section className="py-20 relative" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text mb-6">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My professional journey and hands-on experience in web development
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl hover:neon-glow transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Company Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border-2 border-neon-cyan/30 flex items-center justify-center glass-card">
                    <img 
                      src={exp.logo} 
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-orbitron font-bold text-neon-purple mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-foreground mb-1">
                        {exp.company} • {exp.type}
                      </p>
                    </div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {exp.achievements && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neon-cyan mb-2">Achievements:</h4>
                      <ul className="text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <ExternalLink className="w-3 h-3 text-neon-cyan" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-neon-cyan/20 text-neon-cyan text-sm rounded-full border border-neon-cyan/30"
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
