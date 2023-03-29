import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
  const [count, setCount] = useState(0);

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
    </>
  );
};

export default Counter;
