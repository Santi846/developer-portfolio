import '../assets/skills.css';

const skills = [
  { name: 'Javascript, React + Vite and MUI', dataText: 'React' },
  { name: 'Laravel + Eloquent', dataText: 'Laravel' },
  { name: 'MySQL, SQL Server', dataText: 'SQL' },
  { name: 'C#, .Net', dataText: 'C#' },
  { name: 'Docker', dataText: 'Docker' },
  { name: 'Git + GitHub', dataText: 'Git' },
];

const skillClassMapping = {
  React: 'react',
  Laravel: 'php',
  SQL: 'mysql',
  'C#': 'csharp',
  Docker: 'docker',
  Git: 'git',
};

function Skills() {
  return (
    <>
      <div className="skillsWrapper">
        <div className="skillsContainer">
          <h3 className="skillsTitle" id="mySkills">My Skills</h3>
          <p>For more information, get my CV</p>
            {skills.map((skill, index) => (
              <span
              // className={`skillCircle ${skill.dataText.toLowerCase()}`}
              className={`skillCircle ${skillClassMapping[skill.dataText]}`}
              data-text={skill.dataText}
            ></span>
            ))}
        </div>
        <div className="skillsBackground"></div>
      </div>
    </>
  );
}

export default Skills;