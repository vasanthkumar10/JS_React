import React from "react";
import { useContext } from "react";
import { NameContext } from "./ComponentA";

export function ComponentC() {
  const name = useContext(NameContext);
  return (
    <div>
      <h1>Component C - {name}</h1>
    </div>
  );
}
