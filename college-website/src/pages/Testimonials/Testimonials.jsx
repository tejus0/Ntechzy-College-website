import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: "John Colgate",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsam omnis ducimus doloribus numquam minus ad suscipit nemo quasi. Eius rerum, blanditiis vel eum deleniti quod?",
    imgSrc: "https://via.placeholder.com/40", // Replace with actual image source
  },
  {
    id: 2,
    name: "Jenny Colgate",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsam omnis ducimus doloribus numquam minus ad suscipit nemo quasi. Eius rerum, blanditiis vel eum deleniti quod?",
    imgSrc: "https://via.placeholder.com/40", // Replace with actual image source
  },
  {
    id: 3,
    name: "Sam Colgate",
    role: "Customer",
    text: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ipsam omnis ducimus doloribus numquam minus ad suscipit nemo quasi. Eius rerum, blanditiis vel eum deleniti quod?",
    imgSrc: "https://via.placeholder.com/40", // Replace with actual image source
  },
];

const Testimonials = () => {
  return (
    <div className="w-full flex flex-col items-center py-10">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="relative max-w-2xl">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          slidesPerView={1}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-blue-100 p-6 rounded-md shadow-md">
                <p className="text-lg italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center">
                  {/* <img
                    src={testimonial.imgSrc}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-4"
                  /> */}
                  <div>
                    <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
