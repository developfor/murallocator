import React, { Component, PropTypes } from 'react';
import Header from '../components/layout/Header/Header'
import Footer from '../components/layout/Footer/Footer'



import './App.css';


class App extends Component {
  static propTypes = {
    children : PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          {this.props.children}
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
