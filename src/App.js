import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { translations } from "./translations";

import Navbar from './Components/Navbar/Navbar.jsx'
import Textbar from './Pages/Textbar/Textbar.jsx'
import Footer from './Components/Footer/Footer.jsx'
import TopTitle from './Components/TopTitle/TopTitle.jsx'



import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Skills from './Pages/Skills/Skills.jsx'

import Education from './Pages/Education/Education.jsx';


function App() {
    const [lang, setLang] = useState("en");

  const t = translations[lang];
  return (
    
    <div className="App">
      <Navbar t={t} setLang={setLang} />
            <Home t={t} setLang={setLang}/>
            <About  t={t} setLang={setLang}/>
                        <Education t={t} setLang={setLang}/>

     <Skills t={t} setLang={setLang} />

       
        <Footer t={t} setLang={setLang} />
  
    </div>
  );
}

export default App;
