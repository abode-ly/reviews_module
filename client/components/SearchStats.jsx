import React from 'react';

function SearchStats (props) {
  const handleClick = () => {
    props.filterSearch('');
  };

  return (
    <div>
      <h4>{props.reviews.length} guests have mentioned "{props.searchTerm}"</h4>
      <h4 onClick={handleClick}>Back to all reviews</h4>
    </div>
  );
}

export default SearchStats;
