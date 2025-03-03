import React from "react";
import "../../../public/test.css";
import Image from "next/image";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import Link from "next/link";
import HeroSectionImage from "../../../public/images/projects/1_dj_david_mash/DJ_David_Mash_Hero_Section_Image.png";

export default function HeroSection({ projectName }: { projectName: string }) {
  return (
    <HeroSectionWrapper>
      <div className="flex flex-col items-start gap-10">
        {/* Blur background effects */}
        <div className="w-56 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div>

        {/* Links */}
        <div className="flex items-center gap-2">
          <Link
            href={`/projects`}
            className="text-base md:text-xl 3xl:text-2xl text-center font-black text-[#ffffff] uppercase"
          >
            All Projects{" "}
          </Link>
          <span className="custom-text-yellow">&#x2022;</span>{" "}
          <span className="text-lg xs:text-xl font-bold text-[#ffffff] uppercase">
            DJ David Mash
          </span>
        </div>

        {/* Title */}
        <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl 3xl:text-[80px] leading-tight lg:leading-none  text-[#ffffff] font-medium text-start z-30">
          DJ David Mash -{" "}
          <span className="custom-text-yellow font-black">
            Mash Up Your Event{" "}
          </span>{" "}
          Like A Star
        </h1>
      </div>

      {/* Services */}
      <div className="flex flex-wrap justify-start items-start gap-2">
        {servicesDummy.map((service) => (
          <div
            key={service.id}
            className="flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[#4b4d1e] z-20 rounded-full px-6 py-2"
          >
            <span className="text-base xs:text-lg font-light text-[#ffffff] text-center">
              {service.name}
            </span>
          </div>
        ))}
      </div>

      {/* Main image */}
      <div className="pt-4 sm:pt-8 md:pt-16 lg:pt-24 z-20">
        <Image
          src={HeroSectionImage}
          alt="Tekst"
          width={0}
          height={0}
          className="rounded-lg"
        />
      </div>

      <div className="relative grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 items-center justify-between gap-6 rounded-lg">
        {clientFacts.map((fact) => (
          <ClientFactCard
            key={fact.id}
            id={fact.id}
            title={fact.title}
            description={fact.description}
          />
        ))}
      </div>

      {/* Blur background effects */}
      <div className="md:w-48 md:h-48 absolute right-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div>
      <div className="md:w-48 md:h-48 absolute left-0 bg-gradient-to-r from-[#ffe54f] to-[#ffd700] z-10 blur-[230px] pointer-events-none"></div>
    </HeroSectionWrapper>
  );
}

const servicesDummy = [
  {
    id: 1,
    name: "Social Media Management",
  },
  {
    id: 2,
    name: "Ad Campaigns",
  },
];

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

export const clientFacts = [
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
