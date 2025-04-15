import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import "../../../public/test.css";
import { allProjectsData } from "./allProjectsData";
import { formatString } from "@/app/services/[serviceId]/HeroSection";

export default function StepsSection({ projectName }: { projectName: string }) {
  const selectedProject = allProjectsData.find(
    (project) => formatString(projectName) === project.name
  );
  return (
    <SectionWrapper>
      <h2 className="relative w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start leading-none z-20">
        Process
      </h2>

      {/* Steps goals and outcome mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start justify-start gap-12 pt-4 sm:pt-8 md:pt-12">
        {selectedProject?.process.map((step) => (
          <ProcessCard
            key={step.id}
            id={step.id}
            name={step.name}
            goals={step.goals}
            colorGradient={step.colorGradient}
            test={selectedProject?.name}
            generalGradientStyle={selectedProject?.generalGradientStyle}
            borderColor={selectedProject?.borderColor}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ProcessCard = ({
  id,
  name,
  goals,
  test,
  generalGradientStyle,
  borderColor,
  colorGradient

}: {
  id?: number;
  name?: string;
  goals: { id: number; name: string }[];
  test: string;
  generalGradientStyle: {
    background: string,
    WebkitBackgroundClip: string,
    backgroundClip: string,
    color: string,
  },
  borderColor: string;
  colorGradient: string;
}) => {
  return (
    <div key={id} className={`relative overflow-hidden`}>
      {/* Blur background */}
      {/* <div className="w-32 h-32 absolute bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div> */}
      {/* <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div> */}

      <div className="relative w-full flex flex-col items-center justify-start lg:justify-center z-20">
        <span style={generalGradientStyle} className="font-black text-7xl  z-20">
          {id}.
        </span>
        <span className="text-[#ffffff] font-semibold text-3xl text-center x z-20">
          {name}
        </span>
        <p className="text-3xl text-[#ffffff]">{test} TEST TEST</p>
      </div>

      {/* Vertical line */}
      <div className="relative  flex flex-col items-center justify-center gap-4 py-2">
        <span className="w-0.5 h-10 border-[0.5px] border-[#4b4d1e]"></span>
      </div>

      {/* Goals heading */}
      <div className="w-full relative flex flex-col gap-2">
        <div className={`w-full bg-gradient-to-t from-[#0b0b0b] to-[${colorGradient}] flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#4b4d1e] z-20 rounded-full px-4 py-2`}>
          <span className="">Leading Step</span>
        </div>
      </div>

      {/* Goals */}
      <div className="flex flex-wrap justify-center items-start gap-2 pt-2">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="w-full flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#4b4d1e] z-20 rounded-full px-6 py-2"
          >
            <span className="text-base xs:text-lg font-light text-[#ffffff] text-center">
              {goal.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
