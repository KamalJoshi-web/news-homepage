import React from "react";
import Article from "./Article";

const Blog = () => {
  const data = [
    {
      path: "Hydrogen VS Electric Cars",
      info: "Will hydrogen-fueled cars ever catch up to EVs?",
    },
    {
      path: "The Downsides of AI Artistry",
      info: "What are the possible adverse effects of on-demand AI image generation?",
    },
    {
      path: "Is VC Funding Drying Up?",
      info: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
    },
  ];
  return (
    <div className=" bg-VeryDarkBlue px-10 pt-10 flex flex-col justify-between ">
      <h1 className=" text-4xl font-bold text-SoftOrange">New</h1>
      {data.map((item, index) => (
        <Article key={index} link={item.path} desc={item.info} />
      ))}
    </div>
  );
};

export default Blog;
