import ProjectCard from "./ProjectCard";
import { feelUy, salvajeLifeFitness } from '../data.js';
import '../assets/projects.css';

function Projects() {
  return (
    <>
    <h3 id="projects">My Projects</h3>
    <h4>Deployed</h4>
    <div className="projectsContainer">
      <ProjectCard {...feelUy} ></ProjectCard>
      <ProjectCard {...salvajeLifeFitness} ></ProjectCard>
    </div>
    <a className="repositoriesLink" href="https://github.com/Santi846?tab=repositories">See more → Repositories</a>
    </>
  );
}

export default Projects;