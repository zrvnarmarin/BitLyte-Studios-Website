import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import Link from "next/link";
import TestIkona from "../../../public/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg";

//Landing page image
import LandingPAgeServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Landing_Page_Design_64x64px.svg"

// Website development image
import WebsiteDevelopmentServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Website_Design_64x64px (1).svg"

// Frontend development image
import FrontendDevelopmentServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Web_Development_64x64px (1).svg"

// Copywriting image
import CopywritingServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Copywriting_64x64px.svg"

// Social media management image
import SocialMediaManagementServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Social_Media_Assets_64x64px (1).svg"

// Meta hiring campaigns image
import MetaHiringCampaignsServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_MetaHriring_Campaigns_64x64px.svg"

// UI/UX design image
import UIUXServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_UI_UX_Design_64x64px.svg"

// Brand Identity image
import BrandIdentityServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg"

// Logo Design image
import LogoDesignServiceImage from "../../../public/images/services/BitLyte_Studios_ikona_Logo_Design_64x64px.svg"



export default function HeroSection({ serviceName } : { serviceName: string }) {
  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 flex flex-col gap-6 relative">
          {/* Blur background effect */}
          <div className="lg:w-48 lg:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-tight text-[#ffffff] font-medium text-start xs:text-center lg:text-left z-30">
            <span className="custom-text font-black">{formatString(serviceName)}</span> For Maximized Lead Generation
          </h1>
          <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start xs:text-center lg:text-left z-20">
          Our landing pages will help generate your business new leads and drive your sales exponentially by helping you maximize every visitor's potential and making them engage with your product.    
          </p>

          {/* CTA button */}
          <div className="relative w-full flex justify-start xs:justify-center lg:justify-start pt-4 md:pt-8 z-30">
            <Link href={`/contact`}>
              <button className="relative overflow-hidden w-fit flex items-center gap-2 py-3 sm:py-4 px-10 sm:px-12 3xl:py-5 3xl:px-16 text-[#000000] bg-[#ffffff]  rounded-full font-medium text-lg sm:text-2xl md:text-2xl 3xl:text-3xl shadow-[0_0_15px_0_rgba(255,255,255,1)] hover:shadow-[0_0_25px_0_rgba(255,255,255,1)] duration-300">
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

        <div className="order-1 lg:order-2 relative flex items-center justify-start xs:justify-center">
          {/* Blur color effect behind the image */}
          <div className="w-80 h-80 lg:w-[20rem] lg:h-[20rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
          <Image
            src={UIUXServiceImage}
            alt="t"
            className="w-full h-full max-w-[254px] xs:max-w-[274px] sm:max-w-[314px] lg:max-w-[400px] 2xl:max-w-[474px] z-20"
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

//TO DO: Finish this array of services, and this will be primary data source for every /service/[serviceId] route page!
// Service for landing page is blueprint for other services! And it is finished!
export const allServicesArray = [
  {
    id: 1,
    name: "Landing Page",
    serviceImage: LandingPAgeServiceImage,
    heroSectionHeading: "Landing Page For Maximized Lead Generation",
    heroSectionSubheading: "Our landing pages will help generate your business new leads and drive your sales exponentially by helping you maximize every visitor's potential and making them engage with your product.",
    benefits: [
      {
        id: 1,
        title: "High Brand Awareness",
        description:
          "A service landing page is crafted with a clear focus on converting visitors into leads or customers. By highlighting key benefits, using compelling calls to action (CTAs), and providing an easy-to-navigate layout, these pages can greatly enhance conversion rates.",
      },
      {
        id: 2,
        title: "Enhanced User Experience",
        description:
          "A thoughtfully designed landing page offers a smooth and intuitive user experience. This can lead to longer visits and lower bounce rates, which are both positive indicators for search engines and can improve overall engagement.",
      },
      {
        id: 3,
        title: "Recognized Visual Identity",
        description:
          "A recognized visual identity on landing pages builds brand familiarity and trust. Aligning the landing page with your brand strengthens emotional connections, enhancing lead generation and securing you long-term partnerships.",
      },
    ],
    projectPhases: [
      {
        phaseId: 1,
        phaseName: "Discovery",
        phaseSteps: [
          {
            id: 1,
            stepName: "Planning",
            stepDescription: "Planning is the first step in the procces"
          },
          {
            id: 2,
            stepName: "Wireframing",
            stepDescription: "Wireframing is the fisecond rst step in the procces"
          }
        ]
      }
    ]
  },
];
