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
      <h2 className="w-full text-5xl text-[#ffffff]">
        Our <span className="linear-gradient-purple-text">Processess </span>
      </h2>

      <p className="text-lg text-[#eeeeee] font-normal pt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam
        aspernatur cupiditate quod excepturi, iste unde.
      </p>

      {/* Centered image of the selected step */}
      {selectedStep && (
        <div className="w-full flex justify-center mt-8 mb-6">
          <Image
            src={selectedStep.imageSrc}
            alt={`Image for step ${selectedStep.id}`}
            className="w-full max-w-[1200px]"
          />
        </div>
      )}

      {/* All steps */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6 overflow-x-auto lg:overflow-hidden">
        {processesSteps.map((step) => (
          <div
            key={step.id}
            className={`relative overflow-hidden flex-1 px-5 py-10 cursor-pointer rounded-lg border-[0.5px] border-[#252525] ${
              selectedStep?.id === step.id ? "bg-[#2a2c2f]" : ""
            }`}
            onClick={() => setSelectedStep(step)}
          >
            {/* Blur background */}
            <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#0b0b0b] to-[#3B4EB5] z-10 blur-[330px]"></div>
            <div className="flex items-center justify-between">
              <p className="text-3xl text-[#ffffff] text-center">
                {step.title}
              </p>
              <span className="linear-gradient-purple-text font-black text-3xl">
                {step.id}
              </span>
            </div>
            <p className="text-lg text-[#eeeeee] font-normal pt-6">
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
    description: `This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.`,
  },
  {
    id: 2,
    imageSrc: SecondStepImage,
    title: "Planning Visuals",
    description: `This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.`,
  },
  {
    id: 3,
    imageSrc: ThirdStepImage,
    title: "Coding & Testing",
    description: `This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.`,
  },
  {
    id: 4,
    imageSrc: FourthStepImage,
    title: "Testing & Launching",
    description: `This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.
      This is some description for the step image which will be shown on the page.`,
  },
];

export type ProcessessStepType = {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
};
