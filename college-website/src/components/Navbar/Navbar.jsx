import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.webp";
import Button from "../Button/Button";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white max-w-screen w-full">
      <div className="flex w-full items-center font-medium justify-between">
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
        md:hidden  bg-red fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
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

// import { useState } from "react";
// import { motion } from "framer-motion";

// const Navbar = (props) => {
//   const { navLinksData } = props;
//   const [showSubMenu, setShowSubMenu] = useState([]);

//   const variants = {
//     open: { opacity: 1, x: 0 },
//     closed: { opacity: 0, x: "-100%" },
//   };

//   const subMenuOnMouseEnterHandler = (subMenuId) => {
//     setShowSubMenu((prev) => {
//       console.log("running");
//       let arr = [...prev];
//       arr[subMenuId] = true;
//       return arr;
//     });
//   };
//   const subMenuOnMouseLeaveHandler = (subMenuId) => {
//     setShowSubMenu((prev) => {
//       console.log("running");
//       let arr = [...prev];
//       arr[subMenuId] = false;
//       return arr;
//     });
//   };

//   return (
//     <nav>
//       <ul className="main-nav">
//         {navLinksData.map((el, i) => {
//           if (!el.children) {
//             return (
//               <li key={el.id}>
//                 <a href="#" className="header-nav-link">
//                   <span>{el.name}</span>
//                 </a>
//                 <span className="dropdown-arrow"></span>
//               </li>
//             );
//           }

//           return (
//             <li
//               onMouseEnter={(event) => subMenuOnMouseEnterHandler(el.id)}
//               onMouseLeave={(event) => subMenuOnMouseLeaveHandler(el.id)}
//               key={el.id}
//               className="header-nav-options options-hover"
//             >
//               <div className="header-nav-div">
//                 <span>{el.name}</span>
//               </div>
//               <motion.ul
//                 variants={variants}
//                 animate={showSubMenu[el.id] ? "open" : "closed"}
//                 className="header-nav-ul"
//               >
//                 {showSubMenu[el.id] &&
//                   el.children.map((ele) => {
//                     if (!ele.children) {
//                       return (
//                         <li key={ele.id} className="sub-menu-li">
//                           <a
//                             href="#"
//                             className="sub-menu-link"
//                             style={{ textDecoration: "none" }}
//                           >
//                             <span>{ele.name}</span>
//                           </a>
//                         </li>
//                       );
//                     }

//                     return (
//                       <li
//                         onMouseEnter={() => subMenuOnMouseEnterHandler(ele.id)}
//                         onMouseLeave={() => subMenuOnMouseLeaveHandler(ele.id)}
//                         key={ele.id}
//                         className="sub-menu-options sub-menu-hover"
//                       >
//                         <div className="sub-menu-div">
//                           <span>{ele.name}</span>
//                           <span className="arrow">{"-->"}</span>
//                         </div>
//                         <motion.ul
//                           variants={variants}
//                           animate={showSubMenu[ele.id] ? "open" : "closed"}
//                           className="sub-menu-ul"
//                         >
//                           {showSubMenu[ele.id] &&
//                             ele.children.map((elem) => {
//                               return (
//                                 <li key={elem.id} className="grand-child-link">
//                                   <a href="#">
//                                     <span>{elem.name}</span>
//                                   </a>
//                                 </li>
//                               );
//                             })}
//                         </motion.ul>
//                       </li>
//                     );
//                   })}
//               </motion.ul>
//             </li>
//           );
//         })}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
