import React from 'react';
import moment from 'moment';
import styles from './Review.module.css';
import sharedStyles from './Component.module.css';

function Review(props) {
  return (
    <div className='review'>
    <div className='userInfo'>
      <img src={props.review.user_photo} alt={props.review.user_name}></img>
      <div>
        <b className='name'>{props.review.user_name}</b>
        <div className='date'>{moment(props.review.review_date).format('MMMM YYYY')}</div>
      </div>
    </div>
      {props.review.review_text.split('\n').map( (paragraph) => {
        return <p className='reviewParagraph'>{paragraph}</p>;
      })}
    </div>
  );
}

export default Review;
