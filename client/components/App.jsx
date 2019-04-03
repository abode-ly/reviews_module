import React from 'react';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
      avgStars: 5
    };
  }

  componentDidMount() {
    fetch('/abodes/2/reviews')
      .then((response)=>{
        return response.json()
      })
      .then((listingInfo) => {
        this.setState({ reviews: listingInfo.reviews })
      });
  }

  render() {
    return (
      <div>
        <TotalReviews stars={this.state.avgStars}/>
        <Search />
        <Ratings reviews={this.state.reviews}/>
        <Reviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default App;

