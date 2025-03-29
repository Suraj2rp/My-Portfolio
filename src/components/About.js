import React, { useState } from "react";
import "../styles/About.css";
import profileImg from "../assets/images/profile.jpg"; // Add your profile image
import resumePDF from "../assets/file/resume.pdf"; // Add your resume file
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="about">
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            Hi, I'm <strong>Suraj</strong>, a passionate web developer skilled in front-end and back-end technologies.
            I love solving problems, designing intuitive UI/UX, and constantly learning new things.
          </p>
          <ul className="about-list">
            <li>💻 Full-Stack Web Development</li>
            <li>🚀 Passionate About Problem-Solving</li>
            <li>🎨 Creative UI/UX Design</li>
            <li>📚 Always Learning & Exploring</li>
          </ul>

          {/* Action Buttons */}
          <div className="about-actions">
            <button className="btn" onClick={() => setShowResume(!showResume)}>
              {showResume ? "Hide Resume" : "View Resume"}
            </button>
            <a href={resumePDF} download="Suraj_Resume.pdf" className="btn">
              Download Resume
            </a>

            {/* Social Links */}
            <div className="social-links">
              <a href="https://github.com/Suraj2rp" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/suraj-prajapati-18815a262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/SPrajapati54529?t=QeoOo0FuK39vtdZNA-ePmA&s=08" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Display at the Bottom */}
      {showResume && (
        <div className="resume-container">
          <iframe src={resumePDF} title="Resume" />
        </div>
      )}
    </section>
  );
};

export default About;
