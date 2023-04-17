import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Navbar from '../Common/Navbar';
import { FiSearch } from 'react-icons/fi';
import FoodsItems from './FoodsItems';
import Footer from '../Common/Footer';

const Home = () => {
    const [tabActive, setTabActive] = useState(1)
    const activeClass = 'border-[#fa4a0c] border-b-[3px] text-[#fa4a0c]';
    const inactiveClass = 'border-b-[3px] border-transparent text-[#9a9a9d]'
    return (

        <div className='bg-[#F2F2F2] h-screen'>
            {/* Navbar */}
            <Navbar />
            {/* Navbar */}

            {/* main content */}
            <div className=' px-5 mt-10'>
                {/* section title */}
                <div>
                    <h1 className='text-3xl text-black font-bold'>Delicious <br /> food for you</h1>
                </div>
                {/* search input */}
                <div className='w-[90%] mt-5'>
                    <div className=''>
                        <Link to='/search' className="relative flex items-center w-full  h-12 rounded-full focus-within:shadow-lg px-2  bg-[#efeeee] overflow-hidden">
                            <div className="grid place-items-center h-full w-12 ">
                                <span>
                                    <FiSearch className='text-black text-2xl' />

                                </span>
                            </div>

                            <input
                                className="peer bg-transparent h-full w-full outline-none text-sm text-[#787777] pr-2"
                                type="text"
                                id="search"
                                placeholder="Search" />
                        </Link>
                    </div>
                </div>
                {/* scrollable tab */}
                <div className='mt-5'>
                    <div className="flex  ">
                        <button onClick={() => setTabActive(1)} className={`px-5 py-1  font-semibold  ${tabActive === 1 ? activeClass : inactiveClass}`} type='button'>Foods</button>

                        <button onClick={() => setTabActive(2)} className={`px-5 py-1  font-semibold  ${tabActive === 2 ? activeClass : inactiveClass}`} type='button'>Drinks</button>

                        <button onClick={() => setTabActive(3)} className={`px-5 py-1  font-semibold  ${tabActive === 3 ? activeClass : inactiveClass}`} type='button'>Snacks</button>

                        <button onClick={() => setTabActive(4)} className={`px-5 py-1  font-semibold  ${tabActive === 4 ? activeClass : inactiveClass}`} type='button'>Sauce</button>



                    </div>
                </div>
                {/* items */}
                <div className='mt-10'>
                    <FoodsItems />
                </div>

            </div>
            {/* footer */}
            <Footer />
        </div >
    );
};

export default Home;