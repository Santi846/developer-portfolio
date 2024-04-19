// import { useState } from 'react'
import './App.css';
import NavbarComponent from './components/NavBar';
import Home from './components/Home';
import Projects  from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const projectsOffsetTop = document.getElementById('projects').offsetTop;
      const skillsOffsetTop = document.getElementById('skills').offsetTop;

      setShowBackground(scrollTop > projectsOffsetTop && scrollTop < skillsOffsetTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Home></Home>
      <Projects id="projects"></Projects> 
      <div className={showBackground ? 'showBackground' : ''}></div>
      <Skills id="skills"></Skills>
      <Contact></Contact>
    </>
  )
}

export default App
