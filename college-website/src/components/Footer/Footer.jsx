import React from 'react';
import Logo from "../../assets/FooterIcon.ico"
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="grid grid-cols-2 gap-4 place-content-around container mx-auto px-4 ">
        <div className="mb-8 md:mb-0">
            <div className='flex align-center justify-center pb-8'>
                <img src={Logo} alt="" />
            </div>
          <div className="text-2xl font-bold mb-4 text-wrap text-center">APEX INSTITUTE OF AYURVEDIC MEDICINE AND HOSPITAL</div>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 items-stretch mt-10 m-auto">
        <div className="mb-8 md:mb-0">
          <h5 className=" text-xl font-semibold mb-4 group">Quick Links
          <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </h5>
          <ul>
            <li className="mb-1 hover:text-yellow-500"><a href="#">Course</a></li>
            <li className="mb-1 hover:text-yellow-500"><a href="#">Academic Calendar</a></li>
            <li className="mb-1 hover:text-yellow-500"><a href="#">Fees Structure</a></li>
            <li className="mb-1 hover:text-yellow-500"><a href="#">Career</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
        <h5 className=" text-xl font-semibold mb-4 group">Useful Links
          <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </h5>
          <ul>
            <li className="mb-1 hover:text-yellow-500"><a href="#">Ministry of Ayush</a></li>
            <li className="mb-1 hover:text-yellow-500"><a href="#">NCISM</a></li>
            <li className="mb-1 hover:text-yellow-500"><a href="#">MGGAU</a></li>
            <li className="mb-1 hover:text-yellow-500"><a href="#">U.P Scholarship</a></li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
        <h5 className=" text-xl font-semibold mb-4 group">Quick Contact
          <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[50%] transition-all duration-500"></div>
          </h5>
          <p className="mb-1"><FaPhoneAlt />+91-9511110295, +91-9511110297</p>
          <p className="mb-1"><IoIosMail /><a href="mailto:rgsahc23@gmail.com" className="hover:underline">rgsahc23@gmail.com</a></p>
          <p><FaLocationDot />Village - Karaundi, Near Itaunja Toll plaza, Itaunja, Lucknow, Uttar Pradesh, India, 226203</p>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
