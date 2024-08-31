import React from "react";
import "../../../public/test.css";
import Image from "next/image";
import HeroImage from "../../../public/images/agency-image.png";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <div className="flex flex-col items-center gap-10">
        <p className="text-sm sm:text-base md:text-xl text-center font-bold text-[#ffffff] uppercase z-30">
          About us
        </p>

        <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-none  text-[#ffffff] font-medium text-center z-30">
          Shape
          <span className="custom-text font-black"> Your Future </span>
          And Build Your Dreams
          <span className="custom-text font-black"> Together </span>
        </h1>
      </div>
      <div className="bg-red-400 w-full h-full flex items-center justify-center pt-4 sm:pt-8 md:pt-12">
        <Image src={HeroImage} alt="hero_image" className="rounded-lg" />
      </div>
    </HeroSectionWrapper>
  );
}
