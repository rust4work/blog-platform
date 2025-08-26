import React from "react";

const variants = {
  h1: { tag: "h1", fontSize: "46px", fontWeight: "700" },
  h2: { tag: "h2", fontSize: "32px", fontWeight: "600" },
  regular: { tag: "p", fontSize: "16px", fontWeight: "400" },
  regularBold: { tag: "span", fontSize: "16px", fontWeight: "700" },
  regularGray: { tag: "span", fontSize: "16px", fontWeight: "400" },
};

function Typography({ text, variant, color }) {
  const { tag: Tag, fontSize, fontWeight } = variants[variant];

  return <Tag style={{ fontSize, fontWeight, color }}>{text}</Tag>;
}

export default Typography;
