import React, { useState } from "react";

function PaginationBar() {
  const [selectedPage, setSelectedPage] = useState(1);
  const pages = Array.from({ length: 7 }, (_, i) => i + 1);

  return (
    <div className="pagination-bar">
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${
            page === selectedPage ? "selected" : ""
          }`}
          onClick={() => setSelectedPage(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default PaginationBar;
