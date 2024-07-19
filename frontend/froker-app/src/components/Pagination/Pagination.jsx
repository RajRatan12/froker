import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ pageCount, changePage }) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"flex space-x-2 justify-center mt-4"}
      previousLinkClassName={"w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500"}
      nextLinkClassName={"w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500"}
      disabledClassName={"opacity-50 cursor-not-allowed"}
      activeClassName={"w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full border border-gray-300 text-black"}
      pageLinkClassName={"w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 text-gray-500"}
    />
  );
};

export default Pagination;
