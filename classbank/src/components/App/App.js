import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="">Home</Link>
          <Link to="">Signup</Link>
          <Link to="">Sigin</Link>
        </nav>
        <main>
          {/* <Route path="" render={}/>
          <Route path="" component={}/> */}
            
          {/* // render and component props are two options we can use. */}
        </main>
      </div>
    );
  }
}

export default App;
