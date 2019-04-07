import React from 'react';
import styles from './TotalReviews.module.css';
import sharedStyles from './Component.module.css';

function TotalReviews(props) {
  return (
    <div className='totalReviews'>
      <div className='reviewTitle'>{props.reviews.length} Reviews</div>
      <div className='totalStars'>
        <div className='star uncoloredStar'>
        </div>
        <div className='star coloredStar'>
          {props.stars}
        </div>
      </div>
    </div>
  );
}

export default TotalReviews;
