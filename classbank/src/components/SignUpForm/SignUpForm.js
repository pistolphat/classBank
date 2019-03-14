import React, { Component } from "react";
import { Redirect, Link } from 'react-router-dom'

import "./SignUpForm.css";

class SignUpForm extends Component {
  
  redirect() {
    return <Redirect to='/'/>
  }

  render () {

    return (
      <div className='container rounded bg-light text-dark mt-5 py-3' style={{maxWidth: "400px"}}>

        <h1>Sign Up</h1>
        <br />
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" name='email' onChange={this.props.handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address"/>
          <br />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" name='password' onChange={this.props.handleInput} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          <br />
          <large id="emailHelp" className="form-text text-muted">Already have an accout? <Link to='/login'>Sign In</Link></large>
        </div>
          <input className="btn btn-primary" value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
        
        {this.props.isLoggedIn ? this.redirect(): null}
      </div>
    )
  }
}

export default SignUpForm;