import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import '../../../public/test.css'
import Link from "next/link";
import { LogoForButton } from "../[serviceId]/HeroSection";

export default function CTASection() {
  return (
    <SectionWrapper>
      <div className="relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#292929] to-[#090909] border-[#232323] border-[0.5px] rounded-lg ">
        {/* Blur background */}
        <div className="w-full h-full absolute right-0 bottom-0 bg-gradient-to-r from-[#3b4d81] to-[#131313] z-10 blur-[130px]"></div>

        <div className=" w-fit p-12 rounded-lg flex flex-col items-center justify-center gap-6">
          <h2 className="w-full text-6xl text-[#ffffff] text-center z-20">
            Want to create
            <p className="linear-gradient-purple-text font-black">amazing products</p> together?
          </h2>
          <div className="relative w-full flex justify-center pt-8 z-30">
        <Link href={`/contact`}>
          <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#7f96db] rounded-full text-4xl">
            <LogoForButton fillColor="#ffffff" width={18} height={20} />
            Start building
          </button>
        </Link>
      </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
