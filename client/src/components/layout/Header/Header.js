import React, { Component } from 'react';
import { Link } from 'react-router';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar ">
        
      <div className="container-fluid">
        <div className="nav navbar-nav navbar-left logo">
          <Link className="no-style-link" to="/">
              <img src="/images/logo.svg" alt="Mural Locator Logo" />
          </Link>
        </div>

        <ul className="nav navbar-nav navbar-right">
          <li> <Link to="#"><i className="fa fa-list-alt fa-2x" aria-hidden="true"></i></Link> </li>
          <li> <Link to="#"><i className="fa fa-map-signs fa-2x" aria-hidden="true"></i></Link> </li>
          <li> <Link to="#"><i className="fa fa-globe fa-2x" aria-hidden="true"></i></Link> </li>
        </ul>
        <div className="navbar-header">
        
        </div>
        </div>
       
    </nav>
          

      
    );
  }
}

export default Header;


// <div className="header-bar">
      //   <div className="header-left">
      //     <Link className="no-style-link" to="/">
      //       <img src="/images/logo.svg" alt="Mural Locator Logo" />
      //     </Link>
      //   </div>
      //   <div className="header-right">
      //     <a className="no-style-link" href="#">
      //       <img src="/images/menu.svg" alt="Menu" width="25" />
      //     </a>
      //   </div>
      // </div>