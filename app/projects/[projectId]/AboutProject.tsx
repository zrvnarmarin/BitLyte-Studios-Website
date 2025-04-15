import React from "react";
import Image, { StaticImageData } from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import { allProjectsData } from "./allProjectsData";
import { formatString } from "@/app/services/[serviceId]/HeroSection";

export default function AboutProject({ projectName }: { projectName: string }) {
  const selectedProject = allProjectsData.find(
    (project) => formatString(projectName) === project.name
  );

  return (
    <SectionWrapper>
      <div className="flex flex-col xl:flex-row items-center xl:items-center justify-between gap-6">
        <h2 className="w-full text-[35px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
          About Project
        </h2>
        <div className="w-full flex flex-wrap justify-start xl:justify-end gap-2">
          {selectedProject?.services.map((service) => (
            <div
              key={service}
              className={`flex gap-2 items-center justify-center text-[#ffffff] font-medium text-xl lg:text-xl border-[0.5px] border-[${selectedProject?.borderColor}] z-20 rounded-full px-6 py-2`}
            >
              <span className="text-base xs:text-lg font-light text-[#ffffff] text-center">
                {service}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="relative grid grid-cols-1 xl:grid-cols-2 items-center justify-between gap-6 rounded-lg pt-4 sm:pt-8 md:pt-12">
        {/* Project image  */}
        <div className="z-20">
          <Image
            src={selectedProject?.aboutSectionImgSrc as StaticImageData}
            alt="Tekst"
            width={0}
            height={0}
            className="rounded-lg"
          />
        </div>

        <p className="w-full text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight text-start z-20">
          {selectedProject?.fullProjectDescription}
        </p>
      </div>
    </SectionWrapper>
  );
}