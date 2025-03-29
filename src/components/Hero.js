import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <h2>Hi, I'm <span>Suraj</span></h2>
      <p>Frontend Developer | React Enthusiast</p>
      <a href="#projects" className="btn">View Projects</a>
    </section>
  );
};

export default Hero;
