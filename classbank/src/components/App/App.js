import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import Navbar from '../../components/NavBar/NavBar'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LogInForm from '../../components/LogInForm/LoginForm'
import Logout from '../../components/Logout/Logout'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main>
          <Switch>
          <Route path="/signup" render={() => <SignUpForm />} />
          <Route path="/login" render={() => <LogInForm />} />
          <Route path="/logout" render={() => <Logout />} />

          {/* <Route path='/login'render={(props) => {return (<SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />)}}/>
          <Route path='/logout'render={(props) => {return (<SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />)}}/>
          <Route path='/signup'render={(props) => {return (<SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />)}}/> */}

          </Switch>
          </main>
      </div>
    );
  }
}

export default App;
