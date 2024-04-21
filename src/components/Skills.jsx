import '../assets/skills.css';

function Skills() {
  return (
    <>
      <div className="skillsWrapper">
        <div className="skillsContainer">
          <h3 className="skillsTitle">Skills</h3>
          <ul>
            <li>
              Javascript, React + Vite and MUI
              <span className="skillCircle react"></span>
            </li>
            <li>
              PHP, Laravel + Eloquent
              <span className="skillCircle php"></span>
            </li>
            <li>
              MySQL, SQL Server
              <span className="skillCircle mysql"></span>
            </li>
            <li>
              C#, .Net
              <span className="skillCircle csharp"></span>
            </li>
            <li>
              Docker
              <span className="skillCircle docker"></span>
            </li>
            <li>
              Git + GitHub
              <span className="skillCircle git"></span>
            </li>
          </ul>
        </div>
        <div className="skillsBackground"></div>
      </div>
    </>
  );
}

export default Skills;