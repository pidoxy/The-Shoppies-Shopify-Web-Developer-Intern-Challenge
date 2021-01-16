import React, { Component } from 'react';
import './Navbar.css';
import logo from '../../images/Group.svg';

class Nav extends Component {
  render() {

    return (
      <div >
        <nav className="navbar mb-5">
          <img className="nav_logo" src={logo} alt="logo" />
        </nav>
      </div>
    );

  }
}

export default Nav;
