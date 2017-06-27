import React, { Component } from 'react'
import './UploadMural.css';

import Dropzone from 'react-dropzone'


class UploadMural extends Component {

  constructor() {
    super();
    this.state = { files: [] }
  }

onDrop(files) {
    console.log(files)
    this.setState({
      files
    });
  }

render(){
return(
  <div>
    <form>
      
      <h2>Your Information</h2>
      <div className="row">  
        <div className="six columns">
          <label for="exampleEmailInput">Your Name</label>
          <input className="u-full-width" type="text" placeholder="test@mailbox.com" id="" />
        </div>
        <div className="six columns">
          <label for="exampleEmailInput">Your email</label>
          <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="" />
        </div>
      </div> 

      <h2>Mural Information</h2>
      <div className="row">  
        <div className="six columns">
          <label for="exampleEmailInput">Title of Mural</label>
          <input className="u-full-width" type="text" placeholder="test@mailbox.com" id="" />
        </div>
        <div className="six columns">
          <label for="exampleEmailInput">Artist Name</label>
          <input className="u-full-width" type="text" placeholder="test@mailbox.com" id="" />
        </div>
      </div> 
      
      <div className="row">  
        <div className="twelve columns">
          <label for="exampleEmailInput">Description of Mural</label>
          <textarea  className="u-full-width" type="text" placeholder="test@mailbox.com" id=""></textarea>
        </div>
      </div> 
      <div className="dropzone">
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <p>Upload Photo.</p>
        </Dropzone>
      </div>

      <input className="button-primary" type="submit" value="Submit" />

    </form>
  </div>
  )
}
}

export default UploadMural
