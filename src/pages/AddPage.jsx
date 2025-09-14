import { useEffect, useState } from 'react';
import FormField from '../components/FormField';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateThread } from '../states/threads/action';

const AddPage = () => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    body: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.authUser);

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
  }, [authUser, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onAddThread = (e) => {
    e.preventDefault();
    dispatch(asyncCreateThread(formData));
    navigate('/');
  };

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
      name: 'body',
      type: 'text',
      placeholder: 'Description',
      value: formData.body,
    },
  ];

  return (
    <div className='ml-3 flex justify-center items-start rounded bg-base-300 pt-5 pb-10'>
      <FormField
        title='Add Thread'
        fields={fields}
        buttonText='Submit'
        onChange={handleChange}
        onSubmit={onAddThread}
      />
    </div>
  );
};

export default AddPage;
