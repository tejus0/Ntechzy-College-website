



import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import Button from "../Button/Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white max-w-screen w-full">
      <div className="flex w-[95%] items-center font-medium justify-between">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <img src={Logo} alt="logo" className="md:cursor-pointer h-9" />
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        {/* nav  */}
        <div className="flex justify-center items-center">
          <ul className="md:flex hidden uppercase items-end gap-8 font-[Poppins]">
            <li>
              <Link to="" className="py-7 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
          </ul>
          <div className="md:block hidden">
            <Button />
          </div>

          <ul
            className={`
        md:hidden  bg-red-500 fixed top-0 overflow-y-auto bottom-0 py-24
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
          >
            <li>
              <Link to="/" className="py-2 px-3 inline-block">
                Home
              </Link>
            </li>
            <NavLinks />
            <div className="py-5">
              <Button />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;