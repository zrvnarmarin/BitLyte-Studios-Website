import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Image from "next/image";
import ArrowRight from "../../public/images/Rectangle 1.svg";
import TestimonialExampleImage from "../../public/images/home/TestimonialImage.svg";
import ButtonNext from "../../public/images/home/ButtonNextTestimonials.svg";

export default function TestimonialsSection({
  headingColor,
  buttonColor,
  nextButtonColor,
  isCTAButtonVisible = false,
}: TestimonialsSectionProps) {
  return (
    <SectionWrapper>
      <h1 className="w-full text-start text-3xl text-[#ffffff]">
        Our clients can
        <span className={`${headingColor}`}> trust us </span>
        in every step
      </h1>

      {/* Testimonial cards container */}
      <div className="relative w-full lg:w-4/5 group flex flex-col justify-center items-center gap-8 border-[0.5px] border-[#252525] rounded-lg p-5 overflow-hidden">
      <div className="w-full h-full absolute bottom-0 right-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[430px]"></div>
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            id={testimonial.id}
            name={testimonial.name}
            companyName={testimonial.companyName}
            testimonialText={testimonial.testimonialText}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="w-flex flex items-center justify-center">
        <div className="w-fit flex items-center justify-center gap-2 rounded-full px-6 py-2 bg-[#2a2c2f]">
          {/* <button>
                        <Image src={ButtonNext} alt="next-button-testimonials" className="rotate-180" />
                    </button> */}
          {/* Next button */}
          {/* <button>
                        <Image src={ButtonNext} alt="next-button-testimonials" />
                    </button> */}
          <div className={`h-2 w-2 rounded-full  ${nextButtonColor}`}></div>
          <div className={`h-2 w-2 rounded-full  ${nextButtonColor}`}></div>
          <div className={`h-2 w-2 rounded-full  ${nextButtonColor}`}></div>
        </div>
      </div>

      {/* Link to all reviews route */}
      {isCTAButtonVisible ? (
        <div className="w-full flex">
          <button
            className={`flex items-center gap-2 py-2 px-6 text-[#ffffff] ${buttonColor}  rounded-full text-xl`}
          >
            <Image src={ArrowRight} alt="hero_image" />
            View all rewievs
          </button>
        </div>
      ) : null}
    </SectionWrapper>
  );
}

export const TestimonialCard = ({
  name,
  companyName,
  testimonialText,
  imageSrc,
}: TestimonialCardProps) => {
  return (
    <div className="overflow-hidden relative flex items-center justify-center">
      
      <div className="z-20">
        <p className="text-base text-[#eeeeee] font-normal">
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
};

export const testimonials = [
  {
    id: 1,
    name: "Nick Forest",
    companyName: "CEO Of WordPress",
    testimonialText:
      "I worked with Igor for 2 projects already, and he has been such an amazing designer and developer specialized in Webflow. He is always fast and attentive. Not only did he excel at implementing all the desired changes, he was also efficient in his communication when it came to best practices and design/development recommendations. He is my to-go person for anything Webflow related, and he is someone you can truly trust to deliver high quality work. I highly recommend hiring him if you are looking to get any Webflow work done! ",
    imageSrc: TestimonialExampleImage,
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

export type TestimonialsSectionProps = {
  headingColor: string;
  ratingStarColor?: string;
  buttonColor: string;
  nextButtonColor: string;
  isCTAButtonVisible: boolean;
};
