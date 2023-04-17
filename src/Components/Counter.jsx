import { useState, useEffect, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const Counter = ({ project, setProjects, projects }) => {
  const [count, setCount] = useState(project.count);
  const stitchCounterCallback = useCallback(() => {
    setProjects(
      projects.map((item) => {
        if (item.id === project.id) {
          return {
            ...item,
            count: count,
          };
        }
        return item;
      })
    );
  }, [projects, count, project.id, setProjects]);

  useEffect(() => {
    stitchCounterCallback();
  }, [stitchCounterCallback]);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    setCount(count - 1);
  };
  const restart = () => {
    setCount(0);
  };
  return (
    <>
      {/* {projects.map((item) => {
        if (item.id === project.id) {
        }
        return <p>{project.count}</p>;
      })} */}
      <p>{project.count}</p>
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
    </>
  );
};

export default Counter;
