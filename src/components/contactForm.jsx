import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema } from './userMailValidations';

export const ContactForm = () => {
  const [isSending, setIsSending] = useState(false);

  const intialValues = {
    user_name: '',
    subject: '',
    email: '',
    message: '',
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: intialValues,
    mode: 'all',
  });

  const onSubmit = (valores) => {
    setIsSending(true);
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        valores,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          toast.success('Thanks for your email!');
          setIsSending(false);
          reset();
        },
        (err) => {
          toast.success('Ups.. There is a problem :)');
          console.log('FAILED...', err);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="flexB w-full flex-col">
      <form
        className="mx-auto flex flex-col rounded-2xl mt-4 py-8 px-4 shadow-md shadow-primary-500 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Nombre:
          </label>
          <input
            {...register('user_name')}
            placeholder="Nombre"
            className=" flex-1 rounded-lg border-b-4 border-transparent bg-primary-100/40 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-primary-500 "
          />
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.user_name?.message}
        </p>
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Asunto:
          </label>
          <input
            {...register('subject')}
            placeholder="Asunto"
            className=" flex-1 rounded-lg border-b-4 border-transparent bg-primary-100/40 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-primary-500 "
          />
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.subject?.message}
        </p>
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Email:
          </label>
          <input
            {...register('email')}
            placeholder="Email"
            className=" flex-1 rounded-lg border-b-4 border-transparent bg-primary-100/40 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-primary-500 "
          />
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.email?.message}
        </p>
        <div className="flexB">
          <label htmlFor="user_name" className="inline-block min-w-[70px] ">
            Mensaje:
          </label>
          <textarea
            {...register('message')}
            placeholder="Mensage"
            className=" flex-1 rounded-lg border-b-4 border-transparent bg-primary-100/40 py-[.3rem] px-2 outline-none transition duration-500 ease-in-out focus:border-primary-500 "
          ></textarea>
        </div>
        <p className="mb-4 pt-0 pl-[70px] text-sm text-error">
          {errors.message?.message}
        </p>
        {!isSending && (
          <button
            className=" w-full mx-auto mt-8 block cursor-pointer rounded  bg-myBlack py-2 px-6 text-myWhite hover:bg-cta"
            type="submit"
          >
            Enviar
          </button>
        )}
      </form>
    </div>
  );
};
