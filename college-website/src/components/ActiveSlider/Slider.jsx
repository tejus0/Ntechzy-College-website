import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
import {ServiceData} from "../../constants/index"

const Slider = () => {
    return (
        <div className="flex items-center flex-col bg-[#6c34af]">
            
<h4 class="mb-4 text-4xl font-extrabold leading-none pb-5 tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> <mark class="px-2 text-white bg-blue-600 rounded dark:bg-blue-500">GLIMPSE</mark> OF OUR COLLEGE.</h4>
{/* <h1 class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">What Sets Us Apart.</h1> */}
          <Swiper
            breakpoints={{
              340: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 15,
              },
            }}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="max-w-[90%] lg:max-w-[80%]"
          >
            {ServiceData.map((item) => (
              <SwiperSlide key={item.title}>
                <div className="flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xl px-6 py-8 h-[250px] w-[215px] lg:h-[400px] lg:w-[350px] overflow-hidden cursor-pointer">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${item.backgroundImage})` }}
                  />
                  <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                  <div className="relative flex flex-col gap-3">
                    <item.icon className="text-blue-600 group-hover:text-blue-400 w-[32px] h-[32px]" />
                    <h1 className="text-xl lg:text-2xl">{item.title} </h1>
                    <p className="lg:text-[18px]">{item.content} </p>
                  </div>
                  <RxArrowTopRight className="absolute bottom-5 left-5 w-[35px] h-[35px] text-white group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      );
}

export default Slider;