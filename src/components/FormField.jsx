/* eslint-disable react/prop-types */
import React from 'react';
import FormInput from './FormInput';

const FormField = ({ title, fields, buttonText, onChange, onSubmit }) => {
  return (
    <form
      onSubmit={onSubmit}
      className='fieldset bg-base-200 rounded-box w-[80%] p-4'
    >
      <legend className='fieldset-legend menu-title text-primary-content'>
        {title}
      </legend>

      {fields.map((field, index) => (
        <FormInput
          key={index}
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          value={field.value}
          onChange={onChange}
        />
      ))}

      <button type='submit' className='btn btn-neutral mt-4'>
        {buttonText}
      </button>
    </form>
  );
};

export default FormField;