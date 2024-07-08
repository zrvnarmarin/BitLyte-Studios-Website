import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import '../../public/test.css'
import Image from "next/image";
import HeroImage from '../../../public/images/services/undraw_social_networking_re_i1ex 1.svg'
import ArrowRight from '../../../public/images/Rectangle 1.svg'

export default function HeroSection({ params }: { params: { slug: string } }) {
    return (
        <SectionWrapper>
            <p className="text-md font-bold text-black uppercase pt-28">Social Media Management {params.slug}</p>
            <h1 className="text-5xl text-primary-brown font-semibold">
                <span className="custom-text font-black">
                    We create {" "}
                </span>
                simple and effective Marketing & Web solutions
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