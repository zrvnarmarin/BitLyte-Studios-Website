import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { FrontendDevelopmentIcon } from "./HeroSection";

export default function StepsSection() {
  return (
    <SectionWrapper>
      <p className="w-full text-start text-4xl text-[#ffffff]">
        See all the steps
        <span className="linear-gradient-purple-text"> we take </span> to make
        your{" "}
        <span className="linear-gradient-purple-text"> project shine </span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <StepCard
            key={step.id}
            id={step.id}
            title={step.title}
            description={step.description}
            blurBackground={step.blurBackground}
          />
        ))}
      </div>

      <p className="w-full text-start text-4xl text-[#ffffff]">
        See all the steps
        <span className="linear-gradient-purple-text"> we take </span> to make
        your{" "}
        <span className="linear-gradient-purple-text"> project shine </span>
      </p>

    </SectionWrapper>
  );
}

export const StepCard = ({
  id,
  title,
  description,
  blurBackground,
}: {
  id: number;
  title: string;
  description: string;
  blurBackground: string;
}) => {
  return (
    <div className="relative overflow-hidden flex flex-col gap-4 text-base bg-[#0b0b0b] text-[#eeeeee] border-[0.5px] border-[#252525] font-normal py-8 text-start px-5 rounded-lg">
      <span className="text-3xl text-[#ffffff] pl-2 z-20">
        <span className="linear-gradient-purple-text font-black"> {id}. </span>
        {title}
      </span>
      <div
        className={`w-24 h-24 absolute right-0 bottom-0 bg-gradient-to-r from-[#000000] ${blurBackground} z-10 blur-[100px]`}
      ></div>
      <p className="text-base text-[#eeeeee] font-normal z-20">{description}</p>
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <Logo />
      </div>
    </div>
  );
};

export const steps: StepsCardType[] = [
  {
    id: 1,
    icon: FrontendDevelopmentIcon,
    title: "Discovery",
    description:
      "Discovery phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
  {
    id: 2,
    icon: FrontendDevelopmentIcon,
    title: "Planning",
    description:
      "Planning phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
  {
    id: 3,
    icon: FrontendDevelopmentIcon,
    title: "Development",
    description:
      "Development phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
  {
    id: 4,
    icon: FrontendDevelopmentIcon,
    title: "Testing",
    description:
      "Testing phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
];

export type StepsCardType = {
  id: number;
  icon: () => React.JSX.Element;
  title: string;
  description: string;
  blurBackground: string;
};

export const Logo = () => {
  return (
    <svg
      width="200"
      height="200"
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
      />
      <path
        d="M20.7832 35.1431H25.6281L44.111 17.5716L32.6173 0L27.6201 0L20.7832 35.1431Z"
        fill="url(#gradient2)"
      />
    </svg>
  );
};
