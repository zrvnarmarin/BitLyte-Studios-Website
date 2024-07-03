import React from "react";
import Image from "next/image";
import TestImage from '../../public/images/home/undraw_collaborators_re_hont 1.svg'
import '../../public/test.css'
import ArrowRight from '../../public/images/Rectangle 1.svg'

export default function ServicesSection() {
  return (
    <section className="w-full flex flex-col gap-6 pt-10 sm:pt-12 md:pt-16 lg:pt-28   bg-[#ffffff]">
      <h2 className="px-8 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 text-4xl text-primary-brown ">
        Our Work
      </h2>

      {/* Project cards container */}
      <div className="w-full flex flex-col gap-16 bg-[#0073AA]/10 px-4 md:px-14 lg:px-24 xl:px-28 2xl:px-32 3xl:px-72 py-8 md:py-14 lg:py-24 xl:py-28 2xl:py-32 3xl:py-72">
        {/* Project card */}
        {projects.map(project =>
            <ProjectCard 
                key={project.id}
                id={project.id}
                title={project.title} 
                description={project.description} 
                serviceCategories={project.serviceCategories} 
                imageSrc={project.serviceCategories} 
            />
        )}
      </div>
      
    </section>
  );
}

export const ProjectCard = ({ title, description, serviceCategories, imageSrc } : ProjectCardProps) => {
    return (
        <div className="flex flex-col gap-2">
            <Image src={TestImage} alt="project_image" />
            <h3 className="font-bold text-xl text-primary-brown">{title}</h3>
            <ul className="flex flex-wrap items-center pt-4 gap-2">
                {serviceCategories.map(category =>
                    <li key={category} className="flex items-center bg-[#0073AA]/30 text-xs text-primary-brown rounded-full px-2 py-1">
                       <p>&#8226; {category}</p>
                    </li>
                )}
            </ul>
            <p className="text-base text-primary-brown font-normal">{description}</p>
            <div className="w-full flex pt-4">
                <button className="flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0]  rounded-full text-xl">
                    <Image src={ArrowRight} alt="hero_image"  />
                    View project
                </button>
            </div>
        </div>
    )
}

export type ProjectCardProps = {
    id: number;
    title: string;
    description: string;
    serviceCategories: string[];
    imageSrc: any;
}

export const projects = [
    {
        id: 1,
        title: 'Apartmenify',
        description: 'Apartmenify is our biggest apartment management tool app to this date',
        serviceCategories: ['Web Design', 'Social Media', 'Strategy'],
        imageSrc: TestImage
    },
    {
        id: 1,
        title: 'Foodify',
        description: 'Foodify is our biggest apartment food tool app to this date',
        serviceCategories: ['Web Design', 'Social Media', 'Strategy'],
        imageSrc: TestImage
    }
]