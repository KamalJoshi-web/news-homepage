import React from "react";
import HeroImg from "../../assets/image-web-3-desktop.jpg";
import HeroImg2 from "../../assets/image-web-3-mobile.jpg";

const HeroBanner = () => {
  return (
    <div className=" max-lg:col-span-1 col-span-2 grid grid-cols-2 max-md:grid-cols-1 max-md:auto-rows-max   gap-5">
      {/* Image Container */}
      <div className="col-span-2 max-md:row-span-1">
        <img src={HeroImg} alt="herobanner" className=" block max-md:hidden" />
        <img src={HeroImg2} alt="herobanner" className=" hidden max-md:block" />
      </div>
      {/* About */}
      <div className="  max-md:row-start-2">
        <h1 className=" text-6xl font-extrabold max-[281px]:text-3xl">
          The Bright Future of <br /> Web 3.0?
        </h1>
      </div>
      {/* More Info */}
      <div className=" flex flex-col items-start justify-between max-md:row-start-3 gap-2">
        <p className=" text-DarkGrayishBlue">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="  tracking-[.3em] uppercase  duration-300 font-extrabold text-xs text-OffWhite bg-SoftRed hover:bg-VeryDarkBlue py-3 px-4">
          Read more
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
