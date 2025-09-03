import React from "react";

function Input({ placeholderText = "", width = "200px", height = "40px" }) {
  return (
    <div className="input--wrapper">
      <input
        type="text"
        placeholder={placeholderText}
        style={{ width, height }} // только размеры можно оставить динамическими
      />
    </div>
  );
}

export default Input;
