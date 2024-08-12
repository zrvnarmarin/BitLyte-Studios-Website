import React from "react";
import Image from "next/image";
import '../../../public/test.css'
import SectionWrapper from "@/app/components/SectionWrapper";
import ArrowRight from '../../../public/images/Rectangle 1.svg'
import { UniqueSellingPointIconOne } from "@/app/(home-sections)/ServicesSection";
import Link from "next/link";
import { LogoForButton } from "@/app/services/[serviceId]/HeroSection";

export default function QueryCallSection() {
    return (
        <SectionWrapper>
            <p className="text-xl text-[#eeeeee] font-normal">
                If you cherish more <span className="text-[#1A9FFF]">eye-to-eye connection </span>or have any additional questions,
                <span className="text-[#1A9FFF]">{" "}schedule a consultation call</span> with us.
            </p>
            
      <div className="relative overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#292929] to-[#090909] border-[#0f3856] border-[0.5px] rounded-lg ">
        {/* Blur background */}
        <div className="w-full h-full absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[130px]"></div>

        <div className=" w-fit p-12 rounded-lg flex flex-col items-center justify-center gap-6">
          <h2 className="w-full text-6xl text-[#ffffff] text-center z-20">
            Want to create
            <p className="custom-text font-black">amazing products</p> together?
          </h2>
          <div className="relative w-full flex justify-center pt-8 z-30">
        <Link href={`/contact`}>
          <button className="w-fit flex items-center gap-2 py-4 px-12 text-[#ffffff] bg-gradient-to-r from-[#57b7fc] to-[#27A5FF] rounded-full text-4xl">
            <LogoForButton fillColor="#ffffff" width={18} height={20} />
            Start building
          </button>
        </Link>
      </div>
        </div>
      </div>
    </SectionWrapper>
    )
}



export const LogoIcon = () => {
    return (
        <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.783 35.1431H25.6279L44.1108 17.5716L32.6171 4.36873e-07L27.6199 0L20.783 35.1431Z" fill="#FF7A1A"/>
        </svg>
    )
  }
