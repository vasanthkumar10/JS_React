// import { Greet } from "./components/Greet/Greet";
// import { Table } from "./components/Table/Table";
// import { Skills } from "./components/Skills/Skills";
// import { Counter } from "./components/Counter/Counter";
import { Counter2 } from "./components/Counter2/Counter2";

import React, { useState } from "react";

function App() {
  // const skills = ["HTML", "CSS", "JS"];
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <div className="App">
      {/* <Greet />
      <Greet name="sriram" /> */}
      {/* <Table /> */}
      {/* <Skills skills={skills} /> */}
      {/* <Counter /> */}
      {
        <Counter2
          count={count}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      }
    </div>
  );
}

export default App;
