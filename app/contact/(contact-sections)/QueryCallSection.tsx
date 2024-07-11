import React from "react";
import Image from "next/image";
import '../../../public/test.css'
import SectionWrapper from "@/app/components/SectionWrapper";
import ArrowRight from '../../../public/images/Rectangle 1.svg'
import { UniqueSellingPointIconOne } from "@/app/(home-sections)/ServicesSection";

export default function QueryCallSection() {
    return (
        <SectionWrapper>
            <p className="text-xl text-[#eeeeee] font-normal">
                If you cherish more <span className="text-[#1A9FFF]">eye-to-eye connection </span>or have any additional questions,
                <span className="text-[#1A9FFF]">{" "}schedule a consultation call</span> with us.
            </p>
            
            <div className="px-4 py-8 rounded-lg bg-gradient-to-r from-[#292929] to-[#003e6a]">
                <h2 className="text-4xl text-[#ffffff] text-center">
                    Let`s begin
                    <p className="custom-text font-black">your project</p>
                </h2>
                <div className="w-full flex justify-center pt-8">
                    <button className="w-full flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
                        <Image src={ArrowRight} alt="hero_image"  />
                        Schedule a call
                    </button>
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
