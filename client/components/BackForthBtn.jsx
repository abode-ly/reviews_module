import React from 'react';
import styles from './BackForthBtn.module.css';

function BackForthBtn (props) {
  const changePage = (buttonValue) => {
    if (buttonValue === 'leftBtn' && props.pageNum > 1) {
      props.newPage(props.pageNum - 1);
    } else if (buttonValue === 'rightBtn' && props.pageNum < props.maxPage) {
      props.newPage(props.pageNum + 1);
    }
  };

  return (
    <div className='backForthBtn'>
      <button type='button' className='fas fa-arrow-left' id='leftBtn' onClick={(e) => { changePage(e.target.id); }} />
      <button type='button' className='fas fa-arrow-right' id='rightBtn' onClick={(e) => { changePage(e.target.id); }} />
    </div>
  );
}

export default BackForthBtn;
