import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

// image enchancer: https://letsenhance.io/boost for team images i ovaj:https://pixlr.com/express/

export default function IntroSection() {
  return (
    <SectionWrapper>
      <div className="w-48 h-48 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className="w-48 h-24 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className=" px-5 py-12 sm:px-16 sm:py-20 relative overflow-hidden flex items-center justify-center border-[#1d263f] rounded-lg border-[0.5px]">
        {/* Blur gradients */}
        <div className="w-48 h-48 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="w-48 h-48 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

        <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        <p className="text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] text-center xs:font-normal z-20 px-24">
          Fueled by creativity, technology, and an obsession with results,
          <span className="custom-text"> we bring your vision to life </span> in
          ways that make your brand unforgettable. We’re not just creating
          websites, <span className="custom-text">we’re crafting</span> the
          future of <span className="custom-text">your digital presence</span>.
        </p>
      </div>
    </SectionWrapper>
  );
}

{
  /* <div className="w-64 h-64 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      <p className="text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] text-center xs:font-normal z-20 px-24">
        Fueled by creativity, technology, and an obsession with results, 
        <span className="custom-text"> we bring your vision to life </span> in ways
        that make your brand unforgettable. We’re not just creating websites,{" "}
        <span className="custom-text">we’re crafting</span> the future of{" "}
        <span className="custom-text">your digital presence</span>.
      </p> */
}
