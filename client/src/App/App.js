import React, { Component, PropTypes } from 'react';
import Header from '../components/layout/Header/Header'
// import 'normalize.css/normalize.css';
// import 'skeleton-css/css/skeleton.css';
import {connect} from 'react-redux';
import * as geolocationActions from '../actions/geolocationActions'

// import './bootstrap.css';
import './App.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 


class App extends Component {
  constructor(props){
    super(props);
  }
  userLocation() {

    // if (navigator.geolocation) {
    //  alert('Geolocation is supported!');
    // }
    // else {
    //   alert('Geolocation is not supported for this Browser/OS.');
    // }

    
    if (navigator.geolocation) {
      // alert(this.props)
        navigator.geolocation.getCurrentPosition( (location) => {
        // alert(this.props)
        // console.log(location.coords.latitude);
        // console.log(location.coords.longitude);
        // console.log(location.coords.accuracy);
        this.props.dispatch(geolocationActions.getGeolocation([location.coords.latitude, location.coords.longitude]));  
      
      });
    }else{
      console.log("please enable geolocation")
      this.props.dispatch(geolocationActions.getGeolocation([0, 0]));      
    }

  }

  componentDidMount(){
    this.props.dispatch(geolocationActions.getGeolocation([0, 0]));
    this.userLocation();  

    // setInterval(() => {  
    //   this.userLocation()
    // }, 1000);
  }



  static propTypes = {
    children : PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />   
          <div className="container-content">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return {
    geolocation : state.geolocation
  }
}
export default connect(mapStateToProps)(App);
