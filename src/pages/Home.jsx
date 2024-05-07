import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Nav from "../components/Nav";
import Nav2 from "../components/Nav2";

const Home = () => {
  return (
    <div className="">
      <Nav />
      <Nav2 />
      <div className="flex flex-col  justify-center items-center mt-4 ">
        <h3 className="text-[#2a388c] text-2xl">Study Abroad</h3>
        <p className="text-center text-gray-500">
          This Consultancy provides a wide range of services that enclose at
          every step, from the identification of the universities <br /> to the
          pre-depature orientation.
        </p>

        <div className="flex gap-2 mt-3">
          <div className="flex items-center gap-1 bg-red-500 px-2 transform hover:scale-105 py-1 rounded-md">
            <button className="text-white text-sm md:text-lg">
              Get Directions
            </button>
            <FaArrowRight className="text-white" />
          </div>

          <div className="flex items-center gap-1 bg-transparent border transform hover:scale-105  border-red-500 px-2 py-1 rounded-md">
            <button className="text-red-500 text-sm md:text-lg">
              Apply Now
            </button>
            <FaArrowRight className="text-red-500" />
          </div>

          <div className="flex gap-1 items-center bg-red-500 transform hover:scale-105  px-2 py-1 rounded-md">
            <button className="text-white text-sm md:text-lg">
              Explore Countries
            </button>
            <FaArrowRight className="text-white" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-nowrap xl:h-screen justify-center gap-12 md:mt-20 mt-28">
          <img
            className="w-80 h-[580px] object-cover"
            src="https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg"
            alt="Dubai"
          />

          <img
            className="w-80 h-96 my-auto  object-cover"
            src="https://www.godsavethepoints.com/wp-content/uploads/2021/05/sydney-opera-house-354375_1280-1.jpg"
            alt="Australia"
          />

          <img
            className="w-80 h-[580px]  object-cover"
            src="https://www.shutterstock.com/image-photo/beautiful-aerial-view-downtown-vancouver-600nw-2244151975.jpg"
            alt="Canada"
          />

          <img
            className="w-80 h-96 my-auto  object-cover"
            src="https://www.spendlifetraveling.com/wp-content/uploads/2021/11/most_beautiful_cities_in_united_states.jpg"
            alt="USA image"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
