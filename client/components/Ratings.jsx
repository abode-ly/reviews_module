import React from 'react';
import Rating from './Rating.jsx';

function Ratings(props) {
  return (
    <div>
      <Rating key="accuracy" type="accuracy" value={props.accuracy} />
      <Rating key="communication" type="communication" value={props.communication} />
      <Rating key="cleanliness" type="cleanliness" value={props.cleanliness} />
      <Rating key="location" type="location" value={props.location} />
      <Rating key="checkIn" type="checkIn" value={props.checkIn} />
      <Rating key="value" type="value" value={props.value} />
    </div>
  );
}

export default Ratings;
