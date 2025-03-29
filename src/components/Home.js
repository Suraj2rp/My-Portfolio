import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Home.css";
import profilePic from "../assets/images/profile.jpg"; // Ensure correct path
import Skills from "./Skills";
import "../App.css";

const Home = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const fullText = "Hi, I'm Suraj";
  const typingSpeed = 150;
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
        setIsTyping(false);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home">
      <div className="content fade-in">
        <img src={profilePic} alt="Profile" className="profile-pic bounce" />

        <h1 className={`typing-text ${!isTyping ? "hide-cursor" : ""}`}>
          {text}
          {isTyping && <span className="cursor">|</span>}
        </h1>

        <h2 className="aspiring">
          Aspiring <span>Web Developer</span>
        </h2>

        <p className="intro">
          Passionate about building interactive web experiences and solving
          complex problems with code.
        </p>

        {/* Fix: Use navigate function */}
        <button onClick={() => navigate("/projects")} className="btn">
          View My Work
        </button>

        <div className="social-links tt" >
          <a
            href="https://github.com/Suraj2rp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/suraj-prajapati-18815a262?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <Skills />
    </section>
  );
};

export default Home;
