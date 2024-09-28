import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import Link from "next/link";
import TestIkona from "../../../public/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg";

export default function HeroSection({ serviceName } : { serviceName: string }) {
  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 flex flex-col gap-6 relative">
          {/* Blur background effect */}
          <div className="lg:w-48 lg:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-tight text-[#ffffff] font-medium text-center lg:text-left z-30">
            <span className="custom-text">{formatString(serviceName)}</span> That Makes A Difference
          </h1>

          <p className="text-lg xs:text-xl font-light text-[#ffffff] text-center lg:text-left z-20">
            As a UI/UX design agency, we create successful digital products that
            combine user needs with business goals. Our human centred design
            approach makes it happen.
          </p>

          {/* CTA button */}
          <div className="relative w-full flex justify-start pt-4 md:pt-8 z-30">
            <Link href={`/contact`}>
              <button className="relative overflow-hidden w-fit flex items-center gap-2 py-4 px-12 text-[#000000] bg-[#ffffff]  rounded-full font-medium text-2xl xs:text-2xl sm:text-2xl md:text-2xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
                <LogoForButtonRotated
                  fillColor="#000000"
                  width={18}
                  height={20}
                />
                Start Building
              </button>
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative flex items-center justify-center">
          {/* Blur color effect behind the image */}
          <div className="w-80 h-80 lg:w-[20rem] lg:h-[20rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
          <Image
            src={TestIkona}
            alt="t"
            className="w-full h-full max-w-[254px] xs:max-w-[274px] sm:max-w-[314px] lg:max-w-[444px] 2xl:max-w-[474px] z-20"
          />
        </div>
      </div>
    </HeroSectionWrapper>
  );
}

export const WebServicesIcon = ({
  width = 500,
  height = 500,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      className="z-20"
      width={width}
      height={height}
      viewBox="-27 0 310 310"
      preserveAspectRatio="xMidYMid"
      fill="#5775D0"
      stroke="#5775D0"
      strokeWidth="0.1"
      transform="scale(-1, 1)" // Flips the icon horizontally
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path
            d="M36.08,262.013 L0,244.832 L0,64 L36.08,45.96 L36.211,46.147 L36.451,261.648 L36.08,262.013"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M168.376,226.362 L36.08,262.013 L36.08,45.96 L168.376,82.04 L168.376,226.362"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
          <path
            d="M59.705,124.134 L128,115.544 L129.667,117 L129.667,190.333 L128,192.859 L59.705,184.698 L59.705,124.134"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,109.53 L193.718,115.973 L59.705,94.497 L127.167,72.5 L256,109.53"
            fill="#232c4a"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,199.731 L193.718,193.289 L59.705,214.765 L132.167,233.167 L256,199.731"
            fill="#232c4a"
          >
            {" "}
          </path>{" "}
          <path
            d="M59.705,274.899 L128,309.262 L130.887,232.694 L59.705,214.765 L59.705,274.899"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,245.262 L128,309.262 L128,231.946 L256,199.731 L256,245.262"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
          <path
            d="M59.705,33.933 L128,0 L128.495,0.698 L128.285,76.844 L128,77.315 L59.705,94.497 L59.705,33.933"
            fill="#161c2f"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,176.966 L128,192.859 L128,115.544 L256,131.866 L256,176.966"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
          <path
            d="M256,109.53 L128,77.315 L128,0 L256,64 L256,109.53"
            fill="#0b0b0b"
          >
            {" "}
          </path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
};

export const LeftArrowIcon = ({
  width = 15,
  height = 15,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -6.5 36 36"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0" />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        <title>left-arrow</title>
        <desc>Created with Sketch.</desc>
        <g
          id="icons"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="ui-gambling-website-lined-icnos-casinoshunter"
            transform="translate(-342.000000, -159.000000)"
            fill="#ffffff"
            fillRule="nonzero"
          >
            <g id="square-filled" transform="translate(50.000000, 120.000000)">
              <path
                d="M317.108012,39.2902857 L327.649804,49.7417043 L327.708994,49.7959169 C327.889141,49.9745543 327.986143,50.2044182 328,50.4382227 L328,50.5617773 C327.986143,50.7955818 327.889141,51.0254457 327.708994,51.2040831 L327.6571,51.2479803 L317.108012,61.7097143 C316.717694,62.0967619 316.084865,62.0967619 315.694547,61.7097143 C315.30423,61.3226668 315.30423,60.6951387 315.694547,60.3080911 L324.702666,51.3738496 L292.99947,51.3746291 C292.447478,51.3746291 292,50.9308997 292,50.3835318 C292,49.8361639 292.447478,49.3924345 292.99947,49.3924345 L324.46779,49.3916551 L315.694547,40.6919089 C315.30423,40.3048613 315.30423,39.6773332 315.694547,39.2902857 C316.084865,38.9032381 316.717694,38.9032381 317.108012,39.2902857 Z M327.115357,50.382693 L316.401279,61.0089027 L327.002151,50.5002046 L327.002252,50.4963719 L326.943142,50.442585 L326.882737,50.382693 L327.115357,50.382693 Z"
                id="left-arrow"
                transform="translate(310.000000, 50.500000) scale(-1, 1) translate(-310.000000, -50.500000)"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export type ButtonProps = {
  width: number;
  height: number;
  fillColor: string;
};

export const LogoForButton = ({ width, height, fillColor }: ButtonProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.85895 8.70736e-06L6.22674 0.0209734L0.0714852 5.66772L4.01513 11.1848L5.69866 11.1631L7.85895 8.70736e-06Z"
        fill={fillColor}
      />
    </svg>
  );
};

export const LogoForButtonRotated = ({
  width,
  height,
  fillColor,
}: ButtonProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="rotate(180)"
    >
      <path
        d="M7.85895 8.70736e-06L6.22674 0.0209734L0.0714852 5.66772L4.01513 11.1848L5.69866 11.1631L7.85895 8.70736e-06Z"
        fill={fillColor}
      />
    </svg>
  );
};

export function formatString(input: string): string {
  // Step 1: Trim any leading/trailing whitespace
  const trimmedInput: string = input.trim();

  // Step 2: Replace hyphens with spaces
  const hyphenReplaced: string = trimmedInput.replace(/-/g, " ");

  // Step 3: Remove any non-letter characters (excluding spaces)
  const cleanedInput: string = hyphenReplaced.replace(/[^a-zA-Z\s]/g, "");

  // Step 4: Collapse multiple spaces into a single space
  const normalizedInput: string = cleanedInput.replace(/\s+/g, " ");

  // Step 5: Capitalize each word
  const capitalizedInput: string = normalizedInput
    .split(" ") // Split the string by spaces
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words with a space

  // Step 6: Handle specific case for "Ui Ux Design"
  if (capitalizedInput === "Ui Ux Design") {
    return "UI/UX Design";
  }

  return capitalizedInput;
}

// Example usage:
try {
  const formattedString: string = formatString("ui-ux-design");
  console.log(formattedString); // Output: "UI/UX Design"
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred.");
  }
}


// Icons for each service ANIMATED
export const LandingPageIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 63.97 41.71"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
          .cls-1 {
            fill-rule: evenodd;
          }

          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10 {
            stroke-width: 0px;
          }

          .cls-1, .cls-9 {
            fill: #fff;
          }

          .cls-2 {
            fill: url(#linear-gradient);
          }

          .cls-3 {
            fill: url(#linear-gradient-6);
          }

          .cls-4 {
            fill: url(#linear-gradient-11);
          }

          .cls-11 {
            opacity: .8;
          }

          .cls-5 {
            fill: url(#linear-gradient-2);
          }

          .cls-6 {
            fill: url(#linear-gradient-7);
          }

          .cls-7 {
            fill: url(#linear-gradient-9);
          }

          .cls-12 {
            fill: url(#linear-gradient-3);
            stroke: url(#linear-gradient-4);
            stroke-width: .15px;
          }

          .cls-12, .cls-13 {
            stroke-miterlimit: 10;
          }

          .cls-8 {
            fill: url(#linear-gradient-8);
          }

          .cls-13 {
            fill: none;
            stroke: url(#linear-gradient-5);
            stroke-width: .16px;
          }

          .cls-10 {
            fill: url(#linear-gradient-10);
          }
        `}
        </style>
        <linearGradient
          id="linear-gradient"
          x1="8.14"
          y1="23.16"
          x2="55.83"
          y2="46.41"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#3cf2de" stopOpacity=".8">
            <animate
              attributeName="stop-color"
              values="#3cf2de; #7f96db; #3cf2de"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#818cf8">
            <animate
              attributeName="stop-color"
              values="#818cf8; #5775D0; #818cf8"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-2"
          x1="14.01"
          y1="28.81"
          x2="49.76"
          y2="46.24"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-3"
          x1=".08"
          y1="3.43"
          x2="63.89"
          y2="3.43"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-4"
          x1="0"
          y1="3.43"
          x2="63.96"
          y2="3.43"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-5"
          x1="0"
          y1="24.21"
          x2="63.97"
          y2="24.21"
          xlinkHref="#linear-gradient"
        />
        <linearGradient
          id="linear-gradient-6"
          x1="39.43"
          y1="23.33"
          x2="57.64"
          y2="32.2"
          xlinkHref="#linear-gradient"
        >
          <stop offset="0%" stopColor="#3cf2de">
            <animate
              attributeName="stop-color"
              values="#3cf2de; #7f96db; #3cf2de"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
          <stop offset="100%" stopColor="#818cf8">
            <animate
              attributeName="stop-color"
              values="#818cf8; #5775D0; #818cf8"
              dur="5s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
        <linearGradient
          id="linear-gradient-7"
          x1="39.43"
          y1="19.71"
          x2="57.64"
          y2="28.59"
          xlinkHref="#linear-gradient-6"
        />
        <linearGradient
          id="linear-gradient-8"
          x1="39.43"
          y1="16.1"
          x2="57.64"
          y2="24.98"
          xlinkHref="#linear-gradient-6"
        />
        <linearGradient
          id="linear-gradient-9"
          x1="39.43"
          y1="12.49"
          x2="57.64"
          y2="21.36"
          xlinkHref="#linear-gradient-6"
        />
        <linearGradient
          id="linear-gradient-10"
          x1="39.43"
          y1="8.87"
          x2="57.64"
          y2="17.75"
          xlinkHref="#linear-gradient-6"
        />
        <linearGradient
          id="linear-gradient-11"
          x1="3.96"
          y1="13.57"
          x2="32.49"
          y2="27.47"
          xlinkHref="#linear-gradient"
        />
      </defs>
      <g>
        <g className="cls-11">
          <rect
            className="cls-2"
            x="2.55"
            y="34.17"
            width="58.87"
            height="1.24"
            rx=".62"
            ry=".62"
          />
        </g>
        <g className="cls-11">
          <rect
            className="cls-5"
            x="9.86"
            y="36.87"
            width="44.06"
            height="1.31"
            rx=".6"
            ry=".6"
          />
        </g>
      </g>
      <path
        className="cls-12"
        d="M63.89,2.05v4.74H.08V2.05C.08.97,1.07.08,2.27.08h59.42c1.21,0,2.19.89,2.19,1.97Z"
      />
      <path
        className="cls-13"
        d="M63.89,6.79v32.58c0,1.25-.99,2.26-2.19,2.26H2.27c-1.21,0-2.19-1.01-2.19-2.26V6.79h63.81Z"
      />
      <g>
        <g className="cls-11">
          <rect
            className="cls-3"
            x="37.44"
            y="26.82"
            width="22.19"
            height="1.88"
            rx=".76"
            ry=".76"
          />
        </g>
        <g className="cls-11">
          <rect
            className="cls-6"
            x="37.44"
            y="23.21"
            width="22.19"
            height="1.88"
            rx=".76"
            ry=".76"
          />
        </g>
        <g className="cls-11">
          <rect
            className="cls-8"
            x="37.44"
            y="19.6"
            width="22.19"
            height="1.88"
            rx=".76"
            ry=".76"
          />
        </g>
        <g className="cls-11">
          <rect
            className="cls-7"
            x="37.44"
            y="15.98"
            width="22.19"
            height="1.88"
            rx=".76"
            ry=".76"
          />
        </g>
        <g className="cls-11">
          <rect
            className="cls-10"
            x="37.44"
            y="12.37"
            width="22.19"
            height="1.88"
            rx=".76"
            ry=".76"
          />
        </g>
      </g>
      <g className="cls-11">
        <rect
          className="cls-4"
          x="4.35"
          y="10.22"
          width="27.75"
          height="20.61"
          rx="3.32"
          ry="3.32"
        />
      </g>
      <g>
        <path
          className="cls-1"
          d="M13.99,14.25L4.34,30.86h19.92S14.6,14.25,14.6,14.25c-.13-.23-.47-.23-.6,0Z"
        />
        <path
          className="cls-1"
          d="M24.44,20.23l-3.49,4.94,3.31,5.68h7.86s-7.11-10.62-7.11-10.62c-.13-.2-.42-.2-.56,0Z"
        />
        <ellipse className="cls-9" cx="22.29" cy="14.59" rx="1.71" ry="1.78" />
      </g>
    </svg>
  );
};

export const WebsiteDevelopmentIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 64 51.23"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`
          .cls-1 {
            fill: url(#linear-gradient-12);
          }

          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19 {
            stroke-width: 0px;
          }

          .cls-2 {
            fill: url(#linear-gradient-17);
          }

          .cls-3 {
            fill: url(#linear-gradient-19);
          }

          .cls-4 {
            fill: url(#linear-gradient);
          }

          .cls-5 {
            fill: url(#linear-gradient-6);
          }

          .cls-6 {
            fill: url(#linear-gradient-15);
          }

          .cls-7 {
            fill: url(#linear-gradient-11);
          }

          .cls-8 {
            fill: url(#linear-gradient-5);
          }

          .cls-20 {
            opacity: .8;
          }

          .cls-9 {
            fill: url(#linear-gradient-13);
          }

          .cls-10 {
            fill: url(#linear-gradient-16);
          }

          .cls-11 {
            fill: url(#linear-gradient-14);
          }

          .cls-12 {
            fill: url(#linear-gradient-2);
          }

          .cls-13 {
            fill: url(#linear-gradient-7);
          }

          .cls-14 {
            fill: url(#linear-gradient-3);
          }

          .cls-15 {
            fill: url(#linear-gradient-9);
          }

          .cls-16 {
            fill: url(#linear-gradient-8);
          }

          .cls-17 {
            fill: url(#linear-gradient-18);
          }

          .cls-18 {
            fill: url(#linear-gradient-10);
          }

          .cls-19 {
            fill: url(#linear-gradient-4);
          }
        `}
      </style>
      <linearGradient
        id="linear-gradient"
        x1="21.1"
        y1="33.21"
        x2="28.86"
        y2="33.21"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#3cf2de" stopOpacity=".8">
          <animate
            attributeName="stop-color"
            values="#3cf2de; #4F65A9; #3cf2de"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#4F65A9" stopOpacity="1">
          <animate
            attributeName="stop-color"
            values="#4F65A9; #3cf2de; #4F65A9"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#818cf8">
          <animate
            attributeName="stop-color"
            values="#818cf8; #3cf2de; #818cf8"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="29.45"
        y1="32.3"
        x2="34.55"
        y2="32.3"
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-3"
        x1="35.14"
        x2="42.9"
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-4"
        x1="6.21"
        y1="34.98"
        x2="57.79"
        y2="60.12"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#3cf2de" stopOpacity=".8">
          <animate
            attributeName="stop-color"
            values="#3cf2de; #4F65A9; #3cf2de"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop
          offset="15%"
          stopColor="rgba(67, 231, 224, .82)"
          stopOpacity=".82"
        >
          <animate
            attributeName="stop-color"
            values="rgba(67, 231, 224, .82); rgba(117, 156, 243, .97); rgba(67, 231, 224, .82)"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop
          offset="38%"
          stopColor="rgba(86, 203, 231, .88)"
          stopOpacity=".88"
        >
          <animate
            attributeName="stop-color"
            values="rgba(86, 203, 231, .88); rgba(117, 156, 243, .97); rgba(86, 203, 231, .88)"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop
          offset="67%"
          stopColor="rgba(117, 156, 243, .97)"
          stopOpacity=".97"
        >
          <animate
            attributeName="stop-color"
            values="rgba(117, 156, 243, .97); #818cf8; rgba(117, 156, 243, .97)"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="77%" stopColor="#818cf8">
          <animate
            attributeName="stop-color"
            values="#818cf8; #3cf2de; #818cf8"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="linear-gradient-5"
        x1="12.66"
        y1="41.09"
        x2="51.34"
        y2="59.94"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-6"
        x1="3.61"
        y1="38.04"
        x2="17.59"
        y2="44.85"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-7"
        x1="3.61"
        y1="34.13"
        x2="17.59"
        y2="40.94"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-8"
        x1="3.61"
        y1="30.21"
        x2="17.59"
        y2="37.02"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-9"
        x1="3.61"
        y1="26.3"
        x2="17.59"
        y2="33.11"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-10"
        x1="3.61"
        y1="22.38"
        x2="17.59"
        y2="29.2"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-11"
        x1="46.61"
        y1="38.04"
        x2="60.58"
        y2="44.85"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-12"
        x1="46.61"
        y1="34.13"
        x2="60.58"
        y2="40.94"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-13"
        x1="46.61"
        y1="30.21"
        x2="60.58"
        y2="37.02"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-14"
        x1="46.61"
        y1="26.3"
        x2="60.58"
        y2="33.11"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-15"
        x1="46.61"
        y1="22.38"
        x2="60.58"
        y2="29.2"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-16"
        x1="5.92"
        y1="5.55"
        x2="58.08"
        y2="30.97"
        xlinkHref="#linear-gradient-4"
      />
      <linearGradient
        id="linear-gradient-17"
        x1="50.48"
        y1="-133.16"
        x2="54.84"
        y2="-137.52"
        gradientTransform="translate(90.75 158.98) rotate(-179.07) scale(1 -1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.09" stopColor="#818cf8" stopOpacity=".8">
          <animate
            attributeName="stop-color"
            values="#818cf8; #3cf2de; #818cf8"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="1" stopColor="#3cf2de">
          <animate
            attributeName="stop-color"
            values="#3cf2de; #818cf8; #3cf2de"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="linear-gradient-18"
        x1="46.44"
        y1="-138.42"
        x2="49.63"
        y2="-141.43"
        gradientTransform="translate(-88 -46.55) rotate(-45.06) scale(1 -1)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#818cf8" stopOpacity=".8">
          <animate
            attributeName="stop-color"
            values="#818cf8; #3cf2de; #818cf8"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop
          offset="0.18"
          stopColor="rgba(119, 153, 244, .83)"
          stopOpacity=".83"
        >
          <animate
            attributeName="stop-color"
            values="rgba(119, 153, 244, .83); rgba(96, 188, 235, .9); rgba(119, 153, 244, .83)"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="0.53" stopColor="rgba(96, 188, 235, .9)" stopOpacity=".9">
          <animate
            attributeName="stop-color"
            values="rgba(96, 188, 235, .9); #3cf2de; rgba(96, 188, 235, .9)"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="1" stopColor="#3cf2de">
          <animate
            attributeName="stop-color"
            values="#3cf2de; #818cf8; #3cf2de"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="linear-gradient-19"
        x1="37.06"
        y1="-147.99"
        x2="39.86"
        y2="-150.63"
        gradientTransform="translate(90.61 159.11) rotate(-179) scale(1 -1) skewX(-.15)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#818cf8" stopOpacity=".8">
          <animate
            attributeName="stop-color"
            values="#818cf8; #3cf2de; #818cf8"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop
          offset="0.18"
          stopColor="rgba(119, 153, 244, .83)"
          stopOpacity=".83"
        >
          <animate
            attributeName="stop-color"
            values="rgba(119, 153, 244, .83); rgba(96, 188, 235, .9); rgba(119, 153, 244, .83)"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="0.53" stopColor="rgba(96, 188, 235, .9)" stopOpacity=".9">
          <animate
            attributeName="stop-color"
            values="rgba(96, 188, 235, .9); #3cf2de; rgba(96, 188, 235, .9)"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="1" stopColor="#3cf2de">
          <animate
            attributeName="stop-color"
            values="#3cf2de; #818cf8; #3cf2de"
            dur="8s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
    <g>
      <path
        className="cls-4"
        d="M28.86,37.22l-7.76-3.5v-1.02l7.76-3.5v1.08l-7.24,3.24v-.64l7.24,3.23v1.1Z"
      />
      <path
        className="cls-12"
        d="M30.47,38.78l-1.02-.3,4.07-12.66,1.03.3-4.09,12.66Z"
      />
      <path
        className="cls-14"
        d="M35.14,37.22v-1.1l7.25-3.23v.64l-7.25-3.24v-1.08l7.76,3.5v1.02l-7.76,3.5Z"
      />
    </g>
    <g className="cls-20">
      <rect
        className="cls-19"
        x=".15"
        y="46.88"
        width="63.69"
        height="1.34"
        rx=".67"
        ry=".67"
      />
    </g>
    <g className="cls-20">
      <rect
        className="cls-8"
        x="8.16"
        y="49.81"
        width="47.67"
        height="1.42"
        rx=".65"
        ry=".65"
      />
    </g>
    <g>
      <g className="cls-20">
        <rect
          className="cls-5"
          x="2.19"
          y="40.43"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-13"
          x="2.19"
          y="36.51"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-16"
          x="2.19"
          y="32.6"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-15"
          x="2.19"
          y="28.68"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-18"
          x="2.19"
          y="24.77"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
    </g>
    <g>
      <g className="cls-20">
        <rect
          className="cls-7"
          x="45.18"
          y="40.43"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-1"
          x="45.18"
          y="36.51"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-9"
          x="45.18"
          y="32.6"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-11"
          x="45.18"
          y="28.68"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
      <g className="cls-20">
        <rect
          className="cls-6"
          x="45.18"
          y="24.77"
          width="16.82"
          height="2.04"
          rx=".69"
          ry=".69"
        />
      </g>
    </g>
    <g className="cls-20">
      <rect
        className="cls-10"
        x="0"
        y="16.8"
        width="64"
        height="2.92"
        rx="1.17"
        ry="1.17"
      />
    </g>
    <g>
      <path
        className="cls-2"
        d="M45.08,24.46l-8.71,2.8-.26-.27,5.28-5.1c.31.25.77.25,1.07-.04.32-.31.33-.82.02-1.14s-.82-.33-1.14-.02c-.3.29-.32.74-.08,1.06l-5.28,5.1-.26-.27,3.1-8.61,4.16-.86,1.55,1.61,1.55,1.61-1.01,4.13Z"
      />
      <rect
        className="cls-17"
        x="42.8"
        y="17.97"
        width="4.36"
        height=".65"
        transform="translate(63.07 63.36) rotate(-134.02)"
      />
      <path
        className="cls-3"
        d="M63.36.66h0c.84.87.81,2.25-.05,3.08l-16.31,15.76-3.03-3.14L60.28.61c.86-.84,2.24-.81,3.08.05Z"
      />
    </g>
  </svg>
);

export const FrontendDevelopmentIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 64 38.05"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`
          .cls-1 {
            fill: url(#linear-gradient);
          }
          
          .cls-2 {
            fill: url(#linear-gradient-2);
          }
          
          .cls-3 {
            fill: url(#linear-gradient-3);
          }
        `}
      </style>
      <linearGradient
        id="linear-gradient"
        x1="0"
        y1="21.71"
        x2="22.78"
        y2="21.71"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#3cf2de" stopOpacity=".8" />
        <stop
          offset=".19"
          stopColor="rgba(67, 231, 224, .82)"
          stopOpacity=".82"
        />
        <stop
          offset=".5"
          stopColor="rgba(86, 203, 231, .88)"
          stopOpacity=".88"
        />
        <stop
          offset=".88"
          stopColor="rgba(117, 156, 243, .97)"
          stopOpacity=".97"
        />
        <stop offset="1" stopColor="#818cf8" />
      </linearGradient>
      <linearGradient
        id="linear-gradient-2"
        x1="24.51"
        y1="19.02"
        x2="39.49"
        y2="19.02"
        xlinkHref="#linear-gradient"
      />
      <linearGradient
        id="linear-gradient-3"
        x1="41.22"
        x2="64"
        xlinkHref="#linear-gradient"
      />
    </defs>
    <path
      className="cls-1"
      d="M22.78,33.47L0,23.2v-2.99l22.78-10.27v3.17L1.54,22.64v-1.87l21.24,9.48v3.22Z"
    />
    <path
      className="cls-2"
      d="M27.5,38.05l-2.99-.89L36.46,0l3.03.89-12,37.16Z"
    />
    <path
      className="cls-3"
      d="M41.22,33.47v-3.22l21.29-9.48v1.87l-21.29-9.52v-3.17l22.78,10.27v2.99l-22.78,10.27Z"
    />
  </svg>
);

export const CopywritingIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64.11 64.21"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`
          .cls-1 {
            fill: url(#animated-gradient-12);
          }

          .cls-1, .cls-2, .cls-3, .cls-4, .cls-5, .cls-6, .cls-7, .cls-8, .cls-9, .cls-10, .cls-11, .cls-12, .cls-13, .cls-14, .cls-15, .cls-16, .cls-17, .cls-18, .cls-19, .cls-20 {
            stroke-width: 0px;
          }

          .cls-2 {
            fill: url(#animated-gradient-17);
          }

          .cls-3 {
            fill: url(#animated-gradient-19);
          }

          .cls-4 {
            fill: url(#animated-gradient);
          }

          .cls-5 {
            fill: url(#animated-gradient-6);
          }

          .cls-6 {
            fill: url(#animated-gradient-15);
          }

          .cls-7 {
            fill: url(#animated-gradient-11);
          }

          .cls-8 {
            fill: url(#animated-gradient-5);
          }

          .cls-21 {
            opacity: .8;
          }

          .cls-9 {
            fill: url(#animated-gradient-13);
          }

          .cls-10 {
            fill: url(#animated-gradient-16);
          }

          .cls-11 {
            fill: url(#animated-gradient-14);
          }

          .cls-12 {
            fill: url(#animated-gradient-2);
          }

          .cls-13 {
            fill: url(#animated-gradient-7);
          }

          .cls-14 {
            fill: url(#animated-gradient-3);
          }

          .cls-15 {
            fill: url(#animated-gradient-9);
          }

          .cls-16 {
            fill: url(#animated-gradient-8);
          }

          .cls-17 {
            fill: url(#animated-gradient-18);
          }

          .cls-18 {
            fill: #fff;
          }

          .cls-19 {
            fill: url(#animated-gradient-10);
          }

          .cls-20 {
            fill: url(#animated-gradient-4);
          }

          .cls-22 {
            fill: none;
            stroke: #444041;
            stroke-miterlimit: 10;
            stroke-width: .21px;
          }
        `}
      </style>
      <linearGradient
        id="animated-gradient"
        x1="21.51"
        y1="8.07"
        x2="37.34"
        y2="15.78"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#3cf2de">
          <animate
            attributeName="stop-color"
            values="#00ECD1; #7486F7; #a5b4fc; #00ECD1"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate
            attributeName="stop-color"
            values="#7486F7; #a5b4fc; #00ECD1; #7486F7"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate
            attributeName="stop-color"
            values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="animated-gradient-2"
        x1="21.51"
        y1="11.19"
        x2="37.34"
        y2="18.91"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-3"
        x1="21.51"
        y1="14.33"
        x2="37.34"
        y2="22.04"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-4"
        x1="21.51"
        y1="17.48"
        x2="37.34"
        y2="25.2"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-5"
        x1="21.55"
        y1="4.91"
        x2="37.38"
        y2="12.63"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-6"
        x1="5.36"
        y1="39.59"
        x2="35.63"
        y2="54.34"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-7"
        x1="5.36"
        y1="42.72"
        x2="35.63"
        y2="57.47"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-8"
        x1="5.36"
        y1="45.85"
        x2="35.63"
        y2="60.61"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-9"
        x1="3.25"
        y1="53.21"
        x2="16.27"
        y2="59.55"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-10"
        x1="5.44"
        y1="36.43"
        x2="35.71"
        y2="51.19"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-11"
        x1="5.37"
        y1="22.07"
        x2="35.63"
        y2="36.82"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-12"
        x1="5.37"
        y1="25.2"
        x2="35.63"
        y2="39.95"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-13"
        x1="5.37"
        y1="28.33"
        x2="35.63"
        y2="43.08"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-14"
        x1="5.37"
        y1="31.49"
        x2="35.63"
        y2="46.23"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-15"
        x1="5.45"
        y1="18.92"
        x2="35.71"
        y2="33.67"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-16"
        x1="5.35"
        y1="-4.28"
        x2="35.78"
        y2="10.56"
        xlinkHref="#animated-gradient"
      />
      <linearGradient
        id="animated-gradient-17"
        x1="-74.64"
        y1="-120.53"
        x2="-70.67"
        y2="-124.26"
        gradientTransform="translate(-46.95 148.23) rotate(-171.01) scale(1 -1) skewX(-.15)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#3cf2de">
          <animate
            attributeName="stop-color"
            values="#00ECD1; #7486F7; #a5b4fc; #00ECD1"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate
            attributeName="stop-color"
            values="#7486F7; #a5b4fc; #00ECD1; #7486F7"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate
            attributeName="stop-color"
            values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
      <linearGradient
        id="animated-gradient-18"
        x1="-16.59"
        y1="125.19"
        x2="-11.2"
        y2="125.19"
        gradientTransform="translate(-70.37 104.17) rotate(-126.03) scale(1 .82)"
        xlinkHref="#animated-gradient-17"
      />
      <linearGradient
        id="animated-gradient-19"
        x1="4.5"
        y1="14.87"
        x2="15.03"
        y2="14.87"
        xlinkHref="#animated-gradient"
      />
    </defs>
    <rect
      className="cls-22"
      x="-11.12"
      y="11.34"
      width="64"
      height="41.54"
      rx="2.2"
      ry="2.2"
      transform="translate(52.98 11.23) rotate(90)"
    />
    <g>
      <g className="cls-21">
        <rect
          className="cls-4"
          x="19.73"
          y="11.38"
          width="19.39"
          height="1.09"
          rx=".45"
          ry=".45"
        />
      </g>
      <g className="cls-21">
        <rect
          className="cls-12"
          x="19.73"
          y="14.51"
          width="19.39"
          height="1.09"
          rx=".45"
          ry=".45"
        />
      </g>
      <g className="cls-21">
        <rect
          className="cls-14"
          x="19.73"
          y="17.64"
          width="19.39"
          height="1.09"
          rx=".45"
          ry=".45"
        />
      </g>
      <g className="cls-21">
        <rect
          className="cls-20"
          x="19.73"
          y="20.79"
          width="19.39"
          height="1.09"
          rx=".45"
          ry=".45"
        />
      </g>
      <g className="cls-21">
        <rect
          className="cls-8"
          x="19.77"
          y="8.22"
          width="19.39"
          height="1.09"
          rx=".45"
          ry=".45"
        />
      </g>
    </g>
    <g className="cls-21">
      <rect
        className="cls-5"
        x="1.82"
        y="46.42"
        width="37.34"
        height="1.09"
        rx=".55"
        ry=".55"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-13"
        x="1.82"
        y="49.55"
        width="37.34"
        height="1.09"
        rx=".55"
        ry=".55"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-16"
        x="1.82"
        y="52.68"
        width="37.34"
        height="1.09"
        rx=".55"
        ry=".55"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-15"
        x="1.82"
        y="55.83"
        width="15.89"
        height="1.09"
        rx=".41"
        ry=".41"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-19"
        x="1.9"
        y="43.27"
        width="37.34"
        height="1.09"
        rx=".55"
        ry=".55"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-7"
        x="1.84"
        y="28.9"
        width="37.32"
        height="1.09"
        rx=".54"
        ry=".54"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-1"
        x="1.84"
        y="32.03"
        width="37.32"
        height="1.09"
        rx=".54"
        ry=".54"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-9"
        x="1.84"
        y="35.16"
        width="37.32"
        height="1.09"
        rx=".54"
        ry=".54"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-11"
        x="1.84"
        y="38.31"
        width="37.32"
        height="1.09"
        rx=".54"
        ry=".54"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-6"
        x="1.92"
        y="25.75"
        width="37.32"
        height="1.09"
        rx=".54"
        ry=".54"
      />
    </g>
    <g className="cls-21">
      <rect
        className="cls-10"
        x="1.88"
        y="2.2"
        width="37.36"
        height="1.89"
        rx=".82"
        ry=".82"
      />
    </g>
    <g>
      <path
        className="cls-2"
        d="M63.65,24.31h0c.88,1.2.43,3-1.01,4.03l-37.69,27-3.2-4.33,37.69-27c1.44-1.03,3.32-.9,4.21.3Z"
      />
      <polygon
        className="cls-18"
        points="56.24 26.31 59.44 30.64 58.38 31.4 55.18 27.07 56.24 26.31"
      />
      <polygon
        className="cls-18"
        points="22.82 50.25 26.02 54.58 24.96 55.34 21.76 51.01 22.82 50.25"
      />
      <polygon
        className="cls-17"
        points="24.96 55.34 21.76 51.01 18.02 57 24.96 55.34"
      />
    </g>
    <path
      className="cls-3"
      d="M8.49,19.82c.24-.02.27-.08.27-.34v-9.31h-2.29c-.19,0-.24.02-.27.19l-.27,1.48h-1.43v-3.14h10.53v3.14h-1.42l-.27-1.48c-.03-.17-.09-.19-.27-.19h-2.3v9.31c0,.24.02.31.27.32l1.88.14v1.11h-6.18v-1.11l1.76-.12Z"
    />
  </svg>
);

export const BrandIdentityIcon = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    viewBox="0 0 64 64"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`
          .cls-1 {
            fill: url(#linear-gradient);
          }

          .cls-1, .cls-2 {
            stroke-width: 0px;
          }

          .cls-2 {
            fill: #fff;
          }
        `}
      </style>
      <linearGradient
        id="linear-gradient"
        x1="0"
        y1="32"
        x2="64"
        y2="32"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0%" stopColor="#00ECD1">
          <animate
            attributeName="stop-color"
            values="#00ECD1; #7486F7; #a5b4fc; #00ECD1"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="50%" stopColor="#7486F7">
          <animate
            attributeName="stop-color"
            values="#7486F7; #a5b4fc; #00ECD1; #7486F7"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
        <stop offset="100%" stopColor="#a5b4fc">
          <animate
            attributeName="stop-color"
            values="#a5b4fc; #00ECD1; #7486F7; #a5b4fc"
            dur="3s"
            repeatCount="indefinite"
          />
        </stop>
      </linearGradient>
    </defs>
    <path
      className="cls-1"
      d="M64,32.16c0-2.08-.93-3.94-2.39-5.19s-1.99-3.26-1.33-5.02.58-3.97-.48-5.81c-1.04-1.8-2.77-2.95-4.67-3.3-1.85-.34-3.36-1.83-3.67-3.68s-1.48-3.73-3.32-4.79c-1.8-1.04-3.87-1.16-5.69-.52s-3.82.09-5.02-1.36-3.14-2.49-5.27-2.49-3.94.93-5.19,2.39c-1.22,1.43-3.26,1.99-5.02,1.33s-3.97-.58-5.81.48c-1.8,1.04-2.95,2.77-3.3,4.67s-1.83,3.36-3.68,3.67-3.73,1.48-4.79,3.32c-1.04,1.8-1.16,3.87-.52,5.69s.09,3.82-1.36,5.02-2.49,3.14-2.49,5.27.93,3.94,2.39,5.19c1.43,1.22,1.99,3.26,1.33,5.02s-.58,3.97.48,5.81c1.04,1.8,2.77,2.95,4.67,3.3s3.36,1.83,3.67,3.68,1.48,3.73,3.32,4.79c1.8,1.04,3.87,1.16,5.69.52,1.77-.63,3.82-.09,5.02,1.36,1.25,1.52,3.14,2.49,5.27,2.49s3.94-.93,5.19-2.39,3.26-1.99,5.02-1.33,3.97.58,5.81-.48c1.8-1.04,2.95-2.77,3.3-4.67.34-1.85,1.83-3.36,3.68-3.67s3.73-1.48,4.79-3.32c1.04-1.8,1.16-3.87.52-5.69-.63-1.77-.09-3.82,1.36-5.02s2.49-3.14,2.49-5.27Z"
    />
    <path
      className="cls-2"
      d="M32,9.57c12.37,0,22.43,10.06,22.43,22.43s-10.06,22.43-22.43,22.43-22.43-10.06-22.43-22.43,10.06-22.43,22.43-22.43M32,9.07c-12.66,0-22.93,10.27-22.93,22.93s10.27,22.93,22.93,22.93,22.93-10.27,22.93-22.93-10.27-22.93-22.93-22.93h0Z"
    />
    <path
      className="cls-2"
      d="M39.15,36.07c-1.91,1.69-4.41,2.72-7.15,2.72s-5.24-1.03-7.15-2.72c-4.75,1.61-8.79,4.78-11.51,8.9,4,6.07,10.86,10.08,18.66,10.08s14.66-4.01,18.66-10.08c-2.72-4.12-6.75-7.29-11.51-8.9Z"
    />
    <path
      className="cls-2"
      d="M39.22,35.32c2.28-2.01,3.72-4.95,3.72-8.23,0-6.06-4.9-10.97-10.94-10.97s-10.94,4.91-10.94,10.97c0,3.28,1.44,6.22,3.72,8.23,1.93,1.7,4.45,2.74,7.22,2.74s5.29-1.04,7.22-2.74Z"
    />
    <path
      className="cls-2"
      d="M32,9.57c12.37,0,22.43,10.06,22.43,22.43s-10.06,22.43-22.43,22.43-22.43-10.06-22.43-22.43,10.06-22.43,22.43-22.43M32,9.07c-12.66,0-22.93,10.27-22.93,22.93s10.27,22.93,22.93,22.93,22.93-10.27,22.93-22.93-10.27-22.93-22.93-22.93h0Z"
    />
    <path
      className="cls-2"
      d="M39.15,36.07c-1.91,1.69-4.41,2.72-7.15,2.72s-5.24-1.03-7.15-2.72c-4.75,1.61-8.79,4.78-11.51,8.9,4,6.07,10.86,10.08,18.66,10.08s14.66-4.01,18.66-10.08c-2.72-4.12-6.75-7.29-11.51-8.9Z"
    />
    <path
      className="cls-2"
      d="M39.22,35.32c2.28-2.01,3.72-4.95,3.72-8.23,0-6.06-4.9-10.97-10.94-10.97s-10.94,4.91-10.94,10.97c0,3.28,1.44,6.22,3.72,8.23,1.93,1.7,4.45,2.74,7.22,2.74s5.29-1.04,7.22-2.74Z"
    />
  </svg>
);
