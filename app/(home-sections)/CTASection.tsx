"use client";

import React from "react";
import Image from "next/image";
import HeroImage from '../../public/images/contact/contac_heroSection.svg'
import SectionWrapper from "../components/SectionWrapper";
import '../../public/test.css'
import ArrowRight from '../../public/images/Rectangle 1.svg'

export default function CTASection() {

  return (
    <SectionWrapper>
        <div className="px-4 py-8 rounded-lg bg-gradient-to-r from-[#292929] to-[#003e6a]">
            <h2 className="text-4xl text-[#ffffff] text-center">
                Let`s start
                <p className="custom-text font-black">your project</p>
            </h2>
            <div className="w-full flex justify-center pt-8">
                <button className="w-full flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
                    <Image src={ArrowRight} alt="hero_image"  />
                    Get in touch
                </button>
            </div>
        </div>
    </SectionWrapper>
  );
}
