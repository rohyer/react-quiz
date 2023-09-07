import React from 'react';

const Radio = ({ options, id }) => {
  return (
    <label key={options}>
      <input type="radio" name={options} id={id} value="" />
      {options}
    </label>
  );
};

export default Radio;
