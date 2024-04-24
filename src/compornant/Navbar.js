import React from "react";
import Drawerr from "./drawer/Drawer";
import MyDropdown from "./MyDropdown";

const Navbar = () => {
  return (

    <>
      <div className=" px-[20px]  w-full  md:px-[100px] lg:px-[120px]  absolute -z-20  pt-[30px]  md:pt-[40px]  lg:pt-[50px] ">
        <span className="myfilter"></span>
        <span className="myfilter2"></span>
        <span className="myfilter3"></span>
      </div>
      <div className="px-[20px] md:px-[60px] lg:px-[120px] w-full z-10 absolute pt-[30px] md:pt-[40px] lg:pt-[50px] flex justify-between">
        <div className="flex items-center gap-3">
          <img className="w-[10%]" src="/assets/img/svg.png" />
          
        {/* Bounce animation */}
        {/* <h1 className="font-[700] text-[16px] animate-bounce">MERN</h1> */}

{/* Pulse animation */}
<h1 className="font-[700] text-[16px] animate-pulse">MANMERN</h1>
</div>

        {/* <div className=" hidden  lg:flex  text-white gap-[24px] items-center justify-start font-[600] text-[14px]" >


        </div> */}

      </div>
    </>
  );
}; 
 
export  default Navbar;
