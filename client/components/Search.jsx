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
    let searchTerm = this.state.searchTerm;
    const fitsFilter = this.props.reviews.filter((review) => {
      return review.review_text.includes(searchTerm);
    });
    // this.setState({
    //   searchTerm: '',
    // });
    this.props.filterSearch(searchTerm, fitsFilter);
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
