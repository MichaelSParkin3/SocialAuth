import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import Main from './Components/Main';
import Login from './Components/Login';
import Signup from './Components/Signup';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route
            exact
            path={process.env.PUBLIC_URL + '/'}
            render={() => <Main />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/login'}
            render={() => <Login />}
          />
          <Route
            exact
            path={process.env.PUBLIC_URL + '/signup'}
            render={() => <Signup />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
