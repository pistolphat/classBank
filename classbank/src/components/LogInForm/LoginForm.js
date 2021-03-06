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

        <h1 className='login'>Log In</h1>
        <br />
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="text" name="email" onChange={this.props.handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address"/>
            
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
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