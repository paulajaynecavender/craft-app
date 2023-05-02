import Project from "./Project";
import { useSelector } from "react-redux";
import { selectNewProject } from "../Features/craftSlice";

const ProjectList = () => {
  // selectors
  const projects = useSelector(selectNewProject);

  return (
    <section className="project-list-container">
      <ul className="project-list">
        {projects && projects.map((project) => <p>{project.name}</p>)}
        {/* <Project /> */}
      </ul>
    </section>
  );
};

export default ProjectList;
