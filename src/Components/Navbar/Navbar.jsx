import React, { useState } from 'react';
import "./Navbar.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import LangButton from "../../Components/LangButton/LangButton.jsx";
import logo from "../../Assets/logo3.png";

export default function Navbar({ t, setLang }) {
  const [isTR, setIsTR] = useState(true);

  const handleLangChange = (lang) => {
    setLang(lang);
    setIsTR(lang === "tr");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if(element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  }
  return (
    <header className="topTitle-div">
            <div className="grain-overlay" aria-hidden="true" />

      <div className="topTitle-lang">
        <LangButton isTR={isTR} onChange={handleLangChange} />
      </div>

      <div className="topTitle-hero">
        <h1 className="topTitle-hero-h1">AZRA BADAY</h1>
      </div>

      <nav className="main-navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#about" onClick={() => scrollToSection("about-section")} className="nav-link"> {t.navbar.about} </a> 
          </li>
          <li className="nav-item">
            <a href="#skills" onClick={() => scrollToSection("skills-section")} className="nav-link">{t.navbar.skills}</a>
          </li>
          <li className="nav-item">
            <a href="#contact" onClick={() => scrollToSection("footer-section")} className="nav-link">{t.navbar.contact}</a>
          </li>  
        </ul>
      </nav>

 
    </header>
  );
}