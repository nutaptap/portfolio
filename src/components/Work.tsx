import repo from "../assets/repo.svg";

function Work() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

  return (
    <div className="work">
      <div className="section-title">
        <div className="line" />
        <h4>Work</h4>
      </div>
      <div className="projects-container">
        <article className="project">
          <div>
            <a target="_blank">
              <h3>Portfolio</h3>
            </a>
            <p>{lorem}</p>
            <div className="tags">
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
            </a>
          </div>
        </article>

        <article className="project">
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
            </a>
          </div>
          <div>
            <a target="_blank">
              <h3>Habit tracker</h3>
            </a>
            <p>{lorem}</p>
            <div className="tags">
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
        </article>

        <article className="project">
          <div>
            <a target="_blank">
              <h3>Pomoglobo</h3>
            </a>
            <p>{lorem}</p>
            <div className="tags">
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
            </a>
          </div>
        </article>

        <article className="project">
          <div>
            <img src="https://picsum.photos/450/300?grayscale" />
            <a target="_blank">
              <img src={repo}></img>
              <h4>GitHub</h4>
            </a>
          </div>
          <div>
            <a target="_blank">
              <h3>Cook that!</h3>
            </a>
            <p>{lorem}</p>
            <div className="tags">
              <h4>Typescript</h4>
              <h4>React</h4>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default Work;
