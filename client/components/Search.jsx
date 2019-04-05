import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  search(e) {
    e.preventDefault();
    console.log('search ', this.state.searchTerm);
    const fitsFilter = this.props.reviews.filter(review => {
      return review.review_text.includes(this.state.searchTerm);
    });
  }

  input(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={(e) => { this.search(e); }}>
        <input type='text' placeholder="Search reviews" onChange={(e)=>{this.input(e)}}></input>
      </form>
    );
  }
}

export default Search;
