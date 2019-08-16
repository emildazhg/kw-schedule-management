import React from "react";

const Select = ({ className, options, label, input }) => {
  const renderOption = options.map(option => (
    <option key={option.id}>{option.category}</option>
  ));

  return (
    <React.Fragment>
      <label>{label}</label>
      <select {...input} className={className}>
        {renderOption}
      </select>
      <br />
    </React.Fragment>
  );
};

export default Select;
