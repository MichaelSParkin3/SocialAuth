import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

const axios = require('axios');

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const responseFacebook = response => {
      console.log(response);

      const thisa = this;

      // create a string for an HTTP body message
      const email = encodeURIComponent(response.email);
      const password = encodeURIComponent(response.accessToken);
      const formData = `email=${email}&password=${password}`;

      axios({
        method: 'post',
        url: '/facebook',
        withCredentials: true,
        data: formData,
        config: {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      })
        .then(function(response) {
          //handle success
          console.log(response.data);
          if (response.data == '/') {
            window.location = '/profile';
          }
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });
    };

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

          <FacebookLogin
            appId="687411981618374"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
          />

          <Link to="/signup" className="btn btn-default">
            <span className="fa fa-user" /> Local Signup
          </Link>
        </div>
      </div>
    );
  }
}
