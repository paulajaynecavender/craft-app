import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";
import DetailBtn from "./DetailBtn";

const Project = ({
  name,
  type,
  description,
  projects,
  setProjects,
  project,
}) => {
  const deleteProject = () => {
    setProjects(projects.filter((el) => el.id !== project.id));
  };
  const completeProject = () => {
    setProjects(
      projects.map((item) => {
        if (item.id === project.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <li className="project">
      <div className={`project-item ${project.completed ? "completed" : ""}`}>
        <div className="img-container">
          <img src={`./assets/${type}.jpg`} alt="project type" />
        </div>
        <div className="project-text">
          <p className="name-text">{name}</p>
        </div>
        <div className="counter-container">
          <DetailBtn
            setProjects={setProjects}
            project={project}
            description={description}
            name={name}
            type={type}
            projects={projects}
          />
        </div>
        <div className="button-group">
          <button className="complete-btn" onClick={completeProject}>
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </button>
          <button className="delete-btn" onClick={deleteProject}>
            <i>
              <FontAwesomeIcon icon={faTrashCan} />
            </i>
          </button>
        </div>
      </div>
    </li>
  );
};

export default Project;
