import React, { useState } from "react";
import PaginationButton from "./PaginationButton";

function PaginationBar() {
  const [selectedPage, setSelectedPage] = useState(1);
  const pages = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div style={{ display: "flex" }}>
      {pages.map((page) => (
        <PaginationButton
          key={page}
          page={page}
          isSelected={page === selectedPage}
          onClick={setSelectedPage}
        />
      ))}
    </div>
  );
}

export default PaginationBar;
