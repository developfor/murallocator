import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as geolocationActions from '../actions/geolocationActions';
import * as muralsActions from '../actions/muralsActions';



class Home extends Component {
  constructor(props){
    super(props);
    this.state = {geolocation: [null,null]};
    this.sendGeolocation = this.sendGeolocation.bind(this);
    this.sendUpdateGeolocation = this.sendUpdateGeolocation.bind(this);
    
  }

  componentDidMount(){
    // let doSetState = new Promise((resolve, reject) => {
    //   this.setState({geolocation: [0, 0]})
    //   resolve("Success!");
    // });

    // doSetState.then(() => {
    //   this.props.dispatch(geolocationActions.getGeolocation(this.state.geolocation));  
    // });
   
  }

  sendGeolocation() {
    let doSetState = new Promise((resolve, reject) => {
      this.setState({geolocation: [38.889269, -77.050176]})
      resolve("Success!");
    });

    doSetState.then(() => {
      this.props.dispatch(geolocationActions.getGeolocation(this.state.geolocation));  
    });
   
  }

  sendUpdateGeolocation() {
    let doSetState = new Promise((resolve, reject) => {
      this.setState({geolocation: [3, -7]})
      resolve("Success!");
    });

    doSetState.then(() => {
      this.props.dispatch(geolocationActions.getGeolocation(this.state.geolocation));  
    });
   
  }


  render() {
    if(!(this.props.geolocation.length <= 0)){
      console.log("lat:  ",this.props.geolocation[0][0]);
      console.log("long:  ",this.props.geolocation[0][1]);  
    }else{
      console.log("please enable geolocation");
    }
    
    
    return (
      <p className="App-intro">

        {this.props.geolocation.toString().split(",")}

        To get started, edit <code>src/App.js</code> and save to reload.
        <button className="btn btn-success" onClick={this.sendGeolocation}>geolocation</button>
        <button className="btn btn-success" onClick={this.sendUpdateGeolocation}>Update Geolocation</button>
      </p>
    )
  }
}

function mapStateToProps(state, ownProps){
  return {
    geolocation : state.geolocation
  }
}
export default connect(mapStateToProps)(Home);