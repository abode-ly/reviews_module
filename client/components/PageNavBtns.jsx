import React from 'react';
import Pagination from './Pagination.jsx';
import styles from './PageNavBtns.module.css';

function BackForthBtn (props) {
  const { newPageFn, maxPage, pageNum, newPage } = props;
  const changePage = (buttonValue) => {
    if (buttonValue === 'leftBtn' && Number(pageNum) > 1) {
      newPage(Number(pageNum) - 1);
    } else if (buttonValue === 'rightBtn' && Number(pageNum) < maxPage) {
      newPage(Number(pageNum) + 1);
    }
  };

  let leftBtn = '';
  if (pageNum !== 1) {
    leftBtn = (
      <div className={styles.rightLeftBtn}>
        <span type="button" className="fas fa-arrow-left"  id="leftBtn" onClick={(e) => { changePage(e.target.id); }} />
      </div>
    );
  }

  let rightBtn = '';
  if (Number(pageNum) !== maxPage) {
    rightBtn = (
      <div className={styles.rightLeftBtn}>
        <span type="button" className="fas fa-arrow-right" id="rightBtn" onClick={(e) => { changePage(e.target.id); }} />
      </div>
    );
  }

  return (
    <div className={styles.PageNavBtns}>
      {leftBtn}
      <Pagination newPageFn={newPageFn} maxPage={maxPage} pageNum={Number(pageNum)} />
      {rightBtn}
    </div>
  );
}

export default BackForthBtn;
