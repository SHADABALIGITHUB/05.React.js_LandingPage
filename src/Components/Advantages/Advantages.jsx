import React from 'react';

import Mobile from '../Routes/Home/Extra/Mobile';

import { CiBellOn } from "react-icons/ci";

import RedSvgBig from '../Routes/Home/Extra/RedSvgBig';



const Advantages = () => {
    return (
        <div className='w-full md:p-10 p-4 flex z-30'>

        
                     
        
                      <div  className='md:w-1/2 w-full'>
                       
           <div className=" w-full mx-auto p-4 relative">
           <div className='absolute -z-10 opacity-65 right-1/3'> <RedSvgBig width="300" height="300"/> </div>
              <h2 className="text-customRed text-sm font-bold">ADVANTAGES</h2>
              <h1 className="text-4xl font-bold my-4"> Why Choose Uifry?</h1>
        
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <CiBellOn className="text-customRed w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-bold"> Clever Notifications</h3>
                    <p className="text-gray-500">
                    Arcu At Dictum Sapien, Mollis. Vulputate Sit Id Accumsan, Ultricies. In Ultrices Malesuada Elit Mauris Etiam Odio. Duis Tristique Lacus, Et Blandit Viverra Nisl Velit. Sed Mattis Rhoncus, Diam Suspendisse Sit Nunc, Gravida Eu. Lectus Eget Eget Ac Dolor Neque Lorem Sapien, Suspendisse Aliquam.
                    </p>
                  </div>
                </div>
        
               
                  
              </div>
            </div>
                  </div>



        <div className='w-1/2 md:block hidden relative'>
         <RedSvgBig/>
        <Mobile Image="./Images/FirstScreen.png" degree='0deg' Userclass="top-1/2 -translate-x-1/2 -translate-y-1/2" />
        
        </div>
        
          
                    
                </div>
    );
}

export default Advantages;
