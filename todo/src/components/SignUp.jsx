import React, { useState } from "react";
import { Button } from "./Button";

import { SuccessPage } from "./SuccessPage";
import { FormError } from "./FormError";

import { validateName } from "../utils/validations";

export function SignUp() {
  const [name, setName] = useState("");
  const [nameErr, setNameErr] = useState(false);
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPwd] = useState("");
  const [cfmpwd, setCfmpwd] = useState("");
  const [mobile, setMobile] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  //   functionalities
  const handleSubmit = (e) => {
    e.preventDefault();
    setNameErr(false);
    if (password === cfmpwd) {
      console.table({
        name,
        age,
        email,
        password,
        cfmpwd,
        mobile,
      });
      handleReset();
      validate();
      setIsSuccess(true);
    } else {
      console.log("Password not matching");
    }
  };

  const handleReset = () => {
    setName("");
    setAge(0);
    setEmail("");
    setPwd("");
    setCfmpwd("");
    setMobile("");
  };

  const validate = () => {
    if (!validateName(name)) return "name";
  };

  // UI
  return isSuccess ? (
    <SuccessPage />
  ) : (
    <form>
      <div>
        <label htmlFor="name">Enter the name: </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormError property="name" isVisible={validate()} />
      </div>
      <div>
        <label htmlFor="age">Enter the age: </label>
        <input
          id="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Enter the email: </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="pwd">Enter the password: </label>
        <input
          id="pwd"
          type="password"
          value={password}
          onChange={(e) => setPwd(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cfmpwd">Confirm Password: </label>
        <input
          id="cfmpwd"
          type="text"
          value={cfmpwd}
          onChange={(e) => setCfmpwd(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="mobile">Enter the mobile no: </label>
        <input
          id="mobile"
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
      </div>

      <Button name="submit" bgColor="dodgerblue" btnFn={handleSubmit} />
    </form>
  );
}
