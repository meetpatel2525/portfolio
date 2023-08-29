import React from "react";
import Main from "./Main";
import Readytosell from "./Readytosell";
import Recommendation from "./Recommendation";
import Review from "./Review";
import Subscribe from "./Subscribe";
import Tiptrick from "./Tiptrick";
import PortfolioList from "./PortfolioList";
import SocialMediaContact from "./SocialMediaContact";

const Hero = () => {
  return (
    <>
      <Main />
      <Recommendation />
      <PortfolioList/>
      {/* <SocialMediaContact/> */}
      {/* <Readytosell /> */}
      {/* <Review /> */}
      {/* <Tiptrick/> */}
      <Subscribe/>
    </>
  );
};

export default Hero;
