import React from "react";
import "../../../public/test.css";
import Image from "next/image";
import DifferenceImage from "../../../public/goals-goal-svgrepo-com (1).svg";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import {
  EmailIcon,
  ContactIcon,
  socialMediaIcons,
} from "@/app/components/Footer";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <div className="flex flex-col items-center gap-10">
        <p className="text-sm sm:text-base md:text-xl text-center font-bold text-[#ffffff] uppercase z-30">
          Contact Us
        </p>

        <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-none  text-[#ffffff] font-medium text-center z-30">
          Shape
          <span className="custom-text font-black"> Your Future </span>
          And Build Your Dreams
          <span className="custom-text font-black"> Together </span>
        </h1>
      </div>

      {/* Next component */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 items-start sm:pt-8 md:pt-12">
        {/* Adress, email and qoute text */}
        <div className="relative ">
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[130px]"></div>
          </div> */}

          {/* Company`s promises */}
          <div className="relative overflow-hidden border-[0.5px] border-[#0d293d] rounded-lg px-4 py-6 md:px-10 sm:px-8 sm:py-10 md:py-14 lg:px-6 lg:py-10 xl:px-12 xl:py-12 z-20">
            <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>
            <div className="w-64 h-64 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

            <div className="relative z-20 flex items-center justify-center pb-4 rounded-full">
              <Image src={DifferenceImage} width={100} height={100} alt="jj" />
            </div>
            <div className="relative z-20 flex flex-col items-center gap-4">
              <p className="w-full text-[#ffffff] font-semibold text-2xl xs:text-3xl text-center z-20">
                BitLyte Studios is here to make your dream project come to life.
              </p>
              <br />
              <div className="flex flex-col gap-2 relative overflow-hidden">
                <p className="w-full text-lg xs:text-xl font-light text-[#ffffff] text-center z-20">
                  We want to make a positive difference for your business or
                  your life and accelerate it together with you and leave a
                  better mark in the world.
                </p>
                <br />
                <p className="w-full text-lg xs:text-xl font-light text-[#ffffff] text-center z-20">
                  Together with us, let`s make sure that you leave your digital
                  footprint in the right way.
                </p>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 items-center gap-6 pt-12">
            {contactInfoData.map((contactInfo) => (
              <ContactInfoCard
                key={contactInfo.title}
                description={contactInfo.description}
                title={contactInfo.title}
                icon={contactInfo.icon}
              />
            ))}
          </div>

          {/* Social media icons */}
          <div className="flex flex-col pt-6 gap-2 relative overflow-hidden">
            <div className="w-full flex items-center justify-center gap-8 ">
              <div className="w-full bg-[#252525] h-[0.5px]"></div>
              {socialMediaIcons.map((socialMediaIcon) => (
                <React.Fragment key={socialMediaIcon.id}>
                  <Link href={socialMediaIcon.href}>
                    {socialMediaIcon.icon()}
                  </Link>
                </React.Fragment>
              ))}
              <div className="w-full bg-[#252525] h-[0.5px]"></div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </HeroSectionWrapper>
  );
}

export const ContactInfoCard = ({
  icon,
  title,
  description,
}: ContactInfoType) => {
  return (
    <div className="overflow-hidden relative flex flex-col gap-2 rounded-lg py-6 border-[0.1px] border-[#0d293d] z-20">
      {/* Blur background */}
      <div className="w-64 h-64 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px]"></div>

      <div className="relative flex flex-col items-center justify-center gap-2 z-20">
        {/* Blur background */}
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="flex items-center z-30">
            {React.createElement(icon)}
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="w-full text-[#ffffff] font-medium text-xl lg:text-xl text-start z-20">
              {title}
            </h3>
            <p className="text-md font-light text-[#ffffff] text-start  z-20">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export type ContactInfoType = {
  title: string;
  description: string;
  icon: ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => React.JSX.Element;
};

export const contactInfoData: ContactInfoType[] = [
  {
    title: "Email",
    description: "76marin76@gmail.com",
    icon: EmailIcon,
  },
  {
    title: "Phone",
    description: "+385015896878",
    icon: ContactIcon,
  },
];
