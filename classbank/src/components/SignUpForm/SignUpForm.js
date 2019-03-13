import React, { Component } from "react";
import { Redirect } from 'react-router-dom'

import "./SignUpForm.css";

class SignUpForm extends Component {
  
  redirect() {
    return <Redirect to='/'/>
  }

  render () {

    // if (this.props.isLoggedIn){
    //   return <Redirect to={'/'}/>;
    // }
    return (
      <div>
        <h2>Sign Up</h2>

        <form>
          <div>
            <label>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
        
        {this.props.isLoggedIn ? this.redirect(): null}
      </div>
    )
  }
}

export default SignUpForm;
