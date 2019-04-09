import React from 'react';
import Rating from './Rating.jsx';
import styles from './Ratings.module.css';
import sharedStyles from './Component.module.css';

function Ratings(props) {
  // if the averages have NOT been calculated before && we have data from DB, then:
  if(!props.foundAverage && props.reviews.length > 0) {  
    const numReviews = props.reviews.length;
    let accuracy, communication, cleanliness, location, checkIn, value;
    accuracy = communication = cleanliness = location = checkIn = value = 0;

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
    const avgRating = (totalRatings / 6 / numReviews);
    const calcRatings = {
      accuracy: accuracy/numReviews,
      communication: communication/numReviews,
      cleanliness: cleanliness/numReviews,
      location: location/numReviews,
      checkIn: checkIn/numReviews,
      value: value/numReviews,
    };
    props.calculateAvg(avgRating, calcRatings);
  }

  return (
    <div className='ratingsContainer'>
      <span className='ratingTriple ratingsLeft'>
        <Rating key="accuracyRating" type="Accuracy" value={props.ratings.accuracy} />
        <Rating key="communicationRating" type="Communication" value={props.ratings.communication} />
        <Rating key="cleanlinessRating" type="Cleanliness" value={props.ratings.cleanliness} />
      </span>
      <span className='ratingTriple ratingsRight'>
        <Rating key="locationRating" type="Location" value={props.ratings.location} />
        <Rating key="checkInRating" type="Check-in" value={props.ratings.checkIn} />
        <Rating key="valueRating" type="Value" value={props.ratings.value} />
      </span>
    </div>
  );
}

export default Ratings;
