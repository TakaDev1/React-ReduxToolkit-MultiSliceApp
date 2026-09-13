import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { CounterType } from "../types/CounterType";
import { decrement, increment, reset } from "../slices/CounterSlice";
import type { RootState } from "../../../app/store";

const CounterComponent = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>CounterComponent</h2>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>RESET</button>
      </div>
    </div>
  );
};

export default CounterComponent;
