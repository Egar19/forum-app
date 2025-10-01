import React from 'react';
import FormField from '../components/FormField';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // setup react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // field config
  const fields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Name',
    },
    {
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
    },
  ];

  const onSubmit = async (data) => {
    const success = await dispatch(asyncRegisterUser(data));
    if (success) {
      navigate('/login');
    }
  };

  return (
    <div className="ml-3 flex flex-col justify-center gap-2 items-center rounded bg-base-300 pt-5 pb-10">
      <FormField
        title="Register"
        buttonText="Register"
        fields={fields}
        onSubmit={handleSubmit(onSubmit)}
        register={register}
        errors={errors}
      />
      <p>
        Already have an account?{' '}
        <Link to="/login" className="text-primary">
          Login
        </Link>
      </p>
    </div>
  );
};

export default RegisterPage;