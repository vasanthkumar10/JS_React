import React, { useState } from "react";

export function ObjectDemo() {
  const [person, setPerson] = useState({
    fname: "",
    lname: "",
  });

  return (
    <div>
      <div>
        <label htmlFor="fname">First Name: </label>
        <input
          type="text"
          id="fname"
          value={person.fname}
          onChange={(e) => setPerson({ ...person, fname: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="lname">Last Name: </label>
        <input
          type="text"
          id="lname"
          value={person.lname}
          onChange={(e) => setPerson({ ...person, lname: e.target.value })}
        />
      </div>
      <h1>
        {person.fname} {person.lname}
      </h1>
      {JSON.stringify(person)}
    </div>
  );
}
