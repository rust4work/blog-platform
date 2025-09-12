import React from "react";
import Typography from "./helpers/Typography";
import Button from "./helpers/Button";
import Checkers from "../assets/pics/Checkers.svg";

function BannerUserInfo({ user }) {
  if (!user) return null;
  return (
    <div className="userinfo--container">
      {user.image ? (
        <img src={user.image} alt={user.username} />
      ) : (
        <div className="default-avatar">👤</div>
      )}

      <Typography variant="h2" color="white">
        {user.username}
      </Typography>

      <p style={{ color: "white" }}>{user.bio || "No bio yet"}</p>

      <Button variant="secondaryLarge">Edit Profile</Button>
    </div>
  );
}

export default BannerUserInfo;
