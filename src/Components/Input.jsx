import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addProject, filteredStatus } from "../Features/craftSlice";
import { useState } from "react";

const Input = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [descriptionText, setDescriptionText] = useState("");
  const [projectType, setProjectType] = useState("");

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const inputDescriptionHandler = (e) => {
    setDescriptionText(e.target.value);
  };

  const typeHandler = (e) => {
    setProjectType(e.target.value);
  };

  const onSubmit = () => {
    // e.preventDefault();
    dispatch(
      addProject({
        name: inputText,
        type: projectType,
        description: descriptionText,
      })
    );
    setInputText("");
    setDescriptionText("");
    setProjectType("");
  };

  return (
    <div className="input-area">
      <form className="input-area-form" onSubmit={onSubmit}>
        <div className="input-container">
          <input
            type="text"
            className="project-name-entry"
            name="text"
            onChange={inputTextHandler}
            value={inputText}
            required
          />
          <label className="label">Project Name</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            className="project-description"
            name="text"
            onChange={inputDescriptionHandler}
            value={descriptionText}
            required
          />
          <label className="label">Description</label>
        </div>
        <div className="select">
          <select
            name="types"
            className="select-project-type"
            onChange={typeHandler}
            value={projectType}
            required
          >
            <option value="">select project type</option>
            <option value="knitting">knitting</option>
            <option value="crochet">crochet</option>
          </select>
        </div>
        <div>
          <button className="add-button" type="submit">
            <i>
              <FontAwesomeIcon icon={faCirclePlus} />
            </i>
          </button>
        </div>
      </form>
      <div className="filter">
        <select
          name="todos"
          className="filter-todo"
          /////// dispatch to store the value of the select option selected ///////
          onChange={(e) => {
            dispatch(filteredStatus(e.target.value));
          }}
        >
          <option value="">Filter</option>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};

export default Input;
