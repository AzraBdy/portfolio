import React, {useState, useRef} from 'react'
import react from "../../Assets/r1.png"
import clinic from "../../Assets/oto1.png"
import Github from "../../Components/Github/Github.jsx"
import "./Skills.css"

const Skills = ({t, setLang}) => {
    const titleRef = useRef(null);
    const [isTR, setIsTR] = useState(true);
  
    const handleLangChange = (lang) => {
      setLang(lang);
      setIsTR(lang === "tr");
    };
  


const skillcards = [
  {
    title: t.skills.subtitle1,
    text: t.skills.subtext1,
    technologies: ["React.js", "Node.js", "Express.js"],
    img: react,
    color:"#2e5286",
  },
  {
    title:t.skills.subtitle2,
    text: t.skills.subtext2,
    technologies: ["Canva", "Figma","Krita"],
    img: null,
    color:"#778873",
  },
     {
    title: t.skills.subtitle3,
    text: t.skills.subtext3,
    technologies: ["Model Training & Evaluation", "Python","OpenAI API / AI tools"],
    img: null,
    color:"#8E7DBE",
  },
  {
    title: t.skills.subtitle4,
    text: t.skills.subtext4,
    technologies: ["REST", "JWT", "Postman"],
    img: clinic,
    color:"#8E7DBE",
  },
  {
title: t.skills.subtitle5,
    text: t.skills.subtext5,
         technologies: ["MSSQL", "PostgreSQL", "MongoDB"],
    img: null,
     color:"#9AB17A",
  },
  {
title: t.skills.subtitle6,
    text: t.skills.subtext6,
    technologies: [".NET"],
    img: clinic,
    accent:"#E36A6A",

  },

];

const SkillsCard = ({ title, text, technologies, img, index }) => {
  const isDark = img !== null;
  return (
    <div className="skill-card">
      <div className="skill-card__accent" />
      <div className="skill-card__content">
        <span className="skill-card__number">0{index + 1}</span>
        <h3 className="skill-card__title">{title}</h3>
        <p className="skill-card__text">{text}</p>
        {Array.isArray(technologies) && (
          <div className="skill-card__technologies">
            {technologies.map((tech, i) => (
              <span key={i} className="skill-card__technology">{tech}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};



  return (
    <section id="skills-section">
      <div className="skills-text-div">
        <div className="skills-heading-div">
          <p className="skills-heading">{t.skills.title}</p>
          <p className="skills-subheading">
            {t.skills.text}
          </p>
        </div>
       {/* <div className="skills-github">
          <Github />
        </div>*/}
      </div>

      <div className="skills-grid">
        {skillcards.map((skill, index) => (
          <SkillsCard
            key={index}
            index={index}
            title={skill.title}
            text={skill.text}
            technologies={skill.technologies}
            img={skill.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;