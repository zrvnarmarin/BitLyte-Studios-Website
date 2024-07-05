import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
import HeroImage from '../../../public/images/contact/contac_heroSection.svg'
import ArrowRight from '../../../public/images/Rectangle 1.svg'

export default function HeroSection() {
    return (
        <SectionWrapper>
            <p className="text-lg font-bold text-black uppercase">Digital Agency</p>
            <h1 className="text-5xl text-primary-brown font-semibold">
                <span className="custom-text font-black">
                    We create {" "}
                </span>
                simple and effective Marketing & Web solutions
            </h1>
            <div className="w-full flex">
                <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
                    <Image src={ArrowRight} alt="hero_image"  />
                    Get in touch
                </button>
            </div>
            <div className="bg-red-400 w-full h-full">
                <Image src={HeroImage} alt="hero_image" className="" />
            </div>
        </SectionWrapper>
    )
}