import React from "react";

const Datepicker = ({
  input,
  className,
  label,
  type,
  date,
  meta: { touched, error }
}) => {
  return (
    <React.Fragment>
      <label>{label}</label>
      <input {...input} className={className} type={type} />
      {touched && (error && <span className="text-danger">*{error}</span>)}
      <br />
    </React.Fragment>
  );
};

export default Datepicker;
