import { useState } from 'react';
import FormField from '../components/FormField';
import React from 'react';

const AddPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
  });

  const fields = [
    {
      name: 'title',
      type: 'text',
      placeholder: 'Title',
      value: formData.title,
    },
    {
      name: 'category',
      type: 'text',
      placeholder: 'Category',
      value: formData.category,
    },
    {
      name: 'description',
      type: 'text',
      placeholder: 'Description',
      value: formData.description,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Post:', formData);
    // TODO: dispatch ke redux atau fetch ke API
  };

  return (
    <div className='ml-3 flex justify-center items-start rounded bg-base-300 pt-5 pb-10'>
      <FormField
        title='Add Post'
        fields={fields}
        buttonText='Submit'
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddPage;
