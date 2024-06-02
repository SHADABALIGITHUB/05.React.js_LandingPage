import React from 'react';
import Mobile from '../Home/Extra/Mobile';

import { FaStar, FaShieldAlt, FaCalendarCheck } from 'react-icons/fa';
import RedSvgBig from '../Home/Extra/RedSvgBig';



const Features = () => {
    return (
    
    <div className='w-full md:p-10 p-4 flex z-30'>

<div className='w-1/2 md:block hidden relative'>
 <RedSvgBig/>
<Mobile Image="./Images/FirstScreen.png" degree='0deg' Userclass="top-1/2 -translate-x-1/2 -translate-y-1/2" />

</div>

             

              <div  className='md:w-1/2 w-full'>
               
   <div className=" w-full mx-auto p-4 relative">
   <div className='absolute -z-10 right-1/3'> <RedSvgBig width="300" height="300"/> </div>
      <h2 className="text-customRed text-sm font-bold">FEATURES</h2>
      <h1 className="text-4xl font-bold my-4">Uifry Premium</h1>

      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <FaStar className="text-customRed w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg font-bold">Budgeting Intervals</h3>
            <p className="text-gray-500">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaShieldAlt className="text-customRed w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg font-bold">Budgeting Intervals</h3>
            <p className="text-gray-500">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <FaCalendarCheck className="text-customRed w-6 h-6 mt-1" />
          <div>
            <h3 className="text-lg font-bold">Budgeting Intervals</h3>
            <p className="text-gray-500">
              Cum Et Convallis Risus Placerat Aliquam, Nunc. Scelerisque Aliquet Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
            </p>
          </div>
        </div>
          
      </div>
    </div>
          </div>

  
            
        </div>
    );
}

export default Features;
