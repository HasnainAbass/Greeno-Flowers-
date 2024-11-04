import Image from "next/image";

import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGoogleplus } from "react-icons/io";

function Hearo() {
   return (
      <main className="h-auto w-full bg-gradient-to-b from-fuchsia-900 to-green-400  flex items-center justify-between md:pl-20 gap-8 md:gap-0 sm:flex-col md:flex-row">
         {/* 1st contant div */}
         <div className="h-auto w-96">
         <h1 className="text-5xl font-bold text-white">Hello  I am Hasnain Abass</h1>
            <p className="font-bold">
               <span className="bg-yellow-300 h-7 ">Explore Now ....................!</span>

               As a passionate software engineer, I thrive on the intricate dance between logic and creativity. Currently immersed in the dynamic world of WebHR, my expertise centers around React Native, where I seamlessly blend technology with innovation.</p>
            <p>
               With a fervor for crafting elegant solutions, I navigate the ever-evolving landscape of software development. My journey involves translating concepts into code, creating seamless user experiences, and constantly pushing the boundaries of whats possible</p>
            <div className=" w-full flex pl-6 pt-9 gap-2">
               <div className="h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-blue-500 bg-green-400 ">
                  <FaFacebookF />
               </div>
               <div className="h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-blue-500 bg-green-400 ">
                  <FaTwitter />
               </div>
               <div className="h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-blue-500 bg-green-400 ">
                  <TbWorld />
               </div>
               <div className="h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-blue-500 bg-green-400 ">
                  <FaLinkedinIn />
               </div>
               <div className="h-12 w-12 flex items-center justify-center cursor-pointer hover:bg-blue-500 bg-green-400 ">
                  <IoLogoGoogleplus />
               </div>
            </div>
         </div>
         {/* 2nd image div */}
         <div>
            <Image className="rounded-3xl" src={"/Hasnainabass.png"} width={500} height={300} alt="hasnain" />
         </div>

      </main>
   )
}

export default Hearo;