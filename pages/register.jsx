import Link from 'next/link';
import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import { getError } from '../utils/error';
import { signIn, useSession } from 'next-auth/react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function LoginPage() {
  const { data: session } = useSession();

  const router = useRouter();
  const { redirect } = router.query;

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || '/');
    }
  }, [router, session, redirect]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const submitHandler = async ({ name, email, password }) => {
    try {
      await axios.post('/api/auth/signup', {
        name,
        email,
        password,
      });
      const result = await signIn('credentials', {
        redirect: false,
        email,
        password,
      });
      if (result.error) {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error(getError(error));
    }
  };

  return (
    <Layout title={'Create Account'}>
      <form className="mx-auto max-w-screen-md" onSubmit={handleSubmit(submitHandler)}>
        <h1 className="mb-4 text-xl">Create Account</h1>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            {...register('name', {
              required: 'Please enter name',
            })}
            type="text"
            className="w-full"
            id="name"
            autoFocus
          />
          {errors.name && <div className="text-red-500">{errors.name.message}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            {...register('email', {
              required: 'Please enter email',
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/i,
                message: 'Please enter valid email',
              },
            })}
            type="email"
            className="w-full"
            id="email"
          />
          {errors.email && <div className="text-red-500">{errors.email.message}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Password</label>
          <input
            {...register('password', {
              required: 'Please enter password',
              minLength: { value: 6, message: 'Password contains 6 or more chars' },
            })}
            type="password"
            className="w-full"
            id="password"
          />
          {errors.password && <div className="text-red-500">{errors.password.message}</div>}
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register('confirmPassword', {
              required: 'Please confirm your password',
              validate: (value) => value === getValues('password'),
              minLength: { value: 6, message: 'Password contains 6 or more chars' },
            })}
            type="password"
            className="w-full"
            id="confirmPassword"
          />
          {errors.confirmPassword && (
            <div className="text-red-500">{errors.confirmPassword.message}</div>
          )}
          {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
            <div className="text-red-500">Passwords do not match</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Create Account</button>
        </div>
        <div className="mb-4">
          Already have an accout? &nbsp;
          <Link legacyBehavior href={`/login?redirect=${redirect || '/'}`}>
            <a>Sign In</a>
          </Link>
        </div>
      </form>
    </Layout>
  );
}
