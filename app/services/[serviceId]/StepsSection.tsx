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

      <div className="flex flex-col items-start justify-start gap-16 pt-16">
        {steps.map((step) => (
          <StepCard key={step.id}  />
        ))}
      </div>

    </SectionWrapper>
  );
}

export const StepCard = ({ id, title, description, blurBackground } : StepsCardType) => {
  return (
    <div className="w-full flex flex-rows items-center gap-16">
      {/* Logo and title with id */}
      <div className="relative flex flex-col gap-4 text-base bg-[#0b0b0b] text-[#eeeeee] font-normal py-8 text-start px-5 rounded-lg">
        <span className="text-3xl text-[#ffffff] pl-2 z-20 text-center">
          <span className="linear-gradient-purple-text font-black">{1}. </span>
          Discovery
        </span>
        {/* <div
          className={`w-24 h-24 absolute inset-0 bg-gradient-to-r from-[#000000] to-[#653ED0] z-10 blur-[100px]`}
        ></div> */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Logo />
        </div>
      </div>

      {/* Gradient line */}
      <div className="flex flex-0  gap-2 w-full h-full bg-gradient-to-r from-[#7f96db] to-[#5775D0] rounded-lg">
        <span className="h-24 w-4rounded-lg"></span>
      </div>

      {/* Steps */}
      <div className="relative  flex flex-col gap-4 text-base bg-[#0b0b0b] text-[#eeeeee]  font-normal  text-start ">
        <div
          className={`w-24 h-24 absolute inset-0 bg-gradient-to-r from-[#000000] to-[#653ED0] z-10 blur-[100px]`}
        ></div>
        <p className="text-base text-[#eeeeee] font-normal z-20 rounded-full  px-4 py-2">
          Planning phase is when we discover your product and research the
          market 
        </p>
        <div className="flex flex-col gap-2">
          <p className="hover:bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center w-full text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
            Planning
          </p>
          <p className="hover:bg-gradient-to-r from-[#0b0b0b] to-[#131313] flex gap-2 items-center justify-center w-full text-base text-[#eeeeee] font-normal z-20 rounded-full border-[0.5px] border-[#252525] px-4 py-2">
            Planning
          </p>
        </div>
      </div>
    </div>
  );
};

export const BulletPoint = () => {
  return (
    <svg
      width="8"
      height="8"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.25"
        y="0.25"
        width="27.5"
        height="27.5"
        rx="13.75"
        fill="url(#paint0_linear_162_2)"
        stroke="#A5B7EC"
        stroke-width="0.5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_162_2"
          x1="-1.08097e-08"
          y1="14.3458"
          x2="28"
          y2="13.6542"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#7F96DB" />
          <stop offset="1" stop-color="#5775D0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const StepsCard = ({
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
      <span className="text-3xl text-[#ffffff] pl-2 z-20 text-center">
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
    title: "Discovery",
    description:
      "Discovery phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Planning phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Development phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "Testing phase is when we discover your product and research the market",
    blurBackground: "to-[#653ED0]",
  },
];

export type StepsCardType = {
  id?: number;
  title?: string;
  description?: string;
  blurBackground?: string;
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

export const LogoLeftPart = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3278 4.85669H18.4829L0 22.4283L11.4937 39.9998H16.4909L23.3278 4.85669Z"
        fill="url(#gradient1)"
      />
    </svg>
  );
};

export const LogoRightPart = () => {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7832 35.1431H25.6281L44.111 17.5716L32.6173 0L27.6201 0L20.7832 35.1431Z"
        fill="url(#gradient2)"
      />
    </svg>
  );
};
