import "../assets/Home.css";

function Home(lang) {
    return (
      <>
      <div className="paragraph" id="homeParagraph">Hi, I am a freelance web developer, who develops in a self-taught way,</div>
      <div className="secondParagraph">having previously graduated as a network and software technician.</div>

      {/* {lang === 'es' ? <div className="paragraph" id="homeParagraph">Hi, I am a freelance web developer, who develops in a self-taught way,<br /> having previously graduated as a network and software technician.</div> : <div className="paragraph" id="homeParagraph">Hola, soy un desarrollador web independiente, que se desarrolla de forma autodidacta,<br /> habiendo obtenido previamente el título de técnico en redes y software.</div>} */}
      </>
    );
  }

export default Home;