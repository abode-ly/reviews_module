import React from 'react';
import axios from 'axios';
import Reviews from './Reviews.jsx';
import sharedStyles from './Component.module.css';

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
        {/* <div className='divider'></div> */}
        <Reviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;
