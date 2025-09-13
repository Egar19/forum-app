import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
import { asyncLogin } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.authUser);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const fields = [
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(asyncLogin({
      email: formData.email,
      password: formData.password,
    }));
  };

  useEffect(() => {
    if (authUser) {
      navigate('/');
    }
  }, [authUser, navigate]);

  return (
    <div className='ml-3 flex flex-col justify-center gap-2 items-center rounded bg-base-300 pt-5 pb-10'>
      <FormField
        title='Login'
        buttonText='Login'
        fields={fields}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <p>
        Don&apos;t have an account?{' '}
        <Link to='/register' className='text-primary'>Register</Link>
      </p>
    </div>
  );
};

export default LoginPage;