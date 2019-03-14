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
      <div className='container'>

        <h1>Sign Up</h1>
        <form>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name='email' onChange={this.props.handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address"/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name='password' onChange={this.props.handleInput}className="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
        {this.props.isLoggedIn ? this.redirect(): null}
      </div>
    )
  }
}

export default SignUpForm;


{/* <form>
<div>
<label>Email</label>
<input type='text' name='email' onChange={this.props.handleInput} />
</div>
<div>
<label>Password</label>
<input type='password' name='password' onChange={this.props.handleInput} />
</div>
<input value='Submit' type='submit' onClick={this.props.handleSignUp} />
</form> */}