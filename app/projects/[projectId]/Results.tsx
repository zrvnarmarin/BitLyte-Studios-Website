import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

export default function Results({ projectName }: { projectName: string }) {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Results
      </h2>

      {/* Process steps cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 pt-4 sm:pt-8 md:pt-12 z-40">
        {results.map((result) => (
          <ResultCard
            key={result.id}
            id={result.id}
            stat={result.stat}
            title={result.title}
            description={result.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ResultCard = ({
  id,
  stat,
  title,
  description,
}: ProcessessStepType) => {
  return (
    <div
      key={id}
      className={`relative overflow-hidden flex-1 px-6 py-8 rounded-lg border-[0.5px] border-[#4b4d1e]`}
    >
      {/* Blur background */}
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[130px] pointer-events-none"></div>

      <div className="w-full flex flex-col xs:flex-row items-center justify-center z-20">
        {/* <span className="custom-text font-black text-7xl z-0 mr-4">{id}</span> */}
        <span className="custom-text-yellow font-black text-3xl xs:text-4xl z-20">
          {stat}
        </span>
      </div>

      {/* <span className="text-lg sm:text-xl text-[#ffffff] font-semibold uppercase">{title}</span> */}

      <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center pt-6 z-20">
        {description}
      </p>
    </div>
  );
};

const results: ProcessessStepType[] = [
  {
    id: 1,
    stat: "125%",
    title: "More Instagram followers",
    description: `More gigs via Instagram profile`,
  },
  {
    id: 2,
    stat: "34%",
    title: "More Instagram followers",
    description: `Enlarged user activity`,
  },
  {
    id: 3,
    stat: "4X",
    title: "More Instagram followers",
    description: `Better standing out on the market`,
  },
  {
    id: 4,
    stat: "12.56",
    title: "More Instagram followers",
    description: `Minutes per average spent more on the profile`,
  },
];

export type ProcessessStepType = {
  id: number;
  stat: string;
  title: string;
  description: string;
};
