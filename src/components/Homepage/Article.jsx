import React from "react";

const Article = ({ link, desc }) => {
  return (
    <div className="mt-2">
      <a
        href="#"
        className=" text-OffWhite font-bold text-xl hover:text-SoftOrange duration-300"
      >
        {link}
      </a>
      <p className=" text-GrayishBlue font-thin text-sm my-5">{desc}</p>
      <hr className="  text-DarkGrayishBlue" />
    </div>
  );
};

export default Article;
