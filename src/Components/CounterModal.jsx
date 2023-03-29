import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const CounterModal = ({ modal, setModal }) => {
  const [count, setCount] = useState(0);

  let increment = () => setCount(count + 1);
  let decrement = () => setCount(count - 1);
  const restart = () => {
    setCount(0);
  };

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
      <p>Count: {count}</p>
      <button onClick={increment}>
        <i>
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </button>
      <button onClick={decrement}>
        <i>
          <FontAwesomeIcon icon={faMinus} />
        </i>
      </button>
      <button onClick={restart}>
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </button>
    </div>
  );
};

export default CounterModal;
