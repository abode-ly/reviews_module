import React from 'react';
import styles from './TotalReviews.module.css';

function TotalReviews(props) {
  const { reviews, stars } = props;
  const starPercentage = (Math.ceil(stars + 1) / 10) * 100;

  return (
    <div className={styles.totalReviews}>
      <h3 className={styles.reviewTitle}>{reviews.length} Reviews </h3>
      <div className={[styles.stars, styles[`stars-${starPercentage}`]].join(' ')}> ★★★★★ </div>
    </div>
  );
}

export default TotalReviews;
