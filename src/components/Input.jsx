import React from "react";
const Input = ({
  input,
  classInput,
  classLabel,
  id,
  label,
  placeholder,
  type,
  meta: { touched, error }
}) => {
  return (
    <React.Fragment>
      {console.log(input)}
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

export default Input;
