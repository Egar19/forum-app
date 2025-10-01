import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import FormField from '../components/FormField';
import { asyncLogin } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.authUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const fields = [
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

  const onSubmit = (data) => {
    dispatch(asyncLogin(data));
  };

  useEffect(() => {
    if (authUser) {
      const timer = setTimeout(() => {
        navigate('/');
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [authUser, navigate]);

  return (
    <div className='ml-3 flex flex-col justify-center gap-2 items-center rounded bg-base-300 pt-5 pb-10'>
      <FormField
        title='Login'
        buttonText='Login'
        fields={fields}
        register={register}
        errors={errors}
        onSubmit={handleSubmit(onSubmit)}
      />
      <p>
        Don&apos;t have an account?{' '}
        <Link to='/register' className='text-primary'>
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginPage;
