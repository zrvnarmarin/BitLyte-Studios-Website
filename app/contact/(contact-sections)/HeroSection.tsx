import React from "react";
import "../../../public/test.css";
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
      <div className="w-48 h-48 md:hidden xl:block lg:w-32 lg:h-32 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

      {/* Blur background effects */}
      <div className="md:w-48 md:h-48 absolute right-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      <div className="md:w-48 md:h-48 absolute left-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>

      {/* Heading and subheading */}
      <div className="flex flex-col items-center gap-10">
        <p className="text-base md:text-xl text-center font-bold text-[#ffffff] uppercase pb-2 z-30">
          Contact Us
        </p>

        <h1 className="text-[2.5rem] xs:text-5xl sm:text-6xl xl:text-7xl leading-tight lg:leading-none  text-[#ffffff] font-medium text-center z-30">
          Turn Your
          <span className="custom-text font-black"> Best Ideas </span>
          Into A True Reality And
          <span className="custom-text font-black"> Stand Out </span>
        </h1>
      </div>

      {/* Adress, email and qoute text section*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-4 items-start sm:pt-8 md:pt-12 z-30">
        <div className="relative">
          {/* Company`s promises */}
          <div className="relative overflow-hidden bg-[#0b0b0b] border-[0.5px] border-[#0d293d] rounded-lg px-4 py-6 md:px-10 sm:px-8 sm:py-10 md:py-14 lg:px-6 lg:py-10 xl:px-12 xl:py-12 z-20">
            {/* Gradients */}
            <div className="w-80 h-80 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>
            <div className="w-80 h-80 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[230px]"></div>

            <div className="relative z-20 flex items-center justify-center pb-4 rounded-full">
              {/* <Image src={DifferenceImage} width={100} height={100} alt="jj" /> */}
              <TrophyIcon />
            </div>
            <div className="relative z-20 flex flex-col items-center gap-4">
              <p className="w-full text-[#ffffff] font-semibold  text-3xl sm:text-[28px] md:text-3xl leading-tight text-center z-20">
                BitLyte Studios is here to make your dream project come to life.
              </p>
              <br />
              <div className="flex flex-col gap-2 relative overflow-hidden">
                <p className="w-full text-xl font-light text-[#ffffff] text-center z-20">
                  We want to make a positive difference for your business or
                  your life and accelerate it together with you and leave a
                  better mark in the world.
                </p>
                <br />
                <p className="w-full text-xl font-light text-[#ffffff] text-center z-20">
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
              <div className="w-full bg-[#0d293d] h-[0.5px]"></div>
              {socialMediaIcons.map((socialMediaIcon) => (
                <React.Fragment key={socialMediaIcon.id}>
                  <Link href={socialMediaIcon.href}>
                    {socialMediaIcon.icon()}
                  </Link>
                </React.Fragment>
              ))}
              <div className="w-full bg-[#0d293d] h-[0.5px]"></div>
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
    <div className="overflow-hidden relative flex flex-col gap-2 rounded-lg p-6 border-[0.5px] border-[#0d293d] z-20">
      {/* Blur background */}
      <div className="w-40 h-40 absolute left-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[130px]"></div>
      <div className="w-40 h-40 absolute right-0 bottom-0 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[130px]"></div>

      <div className="relative flex flex-col items-start justify-start gap-2 z-20">
        {/* Blur background */}
        <div className="flex flex-row items-center justify-between gap-6">
          <div className="flex items-center z-30">
            {React.createElement(icon)}
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="w-full text-[#ffffff] font-semibold text-3xl sm:text-[28px] md:text-3xl leading-tight text-start z-20">
              {title}
            </h3>
            <p className="text-md 2xl:text-lg font-light text-[#ffffff] text-start z-20">
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

export const TrophyIcon = () => {
  return (
    <svg
      fill="#55b8ff"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#55b8ff"
      stroke-width="0.4"
      className="w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M28.6 29.4c3-2.3 7.4-5.7 7.4-18.4v-1H14v1c0 12.7 4.5 16.1 7.4 18.4 1.7 1.3 2.6 2 2.6 3.6v3c-1.6.2-3.2.8-3.8 2H18c-1.1 0-2 .9-2 2h18c0-1.1-.9-2-2-2h-2.2c-.6-1.2-2.1-1.8-3.8-2v-3c0-1.6.8-2.3 2.6-3.6zm-3.6.5c-.6-.8-1.5-1.5-2.3-2.1-2.7-2.1-6.4-4.9-6.6-15.8h18c-.2 10.8-3.9 13.7-6.6 15.8-1 .7-1.9 1.3-2.5 2.1z"></path>
        <path d="M18.8 27C18.7 27 8 24.7 8 13v-1h7v2h-5c.6 9.2 9.1 11 9.2 11l-.4 2z"></path>
        <path d="M31.2 27l-.4-2c.4-.1 8.6-1.9 9.2-11h-5v-2h7v1c0 11.7-10.7 14-10.8 14z"></path>
      </g>
    </svg>
  );
};
