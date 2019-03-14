import React, { Component } from "react";
// import { Redirect } from 'react-router-dom'
import "./Logout.css";

class LogOut extends Component {

  render() {
    return (
      <div>
        <h2>Log Out</h2>
        <form>
          <input
            className="btn btn-primary"
            value="Log Out"
            type="submit"
            onClick={this.props.handleLogOut}
          />
        </form>
      </div>
    );
  }
}

export default LogOut;
