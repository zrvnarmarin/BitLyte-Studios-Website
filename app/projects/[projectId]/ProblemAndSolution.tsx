import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import AboutProjectImage from "../../../public/images/projects/1_dj_david_mash/thumbnail_DJ_David_Mash.png";
import { Logo } from "@/app/services/[serviceId]/StepsSection";

export default function ProblemAndSolution() {
  return (
    <SectionWrapper>
      {/* <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        About Project
      </h2> */}
      <div className="relative grid grid-cols-2 items-center justify-between gap-6 rounded-lg pt-4 sm:pt-8 md:pt-12">
        <div className="flex flex-col gap-2">
          <div className="relative flex flex-row items-center justify-between gap-4 text-base text-[#eeeeee] font-normal text-start rounded-lg z-20">
            <div className="w-full flex items-center gap-">
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#ffe54f] to-[#ffd700]"></span>
              <span className="w-10 h-0.5 border-[0.5px] border-[#ffe54f]"></span>
            </div>
            <div className="relative flex gap-2 items-start justify-center z-20 text-center">
              <span className="text-3xl xs:text-4xl md:text-3xl lg:text-4xl custom-text-yellow z-20">
                Problem
              </span>
              <div className="absolute -top-10 flex items-center justify-center z-10">
                {/* <Logo /> */}
              </div>
            </div>
            {/* <div className="w-full relative lg:flex flex-col gap-4">
              <span className="w-20 h-0.5 border-[0.5px] border-[#ffe54f]"></span>
            </div> */}
            <div className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
            <div className="w-full flex items-center justify-end gap-">
              <span className="w-10 h-0.5 border-[0.5px] border-[#ffe54f]"></span>
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#ffe54f] to-[#ffd700]"></span>
            </div>
          </div>
          <p className="text-xl font-light text-[#ffffff] text-center pt-6 z-40">
            Astra Capital is a forex platform providing instant cryptocurrency
            withdrawals, excellent trading conditions, and 24/7 live support. It
            is developed for traders of all levels to offer a trustworthy
            trading Web3 experience.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <div className="relative flex flex-row items-center justify-between gap-4 text-base text-[#eeeeee] font-normal text-start rounded-lg z-20">
            <div className="w-full flex items-center gap-">
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#ffe54f] to-[#ffd700]"></span>
              <span className="w-10 h-0.5 border-[0.5px] border-[#ffe54f]"></span>
            </div>
            <div className="relative flex gap-2 items-start justify-center z-20 text-center">
              <span className="text-3xl xs:text-4xl md:text-3xl lg:text-4xl custom-text-yellow z-20">
                Solution
              </span>
              <div className="absolute -top-10 flex items-center justify-center z-10">
                {/* <Logo /> */}
              </div>
            </div>
            {/* <div className="w-full relative lg:flex flex-col gap-4">
              <span className="w-20 h-0.5 border-[0.5px] border-[#ffe54f]"></span>
            </div> */}
            <div className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
            <div className="w-full flex items-center justify-end gap-">
              <span className="w-10 h-0.5 border-[0.5px] border-[#ffe54f]"></span>
              <span className="w-4 h-4 rounded-full bg-gradient-to-r from-[#ffe54f] to-[#ffd700]"></span>
            </div>
          </div>
          <p className="text-xl font-light text-[#ffffff] text-center pt-6 z-40">
            Astra Capital is a forex platform providing instant cryptocurrency
            withdrawals, excellent trading conditions, and 24/7 live support. It
            is developed for traders of all levels to offer a trustworthy
            trading Web3 experience.
          </p>
        </div>

        {/* Blur background */}
        {/* <div className="w-64 h-64 absolute inset-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[930px]"></div> */}

        {/* Card container */}
        {/* {clientFacts.map((fact) => (
          <ClientFactCard
            key={fact.id}
            id={fact.id}
            title={fact.title}
            description={fact.description}
          />
        ))} */}

        {/* Project image  */}
        {/* <div className="z-20">
          <Image
            src={AboutProjectImage}
            alt="Tekst"
            width={0}
            height={0}
            className="rounded-lg"
          />
        </div> */}

        {/* Services */}
        {/* <div className="flex flex-col justify-start items-start gap-6">
          <div className="flex flex-wrap justify-start items-start gap-2">
            {servicesDummy.map((service) => (
              <div
                key={service.id}
                className="flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#4b4d1e] z-20 rounded-full px-6 py-2"
              >
                <span className="text-base xs:text-lg font-light text-[#ffffff] text-center">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
          <p className="w-full text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight text-start z-20">
            Astra Capital is a forex platform providing instant cryptocurrency
            withdrawals, excellent trading conditions, and 24/7 live support. It
            is developed for traders of all levels to offer a trustworthy
            trading Web3 experience.
          </p>
        </div> */}
      </div>
    </SectionWrapper>
  );
}

export const ClientFactCard = ({
  id,
  title,
  description,
}: ClientFactCardProps) => {
  return (
    <div className="overflow-hidden relative flex flex-col gap-2 rounded-lg p-6 border-[0.5px] border-[#4b4d1e] z-20">
      <div className="relative flex flex-col items-start justify-center z-20">
        <p className="text-lg sm:text-xl custom-text-yellow font-semibold uppercase text-start">
          {title}
        </p>
        {/* <div className="flex items-center z-30 pt-6">
          <Image src={imgSrc} alt="text" width={0} height={0} />
          </div> */}
        <p className="text-xl font-light text-[#ffffff] text-center pt-4 z-40">
          {description}
        </p>
      </div>
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[130px] pointer-events-none"></div>
    </div>
  );
};

export type ClientFactCardProps = {
  id: number;
  title: string;
  description: string;
};

const clientFacts = [
  {
    id: 1,
    title: "Client",
    description: "DJ David Mash",
  },
  {
    id: 2,
    title: "Timeframe",
    description: "2 months",
  },
  {
    id: 3,
    title: "Year",
    description: "2024",
  },
  {
    id: 4,
    title: "Client",
    description: "Something",
  },
];

const servicesDummy = [
  {
    id: 1,
    name: "Social Media Management",
  },
  {
    id: 2,
    name: "Ad Campaigns",
  },
];
