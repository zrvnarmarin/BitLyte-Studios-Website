import React from "react";
import Image from "next/image";
import SectionWrapper from "../../components/SectionWrapper";
import AdvantageTestIcon from "../../../public/BitLyte_Studios_ikona_Brand_Identity_64x64px.svg";
import { HighlySkilledProffesional } from "@/app/(home-sections)/WhyUsSection";

export default function AboutUsSection() {
  return (
    <SectionWrapper>
      <div className="w-full text-center z-20">
        <h2 className="text-[#ffffff] text-3xl xs:text-4xl sm:text-5xl font-medium xs:font-normal mb-8">
          Our <span className="text-primary-blue font-black">Values</span>
        </h2>

        <div className="grid grid-cols-2 grid-rows-3 gap-6 mb-12">
          <div className="row-span-2 relative overflow-hidden flex-1 p-8 rounded-lg border-[0.5px] border-[#252525]">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>
            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>

            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>
            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>
          </div>

          <div className="relative overflow-hidden flex-1 p-8 rounded-lg border-[0.5px] border-[#252525]">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>

            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>
          </div>

          <div className="row-span-2 relative overflow-hidden flex-1 p-8 rounded-lg border-[0.5px] border-[#252525]">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>

            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>

            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>
            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>
          </div>

          <div className="relative overflow-hidden flex-1 p-8 rounded-lg border-[0.5px] border-[#252525]">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>

            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>
          </div>

          <div className="relative overflow-hidden flex-1 p-8 rounded-lg border-[0.5px] border-[#252525]">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>

            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>
          </div>

          <div className="relative overflow-hidden flex-1 p-8 rounded-lg border-[0.5px] border-[#252525]">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <HighlySkilledProffesional />
            <p className="text-[#ffffff] font-semibold text-2xl xs:text-3xl text-start z-20">
              Kindness
            </p>

            <p className="text-start text-lg xs:text-xl font-light text-[#ffffff] z-20">
              Lorem ipsum dolor sit This is something which quite similary
              resembles to something else
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

const valueCardData = [
  {
    id: 1,
    title: "Innovation",
    description:
      "We constantly push the boundaries of technology to deliver cutting-edge solutions for our clients.",
  },
  {
    id: 2,
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster a collaborative environment with our clients and partners.",
  },
  {
    id: 3,
    title: "Excellence",
    description:
      "We strive for excellence in everything we do, ensuring the highest quality in our products and services.",
  },
  {
    id: 4,
    title: "Client-Centric",
    description:
      "Our clients' success is our top priority, and we tailor our solutions to meet their unique needs and goals.",
  },
];

const achievements = [
  {
    id: 1,
    stat: "100+",
    description: "Successful Projects",
    colorClasses: {
      statText: "primary-blue",
      container: "bg-gradient-to-r from-[#d1ecff] to-[#f6ecfd]",
    },
  },
  {
    id: 2,
    stat: "95%",
    description: "Client Satisfaction",
    colorClasses: {
      statText: "primary-purple",
      container: "bg-gradient-to-r from-[#f2e6fb] to-[#defbeb]",
    },
  },
  {
    id: 3,
    stat: "50+",
    description: "Expert Team Members",
    colorClasses: {
      statText: "primary-blue",
      container: "bg-gradient-to-r from-[#d1ecff] to-[#f6ecfd]",
    },
  },
  {
    id: 4,
    stat: "24/7",
    description: "Client Support",
    colorClasses: {
      statText: "primary-purple",
      container: "bg-gradient-to-r from-[#f2e6fb] to-[#defbeb]",
    },
  },
];
