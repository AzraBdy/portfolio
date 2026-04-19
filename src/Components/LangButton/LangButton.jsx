import { useState, useRef, useEffect } from "react";
import "./LangButton.css";
import { TfiWorld } from "react-icons/tfi";

export default function LangButton({ isTR, onChange }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="lang-dropdown" ref={dropdownRef}>
      <button className="lang-btn" onClick={() => setOpen(!open)}>
        <TfiWorld />
        {isTR ? "TR" : "EN"}
        <span className={`arrow ${open ? "open" : ""}`}>▼</span>
      </button>

      {open && (
        <div className="lang-menu">
          <button
            onClick={() => {
              onChange("en"); 
              setOpen(false);
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              onChange("tr"); 
              setOpen(false);
            }}
          >
            Türkçe
          </button>
        </div>
      )}
    </div>
  );
}