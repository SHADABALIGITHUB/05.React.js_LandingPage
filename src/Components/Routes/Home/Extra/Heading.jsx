import React from 'react';
import { NavLink } from 'react-router-dom';

import RedSvg from './RedSvg';

const Heading = () => {
    return (
        <article>
        <div className="py-8 px-1 md:px-4 flex flex-col w-full h-full md:mx-auto justify-start items-start max-w-screen-xl lg:py-16 bg-transparent relative overflow-hidden">
          <h1 className="mb-4 text-2xl z-10 font-extrabold tracking-tight font-inter text-left text-black md:text-5xl lg:text-4xl xl:6xl 2xl:text-6xl">
            Make The Best Financial Decisions
          </h1>
          <div className='absolute inset-0 md:opacity-90 opacity-90'>  <RedSvg/>
            
          </div>

         
          <p className="mb-8 px-2 py-4 font-bold text-xs-8 md:text-xs z-10 font-inter md:leading-3 md:font-normal text-left text-slate-800 md:text-gray-500 lg:text-xl space-x-2">
            Here at Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque
            Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
          </p>
          <div className="flex justify-start space-y-0 gap-2 md:gap-0">
            <NavLink
              to='/'
              className="z-10 inline-flex justify-center items-center py-1 md:py-3 px-2 md:px-5 text-xs font-bold  text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              onClick={()=>alert("working on this part")}  >
              Get started
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </NavLink>
            <NavLink
              to='/'
              className="z-10 py-3 px-5 sm:ms-4 text-xs font-bold  text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              Watch video
            </NavLink>
          </div>
        </div>
      </article>
    );
}

export default Heading;
