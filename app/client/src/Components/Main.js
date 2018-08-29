import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron text-center">
          <h1>
            <span className="fa fa-lock" /> Node Authentication
          </h1>

          <p>Login or Register with:</p>

          <Link to="/login" className="btn btn-default">
            <span className="fa fa-user" /> Local Login
          </Link>
          <Link to="/signup" className="btn btn-default">
            <span className="fa fa-user" /> Local Signup
          </Link>
        </div>
      </div>
    );
  }
}
