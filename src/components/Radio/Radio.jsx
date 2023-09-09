import React from 'react';

const Radio = ({ options, value, id, onChange }) => {
  return options.map((option) => (
    <label key={option}>
      <input
        type="radio"
        checked={option === value}
        id={id}
        value={option}
        onChange={onChange}
      />
      {option}
    </label>
  ));
};

export default Radio;
