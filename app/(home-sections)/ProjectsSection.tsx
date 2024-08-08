import React from "react";
import Image from "next/image";
import TestImage from "../../public/images/home/undraw_collaborators_re_hont 1.svg";
import "../../public/test.css";
import ArrowRight from "../../public/images/Rectangle 1.svg";
import SectionWrapper from "../components/SectionWrapper";

export default function ServicesSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20">Our Work</h2>

      {/* Project cards container */}
      <div className="w-full flex flex-col gap-24 bg-[#0b0b0b] ">
        {/* Project card */}
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            serviceCategories={project.serviceCategories}
            imageSrc={project.serviceCategories}
          />
        ))}
      </div>

      <ProjectCardDesktop
        title="Apartmenify"
        description="This is the application about apartment rental on the seaside"
        serviceCategories={["Web Design", "Social Media", "Strategy"]}
      />
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
    <div className="flex flex-col gap-2">
      <Image src={TestImage} alt="project_image" />
      <ul className="flex flex-wrap items-center pt-1 gap-2">
        {serviceCategories.map((category) => (
          <li
            key={category}
            className="flex items-center bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] text-[10px] text-[#eeeeee] rounded-full px-2 py-1"
          >
            <p>&#8226; {category}</p>
          </li>
        ))}
      </ul>
      <h3 className="w-full text-[#ffffff] font-semibold text-2xl text-start pt-2">
        {title}
      </h3>
      <p className="text-base text-[#eeeeee] font-normal">{description}</p>
      <div className="w-full flex pt-8">
        <button className="flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
          <Image src={ArrowRight} alt="hero_image" />
          View project
        </button>
      </div>
    </div>
  );
};

export const ProjectCardDesktop = ({
  title,
  description,
  serviceCategories,
  imageSrc,
}: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden flex flex-row gap-2 rounded-lg p-8 border-[0.5px] border-[#252525]">

        {/* Blur background */}
        <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[830px]"></div>

      <div className="relative w-full overflow-hidden  flex items-center bg-[#ffffff] rounded-lg border-[0.5px] border-[#252525]">
        <Image
          src={TestImage}
          alt="project_image"
          width={500}
          height={350}
          className="w-full"
        />
      </div>

      <div className="w-full">
        <h3 className="w-full text-4xl text-center font-bold text-[#ffffff]">
          {title}
        </h3>
        {/* <ul className="flex flex-wrap items-center pt-1 gap-2">
          {serviceCategories.map((category) => (
            <li
              key={category}
              className="flex items-center bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] text-[10px] text-[#eeeeee] rounded-full px-2 py-1"
            >
              <p>&#8226; {category}</p>
            </li>
          ))}
        </ul> */}
        <p className="text-base text-[#eeeeee] font-normal">Our client, MYSO, or Million Yield Structuring Opportunities, is a Web3 finance platform changing the game with DeFi. They deliver innovative decentralized web apps with an unparalleled user experience, security, and impact potential.</p>
        <button className="flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
          <Image src={ArrowRight} alt="hero_image" />
          View project
        </button>
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
      "Apartmenify is our biggest apartment management tool app to this date",
    serviceCategories: ["Web Design", "Social Media", "Strategy"],
    imageSrc: TestImage,
  },
  {
    id: 1,
    title: "Foodify",
    description: "Foodify is our biggest apartment food tool app to this date",
    serviceCategories: ["Web Design", "Social Media", "Strategy"],
    imageSrc: TestImage,
  },
];
