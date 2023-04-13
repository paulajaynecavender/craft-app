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
        <p>{name}</p>
        <p>{type}</p>
        <p>{description}</p>
      </div>
      <Counter
        setProjects={setProjects}
        project={project}
        projects={projects}
      />
    </div>
  );
};

export default Modal;
