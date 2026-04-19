import React, { useState } from "react";
import logo from "../../Assets/logo3.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./Footer.css";

export default function Footer({ t, setLang }) {
  const [isTR, setIsTR] = useState(true);

  const handleLangChange = (lang) => {
    setLang(lang);
    setIsTR(lang === "tr");
  };

  return (
    <section id="footer-section">
    <footer className="footer-section">

      <h1 className="footer-title">{t.footer.title}</h1>

      <div className="footer-divider" />

      <div className="footer-container">

        <div className="footer-hero">
          <img src={logo} alt="logo" className="footer-logo" />
          <div className="footer-hero-text">
            <span className="footer-hero-name">Azra BADAY</span>
            <p className="footer-hero-p">{t.footer.subText}</p>
          </div>
        </div>

        <div className="footer-contact">
          <h3 className="footer-contact-heading">{t.footer.heading}</h3>
          <ul className="footer-links">
            <li>
              <a
                href="https://www.linkedin.com/in/azrabaday"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaLinkedin className="footer-link-icon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/azrabdy"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                <FaGithub className="footer-link-icon" />
                GitHub
              </a>
            </li>
            <li>
              <a href="mailto:azrabadayis@gmail.com" className="footer-link">
                <IoIosMail className="footer-link-icon" />
                azrabadayis@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <span>© 2026 Azra BADAY — All rights reserved</span>
        <div className="footer-lang">
          <button
            className={`footer-lang-btn ${isTR ? "active" : ""}`}
            onClick={() => handleLangChange("tr")}
          >
            TR
          </button>
          <span className="footer-lang-sep">/</span>
          <button
            className={`footer-lang-btn ${!isTR ? "active" : ""}`}
            onClick={() => handleLangChange("en")}
          >
            EN
          </button>
        </div>
      </div>

    </footer>
    </section>
  );
}