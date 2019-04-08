import React from 'react';
import Review from './Review.jsx';

class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      maxPage: 1,
    }
  }

  render() {
    const {reviews, pageNum, searchTerm} = this.props;
    const reviewsToRender = reviews.slice(0, pageNum+1);

    return (
      <div>
        {reviewsToRender.map( (review) => {
          return <Review key={review._id} review={review} searchTerm={searchTerm} />;
        })}
      </div>
    );
  }
}

export default Reviews;
