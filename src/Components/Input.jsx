import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Input = ({
  setInputText,
  inputText,
  setDescriptionText,
  descriptionText,
  setProjectType,
  projectType,
  setProjects,
  projects,
}) => {
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    setInputText(e.target.value);
  };

  const inputDescriptionHandler = (e) => {
    // console.log(e.target.value);
    setDescriptionText(e.target.value);
  };

  const typeHandler = (e) => {
    // console.log(e.target.value);
    setProjectType(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProjects([
      ...projects,
      {
        name: inputText,
        type: projectType,
        description: descriptionText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
    setProjectType("");
    setDescriptionText("");
  };

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
        />
        <div className="select">
          <select
            name="types"
            className="select-project-type"
            onChange={typeHandler}
          >
            <option value="select type">select type</option>
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
        />
        <button className="add-button" type="submit" onClick={submitHandler}>
          <i>
            <FontAwesomeIcon icon={faCirclePlus} />
          </i>
        </button>
      </form>
    </div>
  );
};

export default Input;
