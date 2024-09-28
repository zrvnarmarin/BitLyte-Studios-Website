import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function StepsSection() {
  return (
    <SectionWrapper>
      <div className="relative w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium xs:font-normal text-center z-20 py-2 sm:py-6 md:py-4 xl:px-36">
        See all the steps
        <span className="custom-text"> we take </span> to make your{" "}
        <span className="custom-text"> project shine </span>

        {/* Blur background effect */}
        <span className="md:w-24 md:h-24 lg:w-44 lg:h-44 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col items-start justify-start gap-24 xs:gap-28 sm:gap-24 lg:gap-20 pt-16">
        {steps.map((step) => (
          <StepCard key={step.id} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const StepCard = ({
  id,
  title,
  description,
  blurBackground,
}: StepsCardType) => {
  return (
    <div className="w-full flex flex-col md:flex-col lg:flex-row items-center gap-6">
      {/* Logo and title with id */}
      <div className="relative flex flex-col gap-4 text-base text-[#eeeeee] font-normal py-8 text-start px-5 rounded-lg z-20">
        <span className="text-3xl xs:text-4xl md:text-3xl lg:text-4xl text-[#ffffff] pl-2 z-20 text-center">
          <span className="custom-text font-black">{1}. </span>
          Discovery
        </span>
        <div className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <Logo />
        </div>
      </div>

      {/* Horizontal line */}
      <div className="hidden relative lg:flex flex-col gap-4">
        <span className="w-20 h-0.5 border-[0.5px] border-[#0a2030]"></span>
      </div>

      {/* Vertical line */}
      <div className="relative lg:hidden flex flex-col gap-4 pt-8">
        <span className="w-0.5 h-20 border-[0.5px] border-[#0a2030]"></span>
      </div>

      <div className="relative flex flex-col gap-2">
        <div className="w-full bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#1d263f] z-20 rounded-full  px-4 py-2">
          <span className="">Planning</span>
        </div>
        <p className="text-base xs:text-lg font-light text-[#ffffff] text-center px-4 py-2 z-20">
          <span className="custom-text">&#x2022;</span> Planning phase is when
          we discover your product and research the market
        </p>
      </div>

      {/* Horizontal line */}
      <div className="hidden relative lg:flex flex-col gap-4">
        <span className="w-20 h-0.5 border-[0.5px] border-[#0a2030]"></span>
      </div>

      {/* Vertical line */}
      <div className="relative lg:hidden flex flex-col gap-4">
        <span className="w-0.5 h-20 border-[0.5px] border-[#0a2030]"></span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="w-full bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#1d263f] z-20 rounded-full  px-4 py-2">
          <span className="">Planning</span>
        </div>
        <p className="text-base xs:text-lg font-light text-[#ffffff] text-center px-4 py-2 z-20">
          <span className="custom-text">&#x2022;</span> Planning phase is when
          we discover your product and research the market
        </p>
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

export const Logo = ({ width, height }: { width: number; height: number }) => {
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

export const LogoRightPart = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 45 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7832 35.1431H25.6281L44.111 17.5716L32.6173 0L27.6201 0L20.7832 35.1431Z"
        fill="#5775D0"
      />
    </svg>
  );
};
