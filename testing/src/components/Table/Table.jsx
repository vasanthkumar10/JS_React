import React from "react";

export function Table() {
  return (
    <>
      <h1>Page title</h1>
      <h1>Page extra title</h1>
      <h2>page subtitle</h2>
      <p data-testid="para" title="World Health Organisation">
        WHO
      </p>
      <img src="" alt="bottle" />
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input
            placeholder="enter the name"
            type="text"
            id="name"
            value={"vasanth"}
          />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <textarea id="address" cols="30" rows="10"></textarea>
        </div>
        <div>
          <label htmlFor="countries">Countries</label>
          <select id="countries">
            <option value="US">US</option>
            <option value="UK">UK</option>
            <option value="india">India</option>
          </select>
        </div>
        <div>
          <input type="checkbox" id="terms" /> Agree to the above terms
        </div>
        <button>submit</button>
      </form>
    </>
  );
}
