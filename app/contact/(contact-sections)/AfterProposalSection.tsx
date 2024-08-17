import React from "react";
import "../../../public/test.css";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function AfterProposalSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20">
        What are the next steps?
      </h2>

      <div className="grid grid-cols-3 gap-6 pt-12">
        {afterProposalSteps.map((step) => (
          <ProcessStepCard
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
      className={`relative overflow-hidden flex-1 px-10 py-10 cursor-pointer rounded-lg border-[0.5px] border-[#252525]`}
    >
      {/* Blur background */}
      <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#3B4EB5] to-[#222222] z-10 blur-[230px]"></div>

      <div className="w-full flex items-center justify-start z-20">
        <span className="linear-gradient-purple-text font-black text-7xl z-0 mr-4">
          {id}
        </span>
        <span className="text-[#ffffff] font-semibold text-3xl z-30">
          {title}
        </span>
      </div>

      <p className="text-xl font-light text-[#ffffff] text-start pt-6 z-30">
        {description}
      </p>
    </div>
  );
};

const afterProposalSteps: AfterProposalCardType[] = [
  {
    id: 1,
    title: "Crafting A Proposal",
    description: `From our detailed review, we'll create a tailored proposal detailing the project scope, timelines, and a transparent cost breakdown.`,
  },
  {
    id: 2,
    title: "Initiating The Project",
    description: `With your approval, we will begin working on your project diligently
          and keeping you updated all along the way.`,
  },
  {
    id: 3,
    title: "Crafting An Offer",
    description: `Time for finalizred screens infused with personality and life. We also create a UI kit to allow you tu easily build your future`,
  },
];

export type AfterProposalCardType = {
  id: number;
  title: string;
  description: string;
};
