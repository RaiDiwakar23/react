import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import { CiSettings } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="flex">
      <aside className="border-2 bg-amber-200 h-[300px] w-[20%]">
        <ul>
          <li>
            <NavLink to="/profile" className="flex gap-2 items-center">
              <span>My Profile</span>
              <span>
                <RxAvatar />
              </span>
            </NavLink>
          </li>
          <li className="flex gap-2 items-center">
            <NavLink to="setting">
              <span>Settings</span>
              <span>
                <CiSettings />
              </span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="flex gap-2 items-center">
              <span> Log out</span>
              <span>
                <CiLogout />
              </span>
            </NavLink>
          </li>
        </ul>
      </aside>
      <aside className="border-2 bg-pink-400 h-[300px] w-[80%]">
        <Outlet />
      </aside>
    </div>
  );
};

export default Profile;
