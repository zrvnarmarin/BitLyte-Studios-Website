import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

export default function ProblemAndSolution() {
  return (
    <SectionWrapper>
      <div className="relative grid grid-cols-1 md:grid-cols-2 items-center justify-between gap-6 rounded-lg pt-4 sm:pt-8 md:pt-12">
        
        <div className="flex flex-col bg-[#0b0c0c] px-4 rounded-lg">
          <div className="relative flex flex-row items-center justify-between gap-4 text-base text-[#eeeeee] font-normal text-start rounded-lg z-20">
            <div className="relative flex gap-2 items-center z-20 text-center">
              <span className="text-3xl xs:text-4xl md:text-3xl lg:text-4xl text-[#ffffff] text-start z-20">
                Problem
              </span>
              <div className="absolute -top-10 flex items-center justify-center z-10">
                {/* <Logo /> */}
              </div>
            </div>
            <div className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
          </div>
          <p className="text-xl font-light text-[#ffffff] text-start pt-6 z-40">
            Astra Capital is a forex platform providing instant cryptocurrency
            withdrawals, excellent trading conditions, and 24/7 live support. It
            is developed for traders of all levels to offer a trustworthy
            trading Web3 experience. 
          </p>
        </div>

        <div className="flex flex-col bg-[#fed702] px-4 py-8 rounded-lg border-[0.5px] border-[#ffffff">
          <div className="relative flex flex-row items-center justify-between gap-4 text-base text-[#eeeeee] font-normal text-start rounded-lg z-20">
            <div className="relative flex gap-2 items-center z-20 text-center">
              <span className="text-3xl xs:text-4xl md:text-3xl lg:text-4xl text-[#000000] text-start z-20">
                Solution
              </span>
              <div className="absolute -top-10 flex items-center justify-center z-10">
                {/* <Logo /> */}
              </div>
            </div>
            <div className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
          </div>
          <p className="text-xl font-light text-[#000000] text-start pt-6 z-40">
            Astra Capital is a forex platform providing instant cryptocurrency
            withdrawals, excellent trading conditions, and 24/7 live support. It
            is developed for traders of all levels to offer a trustworthy
            trading Web3 experience.
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}