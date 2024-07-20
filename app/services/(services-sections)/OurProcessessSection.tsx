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
            <div className="">
                <h2 className="text-3xl text-[#ffffff] pl-2">
                    <span className="linear-gradient-purple-text font-black">
                        {" "}  1. {" "}
                    </span>
                    Discovery
                </h2>
                <p className="text-base text-[#eeeeee] font-normal py-4 text-start p-5 my-6 rounded-lg bg-gradient-to-r from-[#292929] to-[#0b0b0b]">
                    Through in-depth research, market analysis, and collaborative discussions, 
                    we unearth key insights that serve as the foundation for our strategy.
                </p>
                <Image src={ProcessesSectionTestImage} alt="pyramid_image" />
            </div>

            {/* Buttons */}
            <div className="w-flex flex items-center justify-center">
                <div className="w-fit flex items-center justify-center gap-2 rounded-full px-6 py-2 bg-[#2a2c2f]">
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C17EF1] to-[#AF5AED]"></div>
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C17EF1] to-[#AF5AED]"></div>
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C17EF1] to-[#AF5AED]"></div>
                    <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#C17EF1] to-[#AF5AED]"></div>
                </div>
            </div>

            
        </SectionWrapper>
    )
}