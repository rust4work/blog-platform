import React from "react";

function Input({ placeholderText = "", width = "200px", height = "40px" }) {
  const style = {
    width,
    height,
    backgroundColor: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "8px 12px",
    outline: "2px solid #aaaaaa",
    outlineOffset: "2px",
    fontSize: "14px",
  };

  return (
    <div className="input--wrapper">
      <input type="text" style={style} placeholder={placeholderText} />
    </div>
  );
}

export default Input;
