import React from "react";
import Image from "next/image";
import ToolkitPyramidTestImage from '../../../public/images/services/ServiceToolkitPyriamid.svg'
import ProcessesSectionTestImage from '../../../public/images/services/ProcessesSectionTestImage.svg'
import SectionWrapper from "../../components/SectionWrapper";
import '../../../public/test.css'

export default function OurProcessessSection() {
    return (
        <SectionWrapper>
            <p className="text-lg font-bold text-black uppercase">How we solve problems</p>
            <h1 className="text-5xl text-primary-brown font-semibold">
                Our
                <span className="linear-gradient-purple-text font-black">
                    {" "}Processess {" "}
                </span>
                for tackling problems
            </h1>
            <p className="text-base text-primary-brown font-normal pt-4">
                We help with web and mobile apps, marketing websites, landing pages and two-sided platforms.
            </p>
            <Image src={ToolkitPyramidTestImage} alt="pyramid_image" />
            <p className="text-base text-primary-brown font-normal pt-4">
                In our quest to bring your digital vision to life, we arm ourselves with an arsenal of cutting-edge tools and technologies. 
                Our approach to web development marries innovation with reliability, ensuring that your website isn`t just visually stunning 
                but also robust, scalable, and user-friendly. Here`s a glimpse into the tools that empower us to create digital magic:
            </p>
            <div>
                <h2 className="text-5xl text-primary-brown font-semibold">
                    <span className="linear-gradient-purple-text font-black">
                        {" "} 1. {" "}
                    </span>
                    Discovery
                </h2>
                <p className="text-base text-primary-brown font-normal pt-4">
                    Through in-depth research, market analysis, and collaborative discussions, 
                    we unearth key insights that serve as the foundation for our strategy. We listen 
                    attentively to your aspirations, challenges, and vision, ensuring every decision 
                    is rooted in a comprehensive understanding of your goals.
                </p>
                <Image src={ProcessesSectionTestImage} alt="pyramid_image" />
            </div>
        </SectionWrapper>
    )
}