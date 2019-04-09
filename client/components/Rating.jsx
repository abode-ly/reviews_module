import React from 'react';
import styles from './Ratings.module.css';
import sharedStyles from './Component.module.css';
import stars from './Stars.module.css';

function Rating(props) {
  const { value, type } = props;
  return (
    <div className="criteriaAndStars">
      <div>{type}</div>
      <span className={`stars stars-${(Math.ceil(value + 1) / 10) * 100}`}> ★★★★★ </span>
    </div>
  );
}

export default Rating;
