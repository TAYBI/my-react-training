import React from "react";
import { PropTypes } from "prop-types";

export const SelectInput = (props) => {
  let wrappedClass = "form-group";
  if (props.error.length > 0) wrappedClass += " has-error";
  return (
    <div className={wrappedClass}>
      <label htmlFor={props.id}>{props.label}</label>
      <div className="field">
        <select
          id={props.id}
          type={props.type}
          onChange={props.onChange}
          name={props.name}
          value={props.authorId || ""}
          className="form-control"
        >
          <option value="" />
          <option value="1">Cory House</option>
          <option value="2">Scott Allen</option>
        </select>
      </div>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

SelectInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
};

SelectInput.defaultProps = {
  error: "",
};
