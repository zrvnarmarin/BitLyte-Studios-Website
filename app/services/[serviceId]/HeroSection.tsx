import React from "react";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import "../../../public/test.css";
import Image from "next/image";
import Link from "next/link";
import { allServicesArray } from "./AllServicesData";

export default function HeroSection({ serviceName }: { serviceName: string }) {
  const selectedService = allServicesArray.find(
    (service) => formatString(serviceName) === service.name
  );

  return (
    <HeroSectionWrapper>
      {/* Desktop version */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="order-2 lg:order-1 flex flex-col gap-6 relative">
          {/* Blur background effect */}
          <div className="lg:w-48 lg:h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

          <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-tight text-[#ffffff] font-medium text-start xs:text-center lg:text-left z-30">
            <span className="custom-text font-black">
              {selectedService?.name}
            </span>{" "}
            {selectedService?.heroSectionHeading}
          </h1>
          <p className="text-xl font-light text-[#ffffff] text-start xs:text-center lg:text-left z-20">
          {selectedService?.heroSectionSubheading}
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

        {/* Blur background effects */}
        <div className="md:w-48 md:h-48 absolute right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
        <div className="md:w-32 md:h-32 absolute left-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

        <div className="order-1 lg:order-2 relative flex items-center justify-start xs:justify-center lg:justify-end">
          {/* Blur color effect behind the image */}
          <div className="w-80 h-80 lg:w-[10rem] lg:h-[10rem] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
          <Image
            src={selectedService?.serviceImage}
            alt="t"
            className="w-full h-full max-w-[254px] xs:max-w-[274px] sm:max-w-[314px] lg:max-w-[400px] 2xl:max-w-[474px] z-20"
          />
        </div>
      </div>
    </HeroSectionWrapper>
  );
}

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
  // console.log(formattedString); // Output: "UI/UX Design"
} catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  } else {
    console.error("An unknown error occurred.");
  }
}

//TO DO: Finish this array of services, and this will be primary data source for every /service/[serviceId] route page!
// Service for landing page is blueprint for other services! And it is finished!
// export const allServicesArray = [
//   {
//     id: 1,
//     name: "Landing Page",
//     serviceImage: LandingPAgeServiceImage,
//     heroSectionHeading: "Landing Page For Maximized Lead Generation",
//     heroSectionSubheading:
//       "Our landing pages will help generate your business new leads and drive your sales exponentially by helping you maximize every visitor's potential and making them engage with your product.",
//     benefits: [
//       {
//         id: 1,
//         icon: <HighBrandAwareness />,
//         title: "High Brand Awareness",
//         description:
//           "A service landing page is crafted with a clear focus on converting visitors into leads or customers. By highlighting key benefits, using compelling calls to action (CTAs), and providing an easy-to-navigate layout, these pages can greatly enhance conversion rates.",
//       },
//       {
//         id: 2,
//         icon: <ClientSatisfaction />,
//         title: "Enhanced User Experience",
//         description:
//           "A thoughtfully designed landing page offers a smooth and intuitive user experience. This can lead to longer visits and lower bounce rates, which are both positive indicators for search engines and can improve overall engagement.",
//       },
//       {
//         id: 3,
//         icon: <RecognizedVisualIdentity />,
//         title: "Recognized Visual Identity",
//         description:
//           "A recognized visual identity on landing pages builds brand familiarity and trust. Aligning the landing page with your brand strengthens emotional connections, enhancing lead generation and securing you long-term partnerships.",
//       },
//     ],
//     projectPhases: [
//       {
//         phaseId: 1,
//         phaseName: "Discovery",
//         phaseSteps: [
//           {
//             id: 1,
//             stepName: "Planning",
//             stepDescription: "Planning is the first step in the procces",
//           },
//           {
//             id: 2,
//             stepName: "Wireframing",
//             stepDescription:
//               "Wireframing is the fisecond rst step in the procces",
//           },
//         ],
//       },
//     ],
//     faq: [
//       {
//         id: 1,
//         question: "Does my business needs a landing page?",
//         answer: "Need of a landing page depends on many factors, including your niche and the rest."
//       }
//     ]
//   },
// ];
