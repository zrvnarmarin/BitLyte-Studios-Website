import React from "react";
import HeroSectionWrapper from '../../components/HeroSectionWrapper'
import '../../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/services/undraw_services_re_hu5n 1.svg'
import { LogoForButton } from "../[serviceId]/HeroSection";

export default function HeroSection() {
    return (
        <HeroSectionWrapper>
            <h1 className="text-5xl text-[#ffffff] font-semibold text-start">
                Our
                <span className="linear-gradient-purple-text font-black">
                    {" "}Services {" "}
                </span>
                tailored just for your needs
            </h1>
            <p className="text-base text-[#eeeeee] font-normal pt-2">
                We create unique and higly converting digital experiences, from websites to e-commerce shops 
            </p>
            <div className="bg-red-400 w-full h-full">
                <Image src={HeroImage} alt="hero_image" className="" />
            </div>
            <div className="w-full flex">
                <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#7f96db] rounded-full text-xl">
                    <LogoForButton fillColor="#ffffff" />
                    Start building
                </button>
            </div>
        </HeroSectionWrapper>
    )
}