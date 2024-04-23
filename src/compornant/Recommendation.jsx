import React from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import { useRef, useEffect } from "react";
const Recommendation = () => {



  return (
    <div className={`pt-[30px] md:pt-[60px] lg:pt-[90px] pl-[20px] md:pl-[60px] lg:pl-[120px] `}>

      <div className="flex items-center">
        <p className="text-[#F59E0B] bg-[#F59E0B] mr-3 md:mr-4 lg:mr-5 h-[1px] w-[12px] md:w-[22px] lg:w-[32px]"></p>
        <h1 className="text-[#F59E0B] text-[10px]  md:text-[12px] lg:text-[14px] font-[400] md:font-[450] lg:font-[500] ">
          {" "}
          Work        </h1>
      </div>

      <div className=" pb-7 md:pb-10 lg:pb-14 px-[25px] md:px-[40px] lg:px-[55px] mr-[6px] md:mr-[8px] lg:mr-[10px] ">
        <div className="flex flex-col md:items-center md:flex-row  gap-x-[15px]  md:gap-x-[35px]   lg:gap-x-[65px]  xl:gap-x-[120px]  2xl:gap-x-[230px]  ">
          <h1 className="text-[#1B1C57] font-[600]  md:font-[650] lg:font-[700] text-[16px]  md:text-[26px] lg:text-[32px] ">
            Featured Projects
          </h1>
        </div>
      </div>
      <ScrollContainer
        className="scroll-container rounded-l-lg"
      >
        <div className={`flex w-full cursor-pointer py-[40px] pl-[25px] md:pl-[35px] lg:pl-[60px] mr-[5px] md:mr-[10px] gap-x-[30px] md:gap-x-[40px] lg:gap-x-[20px] text-[#0E1735]`}>


          <div className="relative min-w-[220px] md:min-w-[260px] lg:min-w-[400px] xl:min-w-[400px] bg-[rgb(242,241,241)] p-4 rounded-3xl	">
            <a href="https://www.clubmall.com/" target="_blank" rel="noopener noreferrer">
              <img className="rounded-xl border h-32 md:h-52 w-full border-[#1B1C57]" src="/assets/img/clubmall_1.png" />
              <div className="py-[15px] font-[500]">
                {/* <h1 className="text-[15px] md:text-[20px] rounded-full bg-[#1B1C57] p-2 text-white float-left">
                  Clubmall
                </h1> */}
                <ul>
                  <li className="text-sm mb-1">Clubmall</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Full Stack</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">MERN</span></li>
                  {/* <li className="text-sm mb-1">Link: <span className="text-xs"><a href="https://www.clubmall.com/" target="_blank">www.clubmall.com</a></span></li> */}
                </ul>
              </div>
            </a>
          </div>

          <div className="relative min-w-[220px] md:min-w-[260px] lg:min-w-[400px] xl:min-w-[400px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="https://sugarba.be/" target="_blank" rel="noopener noreferrer">
              <img className="rounded-xl border h-32 md:h-52 w-full border-[#1B1C57]" src="/assets/img/sugarba_1.png" />
              <div className="py-[12px] font-[500]">
                {/* <h1 className="text-[15px] md:text-[20px] rounded-full bg-[#1B1C57] p-2 text-white float-left">
                  Sugarba
                </h1> */}

                <ul>
                  <li className="text-sm mb-1">Sugarba</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Full Stack</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">MERN</span></li>
                  {/* <li className="text-sm mb-1">Link: <span className="text-xs"><a href="https://sugarba.be/" target="_blank">sugarba.be</a></span></li> */}
                </ul>
              </div>
            </a>
          </div>

          <div className="relative min-w-[220px] md:min-w-[260px] lg:min-w-[400px] xl:min-w-[400px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="https://www.unicorso.com/" target="_blank" rel="noopener noreferrer">

              <img className="rounded-xl border h-32 md:h-52 w-full border-[#1B1C57]" src="/assets/img/unicorso_1.png" />

              <div className="py-[12px] font-[500]">
                {/* <h1 className="text-[15px] md:text-[20px] rounded-full bg-[#1B1C57] p-2 text-white float-left">
                  {" "}
                  Unicorso
                </h1> */}

                <ul>
                  <li className="text-sm mb-1">Unicorso</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Frontend</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">ReactJs,Python</span></li>
                  {/* <li className="text-sm mb-1">Link: <span className="text-xs"><a href="https://www.unicorso.com" target="_blank">www.unicorso.com</a></span></li> */}
                </ul>
              </div>
            </a>


          </div>

          <div className="relative min-w-[220px] md:min-w-[260px] lg:min-w-[400px] xl:min-w-[400px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="https://play.google.com/store/apps/details?id=com.pgac0cdz2yd.pwxpecxgoapp" target="_blank" rel="noopener noreferrer">

              <img className="rounded-xl border h-32 md:h-52 w-full border-[#1B1C57]" src="/assets/img/plant_based_1.png" />

              <div className="py-[12px] font-[500]">
                {/* <h1 className="text-[15px] md:text-[20px] rounded-full bg-[#1B1C57] p-2 text-white float-left">
                  {" "}
                  The Plant-Based
                </h1> */}

                <ul>
                  <li className="text-sm mb-1">The Plant-Based </li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Backend</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">NodeJs,Flutter</span></li>
                  {/* <li className="text-sm mb-1">Link: <span className="text-xs"><a href="https://play.google.com/store/apps/details?id=com.pgac0cdz2yd.pwxpecxgoapp" target="_blank">Plant   Based</a></span></li> */}
                </ul>
              </div>
            </a>
          </div>


          <div className="relative min-w-[220px] md:min-w-[260px] lg:min-w-[400px] xl:min-w-[400px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="https://dizzbe.com/" target="_blank" rel="noopener noreferrer">

              <img className="rounded-xl border h-32 md:h-52 w-full border-[#1B1C57]" src="/assets/img/dizzbe_1.png" />

              <div className="py-[12px] font-[500]">
                {/* <h1 className="text-[15px] md:text-[20px] rounded-full bg-[#1B1C57] p-2 text-white float-left">
                  {" "}
                  Dizzbe
                </h1> */}

                <ul>
                  <li className="text-sm mb-1">Dizzbe</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Backend</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">NodeJS,ios</span></li>
                  {/* <li className="text-sm mb-1">Link: <span className="text-xs"><a href="https://dizzbe.com/" target="_blank">dizzbe.com</a></span></li> */}
                </ul>
              </div>
            </a>
          </div>





          <div className="relative min-w-[220px] md:min-w-[260px] lg:min-w-[400px] xl:min-w-[400px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="" target="_blank" rel="noopener noreferrer">

              <img className="rounded-xl border h-32 md:h-52 w-full border-[#1B1C57]" src="/assets/img/home_1.png" />

              <div className="py-[12px] font-[500]">
                {/* <h1 className="text-[15px] md:text-[20px] rounded-full bg-[#1B1C57] p-2 text-white float-left">
                  {" "}
                  Hounter              </h1> */}

                <ul>
                  <li className="text-sm mb-1">Hounter</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Frontend</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">ReactJs</span></li>
                  {/* <li className="text-sm mb-1">Link: <span className="text-xs"><a href="https://hounter.com/" target="_blank">hounter.com</a></span></li> */}
                </ul>
              </div>
            </a>
          </div>
{/* 
          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="https://www.clubmall.com/" target="_blank" rel="noopener noreferrer">

              <img className="rounded-xl border h-32 md:h-40 border-[#1B1C57]" src="/assets/img/clubmall_2.png" />

              <div className="py-[12px] font-[500]">
            

                <ul>
                  <li className="text-sm mb-1">Clubmall</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Full Stack</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">MERN</span></li>
                </ul>
              </div>

            </a>
          </div>

          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="https://sugarba.be/" target="_blank" rel="noopener noreferrer">
              <img className="rounded-xl border h-32 md:h-40 border-[#1B1C57]" src="/assets/img/sugarba_2.png" />
     

              <div className="py-[12px] font-[500]">
           
                <ul>
                  <li className="text-sm mb-1">Sugarba</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Full Stack</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">Mern</span></li>
                </ul>
              </div>

      
            </a>
          </div>

          <div className="relative min-w-[220px]  md:min-w-[260px] lg:min-w-[300px] xl:min-w-[340px] bg-[rgb(242,241,241)] p-4 rounded-3xl">
            <a href="https://www.clubmall.com/" target="_blank" rel="noopener noreferrer">

              <img className="rounded-xl border h-32 md:h-40 border-[#1B1C57]" src="/assets/img/clubmall_3.png" />

              <div className="py-[12px] font-[500]">
            
                <ul>
                  <li className="text-sm mb-1">Clubmall</li>
                  <li className="text-sm mb-1">Role: <span className="text-xs">Full Stack</span></li>
                  <li className="text-sm mb-1">Technology: <span className="text-xs">Mern</span></li>
                </ul>

              </div>

            </a>
          </div> */}

        </div>
      </ScrollContainer>
    </div>
  );
};

export default Recommendation;
