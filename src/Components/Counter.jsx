// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faArrowRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, counter, restart } from "../Features/craftSlice";

const Counter = ({ id }) => {
  const dispatch = useDispatch();
  const count = useSelector(counter);
  // const [count, setCount] = useState(project.count);

  // useEffect(() => {
  //   updateCount(project.id, count);
  // }, [count, project.id, updateCount]);

  // let increment = () => {
  //   setCount(count + 1);
  //   updateCount(project.id, count + 1);
  // };
  // let decrement = () => {
  //   setCount(count - 1);
  //   updateCount(project.id, count - 1);
  // };
  // const restart = () => {
  //   setCount(0);
  //   updateCount(project.id, 0);
  // };
  return (
    <>
      <p>{count}</p>
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
