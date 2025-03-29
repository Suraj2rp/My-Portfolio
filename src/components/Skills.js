import React from "react";
import "../styles/Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";


const skills = [
  { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },      // Orange-Red
  { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },     // Blue
  { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },   // Yellow
  { name: "React", icon: <FaReact color="#61DAFB" /> },     // Light Blue
  { name: "Node.js", icon: <FaNodeJs color="#68A063" /> },  // Green
  { name: "Express.js", icon: <SiExpress color="#000000" /> }, // Black
  { name: "MongoDB", icon: <SiMongodb color="#47A248" /> }, // Green
  { name: "Python", icon: <FaPython color="#3776AB" /> },   // Blue
  { name: "Git", icon: <FaGitAlt color="#F05032" /> }       // Red-Orange
];

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="Skilltag">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <span className="skill-icon">{skill.icon}</span>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
