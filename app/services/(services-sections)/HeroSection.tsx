import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import { LogoForButtonRotated } from "../[serviceId]/HeroSection";
import HeroSectionImage from "../../../public/images/services/BitLyte_Studios_ikona_Services_Hero_section.svg";
import Link from "next/link";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 flex flex-col gap-6">
          {/* <div className="w-64 h-64 md:w-96 md:h-96 absolute left-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[230px]"></div> */}
          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl 3xl:text-[80px] leading-tight lg:leading-none  text-[#ffffff] font-medium text-center xs:text-center lg:text-start z-30">
            Transform
            <span className="custom-text font-black"> Your Vision </span>
            To Seamless Reality
          </h1>

          <p className="text-xl font-light text-[#ffffff] text-center xs:text-center lg:text-left z-20">
            As a web agency, we build digital products that meet both user needs
            and business goals. Our human-centered design approach ensures
            intuitive and effective results that boost your business.
          </p>

          {/* CTA button */}
          <div className="relative w-full flex justify-center xs:justify-center lg:justify-start pt-4 md:pt-8 z-30">
            <Link href={`/contact`}>
              <button className="relative overflow-hidden w-fit flex items-center gap-2 py-3 sm:py-4 px-10 sm:px-12 3xl:py-5 3xl:px-16 text-[#000000] bg-[#ffffff]  rounded-full font-medium text-lg sm:text-2xl md:text-2xl 3xl:text-3xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
                <LogoForButtonRotated
                  fillColor="#000000"
                  width={18}
                  height={20}
                />
                Start Crafting
              </button>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex items-center justify-center xs:justify-center">
          {/* Blur color effect behind the image */}
          <div className="w-64 h-64 lg:w-[18rem] lg:h-[18rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
          <Image
            src={HeroSectionImage}
            alt="t"
            className="w-full h-full max-w-[254px] xs:max-w-[274px] sm:max-w-[314px] lg:max-w-[444px] 2xl:max-w-[474px] z-20"
          />
        </div>
      </div>
      
      {/* Blur background effects */}
      <div className="w-56 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      <div className="md:w-48 md:h-48 absolute right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      <div className="md:w-48 md:h-48 absolute left-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
    </HeroSectionWrapper>
  );
}
