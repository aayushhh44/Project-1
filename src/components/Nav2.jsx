import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";



const Nav2 = () => {
  const[active, setActive] = useState(false);

  const Hamburger = () =>{
    setActive(!active)
  }

  return (
    <div className=" p-2 px-6">
      <nav className="flex justify-between">
        <img
          className="w-16 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbnU4H-QVJPTA6PLPwv5t9JStqISL5hP7Kynx_Wm4qaA&s"
          alt="Pte Image"
        />


        <GiHamburgerMenu onClick={Hamburger} className="absolute md:hidden text-3xl right-4 top-16 cursor-pointer" />
        {console.log(active)}


        {active && <div className="flex flex-col md:hidden items-center gap-6 mt-12">
          <a className="hover:border-b-2 border-red-500 text-sm font-Poppins uppercase" href="">Home</a>
          <a className="hover:border-b-2 border-red-500 text-sm uppercase font-Poppins" href="">About Us</a>
          <a className="hover:border-b-2 border-red-500 text-sm uppercase font-Poppins" href="">Destination</a>
          <a className="hover:border-b-2 border-red-500 text-sm uppercase font-Poppins" href="">Test Preperation</a>

          <div className="flex items-center transform hover:scale-105 bg-red-500 px-2 py-1 rounded-md">
            <button className="text-white font-Poppins">Contact Us</button>
            <FaArrowRight className="text-white" />
          </div>
        </div> }




        <div className="md:flex items-center hidden gap-6">
          <a className="hover:border-b-2 border-red-500 uppercase" href="">Home</a>
          <a className="hover:border-b-2 border-red-500 uppercase" href="">About Us</a>
          <a className="hover:border-b-2 border-red-500 uppercase" href="">Destination</a>
          <a className="hover:border-b-2 border-red-500 uppercase" href="">Test Preperation</a>

          <div className="flex items-center bg-red-500 px-2 py-1 rounded-md">
            <button className="text-white">Contact Us</button>
            <FaArrowRight className="text-white" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav2;
