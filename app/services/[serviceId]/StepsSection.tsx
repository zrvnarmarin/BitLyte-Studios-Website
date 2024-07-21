import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { FrontendDevelopmentIcon } from "./HeroSection";

export default function StepsSection() {

return (
  <SectionWrapper>
    <p className="w-full text-start text-4xl text-[#ffffff]">
      See all the steps
      <span className="linear-gradient-purple-text"> we take </span> to make your <span className="linear-gradient-purple-text"> project shine </span>
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {steps.map(step =>
        <div key={step.id} className="relative overflow-hidden flex flex-col gap-4 text-base bg-[#0b0b0b] text-[#eeeeee] font-normal py-8 text-start px-5 rounded-lg ">
          <span className="text-3xl text-[#ffffff] pl-2 z-20">
            <span className="linear-gradient-purple-text font-black">
              {" "}  {step.id}. {" "}
            </span>
            {step.title}
          </span>
          <div className={`w-24 h-24 absolute right-0 bottom-0 bg-gradient-to-r from-[#000000] ${step.blurBackground} z-10 blur-[100px]`}></div>
          <p className="text-base text-[#eeeeee] font-normal z-20">
            {step.description}
          </p>
        </div>
      )}
    </div>
</SectionWrapper>
)
}

export const steps: StepsCardType[] = [
  {
    id: 1,
    icon: FrontendDevelopmentIcon,
    title: 'Discovery',
    description: 'Discovery phase is when we discover your product and research the market',
    blurBackground: 'to-[#653ED0]'
  },
  {
    id: 2,
    icon: FrontendDevelopmentIcon,
    title: 'Planning',
    description: 'Planning phase is when we discover your product and research the market',
    blurBackground: 'to-[#653ED0]'
  },
  {
    id: 3,
    icon: FrontendDevelopmentIcon,
    title: 'Development',
    description: 'Development phase is when we discover your product and research the market',
    blurBackground: 'to-[#653ED0]'
  },
  {
    id: 4,
    icon: FrontendDevelopmentIcon,
    title: 'Testing',
    description: 'Testing phase is when we discover your product and research the market',
    blurBackground: 'to-[#653ED0]'
  },
]

export type StepsCardType = {
  id: number;
  icon: () => React.JSX.Element;
  title: string;
  description: string;
  blurBackground: string;
}