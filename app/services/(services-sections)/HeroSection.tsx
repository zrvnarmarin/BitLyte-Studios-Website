import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/services/undraw_services_re_hu5n 1.svg'

export default function HeroSection() {
    return (
        <SectionWrapper>
            <p className="text-lg font-bold text-black uppercase">Our Services</p>
            <h1 className="text-5xl text-primary-brown font-semibold">
                Our
                <span className="linear-gradient-purple-text font-black">
                    {" "}Services {" "}
                </span>
                tailored just for your needs
            </h1>
            <p className="text-base text-primary-brown font-normal pt-4">
                We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.
            </p>
            <div className="bg-red-400 w-full h-full">
                <Image src={HeroImage} alt="hero_image" className="" />
            </div>
        </SectionWrapper>
    )
}