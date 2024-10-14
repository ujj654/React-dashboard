import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import AuthForm from '../Auth/Login&Signup';

export const Navbar = () => {
  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleForm = () => {
    setIsLogin(!isLogin);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='w-full mt-5 px-4 relative'>
      <div className='flex w-full justify-between items-center'>
        <div className='text-[#475569] font-semibold'>Home</div>
        <div className='flex-1 md:mx-60'>
          <div className='flex items-center justify-center px-3 text-lg rounded-full bg-white text-[#475569]'>
            <div><IoSearchOutline /></div>
            <input type="text" placeholder='Search' className='bg-transparent p-2 w-28 md:w-auto focus:outline-none rounded-full'/>
          </div>
        </div>
        <div className='hidden md:flex gap-4 items-center'>
          <button
            onClick={() => {
              setIsLogin(true);
              setShowAuth(true);
            }}
            className='px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-700 outline-none'
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setShowAuth(true);
            }}
            className='px-4 py-2 text-sm font-medium text-green-600 bg-white border border-green-600 rounded-md hover:bg-blue-50 outline-none'
          >
            Sign Up
          </button>
        </div>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-[#475569]'>
            {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>


      <div className={`md:hidden fixed top-3 right-0 h-50 w-1/3 bg-white shadow-lg transform rounded-lg ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        <div className='flex flex-col h-full p-4'>
          <button onClick={toggleMenu} className='self-end text-[#475569] mb-8 mr-5'>
            <HiX size={24} />
          </button>
          <button
            onClick={() => {
              setIsLogin(true);
              setShowAuth(true);
              toggleMenu();
            }}
            className='w-full px-6 py-2 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-700 outline-none mb-4'
          >
            Login
          </button>
          <button
            onClick={() => {
              setIsLogin(false);
              setShowAuth(true);
              toggleMenu();
            }}
            className='w-full px-4 py-2 text-sm font-medium text-green-600 bg-white border border-green-600 rounded-md hover:bg-blue-50 outline-none'
          >
            Sign Up
          </button>
        </div>
      </div>

      {showAuth && (
        <AuthForm
          isLogin={isLogin}
          onClose={() => setShowAuth(false)}
          onToggleForm={handleToggleForm}
        />
      )}
    </div>
  );
};