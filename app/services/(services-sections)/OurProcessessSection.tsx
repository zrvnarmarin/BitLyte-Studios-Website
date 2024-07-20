import React from "react";
import Image from "next/image";
import ToolkitPyramidTestImage from '../../../public/images/services/ServiceToolkitPyriamid.svg'
import ProcessesSectionTestImage from '../../../public/images/services/ProcessesSectionTestImage.svg'
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'

export default function OurProcessessSection() {
    return (
        <SectionWrapper>
            {/* <p className="text-xs md:text-md font-bold md:font-bold text-[#ffffff] uppercase pt-2">How we tackle problems</p> */}
            <h1 className="w-full text-4xl text-[#ffffff]">
                Our
                <span className="linear-gradient-purple-text font-black">
                    {" "}Processess {" "}
                </span>
            </h1>
            <div className="flex flex-col gap-4 text-base text-[#eeeeee] font-normal py-8 text-start px-5 mt-4 mb-2 rounded-lg bg-gradient-to-r from-[#292929] to-[#0b0b0b]">
                <span className="text-3xl text-[#ffffff] pl-2">
                    <span className="linear-gradient-purple-text font-black">
                        {" "}  1. {" "}
                    </span>
                    Discovery
                </span>
                Through in-depth research, market analysis, and collaborative discussions, 
                we unearth key insights that serve as the foundation for our strategy.
            </div>
            <Image src={ProcessesSectionTestImage} alt="pyramid_image" />

            {/* Buttons */}
            <div className="w-flex flex items-center justify-center">
                <div className="w-fit flex items-center justify-center gap-2 rounded-full px-6 py-2 bg-[#2a2c2f]">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
                </div>
            </div>

            
        </SectionWrapper>
    )
}