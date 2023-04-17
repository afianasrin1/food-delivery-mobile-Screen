import React from 'react';
import logo from '../Assets/logo.png'
import toyface29 from '../Assets/ToyFaces_Tansparent_BG_29.png'
import toyface49 from '../Assets/ToyFaces_Tansparent_BG_49.png'
import Rectangle3 from '../Assets/Rectangle3.png'
import { Link } from 'react-router-dom';

const StartedPage = () => {
    return (
        <div className='bg-[#FF4B3A]  flex justify-center flex-col h-screen ' >
            <div>
                <div className='bg-white w-[70px] ml-8 h-[70px] rounded-full flex justify-center items-center'>
                    <img className='w-[45.86px] h-[49.65px]' src={logo} alt="" />
                </div>
                <h1 className='text-[65px] ml-6 pt-8 leading-[66px] font-bold text-white'>Food For <br /> Everyone</h1>
                <div className='pt-12 relative'>
                    <div className='relative'>
                        <img className='w-[300px] -right-16' src={toyface49} alt="" />
                        <img className='w-[225px]  absolute right-0 top-20  ' src={toyface29} alt="" />
                    </div>
                    <img className='absolute top-[65%]' src={Rectangle3} alt="" />
                </div>
                <div className='relative top-4 flex justify-center items-center '>
                    <Link to={'/log'} className='px-24 py-4 text-[#FF4B3A] inline-block bg-white font-semibold rounded-3xl'>Get Started</Link>
                </div>
            </div>
        </div>
    );
};

export default StartedPage;