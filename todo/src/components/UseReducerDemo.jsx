// useReducer -> state holder
// useState builds on useReducer

import React from "react";
import { useReducer } from "react";

const initialState = {
  firstCount: 0,
  input: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCount: state.firstCount + action.value };
    case "DECREMENT":
      return { ...state, firstCount: state.firstCount - action.value };
    case "RESET":
      return initialState;
    case "ADD":
      return { ...state, input: action.value };
    default:
      return state;
  }
};

export function UseReducerDemo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <input
        type="text"
        value={count.input}
        onChange={(e) => dispatch({ type: "ADD", value: e.target.value })}
      />
      <h1>count - {count.firstCount}</h1>
      <button
        onClick={() =>
          dispatch({ type: "INCREMENT", value: parseInt(count.input) })
        }
      >
        increment
      </button>
      <button
        onClick={() =>
          setCount({ type: "INCREMENT", value: parseInt(count.input) })
        }
      >
        increment 3
      </button>
      <button
        onClick={() =>
          setCount({ type: "DECREMENT", value: parseInt(count.input) })
        }
      >
        decrement
      </button>
      <button
        onClick={() =>
          setCount({ type: "DECREMENT", value: parseInt(count.input) })
        }
      >
        decrement 5
      </button>
      <button onClick={() => setCount({ type: "RESET" })}>reset</button>
    </div>
  );
}

PI;
