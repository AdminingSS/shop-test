import React from 'react';

interface PaginationProps {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  paginate: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ itemsPerPage, totalItems, currentPage, paginate }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const getPageNumbers = () => {
    const pages = [];
    const showMax = 5;

    if (totalPages <= showMax) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      if (currentPage > 3) pages.push('...');

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  return (
    <nav className="mt-8 flex justify-center items-center space-x-2">
      <button
        disabled={currentPage === 1}
        onClick={() => paginate(currentPage - 1)}
        className="px-3 py-2 rounded-lg border border-indigo-300 text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition cursor-pointer"
      >
        &larr;
      </button>
      <ul className="flex items-center space-x-2">
        {getPageNumbers().map((number, index) => (
          <li key={index}>
            {number === '...' ? (
              <span className="px-2 text-gray-400">...</span>
            ) : (
              <button
                onClick={() => paginate(number as number)}
                className={`w-10 h-10 rounded-lg transition font-medium cursor-pointer ${
                  currentPage === number
                    ? 'bg-indigo-600 text-white shadow-lg scale-110'
                    : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-100'
                }`}
              >
                {number}
              </button>
            )}
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage === totalPages}
        onClick={() => paginate(currentPage + 1)}
        className="px-3 py-2 rounded-lg border border-indigo-300 text-indigo-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-indigo-50 transition cursor-pointer"
      >
        &rarr;
      </button>
    </nav>
  );
};

export default Pagination;