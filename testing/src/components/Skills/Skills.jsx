import React, { useState, useEffect } from "react";

export function Skills({ skills }) {
  // skills = ['HTML', 'CSS', 'JS']
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2000);
  });

  return (
    <div>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      {isLoggedIn ? (
        <button>Start course</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  );
}
