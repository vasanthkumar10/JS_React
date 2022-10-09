import React, { useState, useEffect } from "react";

export function FilterDemo() {
  const [names, setNames] = useState([
    "vasanth",
    "preethika",
    "pavithra",
    "suresh",
    "santhosh",
    "vishal",
  ]);
  const [filteredArray, setFilteredArray] = useState([
    "vasanth",
    "preethika",
    "pavithra",
    "suresh",
    "santhosh",
    "vishal",
  ]);

  const [search, setSearch] = useState("");
  const [count, setCount] = useState(0);

  // Props or state changes -> useEffect will get called
  useEffect(() => {
    console.log("calling useEffect");
    let filteredData = names.filter((name) => name.includes(search));
    setFilteredArray([...filteredData]);
  }, [search]);

  return (
    <div>
      <h1>Filter example</h1>
      <input
        type="text"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredArray.map((value) => (
        <p>{value}</p>
      ))}

      <h1>count - {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>increment</button>
    </div>
  );
}
