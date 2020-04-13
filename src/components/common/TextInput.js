import React from "react";
import { PropTypes } from "prop-types";
export const TextInput = (props) => {
  let wrappedClass = "form-group";
  if (props.error.length > 0) wrappedClass += " has-error";
  return (
    <div className={wrappedClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <input
          id={props.id}
          type={props.type}
          onChange={props.onChange}
          name={props.name}
          className="form-control"
          value={props.title}
        />
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  error: "",
};
