import React from "react";

export function ArrayDemo() {
  const names = [
    "vasanth",
    "preethika",
    "pavithra",
    "suresh",
    "santhosh",
    "vishal",
  ];

  return (
    <div>
      {names.map((value) => (
        <p>{value}</p>
      ))}
    </div>
  );
}
