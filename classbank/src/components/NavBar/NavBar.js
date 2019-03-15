import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {

    let navBarItems = [<Link className='nav-logo' key={1} to="/signup">Classbank</Link>]
    if (this.props.isLoggedIn) {
      navBarItems.push(<Link className='nav-link btn btn-dark' key={2} to="/logout">Log Out</Link>);
    } else {
      navBarItems.push(<Link className='nav-link btn btn btn-dark' key={3} to="/signup">Sign Up</Link>);
      navBarItems.push(<Link className='nav-link btn btn btn-dark' key={4} to="/login">Log In</Link>);
    }
    return (
      <div className='navbar navbar-expand-lg'>

        {navBarItems}

      </div>
    );
  } 
}

export default NavBar;
