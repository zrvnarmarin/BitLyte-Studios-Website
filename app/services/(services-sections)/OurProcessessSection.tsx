import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

export default function OurProcessessSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Our Proccess
      </h2>

      {/* Process steps cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4 sm:pt-8 md:pt-12 z-40">
        {processesSteps.map((step) => (
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
}: ProcessessStepType) => {
  return (
    <div
      key={id}
      className={`relative overflow-hidden flex-1 px-5 py-10 rounded-lg border-[0.5px] border-[#0a2030]`}
    >
      {/* Blur background */}
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>

      <div className="w-full flex flex-col xs:flex-row items-center justify-start lg:justify-center z-20">
        <span className="custom-text font-black text-7xl z-0 mr-4">{id}</span>
        <span className="text-[#ffffff] font-semibold text-3xl text-center md:text-start x z-20">
          {title}
        </span>
      </div>

      <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center xs:text-start lg:text-center xl:text-start pt-6 z-20">
        {description}
      </p>
    </div>
  );
};

const processesSteps: ProcessessStepType[] = [
  {
    id: 1,
    title: "Discovery & Strategy",
    description: `We start by learning about your goals and target audience through meetings and research to shape the right approach.`,
  },
  {
    id: 2,
    title: "Design & Planning",
    description: `Using our insights, we create tailored strategies and designs that showcase your brand and effectively engage your audience.`,
  },
  {
    id: 3,
    title: "Development & Testing",
    description: `We bring the plan to life by developing high-quality, functional digital solutions that align with both user and business needs.`,
  },
  {
    id: 4,
    title: "Delivery & Launching",
    description: `After launching, we provide continuous support and track results, refining where necessary to ensure long-term success.`,
  },
];

export type ProcessessStepType = {
  id: number;
  title: string;
  description: string;
};
