import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="header-bar border-bottom">

        <div className="header-left">
          <a className="no-style-link" href="#">
            <img src="/images/logo.svg" alt="Mural Locator Logo" />
          </a>
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
