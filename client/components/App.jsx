import React from 'react';
import axios from 'axios';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      reviews: [],
      foundAverage: false,
      avgRating: 0,
      ratings: {
        communication: 0,
        value: 0,
        cleanliness: 0,
        location: 0,
        checkIn: 0,
        accuracy: 0,
      },
      searchTerm: '',
    };
    this.calculateAvg = this.calculateAvg.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
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

  calculateAvg(avgRating, ratings) {
    this.setState({
      avgRating,
      ratings,
      foundAverage: true,
    });
  }
  
  filterSearch(searchTerm, filtReviews) {
    this.setState({
      reviews: filtReviews,
      searchTerm: searchTerm,
    });
  }

  render() {
    return (
      <div>
        <TotalReviews stars={this.state.avgRating} />
        <Search reviews={this.state.reviews} filterSearch={this.filterSearch} />
        <Ratings ratings={this.state.ratings} foundAverage={this.state.foundAverage} reviews={this.state.reviews} calculateAvg={this.calculateAvg} />
      </div>
    );
  }
}

export default App;
