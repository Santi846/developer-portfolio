import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './pages/About';
import Contact from './pages/Contact';
import Education from './pages/Education';
import Experience from './pages/Experience';
import ProjectDetail from './pages/ProjectDetail';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Talks from './pages/Talks';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<About />} />
        <Route path="habilidades" element={<Skills variant="tech" />} />
        <Route path="habilidades/herramientas" element={<Skills variant="tools" />} />
        <Route path="proyectos" element={<Projects />} />
        <Route path="proyectos/:slug" element={<ProjectDetail />} />
        <Route path="experiencia" element={<Experience />} />
        <Route path="educacion" element={<Education />} />
        <Route path="presentaciones" element={<Talks />} />
        <Route path="contacto" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
