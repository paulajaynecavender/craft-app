import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { increment, decrement, restart } from "../Features/craftSlice";

const Counter = ({ id, counter, name, description, type }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="description-text">
        <p>{name}</p>
        <p>{description}</p>
        <p>{type}</p>
        <p className="count">stitch count: {counter}</p>
      </div>

      <div className="btn-counter-container">
        <button className="btn-plus" onClick={() => dispatch(increment(id))}>
          <i>
            <FontAwesomeIcon icon={faPlus} />
          </i>
        </button>
        <button className="btn-sub" onClick={() => dispatch(decrement(id))}>
          <i>
            <FontAwesomeIcon icon={faMinus} />
          </i>
        </button>
        <button className="btn-reset" onClick={() => dispatch(restart(id))}>
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </button>
      </div>
    </>
  );
};

export default Counter;
