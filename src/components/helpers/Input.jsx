import React from "react";

function Input({
  placeholderText = "",
  width = "200px",
  height = "40px",
  error = false,
  ...rest
}) {
  return (
    <div className={`input--wrapper ${error ? "input--error" : ""}`}>
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
