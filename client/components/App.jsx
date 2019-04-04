import React from 'react';
import axios from 'axios';
import TopBar from './TopBar';

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
        console.log('have data');
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
      </div>
    );
  }
}

export default App;
