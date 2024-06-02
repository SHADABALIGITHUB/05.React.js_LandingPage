import React from 'react';

import AnchorTags from './AnchorTags';

const Navbar = () => {
   const Toggle = () => {
       console.log('clicked');
   }
    return (
        <nav id="main" className="bg-white border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <div className="flex items-center md:hidden">
            <a href="/" className="flex items-center ">
              <img
                src="./Images/logo.png"
                className="h-10"
                alt="uifry Logo"
              />
              <span className="self-center text-2xl font-bold whitespace-nowrap">
                uifry
              </span>
            </a>
        </div>

         
          
             

          <AnchorTags/>
          

          
        </div>
      </nav>
      
    );
}

export default Navbar;
