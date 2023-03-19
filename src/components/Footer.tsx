import github from "../assets/github.svg";
import linkedin from "../assets/linkedin.svg";
import up from "../assets/arrow-up.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <a target="_blank">
          <img src={github}></img>
        </a>
        <a target="_blank">
          <img src={linkedin}></img>
        </a>
      </div>
      <a href="#app" className="up">
        <img src={up}></img>
      </a>
    </div>
  );
}

export default Footer;
