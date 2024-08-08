import React from "react";
import "../../public/test.css";
import Image from "next/image";
import HeroImage from "../../public/images/home/undraw_collaborators_re_hont 1.svg";
import ArrowRight from "../../public/images/Rectangle 1.svg";
import HeroSectionWrapper from "../components/HeroSectionWrapper";
import { LogoForButton } from "../services/[serviceId]/HeroSection";
import Link from "next/link";
import { Logo } from "../services/[serviceId]/StepsSection";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <p className="text-xs text-center md:text-xl font-bold md:font-bold text-[#ffffff] uppercase pt-24 z-30">
        Success begins here
      </p>
      <h1 className="text-7xl text-[#ffffff] font-medium text-center z-30">
        Your caring
        <span className="custom-text font-black"> Design Partner </span>
        that provides experienced Product Designers
      </h1>

      {/* Services */}
      <ul className="relative w-full flex items-center justify-center gap-6 z-30">
        <li className="w-fit bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
          <span>&#x2022;</span>
          <span>Digital Marketing</span>
        </li>
        <li className="w-fit bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
          <span>&#x2022;</span>
          <span>Web Development</span>
        </li>
        <li className="w-fit bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
          <span>&#x2022;</span>
          <span>Digital Design</span>
        </li>
      </ul>

      {/* CTA button */}
      <div className="relative w-full flex justify-center pt-8 z-30">
        <Link href={`/contact`}>
          <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#57b7fc] to-[#27A5FF] rounded-full text-4xl">
            <LogoForButton fillColor="#ffffff" width={18} height={20} />
            Start building
          </button>
        </Link>
      </div>

      {/* Logo Behind */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <Logo width={500} height={500} />
      </div>

      {/* Blur background */}
      {/* <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div> */}
    </HeroSectionWrapper>
  );
}
