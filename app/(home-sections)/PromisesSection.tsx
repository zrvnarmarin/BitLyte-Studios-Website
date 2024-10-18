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

      <div className="relative w-full z-20 py-4 sm:py-8 md:py-6 sm:px-12 md:px-16 xl:px-36">
        <h3 className="relative text-3xl xs:text-4xl sm:text-[42px] md:text-5xl text-[#ffffff] pt-4 lg:pt-8 font-medium text-center xs:font-normal z-20">
          Brands with{" "}
          <span className="custom-text">consistent visual presentation</span>{" "}
          across all platforms can increase revenue by{" "}
          <span className="custom-text">23%</span> and are{" "}
          <span className="custom-text">3x</span> more likely to be recognized
          by customers.
        </h3>
        <div className="w-32 h-32 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      </div>

      <div className="relative w-full flex justify-center z-30">
          <Link href={`/services`}>
            <button className="relative overflow-hidden w-fit flex items-center gap-2 py-4 px-12 text-[#000000] bg-[#ffffff]  rounded-full font-medium text-2xl xs:text-2xl sm:text-2xl md:text-2xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
              <LogoForButtonRotated
                fillColor="#000000"
                width={18}
                height={20}
              />
              Find More About Us
            </button>
          </Link>
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

export const GearIcon = () => {
  return (
    <svg
      fill="#55b8ff"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#55b8ff"
      strokeWidth={0.1}
      className=" w-16 h-16 
                   sm:w-16 sm:h-16 
                   md:w-24 md:h-24 
                   lg:w-32 lg:h-32
                  2xl:w-48 2xl:h-48"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M 28.0000 50.8281 C 28.6094 50.8281 29.1719 50.7578 29.8047 50.7110 L 31.1641 53.2891 C 31.4219 53.8047 31.9375 54.0859 32.5704 53.9922 C 33.1563 53.8750 33.5782 53.4532 33.6485 52.8203 L 34.0704 49.9844 C 35.2188 49.6797 36.3672 49.2344 37.4922 48.7422 L 39.6016 50.6406 C 40.0469 51.0625 40.6094 51.1563 41.1953 50.8281 C 41.7110 50.5469 41.9219 49.9844 41.8047 49.3750 L 41.2188 46.5625 C 42.1797 45.8828 43.1407 45.1094 44.0078 44.2422 L 46.6328 45.3438 C 47.2189 45.5781 47.7579 45.4610 48.2034 44.9219 C 48.6018 44.5000 48.6483 43.8906 48.3205 43.3750 L 46.7970 40.9375 C 47.5002 39.9532 48.0627 38.8984 48.6018 37.7735 L 51.4611 37.9141 C 52.0703 37.9375 52.5858 37.6094 52.7970 37.0235 C 52.9842 36.4375 52.7970 35.8750 52.3045 35.5 L 50.0783 33.7188 C 50.3831 32.5937 50.6173 31.3750 50.7109 30.1094 L 53.4296 29.2657 C 54.0157 29.0547 54.3906 28.6094 54.3906 27.9766 C 54.3906 27.3672 54.0157 26.9219 53.4296 26.7110 L 50.7109 25.8437 C 50.6173 24.5781 50.3831 23.4063 50.0783 22.2578 L 52.3045 20.4532 C 52.7970 20.1016 52.9842 19.5625 52.7970 18.9766 C 52.5858 18.3906 52.0703 18.0625 51.4611 18.0859 L 48.6018 18.2032 C 48.0627 17.0781 47.5002 16.0235 46.7970 15.0391 L 48.3205 12.6016 C 48.6483 12.1094 48.6018 11.5000 48.2034 11.0781 C 47.7579 10.5391 47.2189 10.3984 46.6328 10.6563 L 44.0078 11.7110 C 43.1407 10.8906 42.1797 10.0937 41.2188 9.4141 L 41.8047 6.6250 C 41.9219 5.9922 41.7110 5.4297 41.1953 5.1484 C 40.6094 4.8437 40.0469 4.8906 39.6016 5.3594 L 37.4922 7.2110 C 36.3672 6.7188 35.2188 6.3203 34.0704 5.9922 L 33.6485 3.1563 C 33.5782 2.5469 33.1563 2.1016 32.5704 2.0078 C 31.9375 1.9141 31.4219 2.1719 31.1641 2.6875 L 29.8047 5.2657 C 29.1719 5.2188 28.6094 5.1719 28.0000 5.1719 C 27.3672 5.1719 26.8047 5.2188 26.1485 5.2657 L 24.8126 2.6875 C 24.5547 2.1719 24.0391 1.9141 23.3829 2.0078 C 22.7969 2.1016 22.3985 2.5469 22.3047 3.1563 L 21.9063 5.9688 C 20.7344 6.3203 19.5860 6.7188 18.4844 7.2110 L 16.3751 5.3594 C 15.9063 4.8906 15.3438 4.8437 14.7813 5.1484 C 14.2657 5.4297 14.0547 5.9922 14.1719 6.6250 L 14.7578 9.4141 C 13.7735 10.0937 12.8126 10.8906 11.9453 11.7110 L 9.3438 10.6563 C 8.7578 10.3984 8.1953 10.5391 7.7500 11.0781 C 7.3751 11.5000 7.3282 12.1094 7.6329 12.5781 L 9.1797 15.0391 C 8.4766 16.0235 7.9141 17.0781 7.3751 18.2032 L 4.4922 18.0859 C 3.8829 18.0625 3.3672 18.3906 3.1797 18.9766 C 2.9922 19.5625 3.1563 20.1016 3.6485 20.4532 L 5.8985 22.2578 C 5.5938 23.4063 5.3360 24.5781 5.2657 25.8437 L 2.5469 26.7110 C 1.9375 26.8984 1.6094 27.3437 1.6094 27.9766 C 1.6094 28.6094 1.9375 29.0547 2.5469 29.2657 L 5.2657 30.1328 C 5.3360 31.3750 5.5938 32.5937 5.8985 33.7188 L 3.6485 35.5 C 3.1563 35.8750 2.9922 36.4375 3.1797 37.0235 C 3.3672 37.6094 3.8829 37.9375 4.4922 37.9141 L 7.3751 37.7735 C 7.9141 38.8984 8.4766 39.9532 9.1563 40.9375 L 7.6563 43.3750 C 7.3047 43.8906 7.3516 44.5000 7.7500 44.9219 C 8.1953 45.4610 8.7578 45.5781 9.3438 45.3438 L 11.9453 44.2422 C 12.8126 45.1094 13.7735 45.8828 14.7578 46.5625 L 14.1719 49.3750 C 14.0547 49.9844 14.2657 50.5469 14.7813 50.8281 C 15.3672 51.1563 15.9297 51.0625 16.3751 50.6406 L 18.4610 48.7422 C 19.5860 49.2344 20.7344 49.6797 21.9063 49.9844 L 22.3047 52.8203 C 22.3985 53.4532 22.7969 53.8750 23.3829 53.9922 C 24.0391 54.0859 24.5547 53.8047 24.8126 53.2891 L 26.1485 50.7110 C 26.7813 50.7578 27.3672 50.8281 28.0000 50.8281 Z M 33.8829 26.5000 C 32.7813 23.5469 30.6251 21.9297 27.9297 21.9297 C 27.5313 21.9297 27.0626 21.9766 26.3126 22.1406 L 19.5860 10.6563 C 22.0938 9.4141 24.9531 8.7344 28.0000 8.7344 C 38.2188 8.7344 46.2344 16.4922 46.9611 26.5000 Z M 8.9688 28.0000 C 8.9688 21.4844 12.0391 15.7422 16.8907 12.2735 L 23.6641 23.8281 C 22.3985 25.1406 21.8126 26.5703 21.8126 28.0937 C 21.8126 29.5703 22.3751 30.9297 23.6641 32.2891 L 16.7266 43.6328 C 11.9922 40.1406 8.9688 34.4688 8.9688 28.0000 Z M 25.1172 28.0703 C 25.1172 26.4766 26.4766 25.2344 27.9766 25.2344 C 29.5704 25.2344 30.8829 26.4766 30.8829 28.0703 C 30.8829 29.6406 29.5704 30.9297 27.9766 30.9297 C 26.4766 30.9297 25.1172 29.6406 25.1172 28.0703 Z M 28.0000 47.2656 C 24.8829 47.2656 21.9766 46.5391 19.4219 45.2735 L 26.3126 34 C 27.0391 34.1875 27.5313 34.2344 27.9297 34.2344 C 30.6485 34.2344 32.8047 32.5703 33.8829 29.5469 L 46.9611 29.5469 C 46.2109 39.5078 38.1953 47.2656 28.0000 47.2656 Z" />
      </g>
    </svg>
  );
};

export const CheckmarkIcon = () => {
  return (
    <svg
      fill="#55b8ff"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#55b8ff"
      strokeWidth={0.1}
      className=" w-16 h-16 
                   sm:w-16 sm:h-16 
                   md:w-24 md:h-24 
                   lg:w-32 lg:h-32
                  2xl:w-48 2xl:h-48"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M 23.6641 52.3985 C 26.6407 55.375 29.3594 55.3516 32.3126 52.3985 L 35.9219 48.8125 C 36.2969 48.4610 36.6250 48.3203 37.1172 48.3203 L 42.1797 48.3203 C 46.3749 48.3203 48.3204 46.3985 48.3204 42.1797 L 48.3204 37.1172 C 48.3204 36.625 48.4610 36.2969 48.8124 35.9219 L 52.3749 32.3125 C 55.3749 29.3594 55.3514 26.6407 52.3749 23.6641 L 48.8124 20.0547 C 48.4610 19.7031 48.3204 19.3516 48.3204 18.8829 L 48.3204 13.7969 C 48.3204 9.625 46.3985 7.6563 42.1797 7.6563 L 37.1172 7.6563 C 36.6250 7.6563 36.2969 7.5391 35.9219 7.1875 L 32.3126 3.6016 C 29.3594 .6250 26.6407 .6485 23.6641 3.6016 L 20.0547 7.1875 C 19.7032 7.5391 19.3516 7.6563 18.8828 7.6563 L 13.7969 7.6563 C 9.6016 7.6563 7.6563 9.5782 7.6563 13.7969 L 7.6563 18.8829 C 7.6563 19.3516 7.5391 19.7031 7.1876 20.0547 L 3.6016 23.6641 C .6251 26.6407 .6485 29.3594 3.6016 32.3125 L 7.1876 35.9219 C 7.5391 36.2969 7.6563 36.625 7.6563 37.1172 L 7.6563 42.1797 C 7.6563 46.3750 9.6016 48.3203 13.7969 48.3203 L 18.8828 48.3203 C 19.3516 48.3203 19.7032 48.4610 20.0547 48.8125 Z M 26.2891 49.7734 L 21.8828 45.3438 C 21.3672 44.8047 20.8282 44.5938 20.1016 44.5938 L 13.7969 44.5938 C 11.7110 44.5938 11.3828 44.2656 11.3828 42.1797 L 11.3828 35.875 C 11.3828 35.1719 11.1719 34.6329 10.6563 34.1172 L 6.2266 29.7109 C 4.7501 28.2109 4.7501 27.7891 6.2266 26.2891 L 10.6563 21.8829 C 11.1719 21.3672 11.3828 20.8282 11.3828 20.1016 L 11.3828 13.7969 C 11.3828 11.6875 11.6876 11.3829 13.7969 11.3829 L 20.1016 11.3829 C 20.8282 11.3829 21.3672 11.1953 21.8828 10.6563 L 26.2891 6.2266 C 27.7891 4.7500 28.2110 4.7500 29.7110 6.2266 L 34.1172 10.6563 C 34.6328 11.1953 35.1719 11.3829 35.8750 11.3829 L 42.1797 11.3829 C 44.2657 11.3829 44.5938 11.7109 44.5938 13.7969 L 44.5938 20.1016 C 44.5938 20.8282 44.8282 21.3672 45.3439 21.8829 L 49.7733 26.2891 C 51.2498 27.7891 51.2498 28.2109 49.7733 29.7109 L 45.3439 34.1172 C 44.8282 34.6329 44.5938 35.1719 44.5938 35.875 L 44.5938 42.1797 C 44.5938 44.2656 44.2657 44.5938 42.1797 44.5938 L 35.8750 44.5938 C 35.1719 44.5938 34.6328 44.8047 34.1172 45.3438 L 29.7110 49.7734 C 28.2110 51.2500 27.7891 51.2500 26.2891 49.7734 Z M 24.3438 39.2266 C 25.0235 39.2266 25.5391 38.9453 25.8907 38.5234 L 38.8985 20.3360 C 39.1563 19.9609 39.2969 19.5391 39.2969 19.1407 C 39.2969 18.1094 38.5001 17.2891 37.4219 17.2891 C 36.6485 17.2891 36.2266 17.5469 35.7579 18.2266 L 24.2735 34.3985 L 18.3438 27.8594 C 17.9454 27.4141 17.5001 27.2266 16.9141 27.2266 C 15.7657 27.2266 14.9454 28.0000 14.9454 29.0782 C 14.9454 29.5469 15.1094 29.9922 15.4376 30.3203 L 22.8907 38.6172 C 23.2423 38.9922 23.6876 39.2266 24.3438 39.2266 Z" />
      </g>
    </svg>
  );
};

export const ClockIcon = () => {
  return (
    <svg
      fill="#55b8ff"
      viewBox="0 0 56 56"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#55b8ff"
      strokeWidth={0.1}
      className=" w-16 h-16 
                   sm:w-16 sm:h-16 
                   md:w-24 md:h-24 
                   lg:w-32 lg:h-32
                  2xl:w-48 2xl:h-48"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path d="M 27.9999 51.9063 C 41.0546 51.9063 51.9063 41.0781 51.9063 28 C 51.9063 14.9453 41.0312 4.0937 27.9765 4.0937 C 14.8983 4.0937 4.0937 14.9453 4.0937 28 C 4.0937 41.0781 14.9218 51.9063 27.9999 51.9063 Z M 27.9999 47.9219 C 16.9374 47.9219 8.1014 39.0625 8.1014 28 C 8.1014 16.9609 16.9140 8.0781 27.9765 8.0781 C 39.0155 8.0781 47.8983 16.9609 47.9219 28 C 47.9454 39.0625 39.0390 47.9219 27.9999 47.9219 Z M 15.7187 30.5312 L 27.9765 30.5312 C 28.8905 30.5312 29.6171 29.8281 29.6171 28.8906 L 29.6171 13.0937 C 29.6171 12.1797 28.8905 11.4766 27.9765 11.4766 C 27.0624 11.4766 26.3593 12.1797 26.3593 13.0937 L 26.3593 27.2734 L 15.7187 27.2734 C 14.8046 27.2734 14.1014 27.9766 14.1014 28.8906 C 14.1014 29.8281 14.8046 30.5312 15.7187 30.5312 Z" />
      </g>
    </svg>
  );
};

export const promiseCardsData: PromiseCardType[] = [
  {
    id: 1,
    icon: CheckmarkIcon,
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
    <div
      className={`z-20 py-6 overflow-hidden relative border-[0.5px] border-[#0a2030] bg-[#0b0b0b] rounded-lg`}
    >
      {/* Blur gradient */}
      <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

      {/* Card content */}
      <div className="relative rounded-lg overflow-hidden flex flex-col items-center gap-1 z-20">
        <div className=" overflow-hidden relative flex flex-col items-center gap-0 justify-start z-20 lg:pl-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
            <div className="col-span-2 flex flex-col gap-6 items-start z-20 px-6 pt-6 pb-6 ">
              <div className="col-span-full relative overflow-hidden lg:col-span-1 flex lg:hidden flex-col items-center justify-center">
                <div className="flex col-span-full relative overflow-hidden lg:col-span-1 flex-col items-center justify-center">
                  <span className="z-30">{icon()}</span>
                </div>
              </div>

              <div>
                <span className="text-lg sm:text-xl custom-text font-bold uppercase">
                  {title}
                </span>
              </div>
              {/* Icon container mobile */}
              <p className="text-[#ffffff] font-semibold text-2xl md:text-3xl leading-tight text-start lg:pt-6">
                {promise}
              </p>
              <div className="flex flex-row text-center items-center gap-4">
                <span className="hidden xl:block custom-text text-lg xs:text-xl font-light z-20">
                  &#10003;
                </span>
                <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start z-20">
                  {description}
                </p>
              </div>
            </div>

            <div className="hidden lg:flex col-span-full relative overflow-hidden lg:col-span-1 flex-col items-center justify-center">
              <span className="z-30">{icon()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
