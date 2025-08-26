import React from "react";
import Typography from "./helpers/Typography";
import UserInfo from "./helpers/UserInfo";

function BannerArticle() {
  return (
    <div className="bannerArticle">
      <div className="bannerArticle--wrapper">
        <Typography
          text="If we quantify the alarm, we can get to the FTP pixel through the online SSL interface!"
          variant="h1"
          color="white"
        />
        <UserInfo />
      </div>
    </div>
  );
}

export default BannerArticle;
