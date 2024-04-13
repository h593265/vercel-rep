import logo from './logo.svg';
import './App.css';
import Main from './components/main';
import Navbar from './components/navbar';
import Home from './components/home';
import About from './components/about';
import React, { useRef } from 'react';
import { useEffect } from 'react';
import Contact from './components/contact';
import Projects from './components/projects';




function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectstRef = useRef(null);
  const contactRef = useRef(null);
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    
  }, []);

  function scrollTo(ref, e) {
    if (ref === 'home' && homeRef.current) {
      e.preventDefault();
      homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (ref === 'about' && aboutRef.current) {
      e.preventDefault();
      aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }else if (ref === 'contact' && contactRef.current) {
      e.preventDefault();
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  else if (ref === 'projects' && projectstRef.current) {
    e.preventDefault();
    projectstRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  }

  return (
    <><Navbar func={scrollTo} /><div className="App">

      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectstRef} />
      <Contact ref={contactRef} />
    </div></>
  );
}

export default App;
