import React from "react";
import Image, { StaticImageData } from "next/image";
import MarinRemovedBgImage from "../../../public/marin_photoroom-Photoroom(1)_LE_auto_x2 (2)-Photoroom (3).png";
import IgorImage from "../../../public/Igor (2).jpeg";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import { socialMediaIcons } from "@/app/components/Footer";
import Link from "next/link";

export default function MeetTheFoundersSection() {
  return (
    <SectionWrapper>
      {/* Blur effects */}
      <div className="w-64 h-64 absolute right-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[130px]"></div>
      <div className="w-64 h-64 absolute left-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[130px]"></div>

      <h2 className="w-full text-[40px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-center z-20">
        Meet The Founders
      </h2>
      <p className="text-xl font-light text-[#ffffff] text-center z-20 xs:px-4 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-64">
        Our founders teamed up with a shared goal: to create practical and
        creative solutions that actually work. They wanted to build something
        that makes a real difference for businesses.
      </p>

      {/* Smaller screen cards */}
      <div className="relative w-full grid grid-cols-1 sm:grid-cols-2 md:px-8 lg:px-24 xl:px-60 3xl:px-72 gap-6 justify-center items-center pt-4 sm:pt-8 md:pt-12 border-[  border-x-[#1d263f] rounded-lg">
        {/* Blur gradients */}
        <div className="w-96 h-96 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
        <div className="w-56 h-56 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

        {foundersData.map((founderInfo) => (
          <FounderCard
            key={founderInfo.id}
            id={founderInfo.id}
            name={founderInfo.name}
            imgSrc={founderInfo.imgSrc}
            occupationOne={founderInfo.occupationOne}
            occupationTwo={founderInfo.occupationTwo}
            linkedinHref={founderInfo.linkedinHref}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export const FounderCard = ({
  id,
  name,
  imgSrc,
  occupationOne,
  occupationTwo,
  linkedinHref,
}: FounderDataType) => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col z-20 rounded-lg">
      <div className="w-full relative z-20 rounded-lg py-6 px-6">
        <Image
          src={imgSrc}
          width={0}
          height={0}
          alt="Marin_image"
          className="z-20 object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="relative flex flex-col justify-between items-start pb-4 pt-2 px-6">
        {/* Centered Content */}
        <div className="flex flex-col gap-2 justify-center items-start z-20 my-auto">
          <h2 className="text-[#ffffff] font-semibold text-3xl">{name}</h2>
          <p className="text-lg xs:text-xl font-light text-[#ffffff]">
            {occupationOne} <br />
            {occupationTwo}
          </p>
        </div>

        {/* Social Media Icons and Divider */}
        <div className="flex flex-col gap-2 relative overflow-hidden z-20 mt-6">
          <div className="w-full flex items-center justify-end gap-8">
            {socialMediaIcons.map((socialMediaIcon) => (
              <React.Fragment key={socialMediaIcon.id}>
                <Link href={linkedinHref} target="_blank">
                  {socialMediaIcon.icon()}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const foundersData: FounderDataType[] = [
  {
    id: 1,
    name: "Marin Zrvnar",
    imgSrc: MarinRemovedBgImage,
    occupationOne: "Co-Founder",
    occupationTwo: "Web Developer/Designer",
    linkedinHref: "https://www.linkedin.com/in/marinzrvnar/",
  },
  {
    id: 2,
    name: "Igor Ozmec",
    imgSrc: IgorImage,
    occupationOne: "Co-Founder",
    occupationTwo: "Client Acquisition/Marketing",
    linkedinHref: "https://www.linkedin.com/in/igor-ozmec/",
  },
];

export type FounderDataType = {
  id: number;
  name: string;
  imgSrc: StaticImageData;
  occupationOne: string;
  occupationTwo: string;
  linkedinHref: string;
};
