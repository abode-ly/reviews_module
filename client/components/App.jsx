import React from 'react';
import axios from 'axios';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import SearchStats from './SearchStats.jsx';
import Reviews from './Reviews.jsx';
import sharedStyles from './Component.module.css';

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
          foundAverage: false,
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
    filtReviews = filtReviews || this.state.allReviews;
    this.setState({
      reviews: filtReviews,
      searchTerm: searchTerm,
    });
  }

  render() {
    let underSearch;
    if (this.state.searchTerm !== '') {
      underSearch = <SearchStats reviews={this.state.reviews} searchTerm={this.state.searchTerm} filterSearch={this.filterSearch} />
    } else {
      underSearch = <Ratings ratings={this.state.ratings} foundAverage={this.state.foundAverage} reviews={this.state.reviews} calculateAvg={this.calculateAvg} />
    }

    return (
      <div>
<<<<<<< HEAD
        {/* <div className='divider'></div> */}
=======
        <TotalReviews stars={this.state.avgRating} reviews={this.state.reviews}/>
        <Search reviews={this.state.reviews} filterSearch={this.filterSearch} />
       {underSearch}
>>>>>>> eef2f281af659edc936ce9480781b8b44f4a0485
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
