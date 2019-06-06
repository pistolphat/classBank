import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {

    let navBarItems = [<Link className='nav-logo' key={1} to="/">Classbank</Link>]
    // if (this.props.isLoggedIn) {
    //   navBarItems.push(<Link className='nav-link btn btn-light btn-sm' key={2} to="/logout">Log Out</Link>);
    // } else {
    //   navBarItems.push(<Link className='nav-link btn btn-light btn-sm' key={3} to="/signup">Sign Up</Link>);
    //   navBarItems.push(<Link className='nav-link btn btn-light btn-sm' key={4} to="/login">Log In</Link>);
    // }
    return (
      <div className='navbar navbar-expand-lg container-fluid'>
        {navBarItems}
      </div>
    );
  } 
}

export default NavBar;
