'use client';

import React, { useState } from 'react';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import { Logo } from '@/components/ui/Logo';
import { useForm } from 'react-hook-form';
import { SignUpFormModel } from '@/models/model';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpFormModel>();

  const handleOnSubmit = (e) => {
    console.log('Form Submitted:', e);
    setIsLoading(true);
  };

  const password = watch('password');

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-xl rounded-2xl">
          <div className="flex flex-col items-center">
            <Logo className="mb-6 scale-110" />
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Create account</h2>
            <p className="mt-2 text-sm text-slate-600">Get started for free and organize your tasks</p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit(handleOnSubmit)} noValidate>
            <fieldset disabled={isLoading} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">
                    Name and surname
                  </label>
                  <div className="mt-1">
                    <input
                      {...register('fullName', { required: 'Full name is required' })}
                      id="fullName"
                      name={'fullName'}
                      type="text"
                      autoComplete="name"
                      className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm ${
                        errors.fullName ? 'border-red-300' : 'border-slate-300'
                      }`}
                    />
                    {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                    E-mail address
                  </label>
                  <div className="mt-1">
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: 'Enter a valid email address',
                        },
                      })}
                      id="email"
                      name={'email'}
                      type="email"
                      autoComplete="email"
                      className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm ${
                        errors.email ? 'border-red-300' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters',
                        },
                      })}
                      id="password"
                      name={'password'}
                      type={showPassword ? 'text' : 'password'}
                      autoComplete="new-password"
                      className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm pr-10 ${
                        errors.password ? 'border-red-300' : 'border-slate-300'
                      }`}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <Eye className="h-5 w-5" aria-hidden="true" />
                      )}
                    </button>
                    {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">
                    Confirm password
                  </label>
                  <div className="mt-1">
                    <input
                      {...register('confirmPassword', {
                        required: 'Confirm password is required',
                        validate: (value) => value === password || 'Passwords do not match',
                      })}
                      id="confirmPassword"
                      type="password"
                      name={'confirmPassword'}
                      autoComplete="new-password"
                      className={`block w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm ${
                        errors.confirmPassword ? 'border-red-300' : 'border-slate-300'
                      }`}
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex h-5 items-center">
                    <input
                      {...register('acceptTerms', { required: 'You must accept the terms' })}
                      id="acceptTerms"
                      name={'acceptTerms'}
                      type="checkbox"
                      className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="acceptTerms" className="font-medium text-slate-700">
                      <a href="/tbd" className="text-blue-600 hover:text-blue-500">
                        I agree to the terms of policy.
                      </a>
                    </label>
                    {errors.acceptTerms && <p className="mt-1 text-sm text-red-600">{errors.acceptTerms.message}</p>}
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Registering...
                  </>
                ) : (
                  'Register'
                )}
              </button>
            </fieldset>
          </form>

          <div className="mt-6 text-center text-sm">
            <p className="text-slate-600">
              Already have an account?
              <a href="/login" className="font-medium text-blue-600 hover:text-blue-500">
                Log in
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
