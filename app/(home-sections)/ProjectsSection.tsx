import React from "react";
import Image from "next/image";
import TestImage from "../../public/images/home/undraw_collaborators_re_hont 1.svg";
import "../../public/test.css";
import SectionWrapper from "../components/SectionWrapper";

export default function ProjectsSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-5xl text-[#ffffff] z-20 pb-12">Our Work</h2>

      <div className="w-full flex flex-col gap-24 bg-[#0b0b0b] ">
      {projects.map((project) => (
          <ProjectCardDesktop
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            serviceCategories={project.serviceCategories}
            imageSrc={project.serviceCategories}
          />
        ))}
      </div> 

      {/* <ProjectCardDesktop
        id={3}
        title="Apartmenify"
        description="This is the application about apartment rental on the seaside"
        serviceCategories={["Web Design", "Social Media", "Strategy"]}
      /> */}
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
    <div className="relative overflow-hidden flex flex-row gap-6 rounded-l-full rounded-tb-full border-[0.5px] border-[#252525] ">
      {/* Blur background */}
      <div className="w-full h-full absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#002139] z-10 blur-[130px]"></div>

      <div className="relative w-full overflow-hidden flex items-center bg-[#ffffff] z-20">
        <Image
          src={TestImage}
          alt="project_image"
          width={500}
          height={350}
          className="w-full"
        />
      </div>

      <div className="flex flex-col gap-8 w-full z-20 p-8">
        <h3 className="w-full text-4xl text-center font-bold text-[#ffffff] pt-6">
          {title}
        </h3>
        <p className="text-xl text-start font-light text-[#ffffff]">
          Our client, MYSO, or Million Yield Structuring Opportunities, is a
          Web3 finance platform changing the game with DeFi. They deliver
          innovative decentralized web apps with an unparalleled user
          experience, security, and impact potential.
        </p>
        <div className="flex flex-col gap-2 pb-2">
          <p className="text-xl text-[#eeeeee] font-black">Project objectives:</p>
          <p className="text-xl text-start font-light text-[#ffffff]">
            Our client, MYSO, or Million Yield Structuring Opportunities, is a
            Web3 finance platform changing the game with DeFi. They deliver
            innovative decentralized web apps with an unparalleled user
            experience, security, and impact potential.
          </p>
        </div>
        <div className="w-full flex items-center justify-start">
          <button className="w-fit bg-[#ffffff] flex gap-2 items-center justify-center text-[#000000] font-normal text-xl z-20 rounded-full border-[0.5px] border-[#ffffff] px-8 py-4">
            <LogoArrowRight fillColor="#000000" />
            View project
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
      "Apartmenify is our biggest apartment management tool app to this date",
    serviceCategories: ["Web Design", "Social Media", "Strategy"],
    imageSrc: TestImage,
  },
  {
    id: 1,
    title: "Lease Lounge",
    description: "Rentalio is the rental management tool which we build in collaboration with great team.",
    serviceCategories: ["Web Design", "Social Media", "Strategy"],
    imageSrc: TestImage,
  },
];

export const LogoArrowRight = ({
  fillColor = "#ffffff",
}: {
  fillColor?: string;
}) => {
  return ( // Add this line
    <svg
      width="12"
      height="18"
      viewBox="0 0 12 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 18H2.49225L12 9L6.08756 2.23762e-07L3.51694 0L0 18Z"
        fill={fillColor} // Updated to use fillColor
      />
    </svg>
  ); // Add this line
};