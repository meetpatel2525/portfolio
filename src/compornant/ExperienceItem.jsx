import React from "react";

const ExperienceItem = () => {
  return (
    <div className=" relative  my-[50px]   md:my-[80px]   lg:my-[120px]  mx-[20px]   md:mx-[30px]  lg:mx-[50px]  xl:mx-[80px]">

    <div className="flex flex-col mt-10 space-y-4 md:flex-row md:space-x-4 items-center bg-gradient-to-br from-[#83e7f0] via-white to-[#a8eee1] p-4 rounded-md shadow-md">

    <div className="md:ml-4">
      <p className="text-lg md:text-xl lg:text-2xl text-[#1B1C57] font-semibold">
         Experience
      </p>
      <div className="text-gray-400 font-medium space-y-2 mt-4">
        <div className="flex items-center">
          <img src="/assets/exp/smart.png" alt="Company 1" className="w-20 h-auto mr-2" />
          <span className="text-sm md:text-base">2021-2023 </span>
        </div>
        <div className="flex items-center">
          <img src="/assets/exp/vasundhara.svg" alt="Company 2" className="w-20 h-auto mr-2" />
          <span className="text-sm md:text-base"> 2023-2024</span>
        </div>
        {/* Add more company experience entries as needed */}
      </div>
    </div>
    </div>
    </div>
  );
};

export default ExperienceItem;
