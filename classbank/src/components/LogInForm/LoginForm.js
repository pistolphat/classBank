import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LogInForm.css";

class LogInForm extends Component {

  redirect() {
    return <Redirect to='/'/>
  }
  render() {
    return (
      <div>
        <h2>Log In</h2>

        <form>
          <div>
            <label>Email</label>
            <input type="text" name="email" onChange={this.props.handleInput} />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={this.props.handleInput}
            />
          </div>
          <input
            value="Submit"
            type="submit"
            onClick={this.props.handleLogIn}
          />
        </form>
        {this.props.isLoggedIn ? this.redirect(): null}
      </div>
    );
  }
}

export default LogInForm;
