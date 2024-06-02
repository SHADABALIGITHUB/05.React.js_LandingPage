import React from 'react';
import { NavLink as Navlink } from 'react-router-dom';
const About = () => {
    return (

        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            CREDO, CODE & COMPACT
                        </h2>
                        <p className="mt-6 text-gray-600">


                            At Unify, our guiding principles of integrity, excellence,
                            and efficiency are ingrained in everything we do. We
                            adhere to the highest ethical standards, foster a culture
                            of continuous improvement, and deliver streamlined
                            solutions tailored to your needs.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Guiding Principles for
                            Digital Excellence
                        </p>
                        <Navlink to='/' className='z-10 mt-4 inline-flex justify-center items-center py-1 md:py-3 px-2 md:px-5 text-xs font-bold  text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
           '> Learn More</Navlink>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;
