import React from 'react';
import axios from 'axios';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import SearchStats from './SearchStats.jsx';
import Reviews from './Reviews.jsx';
import PageNavBtns from './PageNavBtns.jsx';
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
      pageNum: 1,
      reviewsPerPage: 7,
      maxPage: 1,
    };
    this.calculateAvg = this.calculateAvg.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.newPage = this.newPage.bind(this);
  }

  componentDidMount() {
    axios.get('/abodes/6/reviews')
      .then((listingInfo) => {
        let reviewsPerPage = this.state.reviewsPerPage;
        this.setState({
          allReviews: listingInfo.data.reviews,
          reviews: listingInfo.data.reviews,
          foundAverage: false,
          maxPage: Math.ceil(listingInfo.data.reviews.length / reviewsPerPage),
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
  
  filterSearch(searchTerm, reviews) {
    reviews = reviews || this.state.allReviews;
    let reviewsPerPage = this.state.reviewsPerPage;
    this.setState({
      reviews,
      searchTerm,
      maxPage: Math.ceil(reviews.length/reviewsPerPage),
      pageNum: 1,
    });
  }

  newPage(pageNum) {
    this.setState({
      pageNum,
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
        <div>
          <TotalReviews stars={this.state.avgRating} reviews={this.state.reviews} />
          <Search reviews={this.state.allReviews} filterSearch={this.filterSearch} />
        </div>
        <hr></hr>
       {underSearch}
       <hr></hr>
        <Reviews searchTerm={this.state.searchTerm} reviews={this.state.reviews} pageNum={this.state.pageNum} reviewsPerPage={this.state.reviewsPerPage} />
        <PageNavBtns newPageFn={this.newPage} newPage={this.newPage} pageNum={this.state.pageNum} maxPage={this.state.maxPage} />
      </div>
    );
  }
}

export default App;
