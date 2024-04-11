import logo from "./logo.svg";
import "./App.css";
import Navbar from "./compornant/Navbar";
import Hero from "./compornant/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./compornant/Footer";
import { RWebShare } from "react-web-share";

function App() {

  const shareText = `Check out my full-stack web developer portfolio! I create amazing web applications.`;
  const shareUrl = window.location.href;
  return (
    <>
    
<div className="overflow-x-hidden" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </Router>
         {/* Floating Share Button */}
      <div className="pointer-events-auto flex gap-2 floating-share-button rounded-3xl  bg-gradient-to-br
        from-[#50f1f1]
          via-white to-[#a8eee1] px-3 text-black py-2 ">
          <RWebShare
          data={{
          text: shareText,
              url: shareUrl,
              title: "My Portfolio",
        }}
       onClick={() => console.log("shared successfully!")}>
        <button className="">
          Share
        </button>
        </RWebShare>
        <img src="/assets/img/icons8-share.svg" alt="Share" className="share-icon" />
      </div>
</div>      
    </>
  );
}

export default App;
