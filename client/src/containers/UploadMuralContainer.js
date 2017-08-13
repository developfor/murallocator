import React, { Component } from 'react'
import './UploadMural.css';

// import { observer } from 'mobx-react';
// import Dropzone from 'react-dropzone'

import validatorjs from 'validatorjs';

const plugins = { dvr: validatorjs };



class UploadMural extends Component {

  constructor() {
    super();
    this.state = { files: [] }
  }

  onDrop(files) {
    // console.log(files)
    this.setState({
      files
    });
  }

  onSubmit(e) {
    e.preventDefault();
    var formData = new FormData();
    var imagedata = document.querySelector('input[type=file]').files[0];
    var yourname = document.querySelector('input[name="yourname"]').value;
    const reader = new FileReader();
    var imageFileBlob = "";
    // console.log("image:   ", imagedata);
    // var thing = reader.readAsDataURL(imagedata);
    // console.log("thing: ", thing)
    var imageFile = reader.readAsDataURL(document.querySelector('input[type=file]').files[0]);

    reader.onload = function (event) {
      imageFileBlob = event.target.result
      // console.log(event.target.result);
      console.log("image blob", imageFileBlob)

      // console.log(imageFile)


      formData.append("uri", imageFileBlob);

      formData.append("yourname", yourname);

      for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
      }

      fetch("http://localhost:3030/murals-uploads", {
        mode: 'no-cors',
        method: "POST",
        headers: {
          // "Content-Type": "multipart/form-data",
          "Accept": "application/json",
          "type": "formData"
        },
        body: formData
      }).then(function (res) {
        if (res.ok) {
          alert("Perfect! ");
        } else if (res.status == 401) {
          alert("Oops! ");
        } else if (res.status === 404) {
          alert("Page not found")
        }
      }, function (e) {
        alert("Error submitting form!");
      });
    };


  }

  render() {
    return (
      <div className="inner-container">
        <form encType="multipart/form-data" action="">
          <h2>Your Information</h2>
          <div className="row">
            <div className="six columns">
              <label for="exampleEmailInput">Your Name</label>
              <input className="u-full-width" type="text" placeholder="Your Name" id="" name="yourname" />
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
              <input className="u-full-width" type="text" placeholder="Title of Mural" id="" />
            </div>
            <div className="six columns">
              <label for="exampleEmailInput">Artist Name</label>
              <input className="u-full-width" type="text" placeholder="Artist Name" id="" />
            </div>
          </div>

          <div className="row">
            <div className="twelve columns">
              <label for="exampleEmailInput">Description of Mural</label>
              <textarea rows="90" className="u-full-width" type="text" placeholder="Description of Mural" id=""></textarea>
            </div>
          </div>
          <div className="dropzone">
            <input name="image" type="file" />
          </div>
          <input className="button-primary" type="submit" value="Submit" onClick={this.onSubmit.bind(this)} />

        </form>
      </div>
    )
  }
}

export default UploadMural
