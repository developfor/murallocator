import React, {Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField, renderTextField } from '../../components/form/fields';

import './upload-mural.css';

class UploadMural extends Component {
  constructor() {
    super();
  }

  handleSubmitValues = (values) => {
    console.log(values);
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, values } = this.props;
    return (
      <div className="inner-container">
        <form onSubmit={handleSubmit(this.handleSubmitValues)}>
          <h2>Your Information</h2>
          <div className="row">
            <div className="six columns">
              <div>
                <Field
                  className="u-full-width"
                  name="name"
                  component={renderField}
                  type="text"
                  label="Name"
                />
              </div>
            </div>
            <div className="six columns">
              <div>
                <Field
                  className="u-full-width"
                  name="email"
                  component={renderField}
                  type="email"
                  label="Your Email"
                />
              </div>
            </div>
          </div>

          <h2>Mural Information</h2>
          <div className="row">
            <div className="six columns">
              <div>
                <Field
                  className="u-full-width"
                  name="muralTitle"
                  component={renderField}
                  type="text"
                  label="Mural Title"
                />
              </div>
            </div>
            <div className="six columns">
              <div>
                <Field
                  className="u-full-width"
                  name="artistName"
                  component={renderField}
                  type="text"
                  label="Artist Name"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="twelve columns">
              <div>
                <Field
                  className="u-full-width"
                  name="description"
                  component={renderTextField}
                  type="text"
                  label="Description of Mural"
                />
              </div>
            </div>
          </div>
          <input className="button-primary" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

const validate = (values) => {
  const errors = {};
 
  // email validation
  if (!values.email) {
    errors.email = 'Please enter an email address'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'This email address is not valid'
  }

  // description
  if (!values.description) {
    errors.description = 'Please enter a description'
  }

  // artist name
  if (!values.artistName) {
    errors.artistName = 'Please enter the artist\'s name'
  }

  // mural title
  if (!values.muralTitle) {
    errors.muralTitle = 'Please enter a mural title'
  }

  // name
  if (!values.name) {
    errors.name = 'Please enter your name'
  }
  return errors;
}

export default reduxForm({
  form: 'muralUpload', // a unique identifier for this form
  validate
})(UploadMural);