import React from 'react'
import logo from "../../Assets/logo3.png"
import '../../index.css';
import './TopTitle.css';

import LangButton from "../../Components/LangButton/LangButton.jsx"


const TopTitle = () => {
  return (
    <div className="topTitle-div">
        <div className="topTitle-lang">
             <LangButton/>
        </div>


      <nav className="main-navbar">
        <ul className="nav-list">
          <li className="nav-item"><a href="#" className="nav-link">about me</a></li>
          <li className="nav-item"><a href="#" className="nav-link">skills</a></li>
          <li className="nav-item"><a href="#" className="nav-link">contact</a></li>
        </ul>
      </nav>
               


        
       </div>
  )
}

export default TopTitle