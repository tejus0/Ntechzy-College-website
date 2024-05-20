import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import "./Gallery.css"
// import { , Pagination } from 'swiper';
import {Autoplay, Navigation, Pagination,EffectCoverflow } from 'swiper/modules';

import slide_image_1 from '../../assets/Gallery/1.jpg';
import { delay } from 'framer-motion';
import slide_image_2 from '../../assets/Gallery/7.jpg';
import slide_image_3 from '../../assets/Gallery/2.jpg';
import slide_image_4 from '../../assets/Gallery/3.jpg';
import slide_image_5 from '../../assets/Gallery/4.jpg';
import slide_image_6 from '../../assets/Gallery/5.jpg';
import slide_image_7 from '../../assets/Gallery/6.jpg';

function Gallery() {
  return (
    <div className="container">
      {/* <h1 className="heading">Flower Gallery</h1> */}
      
<div className='text-center'>
<h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">PHOTO GALLERY</h1>
<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">TEACHING STAFF PHOTO GALLERY</p>
<a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
    View All
    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
</a>
</div>

      <Swiper
      spaceBetween={5}
      autoplay={{
        delay: 1000,
        disableOnInteraction: true,
      }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
}

export default Gallery;