import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import "../../../public/test.css";

export default function StepsSection({ projectName }: { projectName: string }) {
  return (
    <SectionWrapper>
      {/* <div className="w-4 md:w-8 h-full absolute right-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div> */}
      {/* <div className="w-4 md:w-8 h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div> */}

      {/* Subheading */}
      <p className="relative w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start leading-none z-20">
        Process
      </p>

      {/* Steps goals and outcome mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 items-start justify-start gap-12 pt-4 sm:pt-8 md:pt-12">
        {steps.map((step) => (
          <ProcessCard
            key={step.id}
            id={step.id}
            name={step.name}
            goals={step.goals}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ProcessCard = ({
  id,
  name,
  goals,
}: {
  id?: number;
  name?: string;
  goals: { id: number; name: string }[];
}) => {
  return (
    <div
      key={id}
      className={`relative overflow-hidden`}
    >
      {/* Blur background */}
      {/* <div className="w-32 h-32 absolute bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div> */}
      {/* <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div> */}

      <div className="relative w-full flex flex-col items-center justify-start lg:justify-center z-20">
        <div className="absolute flex items-center justify-center z-10">
          {/* <Logo /> */}
        </div>
        <span className="custom-text-yellow font-black text-7xl  z-20">{id}.</span>
        <span className="text-[#ffffff] font-semibold text-3xl text-center x z-20">
          {name}
        </span>
      </div>

      {/* Vertical line */}
      <div className="relative  flex flex-col items-center justify-center gap-4 py-2">
        <span className="w-0.5 h-10 border-[0.5px] border-[#4b4d1e]"></span>
      </div>

      {/* Goals heading */}
      <div className="w-full relative flex flex-col gap-2">
        <div className="w-full bg-gradient-to-t from-[#0b0b0b] to-[#edff272b] flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#4b4d1e] z-20 rounded-full  px-4 py-2">
          <span className="">Leading Step</span>
        </div>
      </div>

      {/* Goals */}
      <div className="flex flex-wrap justify-center items-start gap-2 pt-2">
        {goals.map((goal) => (
          <div
            key={goal.id}
            className="w-full flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#4b4d1e] z-20 rounded-full px-6 py-2"
          >
            <span className="text-base xs:text-lg font-light text-[#ffffff] text-center">
              {goal.name}
            </span>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export const Logo = ({
  width = 130,
  height = 130,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      className="z-30"
      width={width}
      height={height}
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b0b0b">
            <animate
              attributeName="stop-color"
              values="#0b0b0b; #161c2f; #0b0b0b"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stop-color="#232c4a">
            <animate
              attributeName="stop-color"
              values="#161c2f; #0b0b0b; #161c2f"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0b0b0b">
            <animate
              attributeName="stop-color"
              values="#0b0b0b; #161c2f; #0b0b0b"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stop-color="#161c2f">
            <animate
              attributeName="stop-color"
              values="#161c2f; #0b0b0b; #161c2f"
              dur="3s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <path
        d="M23.3278 4.85669H18.4829L0 22.4283L11.4937 39.9998H16.4909L23.3278 4.85669Z"
        fill="url(#gradient1)"
        stroke="#5775D0"
        strokeWidth="0.01"
      />
      <path
        d="M20.7832 35.1431H25.6281L44.111 17.5716L32.6173 0L27.6201 0L20.7832 35.1431Z"
        fill="url(#gradient2)"
        stroke="#5775D0"
        strokeWidth="0.01"
      />
    </svg>
  );
};

const steps = [
  {
    id: 1,
    name: "Discovery",
    goals: [
      {
        id: 1,
        name: "Market Research And UI/UX Design",
      },
      {
        id: 2,
        name: "Brand Identity Of Design",
      },
      {
        id: 3,
        name: "Market Research",
      },
      {
        id: 4,
        name: "Market Research",
      },
    ],
  },
  {
    id: 2,
    name: "Design",
    goals: [
      {
        id: 1,
        name: "Market Research And UI/UX Design",
      },
      {
        id: 2,
        name: "Brand Identity Of Design",
      },
      {
        id: 3,
        name: "Market Research",
      },
      {
        id: 4,
        name: "Market Research",
      },
    ],
  },
  {
    id: 3,
    name: "Optimization",
    goals: [
      {
        id: 1,
        name: "Market Research And UI/UX Design",
      },
      {
        id: 2,
        name: "Brand Identity Of Design",
      },
      {
        id: 3,
        name: "Market Research",
      },
      {
        id: 4,
        name: "Market Research",
      },
    ],
  },
  {
    id: 4,
    name: "Tracking Results",
    goals: [
      {
        id: 1,
        name: "Market Research And UI/UX Design",
      },
      {
        id: 2,
        name: "Brand Identity Of Design",
      },
      {
        id: 3,
        name: "Market Research",
      },
      {
        id: 4,
        name: "Market Research",
      },
    ],
  },
];
