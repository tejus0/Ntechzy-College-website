/** @format */
"use client";

import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.webp";
import { IoIosArrowDown } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const navItems = [
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
      },
      {
        label: "Calendar",
        link: "#",
      },
      {
        label: "Reminders",
        link: "#",
      },
      {
        label: "Planning",
        link: "#",
      }
    ]
  },
  {
    label: "Company",
    link: "#",
    children: [
      {
        label: "History",
        link: "#"
      },
      {
        label: "Our Team",
        link: "#"
      },
      {
        label: "Blog",
        link: "#"
      }
    ]
  },
  {
    label: "Careers",
    link: "#"
  },
  {
    label: "About",
    link: "#"
  }
];

export default function NavbarItem() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenu] = useState(false);

  function openSideMenu() {
    setSideMenu(true);
  }

  function closeSideMenu() {
    setSideMenu(false);
  }

  return (
    <div className=" flex w-full justify-between items-center px-9 py-5 text-lg">
      {/* left side */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <img src={logo} alt="Major SD Singh Ayurvedic Medical College logo" className="h-12" />
      </section>

      {/* right side data */}
      <section className="hidden md:flex items-center gap-8">
        {navItems.map((d, i) => (
          <div key={i} className="relative group">
            <Link
              to={d.link ?? "#"}
              className="flex items-center gap-2 text-neutral-400 hover:text-black"
            >
              <span>{d.label}</span>
              {d.children && (
                <IoIosArrowDown className="transition-transform group-hover:rotate-180" />
              )}
            </Link>
            {d.children && (
              <div className="absolute top-full hidden group-hover:flex flex-col gap-1 rounded-lg bg-white py-3 shadow-md">
                {d.children.map((ch, idx) => (
                  <Link
                    key={idx}
                    to={ch.link ?? "#"}
                    className="flex items-center py-1 px-4 text-neutral-400 hover:text-black"
                  >
                    <span>{ch.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <button className="text-neutral-400 hover:text-black transition">Login</button>
        <button className="rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition hover:border-black hover:text-black">
          Register
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
      {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
    </div>
  );
}

function MobileNav({ closeSideMenu }) {
  return (
    <div className="fixed inset-0 flex justify-end bg-black/60 md:hidden">
      <div className="h-full w-3/4 bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl"
          />
        </section>
        <div className="flex flex-col gap-2 mt-4">
          {navItems.map((d, i) => (
            <MobileNavItem key={i} item={d} />
          ))}
        </div>
        <section className="flex flex-col items-center gap-8 mt-4">
          <button className="text-neutral-400 transition hover:text-black">Login</button>
          <button className="w-full max-w-[200px] rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition hover:border-black hover:text-black">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function MobileNavItem({ item }) {
  const [isItemOpen, setItemOpen] = useState(false);

  function toggleItem() {
    setItemOpen(!isItemOpen);
  }

  return (
    <div className="flex flex-col">
      <button onClick={toggleItem} className="flex items-center justify-between py-2 text-neutral-400 transition hover:text-black">
        <span>{item.label}</span>
        {item.children && (
          <IoIosArrowDown className={`transition-transform ${isItemOpen ? "rotate-180" : ""}`} />
        )}
      </button>
      {isItemOpen && item.children && (
        <div className="flex flex-col gap-1 pl-4">
          {item.children.map((ch, idx) => (
            <Link key={idx} to={ch.link ?? "#"} className="py-1 text-neutral-400 hover:text-black">
              {ch.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
