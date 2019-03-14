import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./LogInForm.css";

class LogInForm extends Component {

  redirect() {
    return <Redirect to='/'/>
  }
  render() {
    return (
      <div className='container bg-light text-dark mt-5 py-3 rounded' style={{maxWidth: "400px"}}>
        <h1>Log In</h1>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="text" name="email" onChange={this.props.handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name="password"onChange={this.props.handleInput} className="form-control" id="exampleInputPassword1" placeholder="Password"/>
          </div>
          <input className="btn btn-primary" value="Submit" type="submit" onClick={this.props.handleLogIn}/>
        </form>
          {this.props.isLoggedIn ? this.redirect(): null}
      </div>
    );
  }
}

export default LogInForm;

{/* <form>
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
<form> */}