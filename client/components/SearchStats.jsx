import React from 'react';
import styles from './SearchStats.module.css';

function SearchStats (props) {
  const { reviews, searchTerm } = props;

  const handleClick = () => {
    props.filterSearch('');
  };

  return (
    <div className={styles.searchStats}>
      <p className={styles.numHaveMentioned}>{reviews.length} guests have mentioned "{searchTerm}"</p>
      <p className={styles.backToReviews} onClick={handleClick}>Back to all reviews</p>
    </div>
  );
}

export default SearchStats;
