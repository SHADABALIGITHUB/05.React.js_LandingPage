import React from 'react';
import { NavLink } from 'react-router-dom';


import { SiGmail } from "react-icons/si";
import { IoCallSharp } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { TfiTwitterAlt } from "react-icons/tfi";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


const Footer = () => {
    return (
        

<footer className="bg-white">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-5">
              <div>
              <div className="mb-6 md:mb-0">
              <NavLink to="/" className="flex  flex-col justify-around items-start gap-5">
                  <div className='flex items-center gap-5'>
                  <img src="./Images/logo.png" className="h-8" alt="Logo" />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap">Uifry</span>
                  </div>
                  <div className='flex items-center text-customRed gap-5'>
                  <SiGmail/>
                  <span className='self-center text-xs font-semibold whitespace-nowrap text-slate-900'>Help@Frybix.com</span>

                  </div>
                  <div className='flex items-center text-customRed gap-5'>
                  <IoCallSharp />
                  <span className='self-center text-xs font-semibold whitespace-nowrap dark:text-slate-900'>+1234 456 789</span>

                  </div>

              </NavLink>
              </div>

              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase">Links</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <NavLink to="/" className="hover:underline">Home </NavLink>
                      </li>
                      <li>
                          <NavLink to="/about" className="hover:underline">About Us</NavLink>
                      </li>
                      <li>
                          <NavLink to="/" className="hover:underline">Bookings</NavLink>
                      </li>
                      <li>
                          <NavLink to="/" className="hover:underline">Blog</NavLink>    
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <NavLink to="/" className="hover:underline ">Terms Of Use</NavLink>
                      </li>
                      <li>
                          <NavLink to="/" className="hover:underline">Privacy Policy </NavLink>
                      </li>
                      <li>
                          <NavLink to="/" className="hover:underline"> Cookie Policy </NavLink>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase"> Products</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <NavLink to="/" className="hover:underline">Take Tour</NavLink>
                      </li>
                      <li className="mb-4">
                          <NavLink to="/" className="hover:underline">Live Chat</NavLink>
                      </li>
                      <li className="mb-4">
                          <NavLink to="/" className="hover:underline">Reviews</NavLink>
                      </li>
                     
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-black uppercase">Newsletter</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <NavLink to="/" className="hover:underline">Stay Up To Date</NavLink>
                      </li>
                      <li className="mb-4">
                            
                                <form className="max-w-md mx-auto">   
                                   
                                    <div className="relative">
                                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                        <SiGmail />
                                        </div>
                                        <input type="email" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required />
                                        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Subscribe</button>
                                    </div>
                                </form>

                      </li>
                    
                     
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <NavLink to="https://flowbite.com/" className="hover:underline">Uifry™</NavLink>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-2">
             
             <FaFacebookSquare/>
              <FaDiscord/>
              <TfiTwitterAlt/>
             <FaGithub/>
           
          </div>
      </div>
    </div>
</footer>

    );
}

export default Footer;
