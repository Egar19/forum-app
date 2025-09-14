import React, { useState } from 'react';
import FormField from '../components/FormField';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const fields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
      value: formData.name,
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      value: formData.email,
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      value: formData.password,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await dispatch(asyncRegisterUser({
      name: formData.name,
      email: formData.email,
      password: formData.password,
    }));

    if (success) {
      navigate('/login');
    }
    // else {
    //   navigate('/register');
    // }
  };

  return (
    <div className="ml-3 flex flex-col justify-center gap-2 items-center rounded bg-base-300 pt-5 pb-10">
      <FormField
        title="Register"
        buttonText="Register"
        fields={fields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>
        Already have an account?{' '}
        <Link to="/login" className="text-primary">Login</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
