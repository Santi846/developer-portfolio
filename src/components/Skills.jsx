import '../assets/skills.css';

const skills = [
  { name: 'Javascript, React + Vite and MUI', dataText: 'React' },
  { name: 'Laravel + Eloquent', dataText: 'Laravel' },
  { name: 'MySQL, SQL Server', dataText: 'SQL' },
  { name: 'C#, .Net', dataText: 'C#' },
  { name: 'English', dataText: 'English' },
  { name: 'Git + GitHub', dataText: 'Git' },
];

const skillClassMapping = {
  React: 'react',
  Laravel: 'php',
  SQL: 'mysql',
  'C#': 'csharp',
  English: 'English',
  Git: 'git',
};

function Skills() {
  return (
    <>
      <div className="skillsWrapper">
        <div className="skillsContainer">
          <h3 className="skillsTitle" id="mySkills">My Skills</h3>
          <p className='cv'>For more information, view my <a href="https://drive.google.com/drive/folders/1TjRQayUYqvHCuNjDBvnvGW9Y0gKSXTp6?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></p>
            {skills.map((skill, index) => (
              <span
              // className={`skillCircle ${skill.dataText.toLowerCase()}`}
              className={`skillCircle ${skillClassMapping[skill.dataText]}`}
              data-text={skill.dataText}
            ></span>
            ))}
        </div>
      </div>
    </>
  );
}

export default Skills;