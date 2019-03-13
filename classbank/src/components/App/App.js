import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import Navbar from "../../components/NavBar/NavBar";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LogInForm from "../../components/LogInForm/LoginForm";
import Logout from "../../components/Logout/Logout";
import Home from "../../components/Home/Home"
import Show from '../../components/Show/Show'

const url = 'https://classbank.herokuapp.com'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // lesson: [],
      email: "",
      password: "",
      isLoggedIn: false
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
  }

  handleLogOut() {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false
    });
    localStorage.clear();
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post(url + "/users/signup", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post(url + "/users/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
      <header>
        <Navbar isLoggedIn={this.state.isLoggedIn}/>
      </header>
      
        <main>
          <Switch>
            <Route path='/signup'render={(props) => {return (<SignUpForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />)}}/>
            <Route path='/login'render={(props) => {return (<LogInForm isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />)}}/>
            <Route path='/logout'render={(props) => {return (<Logout isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />)}}/>
            {/* <Route path="/" render={() => {return(<Home isLoggedIn={this.state.isLoggedIn} />)}}/> */}
            {/* <Route path="/" render={() => {return(<Home isLoggedIn={this.state.isLoggedIn} />)}}/> */}
            <Route exact path="/lesson/:id" component= {Show} />
            <Route exact path="/" component= {Home} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
