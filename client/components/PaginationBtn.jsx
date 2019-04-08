import React from 'react';

function PaginationBtn (props) {
  const {pageNum, newPageFn} = props;
  function clickHandler(id) {
    newPageFn(id);
  }

  return (
    <button className='paginationBtn' id={pageNum} onClick={(e)=>{clickHandler(e.target.id)}}>{pageNum}</button>
  )
}

export default PaginationBtn;
