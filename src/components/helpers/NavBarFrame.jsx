import React from "react";
import { NavLink } from "react-router-dom";
import Tab from "./Tab";
import NewPostIcon from "../../assets/pics/NewPostIcon.svg";
import SettingsIcon from "../../assets/pics/settingsIcon.svg";
import ProfileIcon from "../../assets/pics/iconProfile.svg";

function NavBarFrame({ user }) {
  return (
    <div className="navbar--container">
      <div className="homeLink">Realworld blog</div>
      <div className="links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Tab>Home</Tab>
        </NavLink>

        <NavLink
          to="/newpost"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Tab icon={NewPostIcon}>New Post</Tab>
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Tab icon={SettingsIcon}>Settings</Tab>
        </NavLink>

        <NavLink
          to="/profile-page"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <Tab icon={ProfileIcon}>
            {user && user.username ? user.username : "Profile"}
          </Tab>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBarFrame;
