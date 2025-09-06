import React from "react";
import IconFavGreen from "../../assets/pics/IconFavGreen.svg";
import IconFavRed from "../../assets/pics/IconFavRed.svg";
import "../../styles/button.scss";

function Button({ variant = "primary-small", children, withIcon = true }) {
  const IconFav = variant.startsWith("warning") ? IconFavRed : IconFavGreen;

  return (
    <button className={`buttons-btn buttons-btn--${variant}`}>
      {withIcon && <img src={IconFav} alt="" />}
      {children}
    </button>
  );
}

export default Button;
