import Project from "./Project";
import { useSelector } from "react-redux";
import { selectProject } from "../Features/craftSlice";

const ProjectList = () => {
  // selectors
  const projects = useSelector(selectProject);

  return (
    <section className="project-list-container">
      <ul className="project-list">
        {projects.map((project) => (
          <Project
            project={project}
            key={project.id}
            name={project.name}
            type={project.type}
            description={project.description}
            completed={project.completed}
            counter={project.counter}
            id={project.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
