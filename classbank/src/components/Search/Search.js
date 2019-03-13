import React, { Component } from "react";
import "./Search.css";

class Search extends Component {

  render() {
    return (
      <div>
        <input
          type="text"
          name="search"
          onChange={this.props.handleSearch}
          placeholder="Search your lesson"
        />
      </div>
    );
  }
}

export default Search;
