import React from "react";
import BannerUserInfo from "../components/BannerUserInfo";
import Tab from "../components/helpers/Tab";
import Sidebar from "../components/helpers/Sidebar";
import { NavLink } from "react-router";

function ProfilePage() {
  return (
    <div>
      <BannerUserInfo></BannerUserInfo>

      <div className="feeds">
        <NavLink to="/yourfeed">
          <Tab>Your feed</Tab>
        </NavLink>
        <NavLink to="/notyourfeed">
          <Tab>Not your feed</Tab>
        </NavLink>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
}

export default ProfilePage;
