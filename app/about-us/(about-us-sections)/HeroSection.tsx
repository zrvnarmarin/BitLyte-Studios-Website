import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/about-us/IgorImg.svg'
import HeroImageTwo from '../../../public/images/about-us/MarinImg.svg'


export default function HeroSection() {
    return (
        <SectionWrapper>
            <p className="text-lg font-bold text-black uppercase">Get to know us</p>
            <h1 className="text-5xl text-primary-brown font-semibold">
                About Us
            </h1>
            {/* <div className="w-full flex">
                <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
                    <Image src={ArrowRight} alt="hero_image"  />
                    Get in touch
                </button>
            </div> */}
            <div className="w-full flex flex-col gap-4 bg-red-400">
                <div className="flex items-center justify-start">
                    <Image src={HeroImage} alt="hero_image" className="text-end" />
                </div>
                <div className="flex items-center justify-end">
                    <Image src={HeroImageTwo} alt="hero_image" className="rotate-180" />
                </div>
            </div>
        </SectionWrapper>
    )
}