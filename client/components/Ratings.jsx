import React from 'react';
import Rating from './Rating.jsx';
import styles from './Ratings.module.css';

function Ratings(props) {
  const { foundAverage, reviews, calculateAvg, ratings } = props;

  // if the averages have NOT been calculated before && we have data from DB, then:
  if(!foundAverage && reviews.length > 0) {  
    const numReviews = reviews.length;
    let accuracy, communication, cleanliness, location, checkIn, value;
    accuracy = communication = cleanliness = location = checkIn = value = 0;

    reviews.forEach((review) => {
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
      accuracy: accuracy / numReviews,
      communication: communication / numReviews,
      cleanliness: cleanliness / numReviews,
      location: location / numReviews,
      checkIn: checkIn / numReviews,
      value: value / numReviews,
    };
    calculateAvg(avgRating, calcRatings);
  }

  return (
    <div className={styles.ratingsContainer}>
      <span className={styles.ratingTriple}>
        <Rating key="accuracyRating" type="Accuracy" value={ratings.accuracy} />
        <Rating key="communicationRating" type="Communication" value={ratings.communication} />
        <Rating key="cleanlinessRating" type="Cleanliness" value={ratings.cleanliness} />
      </span>
      <span className={styles.ratingTriple}>
        <Rating key="locationRating" type="Location" value={ratings.location} />
        <Rating key="checkInRating" type="Check-in" value={ratings.checkIn} />
        <Rating key="valueRating" type="Value" value={ratings.value} />
      </span>
    </div>
  );
}

export default Ratings;
