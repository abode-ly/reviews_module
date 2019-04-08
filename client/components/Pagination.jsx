import React from 'react';
import PaginationBtn from './PaginationBtn';

function Pagination (props) {
  const {maxPage, newPageFn, pageNum} = props;
  const pageNumbers = [];
  for (let page = 1; page <= maxPage; page++) {
    pageNumbers.push(page);
  }
  return (
    <div>
      {pageNumbers.map((page) => {
        return <PaginationBtn pageNum={page} newPageFn={newPageFn} key={page} />
      })}
    </div>
  );
}

export default Pagination;
