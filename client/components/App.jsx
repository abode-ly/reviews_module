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
    };
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
  
  render() {
    return (
      <div>
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
