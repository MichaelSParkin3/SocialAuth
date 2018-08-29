import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const axios = require('axios');

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errors: {},
      wrongPassword: false,
      wrongEmail: false
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(e) {
    var thisa = this;
    thisa.setState({ wrongPassword: false, wrongEmail: false });
    console.log('REQUEST');
    console.log(this.state);
    e.preventDefault();

    // create a string for an HTTP body message
    const email = encodeURIComponent(this.state.email);
    const password = encodeURIComponent(this.state.password);
    const formData = `email=${email}&password=${password}`;

    axios({
      method: 'post',
      url: '/signup',
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
        } else if (response.data == 'weak password') {
          thisa.setState({ wrongPassword: true });
        } else if (response.data == 'User already exists') {
          console.log('ghfgg');
          thisa.setState({ wrongEmail: true });
        }
      })
      .catch(function(response) {
        //handle error
        console.log(response);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1>
            <span className="fa fa-sign-in" /> Signup
          </h1>

          {/*<!-- show any messages that come back with authentication -->
    <% if (message.length > 0) { %>
        <div className="alert alert-danger"><%= message %></div>
    <% } %>*/}

          {/*<!-- LOGIN FORM -->*/}
          <form onSubmit={this.onFormSubmit} action="/signup" method="post">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className={
                  this.state.wrongEmail
                    ? 'form-control input-error'
                    : 'form-control'
                }
                name="email"
                value={this.state.email}
                onChange={e => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className={
                  this.state.wrongPassword
                    ? 'form-control input-error'
                    : 'form-control'
                }
                name="password"
                value={this.state.password}
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="btn btn-warning btn-lg">
              Signup
            </button>
          </form>

          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
          <p>
            Or go <Link to="/">home</Link>.
          </p>
        </div>
      </div>
    );
  }
}
