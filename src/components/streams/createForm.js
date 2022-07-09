import React from "react";
import { Field, reduxForm } from "redux-form";



class CreateForm extends React.Component {
  onSubmit=(formvalues)=> {
    // console.log(formvalues);
    this.props.createStream(formvalues)
  }

  renderError(meta) {
    // console.log(meta);
    if (meta.touched && meta.error) {
      return (
        <div style={{ display: "inline-block" }} className="invalid-feedback">
          {meta.error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(input)
    return (
      <div className="needs-validation">
        <label className="form-label">{label}</label>
        <input
          className="form-control"
          {...input}
        />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    // console.log(this.props)
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="col-6">
        <div className="mb-3">
          <Field
            name="Tittle"
            component={this.renderInput}
            label="Stream Tittle"
          />
        </div>
        <div>
          <Field
            name="Description"
            component={this.renderInput}
            label="Stream Description"
          />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

const validate = (value) => {
  const error = {};
  if (!value.Tittle) {
    error.Tittle = "Pls enter Valid title";
  }
  if (!value.Description) {
    error.Description = "Pls enter valid description";
  }
  return error;
};


export default reduxForm({ form: "StreamCreate", validate })(CreateForm);