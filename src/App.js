import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar"; 
import Home from "./components/Home"; 
import Projects from "./components/Projects"; 
import Contact from "./components/Contact"; 
import Skills from "./components/Skills";
import About from "./components/About";
import Footer from "./components/Footer"; // Import Footer
import "./App.css"; // Ensure correct path

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer /> {/* Add Footer at the bottom */}
      </Router>
    </div>
  );
};

export default App;
