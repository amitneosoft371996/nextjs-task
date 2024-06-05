'use client';
import React, { useState } from 'react';
import { validateUsername, validatepassword } from '../component/Validate';
import './login.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { loginUser } from '../api/productApi';

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const navigate = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({
      ...errors,
      [name]: ''
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = {
      username: validateUsername(formData.username),
      password: validatepassword(formData.password)
    };
    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      try {
        const username = await loginUser(formData.username, formData.password);
        if (username) {
          localStorage.setItem('username', username);
          navigate.push('/');
        }
      } catch (error: any) {
        if (error.message === 'User not found' || error.message === 'Incorrect password') {
          alert('Please enter valid credentials');
        } else {
          alert('Login failed. Please try again later.');
        }
      }
    }
  };

  return (
    <div>
      <section className='login_sec'>
        <div className='container'>
          <div className='grid grid-rows-1 grid-flow-col justify-center'>
            <div className='  col-end-7'>
              <div className='signup-bx'>
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image src='/images/logo.png' width={100} height={80} className="mx-auto h-10 w-auto" alt=''></Image>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Sign in to your account
                    </h2>
                  </div>
                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                          Email address
                        </label>
                        <div className="mt-2">
                          <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="block form-control w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          {errors.username && <span className="text-red-500 text-sm">{errors.username}</span>}
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                            Password
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            type="password"
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className="block w-full form-control rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                          {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
                        </div>
                      </div>
                      <div className='btnbx'>
                        <button className='submit-btn mt-4' type="submit">
                          Login
                        </button>
                      </div>
                      <div className='bottom-signup-text mt-5'>
                        Don't have an account?
                        <Link href="/signup">Sign Up</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
