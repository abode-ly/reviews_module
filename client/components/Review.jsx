import React from 'react';
import moment from 'moment';

function Review(props) {
  console.log(props.review.review_text);
  return (
    <div>
      <img src={props.review.user_photo}></img>
    <b>{props.review.user_name}</b>
    <div>{moment(props.review.review_date).format('MMMM YYYY')}</div>
    <p>
      {props.review.review_text}
    </p>
    </div>
  );
}

export default Review;
