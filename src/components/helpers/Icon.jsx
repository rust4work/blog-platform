import React from "react";
import Checkers from "../../assets/pics/Checkers.svg";
import IconFavGreen from "../../assets/pics/IconFavGreen.svg";

function Icon() {
  return (
    <div className="icon--wrapper">
      <img src={Checkers} alt="Checkers icon" />
      <img src={IconFavGreen} alt="Favorite icon" />
    </div>
  );
}

export default Icon;
