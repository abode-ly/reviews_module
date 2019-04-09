import React from 'react';
import styles from './PageNavBtns.module.css';
import sharedStyles from './Component.module.css';

function PaginationBtn (props) {
  const {pageNum, newPageFn} = props;
  function clickHandler(id) {
    newPageFn(id);
  }

  let pageButton;
  if (pageNum === '...') {
    pageButton = <button type="button" className='paginationBtn' >{pageNum}</button>;
  } else {
    pageButton = <button type="button" className='paginationBtn' id={pageNum} onClick={(e)=>{clickHandler(e.target.id)}}>{pageNum}</button>;
  }

  return (
    <div>
      {pageButton}
    </div>
  );
}

export default PaginationBtn;
