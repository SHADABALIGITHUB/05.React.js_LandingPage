import React from 'react';

const Mobile = (props) => {
    return (
            <div
                id="box"
                style={{ rotate: props.degree }}
                className={`absolute left-1/2 transform border-gray-800 dark:border-gray-800 bg-gray-800 border-[12px] rounded-[2.5rem] h-[460px] w-[240px] ${props.Userclass}`}
              >
                <div className="h-[24px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[48px] rounded-s-lg" />
                <div className="h-[36px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[84px] rounded-s-lg" />
                <div className="h-[36px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -start-[12px] top-[120px] rounded-s-lg" />
                <div className="h-[48px] w-[2px] bg-gray-800 dark:bg-gray-800 absolute -end-[12px] top-[96px] rounded-e-lg" />
                <div className="rounded-[2rem] overflow-hidden w-[216px] h-[432px] bg-white dark:bg-gray-800">
                  <img
                    src={props.Image}
                    className="hidden dark:block w-[216px] h-[432px]"
                    alt=""
                  />
                </div>
              </div>
    );
}

export default Mobile;
