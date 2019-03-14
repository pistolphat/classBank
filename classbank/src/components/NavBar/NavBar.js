import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

class NavBar extends Component {
  render() {
    // console.log(this.props.isLoggedIn);

    let navBarItems = [];
    if (this.props.isLoggedIn) {
      navBarItems.push(<Link key={1} to="/logout/">Log Out</Link>);
    } else {
      navBarItems.push(<Link key={2} to="/signup/">Sign Up</Link>);
      navBarItems.push(<Link key={3} to="/login/">Log In</Link>);
    }
    return (
      <div>
        {/* <div>
        <Link to='/'>Classbank</Link>
        {navBarItems}
        </div> */}
        <nav className="navbar navbar-expand-lg text-white bg-dark">
          <Link className="navbar-brand" to="/">Classbank</Link>
          
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {navBarItems}
            </div>
        </nav>
      </div>
    );
  } 
}


export default NavBar;
