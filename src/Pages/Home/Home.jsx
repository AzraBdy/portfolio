import React, { useEffect, useRef, useState } from "react";
import "./Home.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Home = ({t, setLang}) => {
  const titleRef = useRef(null);
  const [isTR, setIsTR] = useState(true);

  const handleLangChange = (lang) => {
    setLang(lang);
    setIsTR(lang === "tr");
  };


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="home-section">

      <div className="grain-overlay" aria-hidden="true" />

      <div className="deco-line" aria-hidden="true" />

      <div className="home-status-bar reveal">
        <span className="status-dot" />
        <span>{t.home.subtext1}</span>
        <span className="status-divider">—</span>
        <span>MIS</span>
      </div>

      <div className="home-hero">

        <div className="home-title-wrap reveal" ref={titleRef}>
          <h1 className="home-mega-title">
            <span className="title-port">PORT</span>
            <span className="title-folio">FOLIO</span>
          </h1>

          <div className="title-badge">
            <span>✦</span> {t.home.subtext2}
          </div>
        </div>

        <div className="home-right-col">
          <p className="home-tagline reveal">
           {t.home.text1}
          </p>

          <div className="home-divider reveal" aria-hidden="true" />

          <p className="home-bio reveal">
           {t.home.text2}
          </p>

          <div className="home-cv-row reveal">
            <a
               href="/AzraBADAY-CV(EN).pdf"
              target="_blank"
              className="cv-btn cv-btn--primary"
            >
              CV <span className="cv-lang">EN</span>
              <span className="cv-arrow">↗</span>
            </a>
            <a
              href="/AzraBADAY-CV(TR).pdf"
              target="_blank"
              className="cv-btn cv-btn--secondary"
            >
              CV <span className="cv-lang">TR</span>
              
              <span className="cv-arrow">↗</span>
            </a>
          </div>
        </div>
      </div>

      

      <div className="home-footer-bar reveal">
        <div className="home-social-row">
          <a
            href="https://www.linkedin.com/in/azrabaday"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/azrabdy"
            target="_blank"
            rel="noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href="mailto:azrabadayis@gmail.com"
            className="social-link"
            aria-label="Email"
             target="_blank"
          >
            <IoIosMail />
            <span>Mail</span>
          </a>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>Scroll</span>
          <span className="scroll-line" />
        </div>
      </div>
    </div>
  );
};

export default Home;