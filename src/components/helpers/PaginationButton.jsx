import React from "react";

function PaginationButton({ page, isSelected, onClick }) {
  const style = {
    padding: "12px 16px",
    border: "1px solid #61BB61",
    backgroundColor: isSelected ? "#61BB61" : "#fff",
    color: isSelected ? "#fff" : "#61BB61",
    cursor: "pointer",
  };

  return (
    <button style={style} onClick={() => onClick(page)}>
      {page}
    </button>
  );
}

export default PaginationButton;
