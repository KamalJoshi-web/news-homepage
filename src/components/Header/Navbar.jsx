import React from "react";
import Deskbar from "./Deskbar";
import Mobbar from "./Mobbar";

const Navbar = () => {
  return (
    <nav className="  relative py-5 ">
      <Deskbar />
      <Mobbar />
    </nav>
  );
};

export default Navbar;
