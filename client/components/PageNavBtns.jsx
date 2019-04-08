import React from 'react';
import Pagination from './Pagination.jsx';
import styles from './PageNavBtns.module.css';
import sharedStyles from './Component.module.css';

function BackForthBtn (props) {
  const {newPageFn, maxPage, pageNum, newPage} = props;
  const changePage = (buttonValue) => {
    if (buttonValue === 'leftBtn' && Number(pageNum) > 1) {
      newPage(Number(pageNum) - 1);
    } else if (buttonValue === 'rightBtn' && Number(pageNum) < maxPage) {
      newPage(Number(pageNum) + 1);
    }
  };

  return (
    <div className='PageNavBtns'>
      <button type='button' className='fas fa-arrow-left' id='leftBtn' onClick={(e) => { changePage(e.target.id); }} />
      <Pagination newPageFn={newPageFn} maxPage={maxPage}/>
      <button type='button' className='fas fa-arrow-right' id='rightBtn' onClick={(e) => { changePage(e.target.id); }} />
    </div>
  );
}

export default BackForthBtn;
