import React, { ReactNode } from "react";
import NavLink from "./NavLink";

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

const MenuOverlay = () => {
  return (
    <ul className="flex flex-col py-4 items-center md:hidden">
      {navLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
