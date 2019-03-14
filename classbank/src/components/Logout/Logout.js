import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "./Logout.css";


class LogOut extends Component {

  redirect(){
    return < Redirect to='/login'/>
  }

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
          {/* {this.redirect()} */}
        </form>
        
      </div>
    );
  }
}

export default LogOut;
