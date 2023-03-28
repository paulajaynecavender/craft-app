import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";

const Project = ({
  name,
  type,
  description,
  projects,
  setProjects,
  project,
}) => {
  // does not work
  const deleteProject = () => {
    setProjects(projects.filter((el) => el.id !== project.id));
  };
  return (
    <li className="project">
      <div className="project-item">
        {/* input here: project name, description, type image, counter  */}
        <img src={`./assets/${type}.jpg`} alt="project type" />
        <div className="project-text">
          <p className="name-text">{name}</p>
          <p className="description-text">{description}</p>
        </div>
        <div className="counter-container">
          <Counter />
        </div>
        <div className="button-group">
          <button className="complete-btn">
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
