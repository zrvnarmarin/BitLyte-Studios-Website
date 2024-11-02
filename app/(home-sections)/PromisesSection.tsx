import React from "react";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";

export default function PromisesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        What we promise to you
      </h2>

      {/* Cards and CTA section */}
      <div className="w-full relative grid grid-cols-1 xl:grid-cols-1 items-start gap-6 pt-4 sm:pt-8 md:pt-12">
        <div className="flex flex-col gap-6 z-20">
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

export const GearIcon = () => (
  <svg
    fill="#55b8ff"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#55b8ff"
    strokeWidth="0.4"
    className=" w-20 h-20 
                   sm:w-24 sm:h-24 
                   md:w-28 md:h-28 
                   lg:w-56 lg:h-56
                  2xl:w-80 2xl:h-80"
  >
    <path d="M25 34c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-16c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"></path>
    <path d="M27.7 44h-5.4l-1.5-4.6c-1-.3-2-.7-2.9-1.2l-4.4 2.2-3.8-3.8 2.2-4.4c-.5-.9-.9-1.9-1.2-2.9L6 27.7v-5.4l4.6-1.5c.3-1 .7-2 1.2-2.9l-2.2-4.4 3.8-3.8 4.4 2.2c.9-.5 1.9-.9 2.9-1.2L22.3 6h5.4l1.5 4.6c1 .3 2 .7 2.9 1.2l4.4-2.2 3.8 3.8-2.2 4.4c.5.9.9 1.9 1.2 2.9l4.6 1.5v5.4l-4.6 1.5c-.3 1-.7 2-1.2 2.9l2.2 4.4-3.8 3.8-4.4-2.2c-.9.5-1.9.9-2.9 1.2L27.7 44zm-4-2h2.6l1.4-4.3.5-.1c1.2-.3 2.3-.8 3.4-1.4l.5-.3 4 2 1.8-1.8-2-4 .3-.5c.6-1 1.1-2.2 1.4-3.4l.1-.5 4.3-1.4v-2.6l-4.3-1.4-.1-.5c-.3-1.2-.8-2.3-1.4-3.4l-.3-.5 2-4-1.8-1.8-4 2-.5-.3c-1.1-.6-2.2-1.1-3.4-1.4l-.5-.1L26.3 8h-2.6l-1.4 4.3-.5.1c-1.2.3-2.3.8-3.4 1.4l-.5.3-4-2-1.8 1.8 2 4-.3.5c-.6 1-1.1 2.2-1.4 3.4l-.1.5L8 23.7v2.6l4.3 1.4.1.5c.3 1.2.8 2.3 1.4 3.4l.3.5-2 4 1.8 1.8 4-2 .5.3c1.1.6 2.2 1.1 3.4 1.4l.5.1 1.4 4.3z"></path>
  </svg>
);

export const StarIcon = () => (
  <svg
    fill="#55b8ff"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#55b8ff"
    strokeWidth="0.4"
    className="w-20 h-20 
                   sm:w-24 sm:h-24 
                   md:w-28 md:h-28 
                   lg:w-56 lg:h-56
                  2xl:w-80 2xl:h-80"
  >
    <path d="M15.2 40.6c-.2 0-.4-.1-.6-.2-.4-.3-.5-.7-.4-1.1l3.9-12-10.2-7.5c-.4-.3-.5-.7-.4-1.1s.5-.7 1-.7h12.7L25 5.9c.1-.4.5-.7 1-.7s.8.3 1 .7L30.9 18h12.7c.4 0 .8.2 1 .6s0 .9-.4 1.1L34 27.1l3.9 12c.1.4 0 .9-.4 1.1s-.8.3-1.2 0L26 33l-10.2 7.4c-.2.1-.4.2-.6.2zM26 30.7c.2 0 .4.1.6.2l8.3 6.1-3.2-9.8c-.1-.4 0-.9.4-1.1l8.3-6.1H30.1c-.4 0-.8-.3-1-.7L26 9.5l-3.2 9.8c-.1.4-.5.7-1 .7H11.5l8.3 6.1c.4.3.5.7.4 1.1L17.1 37l8.3-6.1c.2-.1.4-.2.6-.2z"></path>
  </svg>
);

export const ClockIcon = () => (
  <svg
    fill="#55b8ff"
    viewBox="0 0 50 50"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#55b8ff"
    strokeWidth="0.4"
    className=" w-20 h-20 
                   sm:w-24 sm:h-24 
                   md:w-28 md:h-28 
                   lg:w-56 lg:h-56
                  2xl:w-80 2xl:h-80"
  >
    <path d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15 15-6.7 15-15-6.7-15-15-15z"></path>
    <path d="M30.3 33.7L24 27.4V16h2v10.6l5.7 5.7z"></path>
  </svg>
);

export const promiseCardsData: PromiseCardType[] = [
  {
    id: 1,
    icon: StarIcon,
    title: "Results You Can Trust",
    promise: `We won't stop until your vision is fully realized. Your satisfaction drives our process, and we’re dedicated to delivering exactly what you need.`,
    description: `We listen closely, adapt quickly, and implement feedback at every stage to ensure the final outcome aligns perfectly with your expectations.`,
  },
  {
    id: 2,
    icon: ClockIcon,
    title: "On time, every time",
    promise: `We guarantee your project will be delivered on time, without sacrificing the level of quality. We understand deadlines matter and commit to staying on track.`,
    description: `With dedicated project management and clear milestones, we keep the process streamlined and efficient, ensuring every deadline is met.`,
  },
  {
    id: 3,
    icon: GearIcon,
    title: "Built exclusively for you",
    promise: `We promise that every project we deliver is tailored to your specific needs. No one-size-fits-all solutions - everything we build is unique to your business.`,
    description: `By thoroughly understanding your goals, industry, and audience, we create personalized strategies and designs that are perfectly suited to drive your success.`,
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
    <div className={`z-20 py-6 overflow-hidden relative `}>
      {/* Blur gradient */}

      {/* Card content */}
      <div className="relative rounded-lg overflow-hidden flex flex-col items-center gap-1 z-20 border-[0.5px] border-[#0a2030] ">
        <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-l from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

        <div className=" overflow-hidden relative flex flex-col items-center gap-0 justify-start z-20 lg:pl-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            <div className="col-span-2 flex flex-col gap-2 items-start z-20 px-6 pt-6 md:pt-8 pb-6 md:pb-8 lg:pt-10 lg:pb-10">
              <div className="col-span-full relative overflow-hidden lg:col-span-1 flex lg:hidden flex-col items-center justify-center">
                <div className="flex col-span-full relative overflow-hidden lg:col-span-1 flex-col items-center justify-center">
                  <span className="z-30">{icon()}</span>
                </div>
              </div>

              <div className="text-lg sm:text-xl custom-text font-bold uppercase pt-2">
                {title}
              </div>
              {/* Icon container mobile */}
              <p className="text-[#ffffff] font-semibold text-2xl md:text-3xl leading-tight text-start pt-2 lg:pt-4">
                {promise}
              </p>
              <div className="flex flex-row text-center items-center gap-4 pt-4 lg:pt-4">
                <span className="hidden xl:block custom-text text-lg xs:text-xl font-light z-20">
                  &#10003;
                </span>
                <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start z-20">
                  {description}
                </p>
              </div>
            </div>

            <div className="bg-[#0b0b0b] rounded-lg hidden lg:flex col-span-full relative overflow lg:col-span-1 flex-col items-center justify-center">
              <span className="z-30">{icon()}</span>
              <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-l from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
