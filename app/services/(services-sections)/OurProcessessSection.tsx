import React from "react";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

export default function OurProcessessSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Our workflow
      </h2>

      {/* Process steps cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 pt-4 sm:pt-8 md:pt-12 z-40">
        {processesSteps.map((step) => (
          <ProcessStepCard
            key={step.id}
            id={step.id}
            title={step.title}
            description={step.description}
            steps={step.steps}
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
  steps,
}: ProcessessStepType) => {
  return (
    <div
      key={id}
      className={`relative overflow-hidden flex flex-col px-6 py-6 rounded-lg border-[0.5px] border-[#0a2030]`}
    >
      {/* Blur background */}
      <div className="w-32 h-32 absolute top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
      <div className="w-16 h-16 absolute bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>

      <div className="w-full flex flex-col items-start justify-start lg:justify-start gap-2 z-20">
        <span className="custom-text font-black text-7xl z-20">{id}.</span>
        <span className="text-[#ffffff] font-semibold text-3xl text-start md:text-start x z-20">
          {title}
        </span>
      </div>

      <p className="text-xl font-light text-[#ffffff] text-start pt-6 z-20">
        {description}
      </p>

      {/* <div className="mt-auto pt-6 border-t border-[#1A3050]/50">
        <ul className="flex flex-col gap-2">
          {steps.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <CircleCheckBigIcon />
              <span className="text-sm text-[#ffffff]">{feature}</span>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};

const processesSteps: ProcessessStepType[] = [
  {
    id: 1,
    title: "Discovery & Insight",
    description: `We start by learning about the processes of your business, gaining insight into your goals and target audience.`,
    steps: ["Frontend development", "Backend integration", "Quality assurance"],
  },
  {
    id: 2,
    title: "Planning & Strategy",
    description: `We create a strategic blueprint that aligns design, marketing, and technology to move your brand forward.`,
    steps: ["Frontend development", "Backend integration", "Quality assurance"],
  },
  {
    id: 3,
    title: "Tehnical Execution",
    description: `We bring the strategy to life through focused execution—whether that’s design, development, content creation, or campaign deployment.`,
    steps: ["Frontend development", "Backend integration", "Quality assurance"],
  },
  {
    id: 4,
    title: "Testing & Launching",
    description: `After launching, we provide and track results long-term success.`,
    steps: ["Frontend development", "Backend integration", "Quality assurance"],
  },
];

export type ProcessessStepType = {
  id: number;
  title: string;
  description: string;
  steps: string[];
};

const CircleCheckBigIcon = ({
  width = 18,
  height = 18,
  color = "currentColor",
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    stroke={`#0c90ef`}
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <path d="m9 11 3 3L22 4"></path>
  </svg>
);
