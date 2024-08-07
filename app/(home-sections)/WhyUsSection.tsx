import React from "react";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";
import { IncomeGrowth } from "../services/[serviceId]/BenefitsSection";
import { UniqueSellingPointIconThree } from "./ServicesSection";

export default function WhyUsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20">Why Choose Us</h2>
      <div className="relative flex items-center justify-between gap-6 rounded-lg p-12 ">

        {/* Blur background */}
        <div className="w-64 h-64 absolute inset-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div>

        {/* Card container */}
        {whyUsData.map((reason) => (
          <div
            key={reason.id}
            className="overflow-hidden relative flex flex-col gap-2 rounded-lg p-4 py-8 border-[0.5px] border-[#252525] z-20"
          >
            
            {/* Reason Card */}
            <div className="relative flex flex-col items-center justify-center gap-2 z-20">
              {/* Blur background */}
              <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[830px]"></div>
              <div className="flex items-center ">
                <UniqueSellingPointIconThree />
              </div>
              <h3 className="w-full text-[#ffffff] font-semibold text-3xl text-center z-20">
                {reason.title}
              </h3>
              <p className="text-base text-[#eeeeee] font-normal pt-4 text-center z-20">
                {reason.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export const whyUsData = [
  {
    id: 1,
    title: "Rapid Achievements",
    description: "We are among one of the fastest achieving agencies",
    icon: IncomeGrowth,
  },
  {
    id: 2,
    title: "High-Order Solutions",
    description: "We provide cutting-edge solutions for your needs",
    icon: IncomeGrowth,
  },
  {
    id: 3,
    title: "Customer-First Oriented",
    description: "Our approach is tailored to meet your specific needs",
    icon: IncomeGrowth,
  },
  {
    id: 4,
    title: "Higly Knowing Team",
    description: "Our team consists of highly skilled professionals",
    icon: IncomeGrowth,
  },
];
