import React, { useState } from "react";

const Form = () => {
  //Step 1: Create a state for the input field
  let [firstName, setFirstName] = useState("");
  let [email, setEmail] = useState("");

  const handleChange = event => {
    setFirstName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("Submit event triggered");
    console.log(firstName);
    console.log(email);
  };

  return (
    <div>
      <h1>My Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={handleChange}
          className="border-2"
        />
        <br />
        <br />

        <label htmlFor="userEmail">Enter Email</label>
        <input
          id="userEmail"
          type="email"
          className="border"
          onChange={handleEmailChange}
          value={email}
        />
        <br />

        <button type="submit" className="border bg-blue-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;

//! Change event is triggered when we type something or remove something from the input field

//! we cannot use the for in label because for is a keyword in javascript. In place of for we have to use htmlFor
