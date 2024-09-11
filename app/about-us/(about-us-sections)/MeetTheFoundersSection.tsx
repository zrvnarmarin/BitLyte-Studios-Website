import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import { HighBrandAwareness } from "@/app/services/[serviceId]/SimilarServicesSection";
import Link from "next/link";
import { RightArrow } from "@/app/(home-sections)/ServicesSection";
import { HighlySkilledProffesional } from "@/app/(home-sections)/WhyUsSection";

export default function MeetTheFoundersSection() {
  return (
    <SectionWrapper>
      <div className="flex flex-col">
        {/* Mission and vision section*/}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4 sm:py-8 md:py-6">
          {valueCardData.map((value) => (
            <ValueCard
              key={value.id}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>

        <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium text-center xs:font-normal z-40 py-4 sm:py-8 md:py-6 px-36">
          We helped businesses increase sales by{" "}
          <span className="custom-text">27%</span>. Your product`s achievements
          is our success. Our design approach is result-driven and it`s crucial
          for us to make your product reach it`s business metrics.
          {/* Blur background */}
          <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        </h3>
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
    <div className="relative overflow-hidden flex flex-col items-center justify-center p-8 rounded-lg border-[0.5px] border-[#252525]">
      {/* <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div> */}
      <div className="w-full flex items-center justify-center">
        <HighlySkilledProffesional />
      </div>
      <h2 className="text-[#ffffff] text-3xl xs:text-4xl sm:text-5xl font-medium xs:font-normal mb-8">
        Our <span className="text-primary-blue font-black">{title}</span>
      </h2>
      <p className="text-center text-lg xs:text-xl font-light text-[#ffffff] z-20">
        Lorem ipsum dolor sit This is something which quite similary resembles
        to something else
      </p>
    </div>
  );
};

export const valueCardData = [
  {
    id: 1,
    title: "Mission",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.",
  },
  {
    id: 2,
    title: "Vision",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, dolorem.",
  },
];
