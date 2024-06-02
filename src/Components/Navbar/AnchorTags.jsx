import React from 'react';
import { NavLink } from 'react-router-dom';
import Listtags from './Listtags';

import {GiHamburgerMenu} from "react-icons/gi";
import logo from '../../assets/logo.png';
const AnchorTags = () => {
     const [state, setState] = React.useState('hidden')
      const handleClick = () => {
        if (state === "hidden") {
          setState("flex flex-col w-full justify-center items-center bg-gray-50 rounded-lg mt-4 md:hidden rtl:space-x-reverse");
        } else {
          setState("hidden");
        }
      }
    return (
        <>
        <div
            className="items-center w-auto justify-between hidden md:flex relative"
            
          >
        
        <ul
        id="anchor"
        className="flex w-full flex-col justify-center items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white"
      >
        <li>
          <NavLink to="/" className="flex">
            <img
              src={logo}
              className="h-10"
              alt="uifry Logo"
            />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              uifry
            </span>
          </NavLink>
        </li>
        <Listtags/>
       
      </ul>
     
      </div>
      {/* laptop view */}
       <div className="md:flex hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
       <button
         type="button"
         className="text-white font-bold bg-black focus:ring-4 focus:outline-none focus:ring-gray-500 rounded-lg text-sm px-4 py-2 text-center"
       >
         Download{" "}
       </button>
     </div>
     {/* mobile view */}
     <div className="flex md:hidden md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
       <button
         type="button"
         className="text-white font-bold bg-red-400 rounded-lg text-sm px-4 py-2 text-center" onClick={handleClick}
       >
        <GiHamburgerMenu />
       </button>
     </div>

     <div className={`${state} list-none boder-2 w-full border-gray-500`}>

          <Listtags/>

     </div>

     </>
    );
}

export default AnchorTags;
