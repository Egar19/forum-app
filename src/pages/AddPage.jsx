import React, { useEffect } from 'react';
import FormField from '../components/FormField';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncCreateThread } from '../states/threads/action';
import { useForm } from 'react-hook-form';

const AddPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const authUser = useSelector((state) => state.authUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!authUser) {
      navigate('/login');
    }
  }, [authUser, navigate]);

  const onAddThread = (data) => {
    dispatch(asyncCreateThread(data));
    navigate('/');
  };

  const fields = [
    {
      name: 'title',
      type: 'text',
      placeholder: 'Title',
    },
    {
      name: 'category',
      type: 'text',
      placeholder: 'Category',
    },
    {
      name: 'body',
      type: 'text',
      placeholder: 'Description',
    },
  ];

  return (
    <div className="ml-3 flex justify-center items-start rounded bg-base-300 pt-5 pb-10">
      <FormField
        title="Add Thread"
        fields={fields}
        buttonText="Submit"
        onSubmit={handleSubmit(onAddThread)}
        register={register}
        errors={errors}
      />
    </div>
  );
};

export default AddPage;
