import React from "react";
import Tab from "./Tab";

function NavBarFrame() {
  return (
    <div className="navbar--container">
      <div className="homeLink">Realworld blog</div>
      <div className="links">
        <Tab>Home</Tab>
        <Tab variant="newpost">New post</Tab>
        <Tab variant="settings">Settings</Tab>
        <Tab variant="profile">Profile</Tab>
      </div>
    </div>
  );
}

export default NavBarFrame;
