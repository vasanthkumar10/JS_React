import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export function UseEffectDemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [isEven, setIsEven] = useState("Even");

  const handleCounter1 = () => {
    setCounter1((prev) => prev + 1);
  };

  const handleCounter2 = () => {
    setCounter2((prev) => prev + 1);
  };

  useEffect(() => {
    const checkEven = () => {
      console.log("calling isEven");
      if (counter1 % 2 === 0) setIsEven("Even");
      else setIsEven("Odd");
    };

    checkEven();
  }, [counter1]); // dependency list

  return (
    <div>
      <h1>
        counter1 - {counter1} {isEven}
      </h1>
      <button onClick={handleCounter1}>increase 1</button>
      <h1>counter2 - {counter2}</h1>
      <button onClick={handleCounter2}>increase 2</button>
    </div>
  );
}
