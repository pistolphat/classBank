import React, { Component } from "react";
import "./Search.css";

class Search extends Component {

  render() {
    return (
      
        <div className="input-group input-group-lg px-5 mt-3">
          <input type="text" name='search' placeholder='Search your Lessons, Homeworks, Labs' value={this.props.search} onChange={this.props.handleSearch}
            className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
        </div>
      // </div>
    );
  }
}

export default Search;
