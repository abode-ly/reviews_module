import React from 'react';
import sharedStyles from './Component.module.css';
import styles from './SearchStats.module.css';

function SearchStats (props) {
  const handleClick = () => {
    props.filterSearch('');
  };

  return (
    <div className="searchStats">
      <p>{props.reviews.length} guests have mentioned "{props.searchTerm}"</p>
      <p className="backToReviews" onClick={handleClick}>Back to all reviews</p>
    </div>
  );
}

export default SearchStats;
