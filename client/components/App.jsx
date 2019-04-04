import React from 'react';
import $ from 'jquery';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allReviews: [],
      reviews: [],
      avgStars: 0,
    };
    this.foundAvg = this.foundAvg.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: '/abodes/2/reviews',
      method: 'GET',
    })
      .done((listingInfo) => {
        this.setState({
          allReviews: listingInfo.reviews,
          reviews: listingInfo.reviews,
        });
      })
      .fail((err) => {
        console.log('Failed to get reviews from database. Error: ', err);
      });
  }

  foundAvg(avg) {
    this.setState({
      avgStars: avg,
    });
  }

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
