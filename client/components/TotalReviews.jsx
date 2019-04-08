import React from 'react';
import styles from './TotalReviews.module.css';
import sharedStyles from './Component.module.css';
import stars from './Stars.module.css';

function TotalReviews(props) {
  return (
    <div className='totalReviews'>
      <h3 className='reviewTitle'>{props.reviews.length} Reviews </h3>
      <div className={`stars stars-${(Math.ceil(props.stars+1)/10)*100}`}> ★★★★★ </div>
    </div>
  );
}

export default TotalReviews;
