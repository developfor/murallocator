import React from 'react'
import { Field, reduxForm } from 'redux-form'

export const renderField = ({ input, label, type, className, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className={className} />
      {touched && error && <span className="field-error">{error}</span>}
    </div>
  </div>
);

export const renderTextField = ({ input, label, type, className, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <textarea {...input} placeholder={label} type={type} className={className} />
      {touched && error && <span className="field-error">{error}</span>}
    </div>
  </div>
);