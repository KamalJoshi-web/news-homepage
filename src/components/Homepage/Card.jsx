import React from "react";

const Card = ({ serialNumber, title, info, photo }) => {
  return (
    <div className=" flex gap-5 w-max">
      {/* Img Container */}
      <div>
        <img src={photo} alt={title} className=" w-full" />
      </div>
      {/* Info Container */}
      <div className=" flex flex-col  gap-2 max-lg:justify-around">
        <h3 className=" text-2xl font-bold text-GrayishBlue">
          0{serialNumber}
        </h3>
        <a
          href="#"
          className=" text-base font-extrabold text-VeryDarkBlue hover:text-SoftRed duration-300"
        >
          {title}
        </a>
        <p className=" text-DarkGrayishBlue text-sm">{info}</p>
      </div>
    </div>
  );
};

export default Card;
