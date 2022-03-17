import React from 'react'
import { Link, Outlet } from 'react-router-dom';
const Header = () => {
  return (
    <header className='text-gray-800  body-font'>
      <div className='container mx-auto flex flex-wrap flex-col md:flex-row items-center py-4'>
        <Link
          to='/'
          className='flex title-font font-medium items-center text-gray-800 mb-4 md:mb-0'>
          <span className='text-xl text-indigo-300 hover:text-indigo-400 cursor-pointer'>
            DEV
            <span className='text-xl text-pink-300 hover:text-pink-400 cursor-pointer'>
              HAK
            </span>
          </span>
        </Link>
        <nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
          <Link
            to='/about'
            className='mr-5 text-indigo-400 hover:text-indigo-800 cursor-pointer'>
            About
          </Link>
          <Link
            to='/jobs'
            className='mr-5 text-indigo-400 hover:text-indigo-800 cursor-pointer'>
            Jobs
          </Link>
          <Link
            to='/contact'
            className='mr-5 text-indigo-400 hover:text-indigo-800 cursor-pointer'>
            Contact
          </Link>
        </nav>
        <Outlet />
      </div>
    </header>
  );
}

export default Header