import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const AuthForm = ({ isLogin, onClose, onToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    console.log(isLogin ? 'Login' : 'Signup', { email, password });
  };

  const handleGoogleAuth = () => {
    console.log('Google auth');
  };

  const handleGithubAuth = () => {

    console.log('GitHub auth');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-[450px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
        >
          <IoMdClose size={24} />
        </button>
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <label className="block text-sm font-bold font-medium text-gray-700">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          )}
          {isLogin && (
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-sm text-blue-500 hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}
          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white p-2 sm:p-3 rounded-md hover:bg-blue-600 focus:outline-none focus:border-2 focus:border-blue-500 focus:border-offset-2"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
          <button
            onClick={handleGoogleAuth}
            className="w-full border border-gray-300 p-2 sm:p-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-blue-500 focus:border-offset-2"
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>
          <button
            onClick={handleGithubAuth}
            className="w-full border border-gray-300 p-2 sm:p-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 focus:outline-none focus:border-2 focus:border-blue-500 focus:border-offset-2"
          >
            <FaGithub size={20} />
            Continue with GitHub
          </button>
        </div>
        <div className="mt-4 sm:mt-6 text-center">
          <span className="text-sm text-gray-600">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button
            onClick={onToggleForm}
            className="text-sm text-blue-500 hover:underline focus:outline-none"
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;