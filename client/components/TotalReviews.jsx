import React from 'react';
import styles from './TotalReviews.module.css';
import sharedStyles from './Component.module.css';
import stars from './Stars.module.css'

function TotalReviews(props) {
  return (
    <div className='totalReviews'>
      <div className='reviewTitle'>{props.reviews.length} Reviews </div>
      <span className={`stars stars-${(Math.ceil(props.stars+1)/10)*100}`}> ★★★★★ </span>
    </div>
  );
}

export default TotalReviews;
