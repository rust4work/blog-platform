import React from "react";
import Tab from "./Tab";
import { Link } from "react-router-dom";

function NavBarFrame() {
  return (
    <div className="navbar--container">
      <div className="homeLink">Realworld blog</div>
      <div className="links">
        <Link to="/">
          <Tab>Home</Tab>
        </Link>
        <Link to="/newpost">
          <Tab variant="newpost">New post</Tab>
        </Link>
        <Link to="/settings">
          <Tab variant="settings">Settings</Tab>
        </Link>
        <Link to="/profile">
          <Tab variant="profile">Profile</Tab>
        </Link>
      </div>
    </div>
  );
}

export default NavBarFrame;
