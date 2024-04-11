import React from "react";

const Footer = () => {
  return (
    <div className=" flex  flex-col md:flex-row justify-between my-[50px]  mx-[20px]  md:mx-[30px]  lg:mx-[50px]  xl:mx-[80px]">
      <div className="">
        <div className="flex items-center gap-3">
          <img className="w-[16%]" src="/assets/img/svg.svg" />
          <h1 className="font-[700] text-[16px] animate-pulse">MERN</h1>
        </div>
        <p className="text-[#626687] w-[320px] py-5 text-[14px] font-[400]">
          As a passionate full stack developer, I'm dedicated to crafting innovative digital solutions. My goal is to bridge the gap between imagination and technology by creating exceptional web experiences.
        </p>

        <div className="flex gap-3">
          <a href="https://www.facebook.com/profile.php?id=100053546712737" target="_blank" rel="noopener noreferrer">
            <img className="w-8" src="./assets/social/icons8-facebook.svg" alt="Facebook" />
          </a>
          <a href="https://github.com/meetpatel2525" target="_blank" rel="noopener noreferrer">
            <img className="w-8" src="./assets/social/icons8-github.svg" alt="Github" />
          </a>
          <a href="https://www.instagram.com/meet_patel_2525/" target="_blank" rel="noopener noreferrer">
            <img className="w-8" src="./assets/social/icons8-instagram.svg" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/meet-patel-21871b194/" target="_blank" rel="noopener noreferrer">
            <img className="w-8" src="/assets/social/icons8-linkedin.svg" alt="LinkedIn" />
          </a>
          <a href="https://twitter.com/MeetPat58782112?t=BT1D11BEa4aBxGAo2l1GkA&s=08" target="_blank" rel="noopener noreferrer">
            <img className="w-8" src="/assets/social/icons8-twitter.svg" alt="Twitter" />
          </a>
          <a href="https://wa.me/+919998801748" target="_blank" rel="noopener noreferrer">
            <img className="w-8" src="/assets/social/icons8-whatsapp.svg" alt="WhatsApp" />
          </a>
        </div>

      </div>
      <div class=" flex  flex-col  justify-between sm:flex-row  gap-5 xl:gap-14 lg:gap-10 md:gap-8  mt-8  md:mt-0">
        <div>
          <h2 className="mb-6 font-[600] text-[18px] text-[#0E1735] uppercase">
            Contact
          </h2>
          <ul className="text-[#8E8E8E] font-[400] text-[14px]">
            <li className="flex items-center gap-2 mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.5 3.37 1.41 4.84.95 1.54 2.2 2.86 3.16 4.4.47.75.81 1.45 1.17 2.26.26.55.47 1.5 1.26 1.5s1-.95 1.25-1.5c.37-.81.7-1.51 1.17-2.26.96-1.53 2.21-2.85 3.16-4.4C18.5 12.37 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9.75a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"></path></svg>
              <a href="mailto:meetjpatel521@gmail.com" className="hover:underline">
                394107 Amroli, Surat, Gujrat, India
              </a>
            </li>
            <li className="flex items-center gap-2 mb-3">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg>
              <a href="tel:+917990633653" className="hover:underline">
                (+91) 79906-33653
              </a>
            </li>

            <li className="flex items-center gap-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>

              <a href="mailto:meetjpatel521@gmail.com" className="hover:underline">
                meetjpatel521@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Footer;
