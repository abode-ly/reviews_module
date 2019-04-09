import React from 'react';
import styles from './PageNavBtns.module.css';
import sharedStyles from './Component.module.css';

function PaginationBtn (props) {
  const { pageNum, newPageFn } = props;
  function clickHandler(id) {
    const lastSelectedBtn = document.getElementsByClassName('selected');
    if (lastSelectedBtn.length !== 0) {
      console.log(lastSelectedBtn[0].classList); //PROBLEM HERE. Trouble deselecting previously clicked button
      lastSelectedBtn.classList.remove('selected');
      lastSelectedBtn.classList.add('unselected');
    }
    
    const selectedPageBtn = document.getElementById(id);
    selectedPageBtn.classList.remove('unselected');
    selectedPageBtn.classList.add('selected');
    newPageFn(id);
  }

  let pageButton;
  if (pageNum === '...') {
    pageButton = <p className="elipseBtn">{pageNum}</p>;
  } else {
    pageButton = <button type="button" className="paginationBtn unselected" id={pageNum} onClick={(e) => { clickHandler(e.target.id); }}>{pageNum}</button>;
  }

  return (
    <div>
      {pageButton}
    </div>
  );
}

export default PaginationBtn;
