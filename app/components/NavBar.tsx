"use client";
import React, { useState } from "react";
import { Link } from "react-scroll";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image, { StaticImageData } from "next/image";

const navLinks = [
  {
    title: "About",
    path: "about",
  },
  {
    title: "Languages",
    path: "languages",
  },
  {
    title: "Projects",
    path: "projects",
  },
  {
    title: "Contact",
    path: "contact",
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="fixed pb-0 top-0 left-0 right-0 z-999 bg-[#121212] bg-opacity-90">
      <div className="flex flex=wrap items-center justify-end mx-auto p-6">
        <div className="mobile-menu block md:hidden">
          {navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block lg:pr-20 md:w-auto" id="navbar">
          <ul className="flex p4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay /> : null}
    </nav>
  );
};

export default Header;
