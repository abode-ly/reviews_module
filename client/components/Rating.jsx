import React from 'react';
import styles from './Ratings.module.css';
import sharedStyles from './Component.module.css';
import stars from './Stars.module.css';

function Rating(props) {
  return (
    <div className="criteriaAndStars">
      <div>{props.type}</div>
      <span className={`stars stars-${(Math.ceil(props.value+1)/10)*100}`}> ★★★★★ </span>
    </div>
  );
}

export default Rating;
