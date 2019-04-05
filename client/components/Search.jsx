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
  }

  input(e) {
    console.log(e.target.value);
    this.setState({
      searchTerm: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={(e) => {this.search(e)}}>
        <input type='text' placeholder="Search reviews" onChange={(e)=>{this.input(e)}}></input>
      </form>
    );
  }
}

export default Search;
