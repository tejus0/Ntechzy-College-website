import React from "react";
import Logo from "../../assets/FooterIcon.ico";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-8">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr_2fr] mx-auto max-w-[90%] sm:grid-cols-1">
        <div className=" mb-8 md:mb-0">
          <div className=" flex justify-center items-center pb-8">
            <img src={Logo} alt="" />
          </div>
          <div className="text-2xl font-bold mb-4 text-wrap">
            APEX INSTITUTE OF AYURVEDIC MEDICINE AND HOSPITAL
          </div>
          {/* <div className="flex space-x-4 bg-red-500">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
          </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  my-2 mx-6">
          <div className="mb-8 md:mb-0">
            <h5 className=" text-xl font-semibold mb-4 group">
              Quick Links
              <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[50%] transition-all duration-500"></div>
            </h5>
            <ul>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">Course</a>
              </li>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">Academic Calendar</a>
              </li>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">Fees Structure</a>
              </li>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h5 className=" text-xl font-semibold mb-4 group">
              Useful Links
              <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[50%] transition-all duration-500"></div>
            </h5>
            <ul>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">Ministry of Ayush</a>
              </li>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">NCISM</a>
              </li>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">MGGAU</a>
              </li>
              <li className="mb-1 hover:text-yellow-500">
                <a href="#">U.P Scholarship</a>
              </li>
            </ul>
          </div>
          <div className="mb-8 md:mb-0">
            <h5 className=" text-xl font-semibold mb-4 group">
              Quick Contact
              <div class="bg-amber-500 h-[2px] w-0 group-hover:w-[50%] transition-all duration-500"></div>
            </h5>
            <p className="mb-1">
              <FaPhoneAlt />
              +91-9511110295, +91-9511110297
            </p>
            <p className="mb-1">
              <IoIosMail />
              <a href="mailto:rgsahc23@gmail.com" className="hover:underline">
                rgsahc23@gmail.com
              </a>
            </p>
            <p>
              <FaLocationDot />
              Village - Karaundi, Near Itaunja Toll plaza, Itaunja, Lucknow,
              Uttar Pradesh, India, 226203
            </p>
          </div>
        </div>
        <div class="">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.625899443022!2d82.9659525753846!3d25.283167077655726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e33c87dd27ce3%3A0xd0db217d9d556af2!2sApex%20Super%20Specialty%20Hospital%20%26%20Post%20Graduate%20Institute%20(Apex%20Hospital)!5e0!3m2!1sen!2sin!4v1716199126539!5m2!1sen!2sin"
            style={{"border":"0"}}
            width={300}
            height={250}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <iframe
            class=" top-0 left-0"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameborder="0"
            style="border:0;"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe> */}
        </div>

        {/* Social Media Links */}
      </div>
      <div class="bg-gray-100 pt-2">
        <div
          class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
      max-w-screen-lg items-center"
        >
          <div class="md:flex-auto md:flex-row-reverse gap-12 mt-2 flex-row flex">
            <a href="twitter.com/hospital_apex" class="w-8 mx-1">
              <svg
                class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style={{
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "2",
                }}
              >
                <path
                  id="Twitter"
                  d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373 12,12Zm-6.465,-3.192c-0.379,0.168
                  -0.786,0.281 -1.213,0.333c0.436,-0.262 0.771,-0.676
                  0.929,-1.169c-0.408,0.242 -0.86,0.418 -1.341,0.513c-0.385,-0.411
                  -0.934,-0.667 -1.541,-0.667c-1.167,0 -2.112,0.945 -2.112,2.111c0,0.166
                  0.018,0.327 0.054,0.482c-1.754,-0.088 -3.31,-0.929
                  -4.352,-2.206c-0.181,0.311 -0.286,0.674 -0.286,1.061c0,0.733 0.373,1.379
                  0.94,1.757c-0.346,-0.01 -0.672,-0.106 -0.956,-0.264c-0.001,0.009
                  -0.001,0.018 -0.001,0.027c0,1.023 0.728,1.877 1.694,2.07c-0.177,0.049
                  -0.364,0.075 -0.556,0.075c-0.137,0 -0.269,-0.014 -0.397,-0.038c0.268,0.838
                  1.048,1.449 1.972,1.466c-0.723,0.566 -1.633,0.904 -2.622,0.904c-0.171,0
                  -0.339,-0.01 -0.504,-0.03c0.934,0.599 2.044,0.949 3.237,0.949c3.883,0
                  6.007,-3.217 6.007,-6.008c0,-0.091 -0.002,-0.183 -0.006,-0.273c0.413,-0.298
                  0.771,-0.67 1.054,-1.093Z"
                ></path>
              </svg>
            </a>
            <a href="facebook.com/ApexSuperSpecialityHospital" class="w-8 mx-1">
              <svg
                class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style={{
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "2",
                }}
              >
                <path
                  id="Facebook"
                  d="M24,12c0,6.627 -5.373,12 -12,12c-6.627,0 -12,-5.373 -12,-12c0,-6.627
                  5.373,-12 12,-12c6.627,0 12,5.373
                  12,12Zm-11.278,0l1.294,0l0.172,-1.617l-1.466,0l0.002,-0.808c0,-0.422
                  0.04,-0.648 0.646,-0.648l0.809,0l0,-1.616l-1.295,0c-1.555,0 -2.103,0.784
                  -2.103,2.102l0,0.97l-0.969,0l0,1.617l0.969,0l0,4.689l1.941,0l0,-4.689Z"
                ></path>
              </svg>
            </a>
            <a href="/#" class="w-8 mx-1">
              <svg
                class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style={{
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "2",
                }}
              >
                <g id="Layer_1">
                  <circle id="Oval" cx="12" cy="12" r="12"></circle>
                  <path
                    id="Shape"
                    d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  ></path>
                </g>
              </svg>
            </a>
            <a href="https://www.youtube.com/@ApexHospitalVaranasi" className="w-8">
              <svg
                class="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style={{
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  "stroke-linejoin": "round",
                  "stroke-miterlimit": "2",
                }}
              >
                <g id="Layer_1">
                  <circle id="Oval" cx="12" cy="12" r="12"></circle>
                  <path
                    id="Shape"
                    d="M19.05,8.362c0,-0.062 0,-0.125 -0.063,-0.187l0,-0.063c-0.187,-0.562
                     -0.687,-0.937 -1.312,-0.937l0.125,0c0,0 -2.438,-0.375 -5.75,-0.375c-3.25,0
                     -5.75,0.375 -5.75,0.375l0.125,0c-0.625,0 -1.125,0.375
                     -1.313,0.937l0,0.063c0,0.062 0,0.125 -0.062,0.187c-0.063,0.625 -0.25,1.938
                     -0.25,3.438c0,1.5 0.187,2.812 0.25,3.437c0,0.063 0,0.125
                     0.062,0.188l0,0.062c0.188,0.563 0.688,0.938 1.313,0.938l-0.125,0c0,0
                     2.437,0.375 5.75,0.375c3.25,0 5.75,-0.375 5.75,-0.375l-0.125,0c0.625,0
                     1.125,-0.375 1.312,-0.938l0,-0.062c0,-0.063 0,-0.125
                     0.063,-0.188c0.062,-0.625 0.25,-1.937 0.25,-3.437c0,-1.5 -0.125,-2.813
                     -0.25,-3.438Zm-4.634,3.927l-3.201,2.315c-0.068,0.068 -0.137,0.068
                     -0.205,0.068c-0.068,0 -0.136,0 -0.204,-0.068c-0.136,-0.068 -0.204,-0.204
                     -0.204,-0.34l0,-4.631c0,-0.136 0.068,-0.273 0.204,-0.341c0.136,-0.068
                     0.272,-0.068 0.409,0l3.201,2.316c0.068,0.068 0.136,0.204
                     0.136,0.34c0.068,0.136 0,0.273 -0.136,0.341Z"
                    style={{ fill: "rgb(255, 255, 255)" }}
                  ></path>
                </g>
              </svg>
            </a>
          </div>
          <div class="my-4">© Copyright 2020. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
