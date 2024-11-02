import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";

// image enchancer: https://letsenhance.io/boost for team images i ovaj:https://pixlr.com/express/

export default function ParagraphOne() {
  return (
    <SectionWrapper>
      {/* Blur gradients */}
      <div className="w-24 h-36 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className="w-24 h-36 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      
      <div className="px-5 sm:px-16 flex items-center justify-center bg-[#0b0b0b] border-[#1d263f] rounded-lg ">
        {/* Blur gradients */}
        <div className="lg:w-48 lg:h-48 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="lg:w-48 lg:h-48 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

        <p className="text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] text-center xs:font-normal z-20 lg:px-24">
          Did you know? <span className="custom-text">75% </span>of users judge
          a company’s credibility based on its website design - we make sure
          yours
          <span className="custom-text capitalize">
            {" "}
            leaves the right impression
          </span>{" "}
          and brings your business more{" "}
          <span className="custom-text capitalize">growth</span> and{" "}
          <span className="custom-text capitalize">revenue</span>.
        </p>
      </div>
    </SectionWrapper>
  );
}
