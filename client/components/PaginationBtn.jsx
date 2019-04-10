import React from 'react';
import styles from './PageNavBtns.module.css';

function PaginationBtn (props) {
  const { pageNum, newPageFn } = props;
  function clickHandler(id) {
    newPageFn(id);
  }

  let pageButton;
  if (pageNum === '...') {
    pageButton = <p className={styles.elipseBtn}>{pageNum}</p>;
  } else {
    pageButton = <button type="button" className={styles.paginationBtn} id={pageNum} onClick={(e) => { clickHandler(e.target.id); }}>{pageNum}</button>;
  }

  return (
    <div>
      {pageButton}
    </div>
  );
}

export default PaginationBtn;
