import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

type ExperienceType = {
  title: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  skills?: string[];
  achievements?: string[];
  logo: string;
};

const experiences: ExperienceType[] = [
  {
    title: "Software Engineer",
    company: "eskalate",
    type: "Internship",
    period: "Aug 2024 - Oct 2024 • 3 mos",
    location: "Adama, Ethiopia • On-site",
    description:
      "Developed the A2SV Application Platform, a scalable web starter project using Next.js, RTK Query, Axios, and Tailwind CSS, improving development efficiency and reducing project delivery time by 30% through Agile sprint planning. Reviewed and optimized 10+ pull requests weekly, ensuring high code quality, maintainability, and adherence to best development practices.",
    skills: [],
    achievements: [],
    logo: "logo/esklet.png",
  },
  {
    title: "Software Developer",
    company: "Adama Science and Technology University ICT Center",
    type: "Internship",
    period: "Jul 2024 - Sep 2024 • 3 mos",
    location: "Adama, Oromia Region • On-site",
    description:
      "Designed and developed a full-stack web application to automate employee performance evaluation, improving efficiency by 60% and ensuring transparency. Built secure authentication and role-based access using Django and REST API to streamline management workflows. Implemented interactive React dashboards for real-time performance tracking, analytics, and report generation.",
    skills: [],
    logo: "logo/astu.png",
  },
  {
    title: "Ambassador",
    company: "e-Learning for Strengthening Higher Education in Ethiopia (e-SHE)",
    type: "Part-time",
    period: "Mar 2025 - Present • 4 mos",
    location: "Remote",
    description:"Serve as an e-SHE ambassador at Adama Science and Technology University (ASTU), collaborating with national and international stakeholders including the Ministry of Education, Mastercard Foundation, and Arizona State University (ASU). Lead initiatives to promote digital learning adoption, gather student feedback to improve platform usability, organize workshops and awareness campaigns, and mentor fellow students. Act as a liaison between students, university administrators, and program partners to support educational technology initiatives and enhance engagement with e-SHE resources.",
    skills: [],
    logo: "logo/e-she.png",
  },
];

export default function Experience() {
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

                  {exp.achievements?.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-neon-cyan mb-2">
                        Achievements:
                      </h4>
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

                  {exp.skills?.length > 0 && (
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
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
