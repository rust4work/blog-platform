import React from "react";

function Tag({ children }) {
  if (!children || children.toString().trim() === "") {
    return null;
  }
  return <span className="tag">{children}</span>;
}

export default Tag;
