import React, { useState } from "react";

const Register = () => {
  let [userData, setUserData] = useState({
    firstname: "",
    email: "",
    gender: "",
  });

  const handleChange = event => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  console.log(userData);
  return (
    <div>
      <form>
        <section>
          <label htmlFor="fn">First Name</label>
          <input
            type="text"
            id="fn"
            value={userData.firstname}
            name="firstname"
            onChange={handleChange}
            className="border"
          />
        </section>
        <section>
          <label htmlFor="em">Email</label>
          <input
            type="email"
            id="em"
            value={userData.email}
            onChange={handleChange}
            name="email"
            className="border"
          />
        </section>
        <section>
          <label>Gender</label>
          <input
            type="radio"
            onChange={handleChange}
            value="male"
            name="gender"
          />
          Male
          <input
            type="radio"
            onChange={handleChange}
            value="female"
            name="gender"
          />
          Female
        </section>
      </form>
    </div>
  );
};

export default Register;
