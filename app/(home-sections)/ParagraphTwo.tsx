import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";

// image enchancer: https://letsenhance.io/boost for team images i ovaj:https://pixlr.com/express/

export default function ParagraphTwo() {
  return (
    <SectionWrapper>
      <div className="w-24 h-36 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className="w-24 h-36 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className="px-5 sm:px-16 flex items-center justify-center bg-[#0b0b0b] border-[#1d263f]">
        {/* Blur gradients */}
        <div className="w-48 h-48 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="w-48 h-48 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

        <p className="text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] text-center xs:font-normal z-20 lg:px-24">
          Brands with{" "}
          <span className="custom-text">consistent visual presentation</span>{" "}
          across all platforms can increase revenue by{" "}
          <span className="custom-text">23%</span> and are{" "}
          <span className="custom-text">3x</span> more likely to be recognized
          by customers.
        </p>
      </div>
      {/* CTA button */}
      <div className="relative w-full flex justify-center pt-8 md:pt-12 z-30">
        <Link href={`/about-us`}>
          <button className="relative overflow-hidden w-fit flex items-center gap-2 py-3 sm:py-4 px-10 sm:px-12 3xl:py-5 3xl:px-16 text-[#000000] bg-[#ffffff]  rounded-full font-normal text-lg sm:text-2xl md:text-2xl 3xl:text-3xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
            <LogoForButtonRotated fillColor="#000000" width={18} height={20} />
            Find More About Us
          </button>
        </Link>
      </div>
    </SectionWrapper>
  );
}
