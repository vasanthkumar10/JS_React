import React from "react";

export function Greet({ name }) {
  return (
    <div>
      <h1>{name ? `Hello ${name}` : `Guest`}</h1>
      <h2>Welcome</h2>
    </div>
  );
}
