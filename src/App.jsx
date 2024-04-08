// import { useState } from 'react'
import './App.css';
import NavbarComponent from './components/NavBar';
import Home from './components/Home';
import Projects  from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <Home></Home>
      <Projects></Projects> 
      <Skills></Skills>
      <Contact></Contact>
    </>
  )
}

export default App
