import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules";

import first from "../../assets/LogoSlider/1.jpg";
import second from "../../assets/LogoSlider/2.png";
import third from "../../assets/LogoSlider/3.jpg";
import x from "../../assets/LogoSlider/1.jpg";
const logos = [
  { src: x, alt: "Logo 1" },
  { src: second, alt: "Logo 2" },
  { src: third, alt: "Logo 3" },
  { src: first, alt: "Logo 1" },
  { src: second, alt: "Logo 2" },
  { src: third, alt: "Logo 3" },
];

console.log(logos[0].src);
const Sponsors = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-8">Our Partners</h1>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="my-8"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo.src}
              alt={logo.alt}
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                objectfit: "cover",
              }}
              // className="w-10 h-10 aspect-square rounded-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsors;
