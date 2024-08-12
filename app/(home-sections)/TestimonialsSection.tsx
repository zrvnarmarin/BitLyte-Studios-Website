import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Image from "next/image";
import ArrowRight from "../../public/images/Rectangle 1.svg";
import TestimonialExampleImage from "../../public/images/home/TestimonialImage.svg";
import ButtonNext from "../../public/images/home/ButtonNextTestimonials.svg";
import "../../public/styles/star.css";
import { LeftArrow, RightArrow } from "./ServicesSection";

export default function TestimonialsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20 pb-12">
        What our clients say
      </h2>
      <div className="flex items-center justify-between">
        <button className="relative overflow-hidden rounded-full p-4 border-[0.5px] border-[#252525]">
          {/* RightArrow with a higher z-index */}
          <div className="relative z-20">
            <LeftArrow />
          </div>
          {/* Blur background */}
          <div className="w-full h-full absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#002139] z-10 blur-[20px]"></div>
        </button>

        {/* Testimonial cards container */}
        <div className="relative w-full flex flex-col justify-center items-center gap-8 pt-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.name}
              companyName={testimonial.companyName}
              testimonialText={testimonial.testimonialText}
              imageSrc={testimonial.imageSrc}
              rating={testimonial.rating}
            />
          ))}
        </div>

        <button className="relative overflow-hidden rounded-full p-4 border-[0.5px] border-[#252525]">
          {/* RightArrow with a higher z-index */}
          <div className="relative z-20">
            <RightArrow />
          </div>
          {/* Blur background */}
          <div className="w-full h-full absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#002139] z-10 blur-[20px]"></div>
        </button>
      </div>

      {/* Buttons */}
      <div className="w-flex flex items-center justify-center">
        <div className="relative overflow-hidden w-fit flex items-center justify-center gap-2 rounded-full px-6 py-2 bg-[#252525]">
          {/* Blur background */}
          <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[130px]"></div>
          <div className="h-2 w-2 rounded-full bg-[#ffffff] z-20"></div>
          <div className="h-2 w-2 rounded-full bg-[#ffffff] z-20"></div>
          <div className="h-2 w-2 rounded-full bg-[#ffffff] z-20"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const TestimonialCard = ({
  name,
  companyName,
  testimonialText,
  imageSrc,
  rating,
}: TestimonialCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg flex flex-row items-center border-[0.5px] border-[#252525] p-4 w-2/3">
      {/* Blur background */}
      <div className="w-full h-full absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#002139] z-10 blur-[130px]"></div>

      {/* Testimonial */}
      <div className="flex flex-col z-20">
        <p className="text-base text-[#eeeeee] font-normal text-start py-4 pb-6 px-8 z-20">
          {testimonialText}
        </p>
        <div className="flex items-center justify-start gap-2 pt-2 px-8">
          <Image src={imageSrc} alt="testimonial image" />
          <p className="flex flex-col items-center">
            <span className="w-full text-xl text-[#eeeeee] font-bold">
              {name}
            </span>
            <span className="w-full text-base text-[#eeeeee] font-normal ">
              {companyName}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export type TestimonialCardProps = {
  id: number;
  name: string;
  companyName: string;
  testimonialText: string;
  imageSrc: string;
  rating: number;
};

export const testimonials = [
  {
    id: 1,
    name: "Nick Forest",
    companyName: "CEO Of WordPress",
    testimonialText:
      "One of the standout features of [Web Service Name] is its intuitive and user-friendly interface. The platform is designed with the end user in mind, making it incredibly easy to navigate even for someone with minimal technical skills. The setup process was straightforward, and the step-by-step guides provided were both comprehensive and easy to follow. Within no time, I was able to customize my site and integrate various features tailored to my business needs.",
    imageSrc: TestimonialExampleImage,
    rating: 5,
  },
  // {
  //     id: 2,
  //     name: 'John Doe',
  //     companyName: 'CEO Of Apartmenify',
  //     testimonialText: 'I was shockinlgy surprise by the delivery of BitLyte agency. They were super correct and did the job just perfectly!',
  //     imageSrc: TestimonialExampleImage,
  //     rating: 5
  // }
];
