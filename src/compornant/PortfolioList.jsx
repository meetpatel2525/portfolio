import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioList = () => {
    const portfolioItems = [
        { imageSrc: '/assets/skill/html-icon.svg', skillName: 'HTML' },
        { imageSrc: '/assets/skill/javascript-logo-svgrepo-com.svg', skillName: 'Javascript' },
        { imageSrc: '/assets/skill/react-js-icon.svg', skillName: 'React Js' },
        { imageSrc: '/assets/skill/nextjs-icon.svg', skillName: 'Next Js' },
        { imageSrc: '/assets/skill/mongodb-ar21.svg', skillName: 'MongoDB' },
        { imageSrc: '/assets/skill/icons8-nodejs.svg', skillName: 'Node Js' },
        { imageSrc: '/assets/skill/icons8-express-js.svg', skillName: 'Express Js' },
        { imageSrc: '/assets/skill/postman-icon-svgrepo-com.svg', skillName: 'Postman' },
        { imageSrc: '/assets/skill/jwtio-json-web-token.svg', skillName: 'JWT Token' },
        { imageSrc: '/assets/skill/solidity-icon.svg', skillName: 'Solidity' },
        { imageSrc: '/assets/skill/infura-inc-logo-vector.svg', skillName: 'Infura' },
        { imageSrc: '/assets/skill/github-icon.svg', skillName: 'GitHub' },



        // Add more items as needed
    ];

    return (
        <div className="pt-10 md:pt-15 lg:pt-20 px-5 md:px-16 lg:px-32">
            <div className="flex items-center">
                <p className="text-[#F59E0B] bg-[#F59E0B] mr-3 md:mr-4 lg:mr-5 h-[1px] w-[12px] md:w-[22px] lg:w-[32px]"></p>
                <h1 className="text-[#F59E0B] text-[10px]  md:text-[12px] lg:text-[14px] font-[400] md:font-[450] lg:font-[500] ">
                    {" "}
                    Skills
                </h1>
            </div> 
            <div className=" px-[25px] md:px-[40px] lg:px-[55px] mr-[6px] md:mr-[8px] lg:mr-[10px] ">
        <div className="flex flex-col md:items-center md:flex-row  gap-x-[15px]  md:gap-x-[35px]   lg:gap-x-[65px]  xl:gap-x-[120px]  2xl:gap-x-[230px]  ">
          <h1 className="text-[#1B1C57] font-[600]  md:font-[650] lg:font-[700] text-[16px]  md:text-[26px] lg:text-[32px] ">
           Technologies I Am Good At
          </h1>
          </div>
          </div>
            
   
                   <div className=" pt-7 md:pt-10 lg:pt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
       
                {portfolioItems.map((item, index) => (

                    <div
                        key={index}
                        className=" border-x-gray-30000 p-2 rounded-md md:w-1/2 lg:w-full"
                    >
                        <PortfolioItem
                            imageSrc={item.imageSrc}
                            skillName={item.skillName}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PortfolioList;
