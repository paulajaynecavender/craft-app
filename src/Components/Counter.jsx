import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { increment, decrement, restart } from "../Features/craftSlice";

const Counter = ({ id, counter }) => {
  const dispatch = useDispatch();

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
