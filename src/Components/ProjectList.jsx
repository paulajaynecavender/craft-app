import Project from "./Project";

const ProjectList = ({ projects, setProjects }) => {
  return (
    <div className="project-list-container">
      <ul className="project-list">
        {projects.map((project) => (
          <Project
            projects={projects}
            setProjects={setProjects}
            name={project.name}
            type={project.type}
            key={project.id}
            description={project.description}
            project={project}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
