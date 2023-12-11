import React from "react";
import HeroBanner from "./HeroBanner";
import Blog from "./Blog";
import Services from "./Services";

const Homepage = () => {
  return (
    <div className=" grid grid-cols-3  gap-10   my-1 max-lg:grid-cols-1  ">
      <HeroBanner />
      <Blog />
      <Services />
    </div>
  );
};

export default Homepage;
