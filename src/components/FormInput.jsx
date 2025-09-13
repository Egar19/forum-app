/* eslint-disable react/prop-types */
import React from 'react';

const FormInput = ({ type, placeholder, name, value, onChange }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className='input w-full mb-2'
      value={value}
      onChange={onChange}
      required
    />
  );
};

export default FormInput;
