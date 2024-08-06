"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import StepsImage from "../../../public/stepsss-removebg-preview (1).png";
import FirstStepImage from "../../../public/images/services/processesImages/Step1.svg";
import SecondStepImage from "../../../public/images/services/processesImages/Step2.svg";
import ThirdStepImage from "../../../public/images/services/processesImages/Step3.svg";
import FourthStepImage from "../../../public/images/services/processesImages/Step4.svg";

export default function OurProcessessSection() {
  return (
    <SectionWrapper>
      {/* <p className="text-xs md:text-md font-bold md:font-bold text-[#ffffff] uppercase pt-2">How we tackle problems</p> */}
      <h1 className="w-full text-4xl text-[#ffffff]">
        Our
        <span className="linear-gradient-purple-text font-black">
          {" "}
          Processess{" "}
        </span>
      </h1>
      <div className="flex flex-col gap-4 text-base text-[#eeeeee] font-normal py-8 text-start px-5 mt-4 mb-2 rounded-lg bg-gradient-to-r from-[#292929] to-[#0b0b0b]">
        <span className="text-3xl text-[#ffffff] pl-2">
          <span className="linear-gradient-purple-text font-black"> 1. </span>
          Discovery
        </span>
        Through in-depth research, market analysis, and collaborative
        discussions, we unearth key insights that serve as the foundation for
        our strategy.
      </div>

      {/* Mobile image grid */}
      <div className="grid grid-cols-1">
        {processesSteps.slice(0,2).map((step) => (
          <ProcessStepCard
            key={step.id}
            id={step.id}
            imageSrc={step.imageSrc}
            title={step.title}
            description={step.description}
          />
        ))}

        {/* Desktop image grid */}
      </div>

      {/* Buttons */}
      <div className="w-flex flex items-center justify-center">
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

export const ProcessStepCard = ({ id, imageSrc, title, description } : ProcessessStepType) => {
    return (
        <div className="flex flex-col gap-6">
            {/* Image container */}
            <div className="w-full flex items-center justify-center">
                <Image src={imageSrc} alt="step_image" />
            </div>

            {/* Data */}
            <div>
                <p>{id}.</p>
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

const processesSteps: ProcessessStepType[] = [
  {
    id: 1,
    imageSrc: FirstStepImage,
    title: "Title Step 1",
    description:
      "This is some description for the step image which will be shown on the page.",
  },
  {
    id: 2,
    imageSrc: SecondStepImage,
    title: "Title Step 2",
    description:
      "This is some description for the step image which will be shown on the page.",
  },
  {
    id: 1,
    imageSrc: ThirdStepImage,
    title: "Title Step 3",
    description:
      "This is some description for the step image which will be shown on the page.",
  },
  {
    id: 1,
    imageSrc: FourthStepImage,
    title: "Title Step 4",
    description:
      "This is some description for the step image which will be shown on the page.",
  },
];

export type ProcessessStepType = {
  id: number;
  imageSrc: any;
  title: string;
  description: string;
};
