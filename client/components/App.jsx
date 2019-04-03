import React from 'react';
import TotalReviews from './TotalReviews.jsx';
import Search from './Search.jsx';
import Ratings from './Ratings.jsx';
import Reviews from './Reviews.jsx';


const App = function() {
  return (
    <div>
      <TotalReviews />
      <Search />
      <Ratings />
      <Reviews />
    </div>
  )
}

export default App;

