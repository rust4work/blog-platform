import React from "react";
import IconFavGreen from "../../assets/pics/IconFavGreen.svg";
import IconFavRed from "../../assets/pics/IconFavRed.svg";
const variants = {
  primarySmall: {
    backgroundColor: "#61BB61",
    width: "86px",
    height: "40px",
    borderRadius: "8px",
    border: "solid 1px #61BB61",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontSize: "12.8px",
  },

  secondarySmall: {
    backgroundColor: "transparent",
    width: "86px",
    height: "40px",
    borderRadius: "8px",
    border: "solid 1px #61BB61",
    color: "#61BB61",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontSize: "12.8px",
  },
  warningSmall: {
    backgroundColor: "transparent",
    width: "86px",
    height: "40px",
    borderRadius: "8px",
    border: "solid 1px #BB6161",
    color: "#BB6161",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    fontSize: "12.8px",
  },
  primaryLarge: {
    width: "120px",
    height: "44px",
    backgroundColor: "#61BB61",
    borderRadius: "8px",
    border: "solid 1px #61BB61",
    color: "#FFF",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    padding: "10px 12px",
    gap: "24px",
  },
  secondaryLarge: {
    width: "120px",
    height: "44px",
    backgroundColor: "transparent",
    borderRadius: "8px",
    border: "solid 1px #61BB61",
    color: "#61BB61",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    padding: "10px 12px",
    gap: "24px",
  },
  warningLarge: {
    width: "120px",
    height: "44px",
    backgroundColor: "transparent",
    borderRadius: "8px",
    border: "solid 1px #BB6161",
    color: "#BB6161",
    display: "flex",
    alignItems: "center",
    fontSize: "18px",
    padding: "10px 12px",
    gap: "24px",
  },
};

function Button({ variant = "primarySmall", children }) {
  const style = { ...variants[variant] };
  const IconFav = variant.startsWith("warning") ? IconFavRed : IconFavGreen;

  return (
    <button style={style}>
      <img src={IconFav} alt="" />
      {children}
    </button>
  );
}

export default Button;
