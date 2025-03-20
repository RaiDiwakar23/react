import React, { useState } from "react";

const Login = () => {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const handleUserName = event => {
    setUserName(event.target.value);
  };
  const handlePassword = event => {
    setPassword(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(userName);
    console.log(password);
  };
  return (
    <div className="bg-slate-800 h-[100vh] flex justify-center items-center">
      <form className="bg-white w-[30%] rounded-lg p-4" onSubmit={handleSubmit}>
        <h1 className="text-purple-500 font-bold text-center text-[30px]">
          Login
        </h1>
        <section className="my-3">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="border-[1px] w-full p-2"
            onChange={handleUserName}
            value={userName}
          />
        </section>
        <section className="my-3">
          <label htmlFor="userPassword">Password</label>
          <input
            type="password"
            id="userPassword"
            className="border-[1px] w-full p-2"
            onChange={handlePassword}
            value={password}
          />
        </section>

        <button type="submit" className="bg-purple-700 text-white w-full p-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
