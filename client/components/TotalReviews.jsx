import React from 'react';

function TotalReviews(props) {
  return (
    <div>
      {props.reviews.length} TotalReviews: {props.stars}
    </div>
  );
}

export default TotalReviews;
