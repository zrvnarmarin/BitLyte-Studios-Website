import React from "react";
import Image from "next/image";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";
import Link from "next/link";
import { LogoForButtonRotated } from "../services/[serviceId]/HeroSection";
import {
  projectsThumbnailData,
  ProjectThumbnailDataProps,
} from "../projects/projectsThumbnailData";

export default function ProjectsSection() {
  return (
    <SectionWrapper>
      <div className="w-full flex items-center justify-between">
        <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
          Our Latest Work
        </h2>

        <div className="hidden relative w-full xl:flex justify-end z-30">
          <Link
            href={`/projects`}
            className="relative overflow-hidden w-fit flex items-center gap-2 py-4 px-12 text-[#000000] bg-[#ffffff] rounded-full font-normal text-2xl xs:text-2xl sm:text-2xl md:text-2xl shadow-[0_0_10px_0_rgba(255,255,255,1)] hover:shadow-[0_0_20px_0_rgba(255,255,255,1)] duration-300"
          >
            <LogoForButtonRotated fillColor="#000000" width={18} height={20} />
            More Projects
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row gap-6 bg-[#0b0b0b] pt-4 sm:pt-8 md:pt-12">
        {projectsThumbnailData.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            services={project.services}
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
      className="w-full relative overflow-hidden flex flex-col rounded-lg border-[0.5px] border-[#0a2030] hover:shadow-[0_0_15px_0_rgba(10,32,78,1)]"
    > 
      {/* Blur gradients */}
      <div className="w-48 h-48 lg:w-96 lg:h-96 absolute top-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      <div className="w-96 h-96 absolute left-0 right-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
      {/* Project image */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[400px] flex items-center z-20 overflow-hidden">
        <Image
          src={imageSrc}
          alt="project_image"
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" // object fir or object cover - shoose accordingly with screen size
        />
      </div>

      {/* Project info */}
      <div className="relative overflow-hidden flex flex-col gap-4 w-full z-20 py-6 md:py-8 lg:py-10 xl:py-8 px-6">
        <h3 className="w-full text-3xl sm:text-[28px] md:text-3xl leading-tight text-start font-semibold text-[#ffffff] z-20">
          {title}
        </h3>
        <p className="text-xl font-light text-[#ffffff] text-start pt-4 z-20">
          {description}
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
