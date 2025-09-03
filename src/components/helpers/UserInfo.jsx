import React from "react";
import DefaultIcon from "../../assets/pics/IconProfile.svg";

function UserInfo({
  userName = "John Lobster",
  userDate = "01.01.23",
  userImage,
}) {
  return (
    <div className="UserInfo">
      <img
        src={userImage || DefaultIcon}
        alt={userName}
        className="profilePic"
      />
      <div className="userData">
        <div className="userName">{userName}</div>
        <div className="userDate">{userDate}</div>
      </div>
    </div>
  );
}

export default UserInfo;
