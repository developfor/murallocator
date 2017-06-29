import React, { Component, PropTypes } from 'react';
import Header from '../components/layout/Header/Header'
import 'normalize.css/normalize.css';
import 'skeleton-css/css/skeleton.css';
import './App.css';

class App extends Component {
  static propTypes = {
    children : PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
