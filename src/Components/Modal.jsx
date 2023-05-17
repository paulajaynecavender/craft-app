import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Counter from "./Counter";

const Modal = ({ id, name, description, type, setModal, modal, counter }) => {
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <div
        className={modal ? "modal-container-open" : "modal-container-hidden"}
      ></div>
      <div className={modal ? "modal-open" : "modal-hidden"}>
        <button className="exit-modal" onClick={closeModal}>
          <i>
            <FontAwesomeIcon icon={faXmark} />
          </i>
        </button>

        <Counter
          id={id}
          counter={counter}
          name={name}
          description={description}
          type={type}
        />
      </div>
    </>
  );
};

export default Modal;
