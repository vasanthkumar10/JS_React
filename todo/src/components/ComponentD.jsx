import React from "react";
import { useContext } from "react";
import { NameContext } from "./ComponentA";

export function ComponentD() {
  const name = useContext(NameContext);
  return (
    <div>
      <h1>Component D -{name} </h1>
    </div>
  );
}
