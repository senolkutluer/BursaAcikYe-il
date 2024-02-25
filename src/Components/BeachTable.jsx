import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Plajlar from "../data/BursaPlaj";
import {faMapMarker,faChevronLeft,faChevronRight} from "@fortawesome/free-solid-svg-icons";

function BeachTable({ searchTerm }) {
  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPlajlar = Plajlar.filter((plaj) =>
    plaj.adi.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPlajlar = filteredPlajlar.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredPlajlar.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <button
      className="text-white-700 uppercase dark:text-white-800 m-1 p-1"
      key={number}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </button>
  ));

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Plaj Adı
            </th>
            <th scope="col" className="px-6 py-3">
              ilçe
            </th>
            <th scope="col" className="px-6 py-3">
              uzunluk
            </th>
            <th scope="col" className="px-6 py-3">
              tuvalet
            </th>
            <th scope="col" className="px-6 py-3">
              otopark
            </th>
              <th scope="col" className="px-9 py-3">
              KONUM
            </th>
          </tr>
        </thead>
        <tbody>
          {currentPlajlar.map((plaj) => (
            <tr
              key={uuidv4()}
              className="bg-white border-b dark:bg-gray-900 dark:border-green-700 px-5 py-4 text-center"
            >
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {plaj.adi}
              </td>
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {plaj.ilçe}
              </td>
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {plaj.uzunluk}
              </td>
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {plaj.tuvalet}
              </td>
              <td className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {plaj.otopark}
              </td>
              
              <td className="px-5 py-3">
                <a
                  href={`https://www.google.com/maps/@${plaj.locationb},${plaj.location},18z?entry=ttu`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faMapMarker}
                    style={{ marginRight: "5px" }}
                  />
                  KONUM İÇİN TIKLA
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <button
          className="text-white-700 uppercase dark:text-white-800 m-1 p-1"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Geri <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className="text-white-700 uppercase dark:text-white-800 m-1 p-1"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === pageNumbers.length}
        >
          <FontAwesomeIcon icon={faChevronRight} /> İleri
        </button>
      </div>
    </div>
  );
}

export default BeachTable;
