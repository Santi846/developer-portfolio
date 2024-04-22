import React from "react";
import '../assets/contact.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <>
    <div className="find">
    <h3 id="findMe">Find me</h3>
      <div>
        <a href="https://www.linkedin.com/in/santiago-arocha-64960b202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/Santi846" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
      </div>
    </div>
      
    </>
  );
}

export default Contact;
