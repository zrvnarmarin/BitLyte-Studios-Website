import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";

export default function CTASection() {
  return (
    <SectionWrapper>
      <div className="relative overflow-hidden flex items-center justify-center border-[#1d263f] border-[0.5px] rounded-lg ">
        {/* Blur gradients */}
        <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

        <div className=" w-fit px-5 py-12 sm:px-16 sm:py-20 rounded-lg flex flex-col items-center justify-center gap-6">
          <h2 className="w-full text-4xl leading-none text-center font-medium xs:font-light sm:text-6xl 3xl:text-7xl text-[#ffffff] z-20">
            Want to create
            <p className="custom-text font-black">amazing products</p> together?
          </h2>
          <div className="relative w-full flex justify-center pt-4 md:pt-12 z-30">
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
      </div>
    </SectionWrapper>
  );
}
