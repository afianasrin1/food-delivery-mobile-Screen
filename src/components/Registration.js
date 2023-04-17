import React from 'react';
import logo from '../Assets/logo.png'
import { NavLink } from 'react-router-dom';
const Registration = () => {
    return (

        <div className='bg-[#F2F2F2] h-screen'>
            <div className='  bg-white rounded-[30px] pt-5 px-8 shadow-2xl'>
                <img className='pb-1 mx-auto w-[150px]' src={logo} alt="" />
                <div className='flex justify-between text-[18px] font-semibold'>
                    <NavLink to={'/log'} className={'hover:border-b-4 transition-all hover:border-red-600 px-12 py-2'}>Login</NavLink>
                    <NavLink className={'border-b-4 px-12 py-2 border-red-600'}>Sign-up </NavLink>

                </div>
            </div>
            <form className=' px-8 pt-[48px] space-y-6 '>
                <div>
                    <span className='font-semibold pb-2 text-lg text-gray-400'>Email address</span>
                    <input type="email" required placeholder="Enter your email" className="text-black bg-transparent outline-none font-medium py-3 border-b border-black w-full  " />
                </div>
                <div>
                    <span className='font-semibold pb-2 text-lg text-gray-400'>Password</span>
                    <input type="password" required placeholder="Enter your password" className="text-black bg-transparent outline-none font-medium py-3 border-b border-black w-full  " />
                </div>
                <div>
                    <span className='font-semibold pb-2 text-lg text-gray-400'>Confirm Password</span>
                    <input type="password" required placeholder="Enter your password" className="text-black bg-transparent outline-none font-medium py-3 border-b border-black w-full  " />
                </div>
                <div>
                    <button className='px-24 py-4 bg-[#FA4A0C] text-[#fff] inline-block w-full  rounded-3xl'>Sign-up</button>
                </div>
            </form>
        </div>

    );
};

export default Registration;