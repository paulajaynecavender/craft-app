import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faCheck } from "@fortawesome/free-solid-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import {
  completeToggle,
  selectNewProject,
  deleteProject,
} from "../Features/craftSlice";
import { useDispatch } from "react-redux";

const Project = ({
  id,
  name,
  type,
  description,
  completed,
  modal,
  counter,
}) => {
  // selectors
  const projects = useSelector(selectNewProject);

  const dispatch = useDispatch();

  // const deleteProject = () => {
  //   setProjects(projects.filter((el) => el.id !== project.id));
  // };
  // const completeProject = () => {
  //   setProjects(
  //     projects.map((item) => {
  //       if (item.id === project.id) {
  //         return {
  //           ...item,
  //           completed: !item.completed,
  //         };
  //       }
  //       return item;
  //     })
  //   );
  // };
  // const openModal = () => {
  //   setModal((current) => !current);
  // };
  // const [modal, setModal] = useState(false);
  return (
    <li className="project">
      <div className={`project-item ${completed ? "completed" : ""}`}>
        <div className="img-container">
          <img src={`./assets/${type}.jpg`} alt="project type" />
          <button className="expand">
            <i>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </i>
          </button>
        </div>
        {/* <Modal /> */}
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
