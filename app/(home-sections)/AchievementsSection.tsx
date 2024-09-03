import React from "react";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import { LogoArrowRight } from "./ProjectsSection";
import Link from "next/link";

export default function AchievementsSection() {
  return (
    <SectionWrapper>
      <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium text-center xs:font-normal z-20 py-4 sm:py-8 md:py-6 px-36">
        We helped businesses increase sales by{" "}
        <span className="custom-text">27%</span>. Your product`s achievements is
        our success. Our design approach is result-driven and it`s crucial for
        us to make your product reach it`s business metrics.
        <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      </h3>

      {/* <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#1A9FFF] z-10 blur-[230px]"></div> */}

      {/* Achievements cards container */}
      <div className="w-full flex flex-col lg:flex-row gap-4 py-4 sm:py-8 md:py-12">
        {/* Achievement card */}
        {achievements.map((achievement) => (
          <AchievementCard
            key={achievement.id}
            id={achievement.id}
            stat={achievement.stat}
            description={achievement.description}
            colorClasses={achievement.colorClasses}
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 py-4 sm:yt-8 md:py-16">
        <h3 className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium text-center xs:font-normal z-20">
          We helped businesses increase sales by{" "}
          <span className="custom-text">27%</span>
          <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        </h3>
        <p className="relative w-full text-lg xs:text-xl sm:text-2xl text-[#ffffff] font-normal text-center xs:font-normal z-20 px-56">
          We helped businesses increase sales by{" "}
          <span className="custom-text">27%</span>. Your product`s achievements
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum
          dolores voluptatem harum labore atque explicabo alias velit beatae
          asperiores!
          <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        </p>
      </div>

      {/* Divider line */}
      {/* <div className="w-full h-[0.5px] bg-[#252525] " /> */}

      <div className="w-full relative grid grid-cols-1 xl:grid-cols-1 items-start gap-6 pt-4 sm:pt-8 md:pt-12">
        <div className="flex flex-col gap-6">
          {/* Cards section */}
          <div className="w-full flex gap-6 items-center">
            <div className="relative overflow-hidden rounded-lg flex flex-col items-center gap-4 rounded- p-6 border-[0.5px] border-[#252525]">
              <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

              <div className="z-20">
                <SupportAndPartnershipIcon width={100} height={100} />
              </div>
              <div className="flex flex-col items-center gap-0 justify-start z-20 px-">
                <p className="text-[#ffffff] font-bold text-2xl xs:text-3xl text-center z-20">
                  App design that reflects your brand
                </p>
                <div className="flex flex-col xs:flex-row gap-2 xs:gap-8 items-center z-20 pt-4">
                  <span className="custom-text text-3xl sm:text-4xl">
                    &#10003;
                  </span>
                  <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center xs:text-start z-20">
                    We`re constantly tracking the performance of our services.
                    We`ll use internal testing to track increased exposure and
                    other critical metrics.
                  </p>
                </div>
              </div>
            </div>

            {/* <span className="flex w-20 h-.5 justify-center items-center text-center bg-primary-blue border-[0.5px] border-[#0a2030]"></span> */}

            <div className="relative overflow-hidden rounded-lg flex flex-col items-center gap-4 rounded- p-6 border-[0.5px] border-[#252525]">
              <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

              <div className="z-20">
                <SupportAndPartnershipIcon width={100} height={100} />
              </div>
              <div className="flex flex-col items-center gap-0 justify-start z-20 px-">
                <p className="text-[#ffffff] font-bold text-2xl xs:text-3xl text-center z-20">
                  App design that reflects your brand
                </p>
                <div className="flex flex-col xs:flex-row gap-2 xs:gap-8 items-center z-20 pt-4">
                  <span className="custom-text text-3xl sm:text-4xl">
                    &#10003;
                  </span>
                  <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center xs:text-start z-20">
                    We`re constantly tracking the performance of our services.
                    We`ll use internal testing to track increased exposure and
                    other critical metrics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full flex justify-center pt-4 md:pt-8 z-30">
          <Link href={`/about-us`}>
            <button className="w-fit flex items-center gap-2 py-4 px-12 bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] text-[#ffffff] hover:text-[#111111] border-[0.5px] border-[#0a2030] hover:bg-[#ffffff] rounded-full font-normal text-xl xs:text-2xl sm:text-2xl">
              <LogoArrowRight fillColor="#ffffff" width={11} height={17} />
              Get To Know Us Better
            </button>
          </Link>
        </div>

      </div>
    </SectionWrapper>
  );
}

export const AchievementCard = ({
  stat,
  description,
  colorClasses,
}: AchievementCardProps) => {
  return (
    <div
      className={`w-full relative overflow-hidden bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] border-[0.5px] border-[#252525] flex flex-col items-center rounded-lg p-16 z-30 `}
    >
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

export type AchievementCardProps = {
  id: number;
  stat: string;
  description: string;
  colorClasses: { container: string };
};

export const achievements = [
  {
    id: 1,
    stat: "80%",
    description: "Reduction on latest onboarding",
    colorClasses: {
      container: "bg-gradient-to-r from-[#1A9FFF] to-[#0086E6]",
    },
  },
  {
    id: 2,
    stat: "7%",
    description: "Vulnerability fixes on GitHub",
    colorClasses: {
      container: "bg-gradient-to-r from-[#1A9FFF] to-[#0086E6]",
    },
  },
  {
    id: 3,
    stat: "22%",
    description: "Increased development productivity",
    colorClasses: {
      container: "bg-gradient-to-r from-[#1A9FFF] to-[#0086E6]",
    },
  },
];

export const BulletPoint = () => {
  return (
    <svg
      height="40px"
      width="40px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 511.999 511.999"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />

      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          fill="#1A9FFF"
          d="M494.328,98.756l-33.279-33.279c-9.99-9.99-26.185-9.99-36.175,0L172.007,318.344 c-3.877,3.877-10.163,3.877-14.04,0L87.11,247.488c-9.99-9.99-26.185-9.99-36.175,0l-33.26,33.26c-9.99,9.99-9.99,26.185,0,36.175 l129.581,129.581c9.997,9.997,26.209,9.989,36.194-0.019l310.896-311.572C504.318,124.919,504.309,108.738,494.328,98.756z"
        />
        <g>
          <path
            fill="#4D4D4D"
            d="M165.343,464.196c-9.557,0-18.54-3.721-25.3-10.479L10.462,324.135 c-13.949-13.95-13.949-36.649,0-50.6l33.26-33.26c13.951-13.95,36.649-13.95,50.6,0l70.664,70.664L417.661,58.265 c13.95-13.948,36.649-13.949,50.6,0l33.279,33.28l0,0c13.935,13.936,13.947,36.623,0.027,50.573L190.67,453.689 c-6.755,6.771-15.744,10.502-25.308,10.507C165.356,464.196,165.349,464.196,165.343,464.196z M69.022,250.203 c-3.938,0-7.876,1.499-10.875,4.498l-33.259,33.26c-5.997,5.997-5.997,15.754,0,21.75l129.581,129.581 c2.905,2.905,6.767,4.505,10.874,4.505c0.003,0,0.006,0,0.009,0c4.112-0.002,7.974-1.607,10.879-4.517l310.896-311.572 c5.983-5.997,5.978-15.748-0.012-21.738l0,0l-33.279-33.281c-5.996-5.997-15.754-5.996-21.75,0L179.219,325.557 c-7.848,7.848-20.617,7.847-28.466,0l-70.856-70.856C76.898,251.702,72.961,250.203,69.022,250.203z"
          />
          <path
            fill="#4D4D4D"
            d="M277.27,318.332c-2.611,0-5.221-0.997-7.213-2.989c-3.983-3.983-3.982-10.442,0.001-14.425 l3.192-3.192c3.983-3.982,10.443-3.982,14.425,0.001c3.983,3.983,3.982,10.442-0.001,14.425l-3.192,3.192 C282.49,317.337,279.88,318.332,277.27,318.332z"
          />
          <path
            fill="#4D4D4D"
            d="M168.75,426.851c-2.61,0-5.221-0.996-7.212-2.988c-3.983-3.983-3.983-10.442,0-14.426l81.922-81.922 c3.983-3.983,10.442-3.983,14.426,0c3.984,3.983,3.983,10.442,0,14.426l-81.922,81.922 C173.971,425.856,171.36,426.851,168.75,426.851z"
          />
        </g>
      </g>
    </svg>
  );
};

const SupportAndPartnershipIcon = ({
  width = 50,
  height = 50,
}: {
  width: number;
  height: number;
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 48 48"
    fill="#55b8ff"
    stroke="#55b8ff"
  >
    <g id="Layer_2" data-name="Layer 2">
      <g id="Q3_icons" data-name="Q3 icons">
        <g>
          <path d="M18.4,13.8A5.9,5.9,0,0,1,23,12.1a7.6,7.6,0,0,1,5.2,2.2c2.9,2.8,3.4,7.2,1,9.7a2.1,2.1,0,0,0,0,2.9,2.4,2.4,0,0,0,1.4.5,1.8,1.8,0,0,0,1.4-.6c3.2-3.3,3.5-8.2,1.3-12.3H34a6.1,6.1,0,0,0,4.5-1.9,6.3,6.3,0,0,0-.2-8.9A6.5,6.5,0,0,0,34,2a6.6,6.6,0,0,0-4.6,1.9,6.3,6.3,0,0,0-1.6,5.3,11.2,11.2,0,0,0-4.7-1.1,9.5,9.5,0,0,0-7.6,3,2,2,0,1,0,2.9,2.7Z" />
          <path d="M21.4,38.4C18,37.5,16,33.6,17,29.7s4.5-6.6,7.9-5.7a2,2,0,0,0,2.4-1.5,1.9,1.9,0,0,0-1.4-2.4,10.4,10.4,0,0,0-11.3,5.1,6.3,6.3,0,0,0-4.3-3.6l-1.4-.2a6.3,6.3,0,0,0-6.1,4.8,6.2,6.2,0,0,0,4.6,7.6l1.5.2a6.2,6.2,0,0,0,3.9-1.4,10.5,10.5,0,0,0,7.7,9.7h.4a2,2,0,0,0,2-1.5A1.9,1.9,0,0,0,21.4,38.4Z" />
          <path d="M40.5,33.9a11.9,11.9,0,0,0,3.3-3.4A9.8,9.8,0,0,0,45,22.4,2,2,0,0,0,42.5,21a2,2,0,0,0-1.3,2.5,5.6,5.6,0,0,1-.8,4.8,8.2,8.2,0,0,1-4.5,3.4C32,32.9,28,31,27,27.7a2,2,0,0,0-2.5-1.4,2,2,0,0,0-1.4,2.5A10.5,10.5,0,0,0,33.2,36a6.3,6.3,0,0,0,5,10,5.7,5.7,0,0,0,1.8-.3,6.3,6.3,0,0,0,.5-11.8Z" />
        </g>
      </g>
    </g>
  </svg>
);
