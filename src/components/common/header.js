import React, { Component } from 'react';
// import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">

          </a>
          <ul className="nav navbar-nav">
            <li><a href="/#">Home</a></li>
            <li><a href="/#authors">Authors</a></li>
            <li><a href="/#feedback">Feedback</a></li>
            <li><a href="/#about">About</a></li>

          </ul>

        </div>
      </nav>
    );
  }
}

export default Header;