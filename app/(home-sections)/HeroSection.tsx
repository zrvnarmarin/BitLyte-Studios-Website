import React from "react";
import "../../public/test.css";
import HeroSectionWrapper from "../components/HeroSectionWrapper";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";
import Link from "next/link";
import { Logo } from "../services/[serviceId]/StepsSection";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <p className="text-base md:text-xl 3xl:text-2xl text-center font-bold text-[#ffffff] uppercase pb-2 z-30">
        Success starts here
      </p>

      <h1 className="pt-4 text-[2.43rem] xs:text-5xl sm:text-6xl xl:text-7xl 3xl:text-[80px] leading-[2.6rem] lg:leading-none  text-[#ffffff] font-medium text-center z-30">
        Business focused
        <span className="custom-text font-black capitalize">
          {" "}
          web design
        </span>{" "}
        that solidifies your
        <span className="custom-text font-black capitalize"> Brand Image </span>
        and establishes{" "}
        <span className="custom-text font-black capitalize">
          {" "}
          constant revenue{" "}
        </span>
      </h1>

      <p className="md:hidden text-xl font-light text-[#ffffff] text-center z-40 xs:px-4 sm:px-16 md:px-24 lg:px-32 xl:px-72 pt-2">
        Building an online presence and trust with your customers
        is vital for growing the business. With our robust development and
        targeted design, your time is saved and workflows optimized.
      </p>

      {/* Services */}
      <ul className="hidden md:flex xs:flex-wrap relative w-full items-center justify-center z-30 gap-6 md:gap-0">
        <li className="w-fit bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-base 3xl:text-lg text-[#95d3ff] font-normal border-[0.5px] border-[#0a2030] z-20 rounded-full  px-4 py-2">
          <span>Web Development</span>
        </li>
        <span className="hidden md:block w-20 h-0.5 border-[0.5px] border-[#1a4869]"></span>
        <li className="w-fit bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-base 3xl:text-lg text-[#95d3ff] font-normal border-[0.5px] border-[#0a2030] z-20 rounded-full  px-4 py-2">
          <span>Digital Marketing</span>
        </li>
        <span className="hidden md:block w-20 h-0.5 border-[0.5px] border-[#1a4869]"></span>
        <li className="w-fit bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-base 3xl:text-lg text-[#95d3ff] font-normal border-[0.5px] border-[#0a2030] z-20 rounded-full  px-4 py-2">
          <span>Digital Design</span>
        </li>
      </ul>

      {/* CTA button */}
      <div className="relative w-full flex justify-center pt-8 md:pt-12 z-30">
        <Link href={`/contact`}>
          <button className="relative overflow-hidden w-fit flex items-center gap-2 py-3 sm:py-4 px-10 sm:px-12 3xl:py-5 3xl:px-16 text-[#000000] bg-[#ffffff]  rounded-full font-normal text-lg sm:text-2xl md:text-2xl 3xl:text-3xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
            <LogoForButtonRotated fillColor="#000000" width={18} height={20} />
            Get started
          </button>
        </Link>
      </div>

      {/* Logo Behind */}
      <div className="hidden absolute inset-0 md:flex items-center justify-center z-20 xs:pt-24 sm:pt-0 md:pt-0 lg:pt-8">
        <div className="hidden sm:block w-56 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[130px]"></div>
        <Logo width={500} height={500} />
      </div>

      {/* Blur background */}
      <div className="w-52 h-52 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
    </HeroSectionWrapper>
  );
}
