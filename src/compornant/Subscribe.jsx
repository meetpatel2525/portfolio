import React from "react";
const Subscribe = () => {
  const resumeUrl =  "../assets/resume/MEET_PATEL_CV.pdf"

  return (
    <div className="relative flex flex-col items-center justify-center my-[50px] md:my-[80px] lg:my-[120px] mx-[20px] md:mx-[30px] lg:mx-[50px] xl:mx-[80px]">
      <img className="w-full object-cover rounded-lg min-h-[312px]" src="/assets/img/bg_sub.svg" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <div className="flex flex-col text-center">
          <h1 className="text-[#1B1C57] xl:font-[700] lg:font-[600] md:font-[500] font-[400] text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] leading-[32px] md:leading-[38px] lg:leading-[42px] xl:leading-[48px]">
            Download  Resume For More Information
          </h1>
        </div>

        <div className="mt-[15px] md:mt-[20px] lg:mt-[26px] xl:mt-[31px] flex items-center justify-center gap-[8px] md:gap-[12px] lg:gap-[16px] relative">
          <a href={resumeUrl} download="your-resume.pdf">
            <button
              className="py-2 md:py-2.5 lg:py-3 px-[8px] md:px-[12px] lg:px-[16px] justify-between rounded-3xl flex items-center gap-3 md:gap-4 lg:gap-5 text-white text-[10px] md:text-[12px] lg:text-[14px] font-[450] md:font-[550] lg:font-[600] bg-[#10B981]"
              type="button"
            >
              <span>Download Now</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
