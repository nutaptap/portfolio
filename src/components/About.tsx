import cvpic from "../assets/cvpic.png";
import picEris from "../assets/pic-eris.png";
import mug from "../assets/mug.svg";

function About() {
  return (
    <div className="about">
      <img className="picture" src={cvpic} alt="Nuria" />
      <div>
        <div className="section-title">
          <div className="line" />
          <h4>About me</h4>
        </div>
        <p>
          👋 Hi there, I'm a self-taught frontend developer.
          <br />
          I got interested in development because I’ve always been into building
          things and loved the idea of creating websites and applications.
          <br />
          I'm proficient in HTML, CSS, JavaScript and Typescript, and enjoy
          working with frameworks like React.
          <br />
          I'm passionate about creating apps that can improve people's lives and
          adding little details that make the experience more enjoyable for
          everyone.
          <br />
          I'm always excited to learn new things and improve my skills. When I'm
          not coding, you can find me making illustrations or hanging out with
          my cat Eris.
        </p>
        <button type="button">CV</button>
      </div>
    </div>
  );
}

export default About;
