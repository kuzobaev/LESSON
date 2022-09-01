import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT, SHOW_COUNTER } from "../store/utilits/types";
import classes from "./Counter.module.css";

const Counter = () => {
  const { counter, isShow } = useSelector((state) => state);
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({ type: SHOW_COUNTER });
  };
  const plus = () => {
    dispatch({ type: INCREMENT });
  };
  const minus = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isShow && (
        <div div className={classes.value}>
          {" "}
          {counter}{" "}
        </div>
      )}
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
