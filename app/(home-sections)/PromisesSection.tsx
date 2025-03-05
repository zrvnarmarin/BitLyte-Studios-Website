import React from "react";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";

export default function PromisesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        What we promise 
      </h2>

      {/* Cards and CTA section */}
      <div className="w-full relative grid grid-cols-1 xl:grid-cols-2 items-start gap-6 pt-4 sm:pt-8 md:pt-6">
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
    fill="#179af9"
    className="w-[95px] h-[95px] sm:w-[90px] sm:h-[90px]"
    viewBox="0 0 100 100"
    stroke="#55b8ff"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M50,20c-16.5,0-30,13.5-30,30s13.5,30,30,30s30-13.5,30-30S66.5,20,50,20z M50,74c-13.2,0-24-10.8-24-24 s10.8-24,24-24s24,10.8,24,24S63.2,74,50,74z" />{" "}
        </g>{" "}
        <g>
          {" "}
          <path d="M53,48.8V36c0-1.1-0.9-2-2-2h-2c-1.1,0-2,0.9-2,2v14c0,0.8,0.3,1.6,0.9,2.1l9.6,9.6c0.8,0.8,2,0.8,2.8,0 l1.4-1.4c0.8-0.8,0.8-2,0-2.8L53,48.8z" />{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

export const StarIcon = () => (
  <svg
    fill="#179af9"
    className="w-[75px] h-[75px] sm:w-[90px] sm:h-[90px]"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#55b8ff"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" />

    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <g id="SVGRepo_iconCarrier">
      <path d="M53.77,21.87,50,40.11a1,1,0,0,0,1.12,1.12H70.64a2,2,0,0,1,1.62,2.87L51,79a1.85,1.85,0,0,1-3.5-.87l3.75-21.48c0-.75-.62-.5-1.37-.5H29.42c-1.37,0-2.37-2-1.62-3.25L50.28,21A1.86,1.86,0,0,1,53.77,21.87Z" />
    </g>
  </svg>
);

export const promiseCardsData: PromiseCardType[] = [
  {
    id: 1,
    icon: <StarIcon />,
    title: "Built exclusively for you",
    promise: `We promise that every project we deliver is tailored to your specific needs. No one-size-fits-all solutions - everything we build is unique to your business.`,
    description: `By thoroughly understanding your goals, industry, and audience, we create personalized strategies and designs that are perfectly suited to drive your success.`,
  },
  {
    id: 2,
    icon: <TimeIcon />,
    title: "On time, every time",
    promise: `We guarantee your project will be delivered on time, without sacrificing the level of quality. We understand deadlines matter and commit to staying on track.`,
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
    <div className={`z-20 overflow-hidden relative `}>
      {/* Card content */}
      <div className="relative rounded-lg overflow-hidden flex flex-col items-center gap-1 z-20 border-[0.5px] border-[#0a2030] ">
        <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-l from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

        <div className=" overflow-hidden relative flex flex-col items-center gap-0 justify-start z-20 lg:pl-6">
          <div className="col-span-2 flex flex-col gap-2 items-start z-20 px-6 pt-6 md:pt-6 pb-6 md:pb-8 lg:pt-10 lg:pb-10">
            <div className="w-full flex justify-center">{icon}</div>

            <div className="w-full text-lg sm:text-xl custom-text font-bold uppercase pt-2 text-center">
              {title}
            </div>
            {/* Icon container mobile */}
            <p className="text-[#ffffff] text-center font-semibold text-2xl md:text-3xl leading-tight pt-2 lg:pt-4">
              {promise}
            </p>
            <div className="flex flex-row text-center items-center gap-4 pt-4 lg:pt-4">
              <p className="text-xl font-light text-[#ffffff] text-center z-20">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
