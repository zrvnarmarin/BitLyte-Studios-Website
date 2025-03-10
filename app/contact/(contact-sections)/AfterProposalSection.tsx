import React from "react";
import "../../../public/test.css";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function AfterProposalSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[40px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Next steps
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 pt-4 sm:pt-8 md:pt-12">
      <div className="w-32 h-32 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        {afterProposalSteps.map((step) => (
          <ProcessStepCard
            key={step.id}
            id={step.id}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>

    </SectionWrapper>
  );
}

export const ProcessStepCard = ({
  id,
  title,
  description,
}: AfterProposalCardType) => {
  return (
    <div
      className={`relative overflow-hidden flex-1 px-10 py-10 rounded-lg bg-gradient-to-b from-[#0b0b0b] to-[#27a5ff2b] border-[0.5px] border-[#252525]`}
    >
      {/* Blur background */}

      <div className="w-full flex items-center justify-start z-20">
        <span className="custom-text font-black text-7xl z-0 mr-4">{id}</span>
        <span className="text-[#ffffff] font-semibold text-3xl z-20">
          {title}
        </span>
      </div>

      <p className="text-xl font-light text-[#ffffff] text-start pt-6 z-40">
        {description}
      </p>
    </div>
  );
};

const afterProposalSteps: AfterProposalCardType[] = [
  {
    id: 1,
    title: "Crafting A Proposal",
    description: `We’ll thoroughly review your goals and specific needs, then develop a customized plan to get you exactly where you want to be.`,
  },
  {
    id: 2,
    title: "Developing An Offer",
    description: `Our detailed project proposal will cover the complete project plan, timeline, expected results, and a breakdown of all costs.`,
  },
  {
    id: 3,
    title: "Initiating The Project",
    description: `With your approval, we will begin working on your project diligently and keeping you updated all along the way.`,
  },
];

export type AfterProposalCardType = {
  id: number;
  title: string;
  description: string;
};
