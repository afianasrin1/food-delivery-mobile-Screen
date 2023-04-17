import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import food from '../../Assets/foods/food.png'

// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper";
import { Link } from "react-router-dom";

const FoodsItems = () => {
  const foodsItems = [
    {
      title: 'Veggie tomato mix',
      price: 'N1,900',
      picture: food
    },
    {
      title: 'Spicy fish sauce',
      price: 'N2,300.99',
      picture: food
    },
  ]
  return (
    <div className='px-2'>
      {/* see more button */}
      <div className='flex justify-end pr-5'>
        <button className='text-sm font-semibold text-[#fa4a0c]' type='button'>
          see more
        </button>
      </div>
      {/* food items */}
      <div>




        <>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            slidesPerView={1.3}
            spaceBetween={15}
            modules={[Pagination]}

            className="mySwiper ">
            {
              foodsItems?.map(foodItem =>
                <SwiperSlide key={Math.random()} className="p-2  py-7 overflow-visible !bg-transparent ">

                  <Link to='/food/1'>
                    <div className="   flex flex-col relative rounded-3xl shadow-lg h-[240px] shadow-[#d1cfcf]">
                      <div className="flex justify-center ">

                        <img className=" w-32 -m-5 " src={foodItem.picture} alt="" />
                      </div>
                      <div className="flex mt-10 flex-col justify-end">

                        <h2 className="text-xl text-black font-semibold">{foodItem.title}</h2>
                        <h4 className="mt-3 text-xl font-semibold text-[#fa4a0c]">{foodItem?.price}</h4>
                      </div>
                    </div>
                  </Link>

                </SwiperSlide>
              )
            }
          </Swiper>
        </>
      </div>
    </div>
  );
};

export default FoodsItems;