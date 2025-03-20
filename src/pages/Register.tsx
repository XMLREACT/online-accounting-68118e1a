
import React from 'react';
import { RegisterForm } from '@/components/auth/RegisterForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Реєстрація нового користувача
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Заповніть форму для створення облікового запису
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
