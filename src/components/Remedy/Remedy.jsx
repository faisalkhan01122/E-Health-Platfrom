import React, { useState } from "react";
import { Link } from "react-router-dom";
import { diseases } from "../../utils/data";
import DiseaseCard from "../Cards/DiseasCard";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Remedy = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate the total number of pages
  const totalPages = Math.ceil(diseases.length / itemsPerPage);

  // Calculate the items to display on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = diseases.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white text-gray gap-4">
        {currentItems.map((disease, index) => (
          <Link
            key={index}
            className="transform transition-transform duration-200 hover:translate-y-[-8px]"
          >
            <DiseaseCard
              title={disease.title}
              description={disease.description}
              bgColor={disease.bgColor}
              image={disease.image}
            />
          </Link>
        ))}
      </div>
      <div className="flex justify-center text-gray text-white my-8">
        <button
          className="mx-1 p-2 rounded-full bg-primary"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack />
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === index + 1 ? "bg-primary text-white" : "text-gray"
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="mx-1 p-2 rounded-full bg-primary"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </>
  );
};

export default Remedy;
