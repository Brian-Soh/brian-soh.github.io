import React, { ReactNode } from "react";
import {Link} from "react-scroll";
interface Props {
  children?: ReactNode;
  href: string;
  title: string;
}

const NavLink = ({ href, title }: Props) => {
  return (
    <Link
      to={href}
      spy={true}
      smooth={true}
      offset={-75}
      duration={0}
      className="block py-2 pl-3 pr-4 rounded md:p-0 hover:text-red-600"
    >
      
      <p style={{ cursor: "pointer" }} className="text-xl font-semibold hover:text-red-600">{title}</p>
    </Link>
  );
};

export default NavLink;
