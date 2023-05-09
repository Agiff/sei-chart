import React from "react";

const Pagination = ({ handlePageChange, totalPages, currentPage }) => {
  const pagesToShow = [];

  let startingPage = Math.floor((currentPage - 1) / 10) * 10 + 1;

  for (let i = 0; i < 10; i++) {
    let page = startingPage + i;
    if (page > totalPages) break;
    pagesToShow.push(page);
  }

  return (
    <div className="btn-group">
      <button
        className={`btn ${currentPage === 1 ? "btn-disabled" : ""}`}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        «
      </button>
      {pagesToShow.map((page) => (
        <button
          key={page}
          className={`btn ${page === currentPage ? "btn-primary" : ""}`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className={`btn ${currentPage === totalPages ? "btn-disabled" : ""}`}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        »
      </button>
    </div>
  );
};

export default Pagination;
