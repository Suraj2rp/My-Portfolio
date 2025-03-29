import React from "react";
import { motion } from "framer-motion";
import "../styles/Projects.css";

import gestureCraft from "../assets/images/GestureCraft.ico";
import KrishiMitra from "../assets/images/KrishiMitra.png";
import portfolio from "../assets/images/portfolio.png";

const projects = [
  {
    title: "GestureCraft",
    description: "An AI-powered drawing app using hand gestures.",
    image: gestureCraft,
    link: "https://github.com/Suraj2rp/gesturecraft",
  },
  {
    title: "Krishi Mitra",
    description: "AI-powered Agriculture Web Application",
    image: KrishiMitra,
    link: "https://github.com/Suraj2rp/KrishiMitra",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio built with React.",
    image: portfolio,
    link: "#My_Portfolio_LInk",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }} // Scale up slightly on hover
            whileTap={{ scale: 0.98 }} // Add a subtle press-down effect
          >
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-overlay">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-project">
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;
