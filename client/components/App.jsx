import React from 'react';
import axios from 'axios';
import TopBar from './TopBar';
import Reviews from './Reviews';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allReviews: [],
      reviews: [],
    };
    this.filteredReviews = this.filteredReviews.bind(this);
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

  filteredReviews(reviews) {
    this.setState({
      reviews,
    });
  }

  render() {
    return (
      <div>
        <TopBar reviews={this.state.allReviews} filteredReviews={this.filteredReviews} />
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
