import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
const Navbar = () => {
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <HiOutlineMenuAlt1 className='text-2xl text-black' />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
      </div>

      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <FiShoppingCart className='text-2xl text-[#a9a9a9]' />
        </button>

      </div>
    </div>
  );
};

export default Navbar;