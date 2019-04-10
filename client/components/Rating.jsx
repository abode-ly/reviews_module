import React from 'react';
import styles from './Ratings.module.css';

function Rating(props) {
  const { value, type } = props;
  const starPercentage = (Math.ceil(value + 1) / 10) * 100;
  return (
    <div className={styles.criteriaAndStars}>
      <div>{type}</div>
      <span className={[styles.stars, styles[`stars-${starPercentage}`]].join(' ')}> ★★★★★ </span>
    </div>
  );
}

export default Rating;
