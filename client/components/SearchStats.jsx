import React from 'react';
import sharedStyles from './Component.module.css';
import styles from './SearchStats.module.css';

function SearchStats (props) {
  const { reviews, searchTerm } = props;

  const handleClick = () => {
    props.filterSearch('');
  };

  return (
    <div className="searchStats">
      <p>{reviews.length} guests have mentioned "{searchTerm}"</p>
      <p className="backToReviews" onClick={handleClick}>Back to all reviews</p>
    </div>
  );
}

export default SearchStats;
