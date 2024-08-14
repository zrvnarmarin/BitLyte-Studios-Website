"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import FirstStepImage from "../../../public/images/services/processesImages/Step1.svg";
import SecondStepImage from "../../../public/images/services/processesImages/Step2.svg";
import ThirdStepImage from "../../../public/images/services/processesImages/Step3.svg";
import FourthStepImage from "../../../public/images/services/processesImages/Step4.svg";
import "../../../public/test.css";

export default function OurProcessessSection() {
  const [selectedStep, setSelectedStep] = useState<ProcessessStepType | null>(
    processesSteps[0]
  );

  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20">Our Process</h2>

      {selectedStep && (
        <div className="w-full flex justify-center items-start mt-8 mb-6">
          <Image
            src={selectedStep.imageSrc}
            alt={`Image for step ${selectedStep.id}`}
            className="w-full max-w-[900px]"
          />
        </div>
      )}
      {/* Centered image of the selected step */}
      <div className="grid grid-cols-4 gap-6 pt-12">
        {/* All steps */}
        {processesSteps.map((step) => (
          <div
            key={step.id}
            className={`relative overflow-hidden flex-1 px-5 py-10 cursor-pointer rounded-lg border-[0.5px] border-[#252525] ${
              selectedStep?.id === step.id ? "" : ""
            }`}
            onClick={() => setSelectedStep(step)}
          >
            {/* Blur background */}
            <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#3B4EB5] to-[#222222] z-10 blur-[230px]"></div>

            <div className="w-full flex items-center justify-around z-20">
              <span className="linear-gradient-purple-text font-black text-7xl z-0 mr-4">
                {step.id}
              </span>
              <span className="text-[#ffffff] font-semibold text-3xl z-30">
                {step.title}
              </span>
            </div>

            <p className="text-xl font-light text-[#ffffff] text-start pt-6 z-30">
              {step.description}
            </p>
          </div>
        ))}
      </div>

      {/* Buttons - Hidden on screens larger than lg */}
      <div className="lg:hidden w-flex flex items-center justify-center mt-6">
        <div className="w-fit flex items-center justify-center gap-2 rounded-full px-6 py-2 bg-[#2a2c2f]">
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#7f96db] to-[#8ca0dc]"></div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const ProcessStepCard = ({
  id,
  imageSrc,
  title,
  description,
}: ProcessessStepType) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Image container */}
      <div className="w-full flex items-center justify-center">
        <Image src={imageSrc} alt="step_image" />
      </div>

      {/* Data */}
      <div className="relative">
        {/* Blur background */}
        <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-[#4F65A9] z-10 blur-[330px]"></div>
        <p className="text-5xl">{id}.</p>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const processesSteps: ProcessessStepType[] = [
  {
    id: 1,
    imageSrc: FirstStepImage,
    title: "Discovery & Strategy",
    description: `Time for finalizred screens infused with personality and life. We also create a UI kit to allow you tu easily build your future`,
  },
  {
    id: 2,
    imageSrc: SecondStepImage,
    title: "Planning Visuals",
    description: `Time for finalizred screens infused with personality and life. We also create a UI kit to allow you tu easily build your future`,
  },
  {
    id: 3,
    imageSrc: ThirdStepImage,
    title: "Coding & Testing",
    description: `Time for finalizred screens infused with personality and life. We also create a UI kit to allow you tu easily build your future`,
  },
  {
    id: 4,
    imageSrc: FourthStepImage,
    title: "Testing & Launching",
    description: `Time for finalizred screens infused with personality and life. We also create a UI kit to allow you tu easily build your future`,
  },
];

export type ProcessessStepType = {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
};

// Requirements and gathering - https://www.svgrepo.com/svg/26760/education-form - 1. step
//
