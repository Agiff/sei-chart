import React, { useState } from "react";
import Pagination from "./Pagination";

const NewsTable = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = data.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="overflow-x-auto">
      <table className="table w-full" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th></th>
            <th>Judul</th>
            <th>Lokasi</th>
            <th>Sumber</th>
            <th>Tanggal</th>
            <th>Penulis</th>
          </tr>
        </thead>
        <tbody>
          {itemsToShow.map((el, index) => {
            return (
              <tr key={el._id} className="hover">
                <th>{startIndex + index + 1}</th>
                <td className="max-w-xs" style={{ whiteSpace: "normal" }}>
                  {el._source.judul}
                </td>
                <td>{el._source.lokasi}</td>
                <td>
                  <button
                    className="btn"
                    onClick={() =>
                      window.open(el._source.sumber_url, "_blank")
                    }
                  >
                    Pergi ke Sumber
                  </button>
                </td>
                <td>{el._source.tgl_ambil.slice(0, 10)}</td>
                <td>
                  {el._source.penulis === "" ? "-" : el._source.penulis}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-center mt-5">
        <Pagination handlePageChange={handlePageChange} totalPages={totalPages} currentPage={currentPage} />
      </div>
    </div>
  );
};

export default NewsTable;
