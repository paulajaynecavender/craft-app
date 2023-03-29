import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";

const Modal = ({ modal, setModal, name, description, type }) => {
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
      <p className="description-text">
        <p>{name}</p>
        <p>{type}</p>
        <p>{description}</p>
      </p>
      <Counter />
    </div>
  );
};

export default Modal;
