import React from "react";
import "./counter2.css";

export function Counter2(props) {
  return (
    <div>
      <h1 className="heading">Counter 2</h1>
      <h2>{props.count}</h2>
      {props.handleIncrement && (
        <button onClick={props.handleIncrement}>increment</button>
      )}
      {props.handleDecrement && (
        <button onClick={props.handleDecrement}>decrement</button>
      )}
    </div>
  );
}
