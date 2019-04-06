import React from 'react';
import moment from 'moment';
import styles from './Review.module.css';
import sharedStyles from './Component.module.css';

function Review(props) {
  console.log(props.review.review_text);
  return (
    <div className='review'>
      <img src={props.review.user_photo}></img>
      <b className='name'>{props.review.user_name}</b>
      <div className='date'>{moment(props.review.review_date).format('MMMM YYYY')}</div>
      {props.review.review_text.split('\n').map( (paragraph) => {
        return <p className='reviewParagraph'>{paragraph}</p>;
      })}
    </div>
  );
}

export default Review;
