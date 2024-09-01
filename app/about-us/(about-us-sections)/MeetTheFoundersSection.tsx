import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import { HighBrandAwareness } from "@/app/services/[serviceId]/SimilarServicesSection";
import Link from "next/link";
import { RightArrow } from "@/app/(home-sections)/ServicesSection";

export default function MeetTheFoundersSection() {
  return (
    <SectionWrapper>
      {/* <h2 className="w-full text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
        Get to know us a little better
      </h2> */}
      <div className="overflow-hidden relative w-full text-center text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium xs:font-normal px-4 py-6 md:px-10 sm:px-8 sm:py-10 md:py-14 lg:px-6 lg:py-10 xl:px-12 xl:py-12 z-20">
        At the heart of our approach is a commitment to personalized service. We
        believe that every project is unique, and so is every client. That`s why
        we take the time to get to know you, your business, and your
        aspirations. Whether you`re a startup looking to make your mark, a small
        business aiming to expand your reach, or somewhere in between, we`re
        here to support you every step of the way.
        {/* Gradients */}
        {/* <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div> */}
        {/* <div className="w-64 h-64 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div> */}
        {/* Mission and vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {valueCardData.map((value) => (
            <ValueCard
              key={value.id}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

      <h2 className="w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium xs:font-normal z-20">Our Values</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4 sm:pt-8 md:pt-12">
        <OtherServiceCard CTAText="Design your high converting landing page" />

        <Link href={`/services/visual-identity`} className="flex flex-col items-center justify-between row-span-2 gap-6 relative overflow-hidden bg-gradient-to-r from-[#7f96db] to-[#5775D0] text-[#ffffff] px-5 py-10 px-8 rounded-lg">
          <h3 className="w-full text-[#ffffff] font-semibold text-3xl text-center z-20">
            Advance your brand visuals and conversion
          </h3>
          <div className="flex flex-col gap-6">
            <div className="hidden sm:flex items-center justify-center">
              <HighBrandAwareness />
            </div>
            <div className="w-full flex items-center justify-center">
              <button className="w-fit flex gap-4 items-center justify-center text-2xl text-[#ffffff] font-semibold z-20">
                Learn More
                <RightArrow width={25} height={25} />
              </button>
            </div>
          </div>
        </Link>

        <OtherServiceCard CTAText="Growth" />
        <OtherServiceCard CTAText="Elevate your brand with gradphic ilustrations" />
        <OtherServiceCard CTAText="Change your brand awareness and get more recognition" />
        
      </div>
      </div>
    </SectionWrapper>
  );
}

export const ValueCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div
      className={`relative overflow-hidden flex-1 px-10 py-10 cursor-pointer rounded-lg border-[0.5px] border-[#252525]`}
    >
      {/* Blur background */}
      <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

      <div className="w-full flex items-center justify-start z-20">
        <span className="text-sm sm:text-base md:text-xl text-center font-bold text-[#ffffff] uppercase z-30">
          {title}
        </span>
      </div>

      <p className="text-xl font-light text-[#ffffff] text-start pt-6 z-20">
        {description}
      </p>
    </div>
  );
};

export const valueCardData = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.",
  },
];

export const OtherServiceCard = ({ CTAText } : { CTAText: string }) => {
    return (
      <Link href={`/services/visual-identity`} className="flex flex-col gap-8 relative overflow-hidden text-[#ffffff] px-5 py-10 rounded-lg border-[0.5px] border-[#252525]">
        <h3 className="w-full text-[#ffffff] font-semibold text-2xl xs:text-3xl text-center z-20">
          {CTAText}
        </h3>
        <div className="w-full flex items-center justify-center">
          <button className="w-fit flex gap-4 items-center justify-center text-[#cccccc] font-medium text-xl xs:text-2xl z-20">
            Learn More
            <span><RightArrow width={25} height={25} color="#dddddd" /></span>
          </button>
        </div>
        {/* Blur background */}
      <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
      </Link>
    );
  };