import React, { useEffect, useRef } from 'react';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const SearchItems = () => {
  const searchRef = useRef();
  useEffect(() => {
    searchRef.current.focus();
  }, []);
  return (
    <div className='bg-[#eeeeee] h-screen'>
      <div className='pt-10 flex items-center px-10 gap-5'>
        <Link to='/home'>
          <HiOutlineChevronLeft className='text-black text-2xl' />
        </Link>
        <input ref={searchRef} className='py-2 text-black focus:ring-0 focus:border-transparent focus:outline-none font-semibold text-xl bg-transparent' type="text" />
      </div>
      {/* search results  */}
      <div className='rounded-2xl bg-white'>
        <div>

        </div>
      </div>
    </div>
  );
};

export default SearchItems;