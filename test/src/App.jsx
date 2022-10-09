import React, { useState } from "react";
import "./App.css";
import { PropsDemo } from "./components/PropsDemo";
import { ObjectDemo } from "./components/ObjectDemo";

const initialCount = 0;
// functional or hooks
export function App() {
  const [count, setCount] = useState(initialCount);

  const increment = (step) => {
    setCount((prevCount) => prevCount + step);
    setCount(count + step);
  };

  const decrement = () => {
    if (count > -5) setCount(count - 1);
  };

  const reset = () => {
    setCount(initialCount);
  };

  return (
    <div className="App">
      {count < 10 && count > -5 ? (
        <h1>count - {count}</h1>
      ) : (
        <h1>{count === 10 ? "Max" : "Min"} value reached</h1>
      )}
      <PropsDemo
        decrement={decrement}
        increment={increment}
        count={count}
        name={"vasanth"}
      />
      <PropsDemo
        decrement={decrement}
        increment={increment}
        count={count}
        name={"sriram"}
      />
      <PropsDemo
        decrement={decrement}
        increment={increment}
        count={count}
        name={"Bharadan"}
      />
      <button onClick={() => increment(1)}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      {/* <ObjectDemo /> */}
    </div>
  );
}
