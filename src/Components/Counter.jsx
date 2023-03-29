import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CounterModal from "./CounterModal";

const Counter = () => {
  const openModal = () => {
    setModal((current) => !current);
  };
  const [modal, setModal] = useState(false);
  return (
    <div className="counter-container">
      <p>Open counter</p>
      <button className="open-modal" onClick={openModal}>
        <i>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </i>
      </button>
      <CounterModal modal={modal} setModal={setModal} />
    </div>
  );
};

export default Counter;
