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
                  name="mural-title"
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
                  name="artist-name"
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
                  rows="90"
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

const validate = (values /*, dispatch */) => {
  console.log(values);
}

export default reduxForm({
  form: 'muralUpload', // a unique identifier for this form
  validate
})(UploadMural);