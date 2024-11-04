
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className="h-20 w-full  flex items-center justify-between px-5 bg-gradient-to-r from-white to-green-500">
        <div>
          <h1 className="md:text-5xl font-bold sm:hidden md:block">
            My Portfolio
          </h1>
        </div>
        <div>
          <ul className="flex gap-10">
            <li className="hover:bg-white hover:text-black font-bold py-1 px-4 border-2 border-transparent  hover:border-2 hover:border-black rounded ">

              <Link href="/">HOME</Link>
            </li>
            <li className=" hover:bg-white hover:text-black font-bold py-1 px-4 border-2 border-transparent  hover:border-2 hover:border-black rounded ">

              <Link href="./about">About</Link>
            </li>
            <li className=" hover:bg-white hover:text-black font-bold py-1 px-4 border-2 border-transparent  hover:border-2 hover:border-black rounded ">

              <Link href="./contact">Contact</Link>
            </li>
            <li className="text-2xl pt-2 hover:text-white cursor-pointer">
              <FaSearch />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
export default Header;