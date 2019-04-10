import React from 'react';
import styles from './Search.module.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
    };
  }

  search(e) {
    const { filterSearch, reviews } = this.props;
    const { searchTerm } = this.state;
    e.preventDefault();
    const fitsFilter = reviews.filter((review) => {
      return review.review_text.includes(searchTerm);
    });
    filterSearch(searchTerm, fitsFilter);
  }

  input(e) {
    this.setState({
      searchTerm: e.target.value,
    });
  }

  clear() {
    const { filterSearch } = this.props;
    this.setState({
      searchTerm: '',
    });
    filterSearch('');
  }

  render() {
    const { searchTerm } = this.state;
    let x;
    if (searchTerm !== '') {
      x = (
        <div className={styles.x}>
          <i className="fas fa-times" onClick={()=>{this.clear()}} />
        </div>
      );
    }
    return (
      <form onSubmit={(e) => { this.search(e); }} className={styles.search}>
        <input className={styles.searchBar} type="text" placeholder="Search reviews" onChange={(e) => { this.input(e); }} value={searchTerm} />
        <div className={styles.searchIcon}>
          <i className="fas fa-search" />
        </div>
        {x}
      </form>
    );
  }
}

export default Search;
