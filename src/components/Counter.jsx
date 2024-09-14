import { useSelector, useDispatch } from "react-redux";

import {
  decrement,
  increment,
  incrementByAmount,
} from "../features/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.counter.value);

  return (
    <div>
      <div>Count: {value} </div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>
          Increment by 5
        </button>
      </div>
    </div>
  );
};

export default Counter;
