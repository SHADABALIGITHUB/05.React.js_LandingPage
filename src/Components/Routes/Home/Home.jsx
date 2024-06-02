import React from 'react';

import RedSvgBig from './Extra/RedSvgBig';

import Mobile from './Extra/Mobile';
import Heading from './Extra/Heading';
import AchievmentTag from './Extra/AchievmentTag';
import Features from '../Features/Features';
import Advantages from '../../Advantages/Advantages';
import FullyCustomize from '../../Customize/FullyCustomize';
import FAQ from '../../FAQ/FAQ';

const Home = () => {
  return (
    <div id="main" className="md:p-10 p-4">

     <div className='flex md:flex-row flex-col justify-between'>
     
      <section className="bg-white flex flex-col justify-between md:w-1/2 w-full">

        <Heading />
        <AchievmentTag/>
      </section>

    
      {/* Mobile views */}

      <section className='flex-1'>

        <aside className="perspective-1000 ">

          <div
            id="container"
            className="relative w-[600px] h-[720px] transform transform-style-flat md:block hidden" 
          >
            <RedSvgBig width="900" height="700"/>
            <Mobile Image="./Images/FirstScreen.png" degree='-20deg' Userclass="top-1/2 translate-x-40 -translate-y-1/2" />
            <Mobile Image="./Images/SecondScreen.png" degree='-20deg' Userclass="top-1/3 translate-x-4 -translate-y-1/2" />
            <Mobile Image="./Images/FirstScreen.png" degree='-20deg' Userclass="top-1/4 -translate-x-24 -translate-y-1/2" />


          </div>
        </aside>
      </section>

      </div>


       <Features/>

       <Advantages/>

       <FullyCustomize/>

       <FAQ/>




    </div>

  );
}

export default Home;
