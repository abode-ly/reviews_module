import React from 'react';
import styles from './Search.module.css';
import sharedStyles from './Component.module.css';

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
    let x;
    if(this.state.searchTerm !== '') {
      x = <i className="fas fa-times" onClick={()=>{this.setState({searchTerm: ''})}}></i>;
    }
    return (
      <form onSubmit={(e) => { this.search(e);}} className='search' >
        <i className="fas fa-search"></i>
        <input className='searchBar' type='text' placeholder="Search reviews" onChange={(e)=>{this.input(e)}} value={this.state.searchTerm}></input>
        {x}
      </form>
    );
  }
}

export default Search;
