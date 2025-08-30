import React from "react";
import Typography from "./helpers/Typography";
import Button from "./helpers/Button";
import Checkers from "../assets/pics/Checkers.svg";

function BannerUserInfo() {
  return (
    <div className="userinfo--container">
      <img src={Checkers} alt="" />
      <Typography variant="h2" color="white">
        eni9mu5
      </Typography>
      <Button variant="secondaryLarge">text</Button>
    </div>
  );
}

export default BannerUserInfo;
