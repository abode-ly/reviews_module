import React from 'react';
import sharedStyles from './Component.module.css';
import styles from './SearchStats.module.css';

function SearchStats (props) {
  const handleClick = () => {
    props.filterSearch('');
  };

  return (
    <div className="searchStats">
      <h4>{props.reviews.length} guests have mentioned "{props.searchTerm}"</h4>
      <h4 onClick={handleClick}>Back to all reviews</h4>
    </div>
  );
}

export default SearchStats;
