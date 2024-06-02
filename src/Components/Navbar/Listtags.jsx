import React from 'react';
import { NavLink } from 'react-router-dom';

const Listtags = () => {
    return (
       <>
          <li>
          <NavLink
              to='/'
            className="block font-bold py-2 px-3 md:p-0 rounded md:bg-transparent text-customRed"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
             to='/about'
            className="block font-bold py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-customRed"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
              to='/pricing'
            className="block font-bold py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-customRed"
          >
            Pricing
          </NavLink>
        </li>
        <li>
          <NavLink
              to='/features'
            className="block font-bold py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-customRed"
          >
            Features
          </NavLink>
        </li>
       </>
    );
}

export default Listtags;
