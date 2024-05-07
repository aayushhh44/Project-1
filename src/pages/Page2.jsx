import React from "react";
import { FaArrowRight } from "react-icons/fa";

const hero = [
  {
    title: "IELTS CLASS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/IELTS_logo.svg/1280px-IELTS_logo.svg.png",
    content:
      "Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts.",
  },
  {
    title: "IELTS BOOKING",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/IELTS_logo.svg/1280px-IELTS_logo.svg.png",
    content:
      "Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts.",
  },
  {
    title: "PTE CLASS",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/IELTS_logo.svg/1280px-IELTS_logo.svg.png",
    content:
      "Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts.",
  },
  {
    title: "PTE BOOKING",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/IELTS_logo.svg/1280px-IELTS_logo.svg.png",
    content:
      "Educational institutions in Australia hold an excellent and well-deserved. Book IELTS class today hurry up to get exclusive discounts.",
  },
];

const Page2 = () => {
  return (
    <div className="px-24 h-[700px]">
      <div className="flex justify-between items-center gap-6 md:gap-0">
        <p className="text-[#2a388c]">Test Preperation</p>
        <div className="flex gap-1 items-center bg-red-500 md:px-10 px-4 py-1 md:py-2 rounded-md">
          <button className="text-white">View All</button>
          <FaArrowRight className="text-white" />
        </div>
      </div>

      <h1 className="text-2xl mt-4 md:text-5xl">Test Preperation</h1>

      <div className="flex flex-col flex-wrap md:flex-nowrap md:flex-row mt-16 justify-center gap-4">
        {hero.map((item) => (
          <div className="mx-2 border shadow-lg rounded-lg p-8">
            <img className="w-24 mx-auto" src={item.image} alt="Ielts Logo" />
            <h4 className="text-center text-2xl font-semibold mb-2 mt-6">{item.title}</h4>
            <p className="text-center">{item.content}</p>
            <div className="flex justify-center gap-1 items-center px-10 py-2">
              <button className="text-[#2a388c]">Learn More</button>
              <FaArrowRight className="text-[#2a388c]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
