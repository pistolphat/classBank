import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    let navBarItems = [];
    if (this.props.isLoggedIn) {
      navBarItems.push(<Link key={1} to="/logout/">Log Out</Link>);
    } else {
      navBarItems.push(<Link key={2} to="/signup/">Sign Up</Link>);
      navBarItems.push(<Link key={3} to="/login/">Log In</Link>);
    }
    return (
      <div className='navbar'>
        <div><Link to="/">classBank</Link></div>
        <div>{navBarItems}</div>
      </div>
    );
  } 
}

export default NavBar;
