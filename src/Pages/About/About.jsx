import React, { useEffect, useState } from "react";
import logo from "../../Assets/myself.jpg";
import react from "../../Assets/react.png";
import arena from "../../Assets/arena.png";
import excel from "../../Assets/excel.png";
import git from "../../Assets/git.png";
import mongo from "../../Assets/mongo.png";
import postgre from "../../Assets/postgre.png";
import tailwind from "../../Assets/tailwind.png";
import figma from "../../Assets/figma.png";
import canva from "../../Assets/canva.png";
import node from "../../Assets/nodejs.png";
import express from "../../Assets/expressjs.png";
import aris from "../../Assets/aris.png";
import postman from "../../Assets/postman.png";


import "./About.css";

export default function About({ t, setLang }) {
        const [isTR, setIsTR] = useState(true);

          const handleLangChange = (lang) => {
        setLang(lang);
        setIsTR(lang === "tr");
      };


const SKILLS = [
  { label: "JavaScript", pct: 80 },
  { label: "C#", pct: 40 },
  { label: "Python", pct: 30 },
];

const LANGUAGES = [
  { label: t.about.langText1, pct: 100 },
  { label: t.about.langText2, pct: 80 },
  { label: t.about.langText3, pct: 20 },
];

const TOOLS = [
  { src: react, name: "React" },
  { src: express, name: "Express" },
    { src: postman, name: "Postman" },
  { src: node, name: "Node.js" },
  { src: postgre, name: "PostgreSQL" },
  { src: mongo, name: "MongoDB" },
  { src: git, name: "Git" },
  { src: tailwind, name: "Tailwind" },
  { src: excel, name: "Excel" },
  { src: arena, name: "Arena" },
    { src: aris, name: "Aris" },
  { src: figma, name: "Figma" },
  { src: canva, name: "Canva" },
    { src: canva, name: "Canva" },

];



  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("revealed")),
      { threshold: 0.12 }
    );
    
    

    document.querySelectorAll(".ab-reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section">
      <div className="ab-grain" aria-hidden="true" />

      <div className="ab-container">

        <div className="ab-header ab-reveal">
        </div>

        <div className="ab-bio-card ab-reveal">
          <img src={logo} alt="Azra Baday" className="ab-avatar" />
          <div className="ab-bio-text">
            <p className="ab-bio-greeting"> {t.about.infoTitle}</p>
            <p className="ab-bio-body">
           {t.about.infoText}
            </p>
          </div>
        </div>

        <div className="ab-two-col">

          <div className="ab-card ab-card--edu ab-reveal">
            <div className="ab-card-label-edu"> {t.about.titleEdu}</div>
            <h2 className="ab-card-title">
              {t.about.titleEdu2}
            </h2>
            <p className="ab-card-meta"> {t.about.titleEdu3}</p>

            <div className="ab-card-block">
              <span className="ab-accent-edu">✦</span>
              <div>
                <p className="ab-block-heading">{t.about.subtitleEdu1}</p>
                <p className="ab-block-body">
             {t.about.subtextEdu1}
                </p>
              </div>
            </div>

            <div className="ab-card-block">
              <span className="ab-accent-edu">✦</span>
              <div>
                <p className="ab-block-heading">{t.about.subtitleEdu2}</p>
                <p className="ab-block-body">
          {t.about.subtextEdu2}
                </p>
              </div>
            </div>
          </div>

          <div className="ab-card ab-card--exp ab-reveal">
            <div className="ab-card-label-ex">{t.about.titleEx}</div>
            <h2 className="ab-card-title">
             {t.about.titleEx2}
            </h2>
            <p className="ab-card-meta">{t.about.titleEx3}</p>

            <div className="ab-card-block">
              <span className="ab-accent-ex">✦</span>
              <div>
                <p className="ab-block-heading"> {t.about.subtitleEx1}</p>
                <p className="ab-block-body">
                 {t.about.subtextEx1}
                </p>
              </div>
            </div>

            <div className="ab-card-block">
              <span className="ab-accent-ex">✦</span>
              <div>
                <p className="ab-block-body">
                 {t.about.subtextEx2}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="ab-skills-row">

          <div className="ab-skill-card ab-reveal">
            <div className="ab-card-label-lg">{t.about.langTitle}</div>
            {LANGUAGES.map(({ label, pct }) => (
              <div className="ab-bar-item" key={label}>
                <div className="ab-bar-header">
                  <span className="ab-bar-name">{label}</span>
                  <span className="ab-bar-pct">{pct}%</span>
                </div>
                <div className="ab-track">
                  <div
                    className="ab-fill"
                    style={{ "--bar-w": `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="ab-skill-card ab-reveal">
            <div className="ab-card-label-pr">{t.about.prTitle}</div>
            {SKILLS.map(({ label, pct }) => (
              <div className="ab-bar-item" key={label}>
                <div className="ab-bar-header">
                  <span className="ab-bar-name">{label}</span>
                  <span className="ab-bar-pct">{pct}%</span>
                </div>
                <div className="ab-track">
                  <div
                    className="ab-fill ab-fill--alt"
                    style={{ "--bar-w": `${pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ab-tools-section ab-reveal">
          <div className="ab-card-label-tools">{t.about.toolsTitle}</div>
          <div className="ab-tools-grid">
            {TOOLS.map(({ src, name }) => (
              <div className="ab-tool-chip" key={name}>
                <img src={src} alt={name} />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}