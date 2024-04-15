import ProjectCard from "./ProjectCard";
import { feelUy, salvajeLifeFitness } from '../data.js';
import '../assets/projects.css';

function Projects() {
  return (
    <>
    <h3 id="projects">Projects</h3>
    <div className="projectsContainer">
      <ProjectCard {...feelUy} ></ProjectCard>
      <ProjectCard {...salvajeLifeFitness} ></ProjectCard>
    </div>
    
    </>
  );
}

export default Projects;