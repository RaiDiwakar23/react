import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 h-[70px] px-10">
      <ul className="flex gap-10 items-center h-full text-white">
        <li>
          {/* <a href="#">Home</a> */}
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          {/* <a href="./services">Services</a> */}
          <NavLink to="/services">Services</NavLink>
        </li>
        <li>
          {/* <a href="#">About</a> */}
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          {/* <a href="#">Contact</a> */}
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
