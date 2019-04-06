import React from 'react';
import moment from 'moment';
import styles from './Review.module.css';
import sharedStyles from './Component.module.css';

function Review(props) {
  console.log(props.review.review_text);

  // const text = props.review.review_text.split('\n').forEach( (paragraph, index) => {
  //   return <p className='reviewParagraph' key={index}>{paragraph}</p>;
  // });

  return (
    <div className='review'>
      <div className='userInfo'>
        <img src={props.review.user_photo} alt={props.review.user_name}></img>
        <div>
          <b className='name'>{props.review.user_name}</b>
          <div className='date'>{moment(props.review.review_date).format('MMMM YYYY')}</div>
        </div>
      </div>
      {props.review.review_text.split('\n').map( (paragraph, index) => {
        return <p className='reviewParagraph' key={index}>{paragraph}</p>;
      })}
    </div>
  );
}

export default Review;
