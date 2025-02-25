import React from "react";
import SectionWrapper from "@/app/components/SectionWrapper";
import { div } from "framer-motion/client";
import { formatString } from "./HeroSection";
import { allServicesArray } from "./AllServicesData";

export default function StepsSection({ serviceName }: { serviceName: string }) {
  const selectedService = allServicesArray.find(
    (service) => formatString(serviceName) === service.name
  );

  return (
    <SectionWrapper>
      <div className="w-4 md:w-8 h-full absolute right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      <div className="w-4 md:w-8 h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

      <div className="relative">
        <p className="relative w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-center leading-none z-20 py-2 sm:py-6 md:py-4 xl:px-36">
          See all the steps
          <span className="custom-text"> we take </span> to make your{" "}
          <span className="custom-text"> project shine </span>
          {/* Blur background effect */}
        </p>
        {/* <span className="md:w-36 md:h-36 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></span> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:hidden items-start justify-start gap-6 pt-16">
        {steps.map((step) => (
          <StepsCardMobile
            id={1}
            description="Description"
            title="Discovery And Retribution"
            key={step.id}
          />
        ))}
      </div>

      <div className="hidden xl:flex lg:flex-col items-start justify-start gap-24 xs:gap-28 sm:gap-24 lg:gap-20 pt-16">
        <Test />
        <Test />
        <Test />
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
      <div className="relative flex flex-col gap-8 text-base text-[#eeeeee] font-normal py-8 text-start px-5 rounded-lg z-20">
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

export const Test = () => {
  return (
    <div className="flex flex-col">
      {/* First line */}
      <div className="grid grid-cols-3 gap-">
        <div className="relative flex flex-row items-center justify-between gap-4 text-base text-[#eeeeee] font-normal text-start rounded-lg z-20">
          <div className="w-full flex items-center gap-4">
            <span className="w-4 h-4 rounded-full bg-primary-blue"></span>
            <span className="w-10 h-0.5 border-[0.5px] border-[#0a2030]"></span>
          </div>
          <div className="relative flex gap-2 items-start justify-center z-20 text-center">
            <span className="custom-text font-black text-3xl xs:text-4xl md:text-3xl lg:text-4xl text-[#ffffff] z-20">
              1.
            </span>
            <span className="text-3xl xs:text-4xl md:text-3xl lg:text-4xl text-[#ffffff] z-20">
              Discovery
            </span>
            <div className="absolute -top-10 flex items-center justify-center z-10">
              <Logo />
            </div>
          </div>
          <div className="w-full relative lg:flex flex-col gap-4">
            <span className="w-20 h-0.5 border-[0.5px] border-[#0a2030]"></span>
          </div>
          <div className="w-16 h-16 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="w-full relative flex flex-col gap-2">
            <div className="w-full bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#1d263f] z-20 rounded-full  px-4 py-2">
              <span className="">Planning</span>
            </div>
          </div>
          <div className="hidden relative lg:flex flex-col gap-4">
            <span className="w-5 h-0.5 border-[0.5px] border-[#0a2030]"></span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2">
          <div className="hidden relative lg:flex flex-col gap-4">
            <span className="w-5 h-0.5 border-[0.5px] border-[#0a2030]"></span>
          </div>
          <div className="w-full relative flex flex-col gap-2">
            <div className="w-full bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#1d263f] z-20 rounded-full  px-4 py-2">
              <span className="">Planning</span>
            </div>
          </div>
        </div>
      </div>

      {/* Second line */}
      <div className="grid grid-cols-3 gap-6 ">
        <span className="invisible flex items-start justify-center text-3xl xs:text-4xl md:text-3xl lg:text-4xl text-[#ffffff] pl-2 z-20 text-center">
          Discovery
        </span>
        <div className="flex flex-row items-start">
          <div className="flex flex-col gap-2">
            <p className="text-base xs:text-lg font-light text-[#ffffff] text-center py-2 z-20">
              <span className="custom-text">&#x2022;</span> Planning phase is
              when we discover your product and research the market when we
              discover your product and research the market
            </p>
          </div>
        </div>
        <div className="flex flex-row items-start">
          <div className="flex flex-col gap-2">
            <p className="text-base xs:text-lg font-light text-[#ffffff] text-center py-2 z-20">
              <span className="custom-text">&#x2022;</span> Planning phase is
              when we discover your product and research the market when we
              discover your product and research the market when we discover
              your product and research the market
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const StepsCardMobile = ({
  id = 1,
  title = "Discovery",
  description = "Some description",
}: {
  id?: number;
  title?: string;
  description?: string;
}) => {
  return (
    <div
      key={id}
      className={`relative overflow-hidden flex-1 px-6 py-10 rounded-lg border-[0.5px] border-[#0a2030]`}
    >
      {/* Blur background */}
      <div className="w-32 h-32 absolute bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px] pointer-events-none"></div>

      <div className="w-full flex flex-col items-center justify-start lg:justify-center z-20">
        <span className="custom-text font-black text-7xl z-0 mr-4">{id}</span>
        <span className="text-[#ffffff] font-semibold text-3xl text-center x z-20">
          {title}
        </span>
      </div>

      {/* Subheading and description */}
      <div className="relative flex flex-col gap-2 pt-8">
        <div className="w-full  flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#1d263f] z-20 rounded-full  px-4 py-2">
          <span className="">Planning</span>
        </div>
        <p className="text-xl font-light text-[#ffffff] text-center px-4 py-2 z-20">
          <span className="custom-text">&#x2022;</span> Planning phase is when
          we discover your product and research the market
        </p>
      </div>

      {/* Vertical line */}
      <div className="relative  flex flex-col items-center justify-center gap-4 py-2">
        <span className="w-0.5 h-10 border-[0.5px] border-[#0a2030]"></span>
      </div>

      {/* Subheading and description */}
      <div className="relative flex flex-col gap-2">
        <div className="w-full  flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#1d263f] z-20 rounded-full  px-4 py-2">
          <span className="">Planning</span>
        </div>
        <p className="text-xl font-light text-[#ffffff] text-center px-4 py-2 z-20">
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
