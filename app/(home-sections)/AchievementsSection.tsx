import React from "react";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import "../../public/test.css";
import { LogoArrowRight } from "./ProjectsSection";

export default function AchievementsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20 pb-12">
        Our Achievements
      </h2>

      <div className="w-full relative  grid grid-cols-2 items-center gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="w-full text-3xl text-start font-light text-[#ffffff] z-20">
            We helped business increase sales by{" "}
            <span className="custom-text">27%</span> in the first month working
            with us
          </h3>
          <div className="flex flex-row gap-4 items-center z-20 pt-10">
            <BulletPoint />
            <p className="text-xl text-start font-light text-[#ffffff]">
              We`re constantly tracking the performance of our services. We`ll
              use internal testing to track increased exposure and other
              critical metrics. It`s also the best way to provide concrete
              evidence of our impact.
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center z-20 pt-4">
            <BulletPoint />
            <p className="text-xl text-start font-light text-[#ffffff]">
              In addition to tracking exposure and critical metrics, we also
              focus on gathering actionable insights from user feedback and
              performance data. This approach allows us to refine our offerings
              continually, ensuring that we deliver tangible results and
              consistently provide value to our clients.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <div className="relative  flex items-center justify-center bg-gradient-to-r from-[#292929] to-[#090909] border-[#252525] border-[0.5px] rounded-lg w-2/3">
            {/* Blur background */}
            <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-[#3679aa] to-[#002139] z-10 blur-[130px]"></div>

            <div className=" w-fit p-12 rounded-lg flex flex-col items-center justify-center gap-6">
              <h2 className="w-full text-5xl text-[#ffffff] text-center z-20">
                <p className="custom-text font-black">Get to know us</p> better
              </h2>
              <button className="w-fit bg-[#ffffff] flex gap-2 items-center justify-center text-[#000000] font-normal text-xl z-20 rounded-full border-[0.5px] border-[#ffffff] py-2 px-6">
                <LogoArrowRight fillColor="#000000" />
                Get to know us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements cards container */}
      <div className="w-full flex flex-col lg:flex-row gap-4 pt-24">
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
      className={`w-full relative overflow-hidden flex flex-col items-center rounded-lg p-16 border-[0.5px] border-[#3c3916]`}
    >
      {/* Blur background */}
      <div
        className={`w-96 h-96 absolute right-0 bottom-0 ${colorClasses.container} z-10 blur-[130px]`}
      ></div>

      <h3 className={`font-semibold text-7xl text-center text-[#ffffff] z-20`}>
        {stat}
      </h3>
      <p className="w-full text-2xl text-center font-normal text-[#ffffff] pt-6 z-20">
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
