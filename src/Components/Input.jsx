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
  setStatus,
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
        id: Math.random() * 1000,
        name: inputText,
        type: projectType,
        description: descriptionText,
        completed: false,
        count: 0,
      },
    ]);
    setInputText("");
    setProjectType("");
    setDescriptionText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
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
        <button className="add-button" type="submit" onClick={submitHandler}>
          <i>
            <FontAwesomeIcon icon={faCirclePlus} />
          </i>
        </button>

        <div className="filter">
          <p>Filter:</p>
          <select name="todos" className="filter-todo" onChange={statusHandler}>
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
