import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import '../../public/test.css'
import Image from "next/image";
import HeroImage from '../../public/images/home/undraw_collaborators_re_hont 1.svg'
import ArrowRight from '../../public/images/Rectangle 1.svg'

export default function HeroSection() {
    return (
        <SectionWrapper>
            <p className="text-sm md:text-md font-bold md:font-bold text-[#ffffff] uppercase pt-2">Success begins here</p>
            <h1 className="text-5xl text-[#ffffff] font-semibold text-start">
                Unlock your 
                <span className="custom-text font-black">
                    {" "}digital potential {" "}
                </span>
                with us
            </h1>
            <div className="w-full flex">
                <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
                    <Image src={ArrowRight} alt="hero_image"  />
                    Get started now
                </button>
            </div>
            <div className="bg-red-400 w-full h-full">
                <Image src={HeroImage} alt="hero_image" className="" />
            </div>
        </SectionWrapper>
    )
}