import React from "react";
import Checkers from "../../assets/pics/Checkers.svg";
import IconFavGreen from "../../assets/pics/IconFavGreen.svg";

const imgStyles = {
  width: "24px",
  height: "24px",
};

function Icon() {
  return (
    <>
      <div className="icon--wrapper">
        <img src={Checkers} alt="" style={imgStyles} />
        <img src={IconFavGreen} alt="" style={imgStyles} />
      </div>
    </>
  );
}

export default Icon;
