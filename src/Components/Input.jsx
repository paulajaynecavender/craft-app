import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addProject } from "../Features/craftSlice";
import { useState } from "react";

const Input = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [projectType, setProjectType] = useState("select type");
  // const [status, setStatus] = useState("all");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputDescriptionHandler = (e) => {
    setDescriptionText(e.target.value);
  };

  const typeHandler = (e) => {
    setProjectType(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProject({
        name: inputText,
        type: projectType,
        description: descriptionText,
      })
    );
  };

  // const statusHandler = (e) => {
  //   setStatus(e.target.value);
  // };

  return (
    <div className="input-area">
      <form className="input-area-form">
        <input
          type="text"
          className="project-name-entry"
          placeholder="name your project"
          name="text"
          onChange={inputTextHandler}
          value={inputText}
          required
        />
        <div className="select">
          <select
            name="types"
            required
            className="select-project-type"
            onChange={typeHandler}
          >
            <option value="">select</option>
            <option value="knitting">knitting</option>
            <option value="crochet">crochet</option>
          </select>
        </div>
        <input
          type="text"
          className="project-description"
          placeholder="description"
          name="text"
          onChange={inputDescriptionHandler}
          value={descriptionText}
          required
        />
        <button className="add-button" type="submit" onClick={onSubmit}>
          <i>
            <FontAwesomeIcon icon={faCirclePlus} />
          </i>
        </button>

        <div className="filter">
          <p>Filter:</p>
          <select
            name="todos"
            className="filter-todo"
            // onChange={statusHandler}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Input;
