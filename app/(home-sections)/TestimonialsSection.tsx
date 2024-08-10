import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Image from "next/image";
import ArrowRight from "../../public/images/Rectangle 1.svg";
import TestimonialExampleImage from "../../public/images/home/TestimonialImage.svg";
import ButtonNext from "../../public/images/home/ButtonNextTestimonials.svg";
import "../../public/styles/star.css";

export default function TestimonialsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20 pb-12">
        What our clients say
      </h2>

      {/* Testimonial cards container */}
      <div className="w-full flex flex-col gap-8 pt-8">
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

      {/* Buttons */}
      <div className="w-flex flex items-center justify-center">
        <div className="w-fit flex items-center justify-center gap-2 rounded-full px-6 py-2 bg-[#2a2c2f]">
          {/* Previous button */}
          {/* <button>
                        <Image src={ButtonNext} alt="next-button-testimonials" className="rotate-180" />
                    </button> */}
          {/* Next button */}
          {/* <button>
                        <Image src={ButtonNext} alt="next-button-testimonials" />
                    </button> */}
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]"></div>
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]"></div>
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]"></div>
        </div>
      </div>

      {/* Link to all reviews route */}
      <div className="w-full flex">
        <button className="flex items-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#59EE99] to-[#17DE6D]  rounded-full text-xl">
          <Image src={ArrowRight} alt="hero_image" />
          View all rewievs
        </button>
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
    <div className="relative overflow-hidden flex items-center border-[0.5px] border-[#252525] p-4">
      {/* Blur background */}
      <div className="w-full h-full absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[130px]"></div>
      
      <div className="z-20">
        <p className="text-base text-[#eeeeee] font-normal pt-4">
          {testimonialText}
        </p>
        <div className="flex items-center justify-start gap-2 pt-4">
          <Image src={imageSrc} alt="testimonial image" />
          <p className="flex flex-col items-center">
            <span className="w-full text-lg text-[#ffffff] font-semibold ">
              {name}
            </span>
            <span className="w-full text-xs text-[#eeeeee] font-normal ">
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