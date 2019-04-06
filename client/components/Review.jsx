import React from 'react';
import moment from 'moment';
import styles from './Review.module.css';
import sharedStyles from './Component.module.css';

function Review(props) {
  console.log(props.review.review_text);
  return (
    <div class='review'>
      <img src={props.review.user_photo}></img>
    <b class='name'>{props.review.user_name}</b>
    <div class='date'>{moment(props.review.review_date).format('MMMM YYYY')}</div>
    <p>
      {props.review.review_text}
    </p>
    </div>
  );
}

export default Review;
