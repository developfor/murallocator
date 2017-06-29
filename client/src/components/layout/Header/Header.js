import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-bar">
        <div className="header-left">
          <Link className="no-style-link" to="/">
            <img src="/images/logo.svg" alt="Mural Locator Logo" />
          </Link>
        </div>
        <div className="header-right">
          <a className="no-style-link" href="#">
            <img src="/images/menu.svg" alt="Menu" width="25" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
