import React, { useState } from "react";
import { Logo } from "../index";
import { links } from "./links";
import MenuIcon from "../../assets/icon-menu.svg";
import MenuCloseIcon from "../../assets/icon-menu-close.svg";

const Mobbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen((current) => !current);
  };
  return (
    <div
      className={` hidden max-md:flex justify-between items-center before:duration-300 before:absolute   
      ${
        isOpen
          ? "  before:opacity-100  before:bg-VeryDarkBlue before:h-screen before:w-full  before:top-0 before:bg-opacity-40 before:right-4"
          : "before:w-0 before:opacity-0 "
      }`}
    >
      {/* Logo */}
      <Logo />
      {/* Menu Button */}
      <button onClick={handleMenu} className=" z-[2]">
        <img
          src={isOpen ? MenuCloseIcon : MenuIcon}
          alt={isOpen ? "Close Menu" : "Open Menu"}
        />
      </button>
      {/* Links */}
      <ul
        className={`absolute flex flex-col  pt-36  duration-300  gap-5 h-screen  bg-OffWhite  overflow-hidden pl-5 top-0  -right-4   ${
          isOpen
            ? " visible w-[65vw]  opacity-100  "
            : " invisible w-0   opacity-0 "
        } `}
      >
        {links.map((item, index) => (
          <li key={index} className=" text-VeryDarkBlue">
            <a href={item.path}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Mobbar;
