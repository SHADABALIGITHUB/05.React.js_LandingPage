import React from 'react';
import { useState } from 'react';

const Pricing = () => {
     const [data, setData] = useState([
        {
          "plan": "Basic",
          "price": "$9.99/month",
          "features": ["Feature A", "Feature B", "Feature C"]
        },
        {
          "plan": "Premium",
          "price": "$19.99/month",
          "features": ["Feature A", "Feature B", "Feature C", "Feature D"]
        }
      ]);
    return (
       
        <div className="py-16 bg-white md:p-10">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            {data.map((item, index) => (
              <div className="md:5/12 lg:w-5/12" key={index}>
                <h2 className="text-2xl text-customRed font-bold md:text-4xl">
                  {item.plan}
                </h2>
                <p className="mt-6 text-black">
                  {item.price}
                </p>
                <ul className="mt-4 text-gray-600">
                  {item.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Pricing;
