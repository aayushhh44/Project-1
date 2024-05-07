import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";



const Nav = () => {
  return (
    <div className=' h-6 bg-[#2a388c] flex justify-between w-full p-4'>
      <div className='flex items-center gap-2'>
        <FaPhoneAlt className='text-white text-sm'/>
        <p className='text-white text-sm font-Poppins font-light'>9843249388</p>
      </div>
     
      <div className='flex items-center gap-2'>
      <MdOutlineEmail className='text-white text-sm' />
      <p className='text-white font-Poppins text-sm font-light'>demo@gmail.com</p>
      </div>

      <div className='flex items-center gap-2'>
        <FaLocationDot className='text-white'/>
        <p className='text-white font-Poppins text-sm font-light'>demo address</p>
      </div>
    </div>
  )
}

export default Nav
