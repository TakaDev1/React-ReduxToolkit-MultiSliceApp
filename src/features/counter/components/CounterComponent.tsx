import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { CounterType } from "../types/CounterType";
import { decrement, increment, reset } from "../slices/CounterSlice";
import type { RootState } from "../../../app/store";

const CounterComponent = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-700 w-1/2 mx-auto my-10 py-5 rounded-lg ">
      <h2>CounterComponent</h2>
      <div className="text-white">
        <p className="py-2 font-bold ">
          Count:{" "}
          <span className={`${count >= 0 ? "text-green-600" : "text-red-600"}`}>{count}</span>
        </p>
        <div className="flex justify-around w-1/3 mx-auto">
          <button
            onClick={() => dispatch(increment())}
            className="w-6 bg-green-500 text-black font-bold rounded-full cursor-pointer"
          >
            +
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="w-6 bg-red-500 text-black font-bold rounded-full cursor-pointer"
          >
            -
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-gray-500 px-2 rounded-full cursor-pointer"
          >
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;
