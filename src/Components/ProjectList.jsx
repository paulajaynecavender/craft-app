import Project from "./Project";

const ProjectList = ({ projects, setProjects, filteredProjects }) => {
  return (
    <section className="project-list-container">
      <ul className="project-list">
        {filteredProjects.map((project) => (
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
    </section>
  );
};

export default ProjectList;
