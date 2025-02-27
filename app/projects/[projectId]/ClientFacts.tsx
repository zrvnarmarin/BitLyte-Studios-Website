import React from "react";
import Image, { StaticImageData } from "next/image";
import ClientLogoTestImage from "../../../public/images/projects/1_dj_david_mash/client_logo_test_image.png";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";

export default function ClientFacts() {
  return (
    <SectionWrapper>
      {/* <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Why Choose Us
      </h2> */}
      <div className="relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 items-center justify-between gap-6 rounded-lg pt-4 sm:pt-8 md:pt-12">
        {/* Blur background */}
        {/* <div className="w-64 h-64 absolute inset-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[930px]"></div> */}

        {/* Card container */}
        {clientFacts.map((fact) => (
          <ClientFactCard
            key={fact.id}
            id={fact.id}
            title={fact.title}
            description={fact.description}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ClientFactCard = ({
  id,
  title,
  description,
}: ClientFactCardProps) => {
  return (
    <div className="overflow-hidden relative flex flex-col gap-2 rounded-lg p-6 border-[0.5px] border-[#4b4d1e] z-20">
      <div className="relative flex flex-col items-start justify-center z-20">
        <p className="text-lg sm:text-xl custom-text-yellow font-semibold uppercase text-start">
          {title}
        </p>
        {/* <div className="flex items-center z-30 pt-6">
          <Image src={imgSrc} alt="text" width={0} height={0} />
          </div> */}
        <p className="text-xl font-light text-[#ffffff] text-center pt-4 z-40">
          {description}
        </p>
      </div>
      <div className="w-32 h-32 absolute bottom-0 top-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[130px] pointer-events-none"></div>
    </div>
  );
};

export type ClientFactCardProps = {
  id: number;
  title: string;
  description: string;
};

const clientFacts = [
  {
    id: 1,
    title: "Client",
    description: "DJ David Mash",
  },
  {
    id: 2,
    title: "Timeframe",
    description: "2 months",
  },
  {
    id: 3,
    title: "Year",
    description: "2024",
  },
  {
    id: 4,
    title: "Client",
    description: "Something",
  },
];
