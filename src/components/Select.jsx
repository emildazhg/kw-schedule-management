import React from "react";

const Select = ({ classInput, options, id, label, input }) => {
  const renderOption = options.map(option => (
    <option key={option.id}>
      {console.log(input)}
      {option.category}
    </option>
  ));

  return (
    <React.Fragment>
      <label htmlFor={id}>{label}</label>
      <select {...input} className={classInput} id={id}>
        {renderOption}
      </select>
      <br />
    </React.Fragment>
  );
};

export default Select;
