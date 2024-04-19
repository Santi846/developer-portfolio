import '../assets/ProjectCard.css';
import feelUyImage from '../images/feeluy.png';
import salvajeLifeFitnessImage from '../images/salvajelifefitness.png';

function ProjectCard(prop) {

    let imageSource;
  switch (prop.image) {
    case 'feeluy':
      imageSource = feelUyImage;
      break;
    case 'salvajelifefitness':
      imageSource = salvajeLifeFitnessImage;
      break;
    default:
      imageSource = '';
  }

  return (
    <>
    <div id="card-area" className="project-card">
    <div class= "wrapper">
        <div class="box-area">
            <div class="box">
            <img className="projectCardImage" src={imageSource} alt={prop.image} />
                <a class="overlay" href={prop.link} target="_blank" rel="noopener noreferrer">
                    <h3>{prop.name}</h3>
                    <p>{prop.description}</p>
                    <div>{prop.tech}</div>
                </a>
            </div>
        </div>
    </div>
</div>

    </>
  );
}

export default ProjectCard;