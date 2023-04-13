import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Modal from "./Modal";

const DetailBtn = ({
  description,
  name,
  type,
  project,
  setProjects,
  projects,
}) => {
  const openModal = () => {
    setModal((current) => !current);
  };
  const [modal, setModal] = useState(false);

  return (
    <div className="counter-container">
      <p>Open Detail</p>
      <button className="open-modal" onClick={openModal}>
        <i>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </i>
      </button>
      <Modal
        modal={modal}
        setModal={setModal}
        description={description}
        name={name}
        type={type}
        setProjects={setProjects}
        project={project}
        projects={projects}
      />
    </div>
  );
};

export default DetailBtn;
