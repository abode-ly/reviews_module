import React from 'react';
import Rating from './Rating.jsx';

function Ratings(props) {
  return (
    <div>
      <Rating key="accuracy" type="accuracy" value={accuracy} />
      <Rating key="communication" type="communication" value={communication} />
      <Rating key="cleanliness" type="cleanliness" value={cleanliness} />
      <Rating key="location" type="location" value={location} />
      <Rating key="checkIn" type="checkIn" value={checkIn} />
      <Rating key="value" type="value" value={value} />
    </div>
  );
}

export default Ratings;
