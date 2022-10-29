import React from "react";
import { useState } from "react";
import { ComponentB } from "./ComponentB";
import { ComponentD } from "./ComponentD";

export const NameContext = React.createContext();

export function ComponentA() {
  return (
    <>
      <NameContext.Provider value={"Vasanth"}>
        <div>
          <h1>Component A </h1>
          <ComponentB />
        </div>
      </NameContext.Provider>
      {/* seperate tree */}
      <ComponentD />
    </>
  );
}
