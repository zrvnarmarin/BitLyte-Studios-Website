import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import '../../public/test.css'
import Image from "next/image";
import HeroImage from '../../public/images/home/undraw_collaborators_re_hont 1.svg'
import ArrowRight from '../../public/images/Rectangle 1.svg'

export default function HeroSection() {
    return (
        <SectionWrapper>
            <p className="text-lg font-bold text-black uppercase">Digital Agency</p>
            <h1 className="text-4xl text-primary-brown">
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
            <Image src={HeroImage} alt="hero_image" width={400} height={400} />
        </SectionWrapper>
    )
}