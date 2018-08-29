import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const axios = require('axios');

export default class Signup extends Component {
  render() {
    return (
      <div className="container">
        <div className="page-header text-center">
          <h1>
            <span className="fa fa-anchor" /> Profile Page
          </h1>
          <a href="/logout" className="btn btn-default btn-sm">
            Logout
          </a>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="well">
              <h3>
                <span className="fa fa-user" /> Local
              </h3>

              {/*<p>
                        <strong>id</strong>: <%= user._id %><br>
                        <strong>email</strong>: <%= user.local.email %><br>
                        <strong>password</strong>: <%= user.local.password %>
                    </p>*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
