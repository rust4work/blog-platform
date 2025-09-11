import React from "react";

function Input({
  placeholderText = "",
  width = "200px",
  height = "40px",
  ...rest
}) {
  return (
    <div className="input--wrapper">
      <input
        type="text"
        placeholder={placeholderText}
        style={{ width, height }}
        {...rest}
      />
    </div>
  );
}

export default Input;
