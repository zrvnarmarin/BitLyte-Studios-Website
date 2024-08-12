import React from "react";
import "../../../public/test.css";
import HeroSectionWrapper from "../../components/HeroSectionWrapper";
import Image from "next/image";
import ArrowRight from "../../../public/images/Rectangle 1.svg";
import { Logo } from "@/app/services/[serviceId]/StepsSection";
import {
  EmailIcon,
  ContactIcon,
  socialMediaIcons,
} from "@/app/components/Footer";
import Link from "next/link";

export default function HeroSection() {
  return (
    <HeroSectionWrapper>
      <div>
        <h1 className="text-8xl text-[#ffffff] font-medium text-center z-30 pt-16">
          Let`s Build
          <span className="custom-text font-black"> Together! </span>
        </h1>
      </div>

      {/* Next component */}
      <div className="grid grid-cols-2 gap-8 pt-12 items-start">
        {/* Adress, email and qoute text */}
        <div className="relative py-12">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[130px]"></div>
          </div>

          <div className="relative z-20 flex items-center justify-center pb-4 rounded-full">
            <DifferenceIcon />
          </div>

          <div className="relative z-20 flex flex-col items-center gap-4">
            <p className="w-full text-3xl text-center font-bold text-[#ffffff]">
              BitLyte Studios is here to make your dream project come to life.
            </p>
            <br />
            <div className="flex flex-col gap-2 relative overflow-hidden">
              <p className="w-full text-xl text-center font-light text-[#ffffff]">
                We want to make a positive difference for your business or your
                life and accelerate it together with you and leave a better mark
                in the world.
              </p>
              <br />
              <p className="w-full text-xl text-center font-light text-[#ffffff]">
                Together with you, let’s make sure that you leave your digital
                footprint in the right way.
              </p>
            </div>
          </div>

          {/* Contact info */}
          <div className="grid grid-cols-2 items-center gap-6 pt-12">
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

        {/* Form */}
        <div className="flex flex-col gap-8 z-20 overflow-hidden relative py-12 px-10 rounded-lg">
          {/* Blur background */}
          <div className="w-72 h-72 absolute left-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0095ff] z-10 blur-[330px]"></div>

          {/* Logo behind*/}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <Logo width={400} height={400} />
          </div>

          <h2 className="w-full text-4xl text-[#ffffff] font-bold pb-4">
            Talk to us about{" "}
            <span className="text-[#1A9FFF] font-bold">your project</span>
          </h2>
          <form className="flex flex-col gap-6 z-20">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="full-name"
                className="w-full text-lg text-[#ffffff] font-semibold "
              >
                Full Name
              </label>
              <input
                id="full-name"
                type="text"
                className="focus:outline-none focus:ring focus:ring-violet-900 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="w-full text-lg text-[#ffffff] font-semibold "
              >
                Email
              </label>
              <input
                id="email"
                type="text"
                className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="project-message"
                className="w-full text-lg text-[#ffffff] font-semibold "
              >
                About your project
              </label>
              <textarea
                id="project-message"
                rows={10}
                className="focus:outline-none focus:ring focus:ring-violet-400 pl-4 py-3 bg-gradient-to-r from-[#292929] to-[#00111d] border-2 border-[#225c86] rounded-lg text-base text-[#eeeeee] font-normal"
              />
            </div>
            <div className="w-full flex justify-center pt-2">
              <button className="w-fit flex items-center justify-center gap-2 py-2 px-6 text-[#ffffff] bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] rounded-full text-xl">
                <Image src={ArrowRight} alt="hero_image" />
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </HeroSectionWrapper>
  );
}

export const DifferenceIcon = () => {
  return (
    <svg
      width="100px"
      height="100px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      fill="#000000"
      stroke="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0" />

      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <g id="SVGRepo_iconCarrier">
        <path
          d="M65.453 10.826l-.053 5c3.073.034 6.144.549 9.059 1.52l1.58-4.744a34.758 34.758 0 0 0-10.586-1.776zm-5.365.352a35.131 35.131 0 0 0-10.26 3.119l2.17 4.506a30.166 30.166 0 0 1 8.799-2.674l-.71-4.951zm20.908 3.51l-2.283 4.447a30.131 30.131 0 0 1 7.447 5.394l3.522-3.549a35.101 35.101 0 0 0-8.686-6.293zM35 19.125c-19.3 0-35 15.7-35 35s15.7 35 35 35c8.934 0 17.087-3.374 23.275-8.904c.005 0 .01 0 .014.002c.065-.059.127-.121.191-.18l.125-.115a34.677 34.677 0 0 0 2.461-2.496c.083-.092.167-.183.248-.276c.399-.455.79-.919 1.165-1.394c-.482-.04-.961-.092-1.436-.155c-.318-.041-.632-.094-.947-.146c-.158-.026-.316-.046-.473-.074a29.93 29.93 0 0 1-1.383-.283a29.851 29.851 0 0 1-1.183-.301c-.065-.018-.13-.033-.194-.051C44.234 71.216 35 59.651 35 45.875a29.876 29.876 0 0 1 9.557-21.955c.162-.151.324-.302.49-.45c.249-.22.504-.436.76-.65c.158-.131.313-.266.474-.394c.415-.332.837-.656 1.27-.965a35.075 35.075 0 0 0-2.867-.965l-.03-.008c-.287-.082-.577-.155-.867-.23c-.215-.056-.43-.118-.646-.17c-.349-.084-.701-.155-1.053-.229c-.126-.026-.25-.057-.377-.082l-.002.002A34.83 34.83 0 0 0 35 19.125zm58.2 5.928l-4.028 2.967a30.012 30.012 0 0 1 4.252 8.15l4.736-1.606a34.98 34.98 0 0 0-4.96-9.511zm6.294 14.717l-4.924.87c.536 3.029.603 6.145.194 9.19l4.955.666c.48-3.562.4-7.19-.225-10.726zM93.8 54.338a30.198 30.198 0 0 1-3.936 8.314l4.143 2.801a35.162 35.162 0 0 0 4.586-9.695l-4.793-1.42zm-6.803 11.928a29.79 29.79 0 0 1-7.213 5.687l2.451 4.358a34.776 34.776 0 0 0 8.428-6.647l-3.666-3.398zm-11.394 7.638a30.155 30.155 0 0 1-9.002 1.887l.265 4.992a35.12 35.12 0 0 0 10.498-2.199l-1.761-4.68z"
          fill="#55b8ff"
        />
      </g>
    </svg>
  );
};

export const ContactInfoCard = ({
  icon,
  title,
  description,
}: ContactInfoType) => {
  return (
    <div className="overflow-hidden relative flex flex-col gap-2 rounded-lg py-6 z-20">
      {/* Reason Card */}
      <div className="relative flex flex-col items-center justify-center gap-2 z-20">
        {/* Blur background */}
        <div className="w-96 h-96 absolute right-0 bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0083E0] z-10 blur-[230px]"></div>
        <div className="flex flex-row items-center justify-between gap-8">
          <div className="flex items-center z-30">
            {/* Render the icon component */}
            {React.createElement(icon)}
          </div>
          <div className="flex flex-col  gap-2">
            <h3 className="w-full text-[#ffffff] font-bold text-xl text-start z-20">
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
  icon: () => React.JSX.Element;
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
