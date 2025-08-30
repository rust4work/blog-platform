import React from "react";
import Icon from "../../assets/pics/IconProfile.svg";

function UserInfo({ userDate = "01.01.23", userName = "John lobster" }) {
  return (
    <div className="UserInfo">
      <img src={Icon} alt="" className="profilePic" />
      <div className="userData">
        <div className="userName">{userName}</div>
        <div className="userDate">{userDate}</div>
      </div>
    </div>
  );
}

export default UserInfo;
