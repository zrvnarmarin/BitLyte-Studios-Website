import React from "react";
import Image from "next/image";
import "../../../public/test.css";
import SectionWrapper from "@/app/components/SectionWrapper";
import { Logo } from "@/app/services/[serviceId]/StepsSection";

export default function AfterProposalSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-3xl text-[#ffffff]">
        What are the next steps?
      </h2>
      <p className="text-xl text-[#eeeeee] font-normal">
        We are thrilled to engage with you and make your goals come to life!
      </p>

      <div className="relative w-fit bg-gradient-to-r from-[#292929] to-[#0b0b0b] border-[0.5px] border-[#123a57] p-5 rounded-lg">
        <div className="relative flex flex-col gap-4 text-base bg-[#0b0b0b] text-[#eeeeee] font-normal py-8 text-start px-5 rounded-lg">
          <p className="w-full text-[#FF7A1A] rounded-lg p-1 text-2xl font-bold z-20">
            Crafting a Proposal
          </p>
          <p className="text-base text-[#eeeeee] font-normal z-20 pt-2">
          From our detailed review, we'll create a tailored proposal detailing
          the project scope, timelines, and a transparent cost breakdown.
        </p>
          {/* <div
          className={`w-24 h-24 absolute inset-0 bg-gradient-to-r from-[#000000] to-[#653ED0] z-10 blur-[100px]`}
        ></div> */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Logo />
          </div>
        </div>
      </div>

      <div className="relative w-fit bg-gradient-to-r from-[#292929] to-[#0b0b0b] border-[0.5px] border-[#6f3c17] p-5 rounded-lg">
        <span className="w-full h-full text-[#FF7A1A]/10 absolute inset-0 flex items-center justify-center z-10 text-8xl">
          2
        </span>
        <p className="w-full text-[#FF7A1A] rounded-lg p-1 text-2xl font-bold z-20">
          Crafting a Proposal
        </p>
        <p className="text-base text-[#eeeeee] font-normal z-20 pt-2">
          From our detailed review, we'll create a tailored proposal detailing
          the project scope, timelines, and a transparent cost breakdown.
        </p>
      </div>

      <div className="relative w-fit bg-gradient-to-r from-[#292929] to-[#0b0b0b] border-[0.5px] border-[#681a6f] p-5 rounded-lg">
        <span className="w-full h-full text-[#ED1AFF]/10 absolute inset-0 flex items-center justify-center z-10 text-8xl">
          3
        </span>
        <p className="w-full text-[#ED1AFF] rounded-lg p-1 text-2xl font-bold z-20">
          Initiating the Project
        </p>
        <p className="text-base text-[#eeeeee] font-normal z-20 pt-2">
          With your approval, we will begin working on your project diligently
          and keeping you updated all along the way.
        </p>
      </div>

      {/* <div className="relative w-fit bg-gradient-to-r from-[#292929] to-[#003e6a] p-5 rounded-lg">
                <p className="w-full text-[#1A9FFF] rounded-lg p-1 z-20   text-2xl font-bold ">
                    We`ll analyse your brief
                </p>
                <p className="text-base text-[#eeeeee] font-normal z-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nostrum?
                </p>
            </div> */}

      {/* <div className="relative w-fit bg-gradient-to-r from-[#292929] to-[#006A61] p-5 rounded-lg">
                <p className="w-full text-[#1A9FFF] rounded-lg p-1 z-20   text-2xl font-bold ">
                    We`ll analyse your brief
                </p>
                <p className="text-base text-[#eeeeee] font-normal z-20">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, nostrum?
                </p>
            </div> */}

      {/* <div className="w-full flex flex-col gap-4">
                {achievements.map(achievement =>
                    <AchievementCard 
                        key={achievement.id}
                        id={achievement.id}
                        stat={achievement.stat} 
                        description={achievement.description} 
                        colorClasses={achievement.colorClasses}
                    />
                )}
            </div> */}
    </SectionWrapper>
  );
}

export const LogoIcon = () => {
  return (
    <svg
      width="45"
      height="40"
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.783 35.1431H25.6279L44.1108 17.5716L32.6171 4.36873e-07L27.6199 0L20.783 35.1431Z"
        fill="#FF7A1A"
      />
    </svg>
  );
};
