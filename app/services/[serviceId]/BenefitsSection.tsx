"use client";

import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import "../../../public/test.css";
import { allServicesArray } from "./AllServicesData";
import { formatString } from "./HeroSection";

export default function BenefitsSection({
  serviceName,
}: {
  serviceName: string;
}) {
  const selectedService = allServicesArray.find(
    (service) => formatString(serviceName) === service.name
  );

  return (
    <SectionWrapper>
      <p className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal leading-none text-center z-20 py-2 sm:py-6 md:py-4 xl:px-36">
        Explore how {selectedService?.name}
        <span className="custom-text"> boosts conversions </span> and makes your{" "}
        <span className="custom-text"> product more impactful </span>
      </p>

      {/* Right side */}
      <div className="">
        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative pt-4 sm:pt-8 md:pt-12">
          {selectedService?.benefits.map((benefit) => (
            <BenefitCard key={benefit.id} benefit={benefit} />
          ))}
        </ul>
      </div>
    </SectionWrapper>
  );
}

export const BenefitCard = ({
  benefit,
}: {
  benefit?: {
    id: number;
    title: string;
    description: string;
    icon: () => JSX.Element;
  };
}) => {
  return (
    <li
      className={`overflow-hidden bg-[#0b0b0b] relative flex flex-col gap-4 rounded-lg p-5 border-[0.5px] border-[#0a2030]`}
    >
      {/* Blur background */}
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
      <div className="w-full flex justify-center">{benefit?.icon()}</div>

      <div className="flex flex-col items-center justify-center gap-1 z-20">
        <div className="w-full flex items-center gap-2">
          <h3 className="w-full text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight text-center z-20">
            {benefit?.title}
          </h3>
        </div>
        <p className="text-xl font-light text-[#ffffff] text-center pt-6 z-20">
          {benefit?.description}
        </p>
      </div>
    </li>
  );
};