import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";
import "../../public/test.css";
import TestimonialExampleImage from "../../public/Rectangle 1 (3).svg";

// Define the type for the testimonial card props
export type TestimonialCardProps = {
  id: number;
  name: string;
  companyName: string;
  testimonialText: string;
  // imageSrc: StaticImageData; 
  rating: number;
};

// Define the testimonials array with proper types
export const testimonials: TestimonialCardProps[] = [
  {
    id: 1,
    name: "Nickita Hrischev Forest",
    companyName: "CEO Of WordPress",
    testimonialText:
      "One of the standout features of web development is its intuitive and user-friendly interface. The platform is designed with the end user in mind, making it incredibly easy to navigate even for someone with minimal technical skills. The setup process was straightforward, and the step-by-step guides provided were both comprehensive and easy to follow.",
    // imageSrc: TestimonialExampleImage, 
    rating: 5,
  },
  // {
  //   id: 2,
  //   name: "John Doe",
  //   companyName: "CEO Of Apartmenify",
  //   testimonialText:
  //     "I was shockingly surprised by the delivery of BitLyte agency. They were super correct and did the job just perfectly!",
    
  //   rating: 5,
  // },
];

// Main TestimonialsSection component
export default function TestimonialsSection() {
  return (
    <SectionWrapper>
      <div className="flex items-center justify-between">
        <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
          What our clients say
        </h2>
      </div>

      <div className="flex items-center justify-between pt-4 sm:pt-8 md:pt-12">
        {/* Testimonial cards container */}
        <div className="relative w-full flex flex-col justify-center items-center gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.name}
              companyName={testimonial.companyName}
              testimonialText={testimonial.testimonialText}
              // imageSrc={testimonial.imageSrc} 
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#55b8ff]"></span>
        <span className="w-2 h-2 rounded-full bg-[#55b8ff]"></span>
        <span className="w-2 h-2 rounded-full bg-[#55b8ff]"></span>
        <span className="w-2 h-2 rounded-full bg-[#55b8ff]"></span>
        <span className="w-2 h-2 rounded-full bg-[#55b8ff]"></span>
        <span className="w-2 h-2 rounded-full bg-[#55b8ff]"></span>
      </div>
    </SectionWrapper>
  );
}

// TestimonialCard component definition
export const TestimonialCard = ({
  name,
  companyName,
  testimonialText,
  // imageSrc, 
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg flex flex-row items-center px-6 py-10 xs:px-8 xs:py-10 sm:px-20 sm:py-16 md:py-[72px] lg:py-20 border-[0.5px] border-[#0a2030]">
      {/* Blur background */}
      <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

      {/* Testimonial */}
      <div className="flex flex-col z-20">
        <div className="w-full flex items-center justify-center pb-6">
          <QuotesIcon />
        </div>
        <p className="w-full text-lg xs:text-xl font-light sm:text-2xl lg:text-3xl 3xl:text-4xl text-[#ffffff] leading-snug text-center z-20">
          {testimonialText}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-12 3xl:pt-14">
          <Image
            src={TestimonialExampleImage}
            // src={imageSrc} 
            alt="testimonial image"
            width={70}
            height={70}
          />
          <p className="flex flex-col items-center gap-0">
            <span className="w-full font-medium text-xl lg:text-xl 3xl:text-2xl text-center text-[#ffffff]">
              {name}
            </span>
            <span className="w-full text-center text-base 3xl:text-lg text-[#eeeeee] font-light ">
              {companyName}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// QuotesIcon component definition
export const QuotesIcon = ({ width = 64, height = 64 }) => (
  <svg
    fill="#ffffff"
    width={width}
    height={height}
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

// BlueArrowRight component definition
export const BlueArrowRight = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 22 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 33H4.56913L22 16.5L11.1605 4.10231e-07L6.44771 0L0 33Z"
        fill="#ffffff"
      />
    </svg>
  );
};
