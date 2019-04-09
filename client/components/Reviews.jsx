import React from 'react';
import Review from './Review.jsx';

function Reviews (props) {
  const { reviews, pageNum, searchTerm, reviewsPerPage } = props;
  const lastReviewOnPage = pageNum * reviewsPerPage;
  const firstReviewOnPage = (pageNum - 1) * reviewsPerPage;
  const reviewsToRender = reviews.slice(firstReviewOnPage, lastReviewOnPage);

  return (
    <div>
      {reviewsToRender.map( (review) => {
        return <Review key={review._id} review={review} searchTerm={searchTerm} />;
      })}
    </div>
  );
}

export default Reviews;
