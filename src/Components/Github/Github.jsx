import React from 'react'
import { FaGithub } from "react-icons/fa";

import "./Github.css"


const Github = () => {
  return (
    <div className="github-component">
   
 <div className="github-div">
    <a 
      href="https://github.com/azrabdy"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaGithub />
    </a>
  </div>



    </div>
  )
}

export default Github