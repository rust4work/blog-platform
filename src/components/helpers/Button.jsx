import React from "react";
import IconFavGreen from "../../assets/pics/IconFavGreen.svg";
import IconFavRed from "../../assets/pics/IconFavRed.svg";
import "../../styles/button.scss";

function Button({ variant = "primary-small", children }) {
  const IconFav = variant.startsWith("warning") ? IconFavRed : IconFavGreen;

  return (
    <button className={`buttons-btn buttons-btn--${variant}`}>
      <img src={IconFav} alt="" />
      {children}
    </button>
  );
}

export default Button;
