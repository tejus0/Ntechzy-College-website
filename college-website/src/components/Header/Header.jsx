import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import Carousal from "../Carousal/Carousal";
import logo from "../../assets/logo.webp";
import navLinksData from "../../components/Navbar/data.json";

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar />
      </div>
    </header>
    // <div className="header-parent">
    //   {/* <header className="header">
    //     <a href="#" className="logo-anchor">
    //       <img className="logo" src={logo} alt="logo" />
    //     </a>
    //     <Navbar navLinksData={navLinksData} />
    //   </header> */}
    //     {/* <Carousal /> */}
    //     <Navbar navLinksData={navLinksData} />
    // </div>
  );
};

export default Header;
