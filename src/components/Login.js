import React from 'react';
import logo from '../Assets/logo.png'
import { Link, NavLink } from 'react-router-dom';
const Login = () => {
    return (
        <div className='bg-[#F2F2F2] h-screen'>
            <div className=' bg-white rounded-[30px] pt-8 px-8 shadow-2xl'>
                <div className=' '>
                    <img className='pb-2 mx-auto w-[150px]' src={logo} alt="" />
                    <div className='flex justify-between text-[18px] font-semibold'>
                        <NavLink className={'border-b-4 px-12 py-2 border-[#FA4A0C]'}>Login </NavLink>
                        <NavLink to={'/reg'} className={'hover:border-b-4 transition-all hover:border-[#FA4A0C] px-12 py-2'}>Sign-up</NavLink>

                    </div>
                </div>
            </div>
            <form className=' px-8 pt-[48px] space-y-12 '>
                <div>
                    <span className='font-semibold pb-2 text-lg text-[#919191]'>Email address</span>
                    <input type="email" required placeholder="Enter your email" defaultValue={'Dosamarvis@gmail.com'} className=" bg-transparent outline-none text-black font-medium py-3 border-b border-black w-full  " />
                </div>
                <div>
                    <span className='font-semibold pb-2 text-lg text-gray-400'>Password</span>
                    <input type="password" required placeholder="Enter your password" defaultValue={'* * * * * * * * '} className=" bg-transparent text-black outline-none font-medium py-3 border-b border-black w-full  " />
                </div>
                <div>
                    <button
                        className='text-[#FA4A0C] hover:underline duration-300 ease-in font-semibold'
                        type='button'>Forgot passcode?</button>
                </div>
                <div>
                    {/* <Link to='/home' className='px-24 font-semibold py-4 bg-[#FA4A0C] text-[#fff] inline-block w-full justify-items-center  rounded-3xl'>Login</Link> */}
                    <Link to='/home' className='px-40 font-semibold py-4 bg-[#FA4A0C] text-[#fff] inline-block w-full rounded-3xl'>Login</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;