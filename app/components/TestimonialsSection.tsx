import React from "react";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
// import "../../public/test.css";
import TestimonialExampleImage from "../../public/Untitled design (2) (1).png";
import InfiniteCarousel from "./InfiniteCarousel";
import { TestimonialCardProps } from "./InfiniteCarousel";
import '../../public/test.css'

export default function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
          What our clients say
        </h2>
      </div>
      <InfiniteCarousel />
    </SectionWrapper>
  );
}

export const TestimonialCard = ({
  name,
  companyName,
  testimonialText,
  imageSrc
}: any) => {
  return (
    <div className="relative overflow-hidden bg-[#0b0b0b] rounded-lg flex flex-row items-center px-6 py-6 xs:px-8 xs:py-10 sm:px-20 sm:py-16 md:py-[72px] lg:py-20 border-[0.5px] border-[#0a2030]">
      {/* Blur background */}
      <div className="w-32 h-32 xs:hidden absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
      {/* Blur background */}
      <div className="hidden xs:block w-32 h-32 sm:w-96 sm:h-96 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className="hidden xs:block w-96 h-96 sm:w-96 sm:h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

      {/* Testimonial */}
      <div className="flex flex-col z-20">
        <div className="w-full flex items-center justify-start sm:justify-center pb-6">
          <QuotesIcon />
        </div>
        <p className="w-full text-xl font-light sm:text-2xl lg:text-3xl 3xl:text-4xl text-[#ffffff] leading-snug text-start sm:text-center z-20">
          {testimonialText}
        </p>
        <div className="flex flex-row sm:flex-row items-center xs:justify-start sm:justify-center gap-4 pt-10 3xl:pt-14">
          <Image
            src={imageSrc}
            // src={imageSrc} 
            alt="testimonial image"
            className="w-16 h-16 testimonial-image-shape"
            // width={70}
            // height={70}
          />
          <p className="flex flex-col items-center justify-start gap-1">
            <span className="w-full font-medium text-sm xs:text-base lg:text-xl 3xl:text-2xl text-start text-[#ffffff]">
              {name}
            </span>
            <span className="w-full text-start text-xs xs:text-sm 3xl:text-lg text-[#eeeeee] font-light ">
              {companyName}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export const QuotesIcon = () => (
  <svg
    fill="#ffffff"
    className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
    viewBox="0 0 123.961 123.961"
    style={{ transform: "scale(0.7)", transformOrigin: "center" }}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0" />
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <g id="SVGRepo_iconCarrier">
      <g>
        <path d="M49.8,29.032c3.1-1.3,4.4-5,3-8l-4.9-10.3c-1.4-2.899-4.8-4.2-7.8-2.899c-8.5,3.6-15.8,8.3-21.6,14 C11.4,28.532,6.6,36.232,4,44.732c-2.6,8.601-4,20.3-4,35.2v30.7c0,3.3,2.7,6,6,6h39.3c3.3,0,6-2.7,6-6v-39.3c0-3.301-2.7-6-6-6 H26.5c0.2-10.101,2.6-18.2,7-24.301C37.1,36.133,42.5,32.133,49.8,29.032z" />
        <path d="M120.4,29.032c3.1-1.3,4.399-5,3-8l-4.9-10.199c-1.4-2.9-4.8-4.2-7.8-2.9c-8.4,3.6-15.601,8.3-21.5,13.9 c-7.101,6.8-12,14.5-14.601,23c-2.6,8.399-3.899,20.1-3.899,35.1v30.7c0,3.3,2.7,6,6,6H116c3.3,0,6-2.7,6-6v-39.3 c0-3.301-2.7-6-6-6H97.1c0.2-10.101,2.601-18.2,7-24.301C107.7,36.133,113.1,32.133,120.4,29.032z" />
      </g>
    </g>
  </svg>
);

