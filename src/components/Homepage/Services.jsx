import React from "react";
import Card from "./Card";
import RetroPC from "../../assets/image-retro-pcs.jpg";
import TopLaptops from "../../assets/image-top-laptops.jpg";
import GamingGrowth from "../../assets/image-gaming-growth.jpg";

const Services = () => {
  const data = [
    {
      image: RetroPC,
      heading: "Reviving Retro PCs",
      ques: "What happens when old PCs are given modern upgrades?",
    },
    {
      image: TopLaptops,
      heading: "Top 10 Laptops of 2022",
      ques: "Our best picks for various needs and budgets.",
    },
    {
      image: GamingGrowth,
      heading: "The Growth of Gaming",
      ques: "How the pandemic has sparked fresh opportunities.",
    },
  ];
  return (
    <div className=" flex  gap-10  col-span-3 max-lg:col-span-1 max-lg:flex-wrap ">
      {data.map((item, index) => (
        <Card
          key={index}
          serialNumber={index + 1}
          title={item.heading}
          info={item.ques}
          photo={item.image}
        />
      ))}
    </div>
  );
};

export default Services;
