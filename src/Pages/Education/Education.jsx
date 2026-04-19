import React, {useState} from "react";
import "./Education.css";

const Education = ({ t, setLang }) => {
      const [isTR, setIsTR] = useState(true);
      const handleLangChange = (lang) => {
        setLang(lang);
        setIsTR(lang === "tr");
      };


const cards = [
  {
      id: "software",
    number: "01",
    title: t.education.titleSw,
    text: t.education.textSw,
    accent: "#2e5286",
    techs: ["Algorithm", "C#", "Python", "SQL"],
  },
  {
       id: "system",
    number: "02",
    title: t.education.titleSD,
    text: t.education.textSD,
    accent: "#778873",
    techs: ["Arena", "Matlab", "Aris"],
  },
  {
    id: "marketing",
    number: "03",
    title: t.education.titleBD,
    text: t.education.textbd,
    accent: "#8E7DBE",
    techs: ["Excel", "Orange"],
  },
];


  return (
    <section id="education">
      <div className="edu-wrapper">

        <div className="edu-header">
                    <p className="edu-heading">{t.education.title}</p>

          <p className="edu-subtext">
         {t.education.subtext}
          </p>
        </div>

        <div className="edu-cards">
          {cards.map((card) => (
            <div
              key={card.id}
              className="edu-card"
              style={{ "--accent": card.accent }}
            >
              <div className="edu-card-side">
                <span className="edu-card-number" style={{ color: card.accent }}>
                  {card.number}
                </span>
                <div className="edu-techs">
                  {card.techs.map((t) => (
                    <span
                      key={t}
                      className="edu-tech"
                      style={{
                        borderColor: card.accent,
                        color: card.accent,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className="edu-card-divider"
                style={{ backgroundColor: card.accent }}
              />

              <div className="edu-card-body">
                <h2
                  className="edu-card-title"
                  style={{ color: card.accent }}
                >
                  {card.title}
                </h2>
                <p className="edu-card-text">{card.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;