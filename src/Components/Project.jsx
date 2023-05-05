import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";
import { completeToggle, deleteProject } from "../Features/craftSlice";
import { useDispatch } from "react-redux";

const Project = ({ id, name, type, description, completed, counter }) => {
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal((current) => !current);
  };

  return (
    <li className="project">
      <div className={`project-item ${completed ? "completed" : ""}`}>
        <div className="img-container">
          <img src={`./assets/${type}.jpg`} alt="project type" />
          <button className="expand" onClick={openModal}>
            <i>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </i>
          </button>
        </div>
        <Modal
          setModal={setModal}
          modal={modal}
          name={name}
          type={type}
          description={description}
          id={id}
        />
        <div className="project-text">
          <p className="name-text">{name}</p>
        </div>

        <div className="button-group">
          <button
            className="complete-btn"
            onClick={() => {
              dispatch(completeToggle(id));
            }}
          >
            <i>
              <FontAwesomeIcon icon={faCheck} />
            </i>
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              dispatch(deleteProject(id));
            }}
          >
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
