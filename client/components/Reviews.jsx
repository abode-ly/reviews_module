import React from 'react';
import Review from './Review';

function Reviews(props) {
  // console.log(props.reviews)
  return (
    <div>
      {props.reviews.map( (review) => {
        return <Review key={review._id} review={review} />;
      })}
    </div>
  );
}

export default Reviews;
