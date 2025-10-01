/* eslint-disable react/prop-types */
import React from 'react';

const FormField = ({
  title,
  fields,
  buttonText,
  register,
  errors,
  onChange,
  onSubmit,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className='fieldset bg-base-200 rounded-box w-[80%] p-4'
    >
      <legend className='fieldset-legend menu-title text-primary-content'>
        {title}
      </legend>

      {fields.map((field, index) => (
        <div key={index} className='mb-2'>
          <input
            type={field.type}
            placeholder={field.placeholder}
            className='input w-full mb-1'
            name={field.name}
            {...(register
              ? register(field.name, { required: `${field.name} is required` })
              : {
                value: field.value,
                onChange,
              })}
          />
          {errors && errors[field.name] && (
            <p className='text-error text-sm'>{errors[field.name].message}</p>
          )}
        </div>
      ))}

      <button type='submit' className='btn btn-neutral mt-4'>
        {buttonText}
      </button>
    </form>
  );
};

export default FormField;
