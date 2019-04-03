import React from 'react';

function Ratings(props) {
  const numReviews = props.reviews.length;
  const ratingSums = {
    accuracy: 0,
    communication: 0,
    cleanliness: 0,
    location: 0,
    checkIn: 0,
    value: 0
  };

  props.reviews.forEach((review) => {
    // NOTE: The ratings are stored as Buffers instead of Numbers
    // to take up less memory, and as an added challenge.
    // However, it means I have to pull out my desired value as seen below. 
    ratingSums.accuracy += review.accuracy.data[0];
    ratingSums.communication += review.communication.data[0];
    ratingSums.cleanliness += review.cleanliness.data[0];
    ratingSums.location += review.location.data[0];
    ratingSums.checkIn += review.check_in.data[0];
    ratingSums.value += review.value.data[0];
  });

  console.log(ratingSums);

  return (
    <div>
      Ratings
    </div> 
  )
}

export default Ratings;
