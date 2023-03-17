import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";

function Intro() {
  return (
    <div className="intro">
      <h4>Hi, my name is</h4>
      <h2>Nuria</h2>
      <h2>Fernández Granell</h2>
      <h3>I'm a creative frontend developer</h3>
      <div className="intro-divider" />
      <div className="intro-links">
        <a target="_blank">
          <img src={github}></img>
        </a>
        <a target="_blank">
          <img src={linkedin}></img>
        </a>
      </div>
    </div>
  );
}

export default Intro;
