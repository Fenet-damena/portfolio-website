"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, User } from "lucide-react";
import { ElementType } from "react";
import { BookOpen } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  icon?: ElementType;
  image?: string;
  color: string;
  gradient: string;
  codeLink: string;
  liveLink: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "ShopAlly",
      description:
        "ShopAlly is a multi-platform shopping assistant with a powerful web frontend built using Next.js and Tailwind CSS. I developed the web frontend, enabling users to compare products, set alerts, and manage shopping preferences through an intuitive interface connected to a Go backend API.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Go", "API Integration"],
      image: "/projectlogo/shopally.png",
      color: "text-neon-cyan",
      gradient: "from-cyan-500 to-blue-500",
      codeLink: "https://github.com/Fenet-damena/job-listing-app",
      liveLink: "https://shop-ally-ai.vercel.app/",
    },
    {
      title: "BarsiisaaApp",
      description:
        "BarsiisaaApp is an interactive web-based bilingual educational platform helping children learn Afaan Oromo and English through text-to-speech, phonetic guides, and engaging games. I built the web version using React and TypeScript, integrating the Web Speech API for audio pronunciation.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Web Speech API", "Shadcn/UI"],
      icon: BookOpen,
      color: "text-neon-purple",
      gradient: "from-purple-500 to-pink-500",
      codeLink: "https://github.com/Fenet-damena/BarsiisaaApp",
      liveLink: "https://barsiisaa-app.vercel.app/",
    },
    {
      title: "Personal Portfolio",
      description:
        "A visually dynamic and responsive personal portfolio website showcasing my projects, technical skills, and experiences. Built with React, Framer Motion, and Tailwind CSS, integrating a contact API to receive messages directly from visitors.",
      tech: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "API Integration"],
      icon: User,
      color: "text-neon-green",
      gradient: "from-green-500 to-emerald-500",
      codeLink: "https://github.com/Fenet-damena/my-portfolio",
      liveLink: "https://fenet-damena.vercel.app/",
    },
  ];

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        {/* Header */}
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
            A showcase of my most impactful web projects — combining creativity, full-stack logic, and real-world functionality.
          </p>
        </motion.div>

        {/* Projects Grid */}
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
                transition: { duration: 0.3 },
              }}
              className="glass-card p-6 rounded-2xl group relative overflow-hidden"
            >
              {/* Hover Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />

              <div className="relative z-10">
                {/* Icon or Image */}
                <div className={`inline-flex p-3 rounded-full glass-card mb-4 ${project.color}`}>
                  {project.icon ? (
                    <project.icon className="w-8 h-8" />
                  ) : project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                  ) : null}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-orbitron font-bold mb-3 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
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

                {/* Buttons */}
                <div className="flex space-x-4">
                  <motion.a
                    href={project.codeLink || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-neon-purple hover:text-neon-cyan transition-colors duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span className="text-sm font-medium">Code</span>
                  </motion.a>

                  <motion.a
                    href={project.liveLink.startsWith("http") ? project.liveLink : `https://${project.liveLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-neon-cyan hover:text-neon-pink transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
