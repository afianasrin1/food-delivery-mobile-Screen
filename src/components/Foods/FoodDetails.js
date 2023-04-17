import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import  food from "../../Assets/foods/food.png"

const FoodDetails = () => {
  const foodDetails =
  {
    title: 'Veggie tomato mix',
    price: 'N1,900',
    deliveryInfo: 'Delivered between monday aug and thursday 20 from 8pm to 91:32 pm',
    returnPolicy: 'All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.',
    image:food
  }

  return (
    <div className='bg-[#f6f6f9] h-screen'>
      {/* nav buttons */}
      <div className='flex pt-10 justify-around gap-20'>
        <Link to='/home'>
          <HiOutlineChevronLeft className='text-2xl text-black' />
        </Link>
        <button type='button'>
          <AiOutlineHeart className='text-2xl text-black' />
        </button>
      </div>
      {/* details */}
      <div>
      <div className=" flex flex-col h-[240px] w-[240] shadow-[#b2b2b5] px-20">
                      <div className="flex justify-center ">
                      <img className=" w-40 rounded"  src={foodDetails.image} alt="" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h2 className="text-xl mt-4 text-black font-semibold">{foodDetails.title}</h2>
                        <h4 className="  ml-16  text-xl font-semibold text-[#fa4a0c]">{foodDetails?.price}</h4>
                      </div>
                    </div>

        <div className='mt-2 px-10 '>

          <div className=''>
            <h4 className='text-black font-semibold'>Delivery Info</h4>
            <p>{foodDetails?.deliveryInfo}</p>
          </div>
          <div className='mt-5'>
            <h4 className='text-black font-semibold'>Return Policy</h4>
            <p>{foodDetails?.returnPolicy}</p>
          </div>
          <div className='mt-5'>
            <button
              className='bg-[#fa4a0c] rounded-3xl px-10 py-4 w-full text-white'
              type='button'>
              Add to cart
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FoodDetails;