import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import HeroSectionWrapper from '../../components/HeroSectionWrapper'
import '../../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/services/undraw_services_re_hu5n 1.svg'

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
        </HeroSectionWrapper>
    )
}