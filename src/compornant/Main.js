import React from "react";

const Main = () => {
  return (
    <div className="flex justify-between  gap-x-[4px]  md:gap-x-[84px]   lg:gap-x-[104px] px-[20px] md:px-[0px] md:pl-[60px] lg:pl-[120px]">
      <div className="  mt-[102px]   md:mt-[152px]  lg:mt-[182px] text-left  text-[#1B1C57]">
        <h1 className="  font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px] ">
           PATEL MEET
        </h1>
        <div className="flex gap-1 md:gap-2 lg:gap-3 ">
          <h1 className=" font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px] ">
            FULL STACK 
          </h1>
          <h1 className="   font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px]  bdr">
          DEVELOPER
          </h1>
        </div>
        {/* <h1 className=" font-[500]  md:font-[600]  lg:font-[700]  text-[20px]  md:text-[30px] lg:text-[40px]  ">
          Easily Here
        </h1> */}

        <p className=" text-[12px] md:text-[14px]  lg:text-[16px] py-[12px]  md:py-[22px]  lg:py-[32px] text-[#626687] font-[250]  md:font-[350]  lg:font-[400] ">
        Elevating User Journeys with React, Empowering Servers with Node, and Solving Challenges at Every Click.
        </p>

        <div className="flex   gap-[8px] md:gap-[12px]  lg:gap-[16px] relative ">
          <img
            className="absolute left-3   md:left-4   lg:left-5    top-[8px]  md:top-[14px] lg:top-[19px] "
            src="/assets/img/location.svg"
          />

          <input
            className="  py-[6px] md:py-[11px]  lg:py-[17px] px-[35px]  md:px-[45px] lg:px-[56px] w-[100%] border rounded-3xl border-[#E0E3EB]"
            placeholder="Surat - Gujrat - India"
            type="text"
            disabled
          />
{/* 
          <button
            className="absolute  py-2 md:py-2.5  lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between   rounded-3xl flex items-center  gap-3  md:gap-4 lg:gap-5 text-white  text-[8px]  md:text-[12px] lg:text-[16px] font-[450]  md:font-[550]  lg:font-[600] right-[4px]  top-[4px] md:top-[5px] lg:top-[6px] bg-[#10B981]"
            type="button"
          > */}
            {/* <span>Search</span> */}
            {/* <img className="" src="/assets/img/right-arrow.svg" /> */}
          {/* </button> */}
        </div>
        {/* from-[#83e7f0] */}

        <div className="flex flex-col mt-10 space-y-4 md:flex-row md:space-x-4 items-center  bg-gradient-to-br
        from-[#fafefe]
          via-white to-[#a8eee1]
         p-4 rounded-md shadow-md">

<div className="md:ml-4">
  <p className="text-lg md:text-xl lg:text-2xl text-[#1B1C57] font-semibold">
     Experience
  </p>
  <div className="text-gray-400 font-medium space-y-2 mt-4">
    <div className="flex items-center">
      <a href="https://www.smarttechnica.com/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/exp/smart.png" alt="Company 1" className="w-28 h-auto mr-2" />
      </a>
      <span className="text-sm md:text-base">2021-2023</span>
    </div>
    <div className="flex items-center">
      <a href="https://vasundhara.io/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/exp/vasundhara.svg" alt="Company 2" className="w-28 h-auto mr-2" />
      </a>
      <span className="text-sm md:text-base">2023-2024</span>
    </div>
    {/* Add more company experience entries as needed */}
  </div>
</div>

</div>


        {/* <div className=" flex  flex-col  md:flex-row  gapx-x[12px]  md:gap-x-[22px]  lg:gap-x-[32px] items-center">
          <div className="flex gap-[12px]  md:gap-[15px]  lg:gap-[22px]   items-center">
          <img className="" src="/assets/img/airbnd.svg" />
            <img className="" src="/assets/img/tripadvisor.svg" />
          </div>
          <div className="flex gap-[12px]  md:gap-[15px]  lg:gap-[22px]  items-center">
            <img className="" src="/assets/img/airbnd.svg" />
            <img className="" src="/assets/img/tripadvisor.svg" />
          </div>
        </div> */}
      </div>

 <div className="relative hidden overflow-hidden md:block">
        <img src="/assets/img/main.png" />

      </div>
            <div className="relative    overflow-hidden block md:hidden w-32 h-32 md:w-40 md:h-40 rounded-3xl">
        <img
          src="/assets/img/main_rp.png"
          alt="Main Image"
          className="w-full h-full object-cover pt-5 "
        />
      </div>
    </div>
  );
};

export default Main;
