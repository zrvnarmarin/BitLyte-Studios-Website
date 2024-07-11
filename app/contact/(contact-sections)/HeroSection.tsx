import React from "react";
import Image from "next/image";
import HeroSectionWrapper from "@/app/components/HeroSectionWrapper";
import HeroImage from '../../../public/images/contact/contac_heroSection.svg'
import ArrowRight from '../../../public/images/Rectangle 1.svg'
import '../../../public/test.css'

export default function HeroSection() {
    return (
        <HeroSectionWrapper>
            <p className="text-xs md:text-md font-bold md:font-bold text-[#ffffff] uppercase pt-2">Contact us</p>
            <h1 className="text-5xl text-[#ffffff] font-semibold text-start">
                Ready to  
                <span className="custom-text font-black">
                    {" "} elevate {" "}
                </span>
                your web presence?
            </h1>
            {/* <div className="bg-red-400 w-full h-full">
                <Image src={HeroImage} alt="hero_image" className="" />
            </div> */}
        </HeroSectionWrapper>
    )
}