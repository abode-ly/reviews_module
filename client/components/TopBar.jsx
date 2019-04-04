import React from 'react';
import TotalReviews from './TotalReviews';
import Search from './Search';
import Ratings from './Ratings';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avgRating: 0,
      avgRatings: {
        accuracy: 0,
        communication: 0,
        cleanliness: 0,
        location: 0,
        checkIn: 0,
        value: 0,
      },
    };
  }

  componentDidMount() {
    if (this.state.avgRating === 0 && this.props.reviews.length > 0) {
      this.calcAverages();
    }
  }
  
  calcAverages() {
    let accuracy = 0;
    let communication = 0;
    let cleanliness = 0;
    let location = 0;
    let checkIn = 0;
    let value = 0;
    this.props.reviews.forEach((review) => {
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
    console.log('totalRatings', totalRatings);
    const numReviews = this.props.reviews.length;
    const avgRating = (totalRatings / 6 / numReviews);

    this.setState({
      avgRating,
      avgRatings: {
        accuracy: accuracy/numReviews,
        communication: communication/numReviews,
        location: location/numReviews,
        checkIn: checkIn/numReviews,
        value: value/numReviews,
        cleanliness: cleanliness/numReviews,
      },
    });
  }

  render() {
    return (
      <div>
        <TotalReviews />
        <Search reviews={this.props.reviews} filteredReviews={this.props.filteredReviews} />
        {/* <Ratings /> */}
      </div>
    );
  }
}

export default TopBar;

// constructor(props) {
//   super(props);
//   this.state = {
//     accuracy: 0,
//     communication: 0,
//     cleanliness: 0,
//     location: 0,
//     checkIn: 0,
//     value: 0,
//     avgStar: 0,
//   };
// }
