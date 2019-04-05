import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   searchTerm: '',
    // },
  }

  render() {
    return (
      <form>
        <input type='text' placeholder="Search reviews"></input>
      </form>
    );
  }
}

export default Search;
