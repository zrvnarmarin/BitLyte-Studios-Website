import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'
import '../../../public/styles/pyramid.css'

export default function BenefitsSection() {
    return (
        <SectionWrapper>
            <p className="w-full text-center text-3xl text-[#ffffff]">
                <span className="linear-gradient-purple-text">
                    Your growth {" "}
                </span> 
                and success is the {" "}
                <span className="linear-gradient-purple-text">
                    most important thing to us
                </span>
            </p>
            <div className="relative w-full flex items-center justify-center bg-red-400 h-full pt-16">
                <div className="container">
                    <div className="cube">
                        <div className="face left text-2xl text-[#ffffff]">Trust</div>
                        <div className="face right text-2xl text-[#ffffff]">Support</div>
                        <div className="face front text-2xl text-[#ffffff]">Reliability</div>
                        <div className="face back text-2xl text-[#ffffff]">Consistency</div>
                    </div>
                </div>
            </div>
            <p className="text-base text-[#eeeeee] font-normal text-center pt-16">
                Our commitment to excellence and customer satisfaction sets us apart. We are making the products that puts your business
                as a leader on the market, with strongly communicating trust and integrity.
            </p>

        </SectionWrapper>
    )
}