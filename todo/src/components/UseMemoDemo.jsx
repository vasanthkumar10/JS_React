import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export function UseMemoDemo() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleCounter1 = () => {
    setCounter1((prev) => prev + 1);
  };

  const handleCounter2 = () => {
    setCounter2((prev) => prev + 1);
  };

  const checkEven = useMemo(() => {
    console.log("calling isEven");
    let i = 0;
    while (i < 1000000000) i += 1;
    return counter1 % 2 === 0;
  }, [counter1]);

  return (
    <div>
      <h1>
        counter1 - {counter1} {checkEven ? "Even" : "Odd"}
      </h1>
      <button onClick={handleCounter1}>increase 1</button>
      <h1>counter2 - {counter2}</h1>
      <button onClick={handleCounter2}>increase 2</button>
    </div>
  );
}
