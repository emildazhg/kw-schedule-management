import React from "react";

const Datepicker = ({
  input,
  classInput,
  classLabel,
  id,
  label,
  placeholder,
  type,
  date,
  meta: { touched, error }
}) => {
  return (
    <React.Fragment>
      <label className={classLabel} htmlFor={id}>
        {label}
      </label>
      <input
        {...input}
        className={classInput}
        type={type}
        id={id}
        placeholder={placeholder}
      />
      {touched && (error && <span className="text-danger">*{error}</span>)}
      <br />
    </React.Fragment>
  );
};

export default Datepicker;
