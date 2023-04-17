import React from 'react';
import { AiFillHome, AiOutlineHeart } from 'react-icons/ai';
import { BiUser } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

const Footer = () => {

  return (
    <div className="fixed bottom-5 items-center right-[50%] gap-20 left-[50%] flex justify-around ">
      <NavLink to='/home'
        className={({ isActive }) => (isActive ? 'text-[#fa4a0c] ' : '')}
      >
        <AiFillHome className='text-3xl' />
      </NavLink>
      <NavLink to='/'
        className={({ isActive }) => (isActive ? 'text-[#fa4a0c] ' : '')}
      >
        <AiOutlineHeart className='text-3xl' />
      </NavLink>
      <NavLink to='/'
        className={({ isActive }) => (isActive ? 'text-[#fa4a0c] ' : '')}
      >
        <BiUser className='text-3xl' />
      </NavLink>
      <NavLink to='/'
        className={({ isActive }) => (isActive ? 'text-[#fa4a0c] ' : '')}
      >
        <MdHistory className='text-3xl' />
      </NavLink>
    </div>
  );
};

export default Footer;