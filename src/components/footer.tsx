import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
     <div className='h-52 w-full bg-green-500 text-white text-center text-2xl font-semibold pt-8'>
      <div className='flex gap-10 justify-center items-center pb-10'>
      <FaGithub />
      <FaLinkedin />
      <FaSquareInstagram />
      <BsTwitterX />
      </div>
      <p className='pb-2'>Privacy
|
Terms
|
FAQs
|
Help</p>
       <p>Copyright © 2024 Your Website. All rights reserved.</p>
     </div>
     
      
  )
}
 export default Footer;