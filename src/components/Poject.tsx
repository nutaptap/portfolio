import { LanguageContext } from "../App";
import { useContext, useEffect, useRef, useState } from "react";
import repo from "../assets/repo.svg";

interface ProjectProps {
  project: {
    title: string;
    text: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
  };
}

function Project(props: ProjectProps) {
  const language = useContext(LanguageContext);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      observer.disconnect();
    }
  };

  const options = {
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <article
      className={isVisible ? "project visible" : "project"}
      ref={containerRef}
    >
      <div>
        <a target="_blank" href={props.project.link}>
          <h3>{props.project.title}</h3>
        </a>
        <p>{props.project.text}</p>
        <div className="tags">
          {props.project.tags.map((tag) => (
            <h5>{tag}</h5>
          ))}
        </div>
      </div>
      <div>
        <a target="_blank" href={props.project.link}>
          <img src={props.project.image} className="project-image" />
        </a>
        <a
          target="_blank"
          className="project-links"
          href={props.project.github}
        >
          <img src={repo}></img>
          GitHub
        </a>
      </div>
    </article>
  );
}

export default Project;
