import React from "react";
import Image from "next/image";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";
import {
  projectsThumbnailData,
  ProjectThumbnailDataProps,
} from "./projectsThumbnailData";

export default function ProjectsListSection() {
  return (
    <SectionWrapper>
      <div className="w-full flex flex-col md:flex-row gap-12 bg-[#0b0b0b] pt-4 sm:pt-8 md:pt-12">
        {projectsThumbnailData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            href={project.href}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            year={project.year}
            clientCountry={project.clientCountry}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const ProjectCard = ({
  id,
  href,
  title,
  year,
  clientCountry,
  description,
  imageSrc,
}: ProjectThumbnailDataProps) => {
  return (
    <Link
      href={`/projects${href}`}
      className="relative overflow-hidden flex flex-col"
    >
      {/* Project image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] flex items-center rounded-lg z-20 overflow-hidden">
        <Image
          src={imageSrc}
          alt="project_image"
          className="object-cover w-full h-full rounded-lg transition-transform duration-300 hover:scale-110" // object fir or object cover - shoose accordingly with screen size
        />
      </div>

      {/* Project info */}
      <div className="relative overflow-hidden flex flex-col gap-4 w-full z-20 py-6 md:py-8 lg:py-10 xl:py-12">
        <h3 className="w-full text-3xl sm:text-[28px] md:text-3xl leading-tight text-start font-semibold text-[#ffffff] z-20">
          {title}
        </h3>
        <p className="text-lg xs:text-xl font-light text-[#ffffff] text-start pt-4 z-20">
          Our client, MYSO, or Million Yield Structuring Opportunities, is a
          Web3 finance platform changing the game with DeFi. They deliver
          innovative decentralized web apps with an unparalleled user
          experience, security, and impact potential.
        </p>
        <div className="flex items-center gap-2 pt-4 z-20">
          <span className="text-lg xs:text-xl font-light text-[#ffffff]">
            {clientCountry}
          </span>
          <span className="custom-text">&#x2022;</span>
          <span className="text-xl text-[#eeeeee] font-black">{year}</span>
        </div>
      </div>
    </Link>
  );
};
