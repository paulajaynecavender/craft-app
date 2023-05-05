import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  counter,
  restart,
  selectProjectCounterById,
} from "../Features/craftSlice";

const Counter = ({ id, counter }) => {
  const dispatch = useDispatch();
  // const count = useSelector();

  return (
    <>
      <p>{counter}</p>
      <button onClick={() => dispatch(increment(id))}>
        <i>
          <FontAwesomeIcon icon={faPlus} />
        </i>
      </button>
      <button onClick={() => dispatch(decrement(id))}>
        <i>
          <FontAwesomeIcon icon={faMinus} />
        </i>
      </button>
      <button onClick={() => dispatch(restart(id))}>
        <FontAwesomeIcon icon={faArrowRotateRight} />
      </button>
    </>
  );
};

export default Counter;
