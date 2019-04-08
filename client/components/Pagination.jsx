import React from 'react';
import PaginationBtn from './PaginationBtn';

function Pagination (props) {
  console.log(props.maxPage)
  const {maxPage, newPageFn} = props;
  const pageNumbers = [];
  for (let pageNum = 1; pageNum <= maxPage; pageNum++) {
    pageNumbers.push(pageNum);
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
