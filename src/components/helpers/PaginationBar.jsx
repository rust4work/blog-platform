import React from "react";

function PaginationBar({ totalPages, currentPage, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination-bar">
      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-btn ${page === currentPage ? "selected" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default PaginationBar;
