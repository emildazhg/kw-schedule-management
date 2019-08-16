import React from "react";
const Input = ({ input, className, label, type, meta: { touched, error } }) => {
  return (
    <React.Fragment>
      <label>{label}</label>
      <input {...input} className={className} type={type} placeholder={label} />
      {touched && (error && <span className="text-danger">*{error}</span>)}
      <br />
    </React.Fragment>
  );
};

export default Input;
