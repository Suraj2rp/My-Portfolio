import React from "react";
import "../styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <p>Designed and Developed by 
            @Suraj_Pajapati</p>

       
        <br/>

        {/* Right - Social Media */}
        <div className="footer-social">
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
    </footer>
  );
};

export default Footer;
