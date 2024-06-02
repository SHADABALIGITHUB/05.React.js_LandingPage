import React from 'react';
import {FaShieldAlt, FaCalendarCheck } from 'react-icons/fa';
import RedSvgBig from '../Routes/Home/Extra/RedSvgBig';
import FaqCard from './FaqCard';


const FAQ = () => {
    return (
        <div className='w-full md:p-10 p-4 flex z-30'>

            <div className='w-full relative'>

                <div className=" w-full mx-auto p-4 relative">
                    <div className='absolute -z-10 right-1/3'> <RedSvgBig width="300" height="300" /> </div>
                    <h2 className="text-customRed text-sm font-bold">F A Q</h2>
                    <h1 className="text-4xl font-bold my-4">Frequently Asked Questions </h1>

                    {/* <div className="space-y-8">
                        
                         <FaqCard/>
                         <FaqCard/>
                    </div> */}
  <div class="grid grid-cols-2 gap-4">
  <div class="col-span-1"> <FaqCard/></div>
  <div class="col-span-1"></div>
  <div class="col-span-1"> <FaqCard/></div>
  <div class="col-span-1"> <FaqCard/></div>
  <div class="col-span-1"> <FaqCard/></div>
  <div class="col-span-1"> <FaqCard/></div>
        
  </div>

                </div>


            </div>






        </div>
    );
}

export default FAQ;
