import React from "react";
import { useState } from "react";
// named export
export function PropsDemo(props) {
  // console.log(props);
  const [name, setName] = useState("vasanth");
  return (
    <div>
      Props Demo - {props.count} {name}
      <button onClick={() => props.increment(1)}>
        change parent increment
      </button>
      <button onClick={() => setName("Soundappan")}>
        change parent decrement
      </button>
    </div>
  );
}
