import React from 'react';
import { emptyTypeAnnotation } from '@babel/types';

function Ratings(props) {
  const numReviews = props.reviews.length;
  let accuracy = 0;
  let communication = 0;
  let cleanliness = 0;
  let location = 0;
  let checkIn = 0;
  let value = 0;

  props.reviews.forEach((review) => {
    // NOTE: The ratings are stored as Buffers instead of Numbers in MongoDB
    // to take up less memory, and as an added challenge. However, it means
    // I have to pull out my desired value via the syntax seen below. 
    accuracy += review.accuracy.data[0];
    communication += review.communication.data[0];
    cleanliness += review.cleanliness.data[0];
    location += review.location.data[0];
    checkIn += review.check_in.data[0];
    value += review.value.data[0];
  });

  const totalRatings = accuracy + communication + cleanliness + location + checkIn + value;
  const avgRating = (totalRatings/6/numReviews);
  console.log(avgRating);

  return (
    <div>
      Ratings
    </div> 
  )
}

export default Ratings;
