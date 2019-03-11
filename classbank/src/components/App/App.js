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
            {/* <Route path='/signup */}
            
          </Switch>
          {/* <Route path="" render={}/>
          <Route path="" component={}/> */}
          </main>
      </div>
    );
  }
}

export default App;
