import React from 'react';
import PaginationBtn from './PaginationBtn';
import styles from './PageNavBtns.module.css';


function Pagination(props) {
  const { maxPage, newPageFn, pageNum } = props;
  const pageNumbers = [];

  const appendMaxPage = () => {
    pageNumbers.push('...');
    pageNumbers.push(maxPage);
  };

  const appendMinPage = () => {
    pageNumbers.unshift('...');
    pageNumbers.unshift(1);
  };
  
  if (maxPage <= 5) {
    for (let page = 1; page <= maxPage; page++) {
      pageNumbers.push(page);
    }
  } else if (pageNum === 1 || pageNum === 2) {
    for (let page = 1; page <= 3; page++) {
      pageNumbers.push(page);
    }
    appendMaxPage();
  } else if (pageNum === 3 || pageNum === 4) {
    for (let page = 1; page <= pageNum+1; page++) {
      pageNumbers.push(page);
    }
    appendMaxPage();
  } else if (maxPage - pageNum === 1 || pageNum === maxPage) {
    for (let page = maxPage; page > maxPage-3; page--) {
      pageNumbers.unshift(page);
    }
    appendMinPage();
  } else if (maxPage - pageNum === 2 || maxPage - pageNum === 3) {
    for (let page = maxPage; page > maxPage - pageNum + 1; page--) {
      pageNumbers.unshift(page);
    }
    appendMinPage();
  } else {
    pageNumbers.push(pageNum - 1);
    pageNumbers.push(pageNum);
    pageNumbers.push(pageNum + 1);
    appendMinPage();
    appendMaxPage();
  }
  return (
    <nav className={styles.pagination}>
      {pageNumbers.map((page) => {
        return <PaginationBtn pageNum={page} newPageFn={newPageFn} key={page} />;
      })}
    </nav>
  );
}

export default Pagination;
