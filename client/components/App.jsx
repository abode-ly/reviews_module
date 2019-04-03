import React from 'react';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  componentDidMount() {
    fetch('/abodes/2/reviews')
      .then((response)=>{
        return response.json()
      })
      .then((data)=>{console.log(JSON.stringify(data))});
  }

  render() {
    return (
      <div>
        <TotalReviews />
        <Search />
        <Ratings />
        <Reviews />
      </div>
    )
  }
}

export default App;

