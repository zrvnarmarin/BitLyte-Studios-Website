import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/services/undraw_social_networking_re_i1ex 1.svg'
import BackButtonIcon from '../../../public/images/services/BackButton.svg'
import ArrowRight from '../../../public/images/home/ArrowRight.svg'

export default function HeroSection({ serviceName } : { serviceName: string }) {
    return (
        <SectionWrapper>
            <div className="w-full flex pt-24">
                <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#2a5371] to-[#0083E0]  rounded-full text-xl">
                    <Image src={BackButtonIcon} alt="hero_image"  />
                    Back to services
                </button>
            </div>
            <p className="text-md font-bold text-black uppercase">{serviceName}</p>
            <h1 className="text-5xl text-primary-brown font-semibold">
                Our {" "}
                <span className="custom-text font-black">
                    Services {" "}
                </span>
                tailored just for your needs
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