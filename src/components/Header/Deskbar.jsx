import React from "react";
import { Logo } from "../index";
import { links } from "./links";

const Deskbar = () => {
  return (
    <div className=" flex justify-between items-center max-md:hidden">
      {/* Logo */}
      <Logo />
      {/* Links */}
      <ul className=" flex items-center  gap-8">
        {links.map((item, index) => (
          <li
            key={index}
            className="text-DarkGrayishBlue hover:text-SoftOrange"
          >
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Deskbar;
