import Project from "./Project";
import { useSelector } from "react-redux";
import { selectNewProject } from "../Features/craftSlice";

const ProjectList = () => {
  // selectors
  const projects = useSelector(selectNewProject);

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
            modal={project.modal}
            counter={project.counter}
          />
        ))}
      </ul>
    </section>
  );
};

export default ProjectList;
