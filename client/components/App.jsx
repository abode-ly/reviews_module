import React from 'react';
import axios from 'axios';
import TotalReviews from './TotalReviews';
import Search from './Search';
import Ratings from './Ratings';
import Reviews from './Reviews';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      reviews: [],
      avgStars: 0,
    };
    // this.foundAvg = this.foundAvg.bind(this);
  }

  componentDidMount() {
    axios.get('/abodes/2/reviews')
      .then((listingInfo) => {
        this.setState({
          allReviews: listingInfo.data.reviews,
          reviews: listingInfo.data.reviews,
        });
      })
      .catch(() => {
        console.log('Failed to retreive data from the server');
      });
  }

  // foundAvg(avg) {
  //   this.setState({
  //     avgStars: avg,
  //   });
  // }

  render() {
    return (
      <div>
        <TotalReviews stars={this.state.avgStars} foundAvg={this.foundAvg} />
        <Search />
        <Ratings reviews={this.state.reviews} />
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
