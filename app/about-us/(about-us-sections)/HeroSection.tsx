import React from "react";
import "../../../public/test.css";
import Image from "next/image";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import { RightArrow } from "@/app/(home-sections)/ServicesSection";
import Link from "next/link";
import { LogoForButtonRotated } from "@/app/services/[serviceId]/HeroSection";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      {/* Main heading section */}
      <div className="flex flex-col items-center gap-10">
        {/* Blur background */}
        <div className="w-56 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

        <p className="text-base md:text-xl 3xl:text-2xl text-center font-bold text-[#ffffff] uppercase pb-2 z-30">
          About us
        </p>

        <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl 3xl:text-[80px] leading-tight lg:leading-none  text-[#ffffff] font-medium text-center z-30">
          Building{" "}
          <span className="custom-text font-black">
            Your Online Identity Together{" "}
          </span>{" "}
          – Our Story
        </h1>
      </div>

      {/* Subheading */}
      <p className="text-xl font-light text-[#ffffff] text-center z-40 xs:px-4 sm:px-16 md:px-24 lg:px-32 xl:px-72 pt-2">
        We are a small team with big ambitions, dedicated to creating digital
        experiences that resonate with users and drive results. Every project to
        us is an opportunity to push boundaries and deliver exceptional value.
      </p>

      {/* CTA button */}
      <div className="relative w-full flex justify-center pt-4 md:pt-12 z-30">
        <Link href={`/contact`}>
          <button className="relative overflow-hidden w-fit flex items-center gap-2 py-3 sm:py-4 px-10 sm:px-12 3xl:py-5 3xl:px-16 text-[#000000] bg-[#ffffff]  rounded-full font-normal text-lg sm:text-2xl md:text-2xl 3xl:text-3xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
            <LogoForButtonRotated fillColor="#000000" width={18} height={20} />
            Start Your Project
          </button>
        </Link>
      </div>

      {/* Blur background effects */}
      <div className="md:w-48 md:h-48 absolute right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      <div className="md:w-48 md:h-48 absolute left-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
    </HeroSectionWrapper>
  );
}
