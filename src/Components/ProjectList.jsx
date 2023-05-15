import Project from "./Project";

const ProjectList = ({ filteredState }) => {
  return (
    <section className="project-list-container">
      <ul className="project-list">
        {filteredState.map((project) => (
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
