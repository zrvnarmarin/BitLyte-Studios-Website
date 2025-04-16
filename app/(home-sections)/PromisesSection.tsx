import React from "react";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";

// dovrsi ovo - ikone su tocno te koje zelim, samo napravi sizing da izgledjau kyo ikonei z sservices sekcije

export default function PromisesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal capitalize text-start z-20">
        What we promise
      </h2>

      {/* Cards and CTA section */}
      <div className="w-full relative grid grid-cols-1 xl:grid-cols-2 items-start gap-6 pt-4 sm:pt-8 md:pt-12">
        {promiseCardsData.map((promiseCard) => (
          <PromiseCard
            id={promiseCard.id}
            icon={promiseCard.icon}
            key={promiseCard.title}
            title={promiseCard.title}
            promise={promiseCard.promise}
            description={promiseCard.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export type PromiseCardType = {
  id: number;
  icon: any;
  title: string;
  promise: string;
  description: string;
};

export const TimeIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    color="#ffffff"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export const LightingIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    color="#ffffff"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon points="13 2 3 14 12 14 11 22 21 10 13 10"></polygon>
  </svg>
);

export const promiseCardsData: PromiseCardType[] = [
  {
    id: 1,
    icon: <LightingIcon />,
    title: "Custom built for you",
    promise: `We promise that every project we deliver is tailored to your business.`,
    description: `By thoroughly understanding your goals, industry, and audience, we create personalized strategies and designs that are perfectly suited to drive your success.`,
  },
  {
    id: 2,
    icon: <TimeIcon />,
    title: "Timely and trusted",
    promise: `We guarantee on-time delivery without compromising quality.`,
    description: `With dedicated project management and clear milestones, we keep the process streamlined and efficient, ensuring every deadline is met.`,
  },
];

export const PromiseCard = ({
  id,
  icon,
  title,
  promise,
  description,
}: PromiseCardType) => {
  return (
    <div className={`relative z-20`}>
      <div className="relative rounded-lg overflow-hidden flex flex-col items-start z-20 border-[0.5px] border-[#0a2030] p-6">
        {/* Blur background */}
        <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-l from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

        <div className=" overflow-hidden relative flex flex-col items-center justify-start z-20">
          <div className="col-span-2 flex flex-col gap-2 items-start z-20 ">
            <div className="w-full flex items-center gap-4 text-lg sm:text-xl custom-text font-bold uppercase text-start">
              <div className="p-3 rounded-full bg-gradient-to-r from-[#1A9FFF] to-[#0086E6]">
                {icon}
              </div>
              {title}
            </div>
            {/* Icon container mobile */}
            <p className="text-[#ffffff] text-start font-semibold text-2xl md:text-3xl leading-tight pt-4">
              {promise}
            </p>
            <div className="flex flex-row items-center gap-4 pt-4 lg:pt-6">
              <p className="text-xl font-light text-[#ffffff] text-start z-20">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
