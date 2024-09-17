import React from "react";
import Image from "next/image";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";
import TestImage from '../../public/apartment.jpg';

export default function ProjectsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-3xl xs:text-4xl sm:text-5xl text-[#ffffff] font-medium xs:font-normal z-20">
        Our Work
      </h2>

      <div className="w-full flex flex-col gap-24 bg-[#0b0b0b] pt-4 sm:pt-8 md:pt-12">
        {projects.map((project) => (
          <ProjectCardDesktop
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            serviceCategories={project.serviceCategories}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>

      <div className="relative w-full flex justify-center pt-4 md:pt-8 z-30">
        <Link href={`/projects`}>
          <button className="w-fit flex items-center gap-2 py-4 px-12 bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] text-[#ffffff] hover:text-[#111111] border-[0.5px] border-[#0a2030] hover:bg-[#ffffff] rounded-full font-normal text-xl xs:text-2xl sm:text-2xl">
            <LogoArrowRight fillColor="#ffffff" width={11} height={17} />
            See More Projects
          </button>
        </Link>
      </div>
    </SectionWrapper>
  );
}

export const ProjectCardDesktop = ({
  title,
  description,
  serviceCategories,
  imageSrc,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden flex flex-col lg:flex-row rounded-lg gap-6 bg-gradient-to-t from-[#0b0b0b] to-[#27a5ff2b] border-[0.5px] border-[#252525]">
      {/* Project image */}
      <div className="relative w-full lg:w-1/2 flex items-center bg-[#ffffff] z-20">
        <Image
          src={imageSrc}
          alt="project_image"
          layout="responsive"
          width={700} // Set appropriate width for responsiveness
          height={500} // Set appropriate height for responsiveness
          className="object-cover"
        />
        {/* Blue transparent gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A9FFF] opacity-60 z-30"></div>
      </div>

      {/* Project info */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 z-20 py-4 px-4 xs:px-6 sm:px-8 md:py-8 md:px-10 lg:px-6 lg:py-10">
        <h3 className="w-full text-2xl xs:text-3xl lg:text-4xl text-start font-bold text-[#ffffff]">
          {title}
        </h3>
        <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start">
          {description}
        </p>
        <div className="flex flex-col gap-2 pb-2">
          <p className="text-xl text-[#eeeeee] font-black">Project Briefing:</p>
          <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start">
            Our client, MYSO, or Million Yield Structuring Opportunities, is a
            Web3 finance platform changing the game with DeFi. They deliver
            innovative decentralized web apps with an unparalleled user
            experience, security, and impact potential.
          </p>
        </div>
        <div className="w-full flex items-center justify-start">
          <button className="w-fit bg-[#ffffff] flex gap-2 items-center justify-center font-normal lg:font-medium text-[#111111] text-lg md:text-xl z-20 rounded-full border-[0.5px] border-[#ffffff] py-2 md:py-3 px-6 md:px-10">
            <LogoArrowRight fillColor="#333333" />
            View Full Case
          </button>
        </div>
      </div>
    </div>
  );
};

export type ProjectCardProps = {
  id: number;
  title: string;
  description: string;
  serviceCategories: string[];
  imageSrc: any;
};

export const projects = [
  {
    id: 1,
    title: "Apartmenify",
    description:
      "Apartmenify is our biggest apartment management tool app to this date.",
    serviceCategories: ["Web Design", "Social Media", "Strategy"],
    imageSrc: TestImage,
  },
  {
    id: 2,
    title: "Lease Lounge",
    description:
      "Rentalio is the rental management tool which we build in collaboration with great team.",
    serviceCategories: ["Web Design", "Social Media", "Strategy"],
    imageSrc: TestImage,
  },
];

export const LogoArrowRight = ({
  fillColor = "#ffffff",
  width = 12,
  height = 18,
}: {
  fillColor?: string;
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 18H2.49225L12 9L6.08756 2.23762e-07L3.51694 0L0 18Z"
        fill={fillColor}
      />
    </svg>
  );
};
