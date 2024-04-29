
import './App.css';
import NavbarComponent from './components/NavBar';
import Home from './components/Home';
import Projects  from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { detectLanguage } from './utils/languageDetector';

function App() {
  const language = detectLanguage();

  return (
    <>
    <html lang={language}>
      <NavbarComponent></NavbarComponent>
      <Home />
      <Projects></Projects> 
      <div className="appContainer">
      <Skills />
      </div>
      <Contact></Contact>
    </html>
    </>
  )
}

export default App
