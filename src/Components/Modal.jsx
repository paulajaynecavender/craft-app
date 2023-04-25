import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";

const Modal = ({
  modal,
  setModal,
  name,
  description,
  type,
  project,
  setProjects,
  projects,
  updateCount,
}) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className={modal ? "modal-open" : "modal-hidden"}>
      <button className="exit-modal" onClick={closeModal}>
        <i>
          <FontAwesomeIcon icon={faXmark} />
        </i>
      </button>
      <div className="description-text">
        <p>Name: {name}</p>
        <p>Type: {type}</p>
        <p>Description: {description}</p>
      </div>
      <Counter
        setProjects={setProjects}
        project={project}
        projects={projects}
        updateCount={updateCount}
      />
    </div>
  );
};

export default Modal;
