import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
import '../../../public/test.css'
import ArrowRight from '../../../public/images/Rectangle 1.svg'

export default function CTASection() {

  return (
    <SectionWrapper>
        <div className="px-4 py-8 rounded-lg bg-gradient-to-r from-[#131313] to-[#3b4d81]">
            <h2 className="text-4xl text-[#ffffff] text-center">
                Let`s start
                <p className="linear-gradient-purple-text font-black">your project</p>
            </h2>
            <div className="w-full flex justify-center pt-8">
                <button className="w-full flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#7f96db] to-[#7f96db]  rounded-full text-xl">
                    <Image src={ArrowRight} alt="hero_image"  />
                    Get in touch
                </button>
            </div>
        </div>
    </SectionWrapper>
  );
}
