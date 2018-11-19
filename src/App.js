import React, { Component } from 'react';
import './App.css';
import Home from "./Home/Home";
import { Router, navigate } from '@reach/router';
import Login from "./Login/Login";

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: null
        };
    }

  render() {
    return (
      <div className="App">
          <Router>
              <Home path="/" user={this.state.user} />
              <Login path="/login" />
          </Router>

      </div>


    );
  }
}

export default App;
