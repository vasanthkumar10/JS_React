import React, { useState } from "react";
import { Button } from "./Button";

export function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter - {count}</h1>
      {/* <button onClick={() => handleIncrease()}>increase</button>
      <button onClick={() => handleDecrease()}>decrease</button> */}
      <Button btnFn={handleIncrease} name="increase" bgColor="green"></Button>
      <Button btnFn={handleDecrease} name="decrease" bgColor="red"></Button>
    </div>
  );
}
