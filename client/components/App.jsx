import React from 'react';
import axios from 'axios';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import SearchStats from './SearchStats.jsx';
import Reviews from './Reviews.jsx';
import PageNavBtns from './PageNavBtns.jsx';
import styles from './Component.module.css';

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
    const { reviewsPerPage } = this.state;
    const pathNum = Number(window.location.pathname.split('/')[1]);
    let requestedAbode = Math.ceil(Math.random() * 100);
    if (pathNum > 0 && pathNum < 101) {
      requestedAbode = pathNum;
    }
    axios.get(`/abodes/${requestedAbode}/reviews`)
      .then((listingInfo) => {
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
    const { allReviews, reviewsPerPage } = this.state;
    reviews = reviews || allReviews;
    this.setState({
      reviews,
      searchTerm,
      maxPage: Math.ceil(reviews.length / reviewsPerPage),
      pageNum: 1,
    });
  }

  newPage(pageNum) {
    this.setState({
      pageNum,
    });
  }

  render() {
    const { searchTerm, reviews, allReviews, ratings, foundAverage, avgRating, pageNum, reviewsPerPage, maxPage } = this.state;
    let underSearch;
    if (searchTerm !== '') {
      underSearch = <SearchStats reviews={reviews} searchTerm={searchTerm} filterSearch={this.filterSearch} />;
    } else {
      underSearch = <Ratings ratings={ratings} foundAverage={foundAverage} reviews={reviews} calculateAvg={this.calculateAvg} />;
    }

    return (
      <div className={styles.reviewsContainer}>
        <div className={styles.totalAndSearch}>
          <TotalReviews stars={avgRating} reviews={allReviews} />
          <Search reviews={allReviews} filterSearch={this.filterSearch} />
        </div>
        <hr className={styles.line} />
        { underSearch }
        <hr className={styles.line} />
        <Reviews searchTerm={searchTerm} reviews={reviews} pageNum={pageNum} reviewsPerPage={reviewsPerPage} />
        <PageNavBtns newPageFn={this.newPage} newPage={this.newPage} pageNum={pageNum} maxPage={maxPage} />
      </div>
    );
  }
}

export default App;
