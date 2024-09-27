import React from "react";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import Link from "next/link";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";

export default function AchievementsSection() {
  return (
    <SectionWrapper>
      <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium text-center xs:font-normal z-20 py-4 sm:py-8 md:py-6 xl:px-36">
        Did you know? <span className="custom-text">75% </span>of users judge a
        company’s credibility based on its website design - we make sure yours
        <span className="custom-text"> leaves the right impression</span> and
        brings your business more <span className="custom-text">growth</span>{" "}
        and <span className="custom-text">revenue</span>.
        {/* <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div> */}
      </h3>

      {/* Achievements cards container */}
      <div className="w-full flex flex-col lg:flex-row gap-4 py-4 sm:py-8 md:py-12">
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            id={achievement.id}
            stat={achievement.stat}
            description={achievement.description}
          />
        ))}
      </div>

      <div className="relative flex flex-col justify-start gap-6 py-4 sm:py-8 ">
        <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium text-center xs:font-normal z-20 py-4 sm:py-8 md:py-6 xl:px-36">
          Brands with{" "}
          <span className="custom-text">consistent visual presentation</span>{" "}
          across all platforms can increase revenue by{" "}
          <span className="custom-text">23%</span> and are{" "}
          <span className="custom-text">3x</span> more likely to be recognized
          by customers. This are our promises to you.
        </h3>

        {/* Cards and CTA section */}
        <div className="w-full relative grid grid-cols-1 xl:grid-cols-1 items-start gap-6 pt-4 sm:pt-8 md:pt-12">
          <div className="flex flex-col gap-6 z-20">
            {/* Blur background */}
            {/* <div className="w-96 h-96 absolute right-24 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div> */}

            {promiseCardsData.map((promiseCard) => (
              <PromiseCard
                key={promiseCard.title}
                title={promiseCard.title}
                promise={promiseCard.promise}
                description={promiseCard.description}
              />
            ))}
          </div>

          <div className="relative w-full flex justify-center pt-8 md:pt-16 z-30">
            <Link href={`/about-us`}>
              <button className="relative overflow-hidden w-fit flex items-center gap-2 py-4 px-12 text-[#000000] bg-[#ffffff]  rounded-full font-medium text-2xl xs:text-2xl sm:text-2xl md:text-2xl shadow-[0_0_10px_0_rgba(255,255,255,1)] hover:shadow-[0_0_20px_0_rgba(255,255,255,1)] duration-300">
                <LogoForButtonRotated
                  fillColor="#000000"
                  width={18}
                  height={20}
                />
                Discover Our Story
              </button>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export const AchievementCard = ({
  stat,
  description,
}: AchievementCardProps) => {
  return (
    <div
      className={`w-full relative overflow-hidden border-[0.5px] bto-[#27a5ff2b] border-[#0a2030] flex flex-col items-center rounded-lg p-16 z-30`}
    >
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>

      <h3
        className={`font-semibold text-5xl sm:text-7xl text-center text-[#ffffff] z-20`}
      >
        {stat}
      </h3>
      <p className="w-full text-lg sm:text-2xl text-center font-normal text-[#ffffff] pt-6 z-20">
        {description}
      </p>
    </div>
  );
};

export type PromiseCardType = {
  title: string;
  promise: string;
  description: string;
};

export const promiseCardsData: PromiseCardType[] = [
  {
    title: "Results You Can Trust",
    promise: `We won't stop until your vision is fully realized. Your satisfaction drives our process, and we’re dedicated to delivering exactly what you need.`,
    description: `We listen closely, adapt quickly, and implement feedback at every stage to ensure the final outcome aligns perfectly with your expectations.`,
  },
  {
    title: "Results You Can Trust",
    promise: `We guarantee your project will be delivered on time, without sacrificing the level of quality. We understand deadlines matter and commit to staying on track.`,
    description: `With dedicated project management and clear milestones, we keep the process streamlined and efficient, ensuring every deadline is met.`,
  },
  {
    title: "Results You Can Trust",
    promise: `We promise that every project we deliver is tailored to your specific needs. No one-size-fits-all solutions - everything we build is unique to your business.`,
    description: `By thoroughly understanding your goals, industry, and audience, we create personalized strategies and designs that are perfectly suited to drive your success.`,
  },
];

export const PromiseCard = ({
  title,
  promise,
  description,
}: PromiseCardType) => {
  return (
    <div className="border-t-[0.5px] border-[#0a2030] z-20 py-6">
      <div className="relative rounded-lg overflow-hidden flex flex-col items-center gap-1 z-20">
        {/* Card content */}
        <div className=" overflow-hidden relative flex flex-col items-center gap-0 justify-start z-20 pl-6 ">
          <div className="grid grid-cols-3 gap-12">
            <div className="col-span-2 flex flex-col gap-6 items-start z-20 px-6 pt-6 pb-6 ">
              <div>
                <span className="hidden lg:block text-lg sm:text-xl custom-text font-semibold uppercase">
                  {title}
                </span>
              </div>
              <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start pt-6">
                {promise}
              </p>
              <div className="flex flex-row items-center gap-4">
                <span className="custom-text text-lg xs:text-xl font-light z-20">
                  &#10003;
                </span>
                <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center xs:text-start z-20">
                  {description}
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden col-span-1 flex flex-col items-center justify-center rounded-lg border-[0.5px] border-[#0a2030]">
              {/* Blur gradients */}
              <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
              <span className="z-30">
                <HighBrandAwareness />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type AchievementCardProps = {
  id: number;
  stat: string;
  description: string;
};

export const achievements = [
  {
    id: 2,
    stat: "3X",
    description: "Boost in lead generation performace",
  },
  {
    id: 1,
    stat: "150%",
    description: "Increased engagement on platforms",
  },
  {
    id: 3,
    stat: "5",
    description: "Highly skilled experts in our team",
  },
];

export const HighBrandAwareness = () => (
  <svg
    version="1.1"
    id="Layer_1_1_"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 64 64"
    xmlSpace="preserve"
    width={200}
    height={200}
  >
    <path
      d="M3,44h23c0,0.188,0.053,0.375,0.159,0.54l2.332,3.614l-0.216,4.296c-0.02,0.393,0.193,0.761,0.543,0.94l3.829,1.958
      l1.957,3.83c0.179,0.351,0.542,0.567,0.941,0.543l4.296-0.215l3.613,2.333C43.62,61.947,43.809,62,43.998,62s0.377-0.053,0.542-0.16
      l3.614-2.332l4.296,0.216c0.401,0.019,0.761-0.193,0.94-0.543l1.958-3.829l3.83-1.957c0.351-0.179,0.563-0.547,0.543-0.941
      l-0.215-4.296l2.333-3.613c0.213-0.33,0.213-0.754,0-1.084l-2.332-3.614l0.216-4.296c0.02-0.393-0.193-0.761-0.543-0.94
      l-3.829-1.958l-1.957-3.83c-0.179-0.35-0.533-0.561-0.941-0.543l-4.296,0.215l-3.613-2.333C44.379,26.053,44.19,26,44,26V3
      c0-0.552-0.448-1-1-1H3C2.448,2,2,2.448,2,3v40C2,43.552,2.448,44,3,44z M44.002,28.19l3.341,2.158
      c0.176,0.114,0.378,0.172,0.593,0.159l3.972-0.199l1.81,3.542c0.096,0.187,0.248,0.339,0.436,0.435l3.541,1.811l-0.2,3.972
      c-0.011,0.209,0.045,0.417,0.158,0.592l2.157,3.343l-2.158,3.341c-0.114,0.176-0.169,0.383-0.159,0.593l0.199,3.972l-3.542,1.81
      c-0.187,0.096-0.339,0.248-0.435,0.436l-1.811,3.541l-3.972-0.2c-0.206-0.011-0.417,0.044-0.592,0.158l-3.343,2.157l-3.341-2.158
      c-0.162-0.105-0.351-0.16-0.542-0.16c-0.017,0-0.033,0-0.05,0.001l-3.972,0.199l-1.81-3.542c-0.096-0.187-0.248-0.339-0.436-0.435
      l-3.541-1.811l0.2-3.972c0.011-0.209-0.045-0.417-0.158-0.592l-2.157-3.343l2.158-3.341c0.114-0.176,0.169-0.383,0.159-0.593
      l-0.199-3.972l3.542-1.81c0.187-0.096,0.339-0.248,0.435-0.436l1.811-3.541l3.972,0.2c0.209,0.015,0.417-0.045,0.592-0.158
      L44.002,28.19z M18,4h10v13c0,0.551-0.449,1-1,1h-8c-0.551,0-1-0.449-1-1V4z M4,37h9v-2H4V4h12v13c0,1.654,1.346,3,3,3h8
      c1.654,0,3-1.346,3-3V4h12v23.102l-2.154,1.39l-4.296-0.216c-0.404-0.024-0.761,0.193-0.94,0.543l-1.958,3.829l-3.83,1.957
      c-0.351,0.179-0.563,0.547-0.543,0.941l0.215,4.296L27.1,42H4V37z"
      fill="#ffffff"
    />
    <path
      d="M33,43.999c-0.001,6.065,4.933,11,10.999,11.001c0,0,0.001,0,0.002,0c6.064,0,10.999-4.934,11-10.999
      s-4.933-11-10.999-11.001c0,0-0.001,0-0.002,0C37.936,33,33.001,37.934,33,43.999z M44,35c0,0,0.001,0,0.002,0
      c2.404,0,4.664,0.937,6.364,2.637c1.699,1.7,2.635,3.96,2.635,6.364c0,2.404-0.937,4.664-2.637,6.364C48.663,52.064,46.404,53,44,53
      c0,0-0.001,0-0.002,0c-2.404,0-4.664-0.937-6.364-2.637c-1.699-1.7-2.635-3.96-2.635-6.364c0-2.404,0.937-4.664,2.637-6.364
      C39.337,35.936,41.596,35,44,35z"
      fill="#ffffff"
    />
    <path
      d="M40.432,45.719l-0.509,3.12c-0.062,0.378,0.098,0.758,0.411,0.979c0.313,0.22,0.724,0.243,1.06,0.058L44,48.435l2.606,1.44
      C46.758,49.958,46.924,50,47.09,50c0.202,0,0.404-0.062,0.576-0.183c0.313-0.221,0.473-0.601,0.411-0.979l-0.509-3.12l2.147-2.201
      c0.262-0.268,0.352-0.66,0.232-1.016s-0.427-0.615-0.797-0.671l-2.927-0.447l-1.318-2.809C44.741,38.224,44.388,38,44,38
      s-0.741,0.224-0.905,0.575l-1.318,2.809l-2.927,0.447c-0.371,0.057-0.678,0.316-0.797,0.671s-0.029,0.748,0.232,1.016L40.432,45.719
      z M42.606,43.281c0.33-0.051,0.613-0.262,0.754-0.564L44,41.354l0.64,1.363c0.142,0.302,0.425,0.513,0.754,0.564l1.531,0.234
      l-1.141,1.169c-0.222,0.227-0.322,0.546-0.271,0.859l0.259,1.586l-1.288-0.712c-0.151-0.083-0.317-0.125-0.484-0.125
      s-0.333,0.042-0.484,0.125l-1.288,0.712l0.259-1.586c0.051-0.313-0.049-0.632-0.271-0.859l-1.141-1.169L42.606,43.281z"
      fill="#ffffff"
    />
    <rect x="15" y="35" width="2" height="2" fill="#ffffff" />
  </svg>
);
