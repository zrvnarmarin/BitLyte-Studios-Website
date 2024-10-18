import React from "react";
import Image from "next/image";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";
import TestImage from "../../public/apartment.webp";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";

export default function ProjectsListSection() {
  return (
    <SectionWrapper>
      <div className="w-full flex flex-col md:flex-row gap-6 bg-[#0b0b0b] pt-4 sm:pt-8 md:pt-12">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            serviceCategories={project.serviceCategories}
            imageSrc={project.imageSrc}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ProjectCard = ({
  title,
  description,
  serviceCategories,
  imageSrc,
}: ProjectCardProps) => {
  return (
    <Link
      href={`/projects`}
      className="relative overflow-hidden flex flex-col rounded-lg border-[0.5px] border-[#0a2030] hover:shadow-[0_0_25px_0_rgba(10,32,78,1)]"
    >
      {/* Project image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] flex items-center bg-[#ffffff] z-20">
        <Image
          src={imageSrc}
          alt="project_image"
          fill
          className="object-cover w-full h-full"
        />
      </div>

      {/* Project info */}
      <div className="relative overflow-hidden flex flex-col gap-6 w-full z-20 py-6 px-4 xs:px-6 sm:px-8 md:py-8 md:px-8 lg:px-12 lg:py-10 xl:py-12">
        {/* Blur gradients */}
        <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

        <h3 className="w-full text-2xl xs:text-3xl lg:text-4xl text-start font-bold text-[#ffffff] z-20">
          {title}
        </h3>
        {/* <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start z-20">
          {description}
        </p> */}
        <div className="flex flex-col gap-2 pb-2">
          <p className="text-xl text-[#eeeeee] font-black z-20">
            Project Briefing:
          </p>
          <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start z-20">
            Our client, MYSO, or Million Yield Structuring Opportunities, is a
            Web3 finance platform changing the game with DeFi. They deliver
            innovative decentralized web apps with an unparalleled user
            experience, security, and impact potential.
          </p>
        </div>
      </div>
    </Link>
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
