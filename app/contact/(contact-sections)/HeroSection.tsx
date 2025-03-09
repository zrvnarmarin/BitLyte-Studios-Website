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
import { LogoIcon } from "@/app/components/Navbar";

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
          Tell Us About
          <span className="custom-text font-black"> Your Project </span>
        </h1>

        <p className="text-xl font-light text-[#ffffff] text-start xs:text-center  xs:px-4 sm:px-16 md:px-24 lg:px-32 xl:px-72 z-20">
          As a web agency, we build digital products that meet both user needs
          and business goals. Our human-centered design
        </p>
      </div>

      {/* Adress, email and qoute text section*/}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8 pt-4 sm:pt-8 md:pt-12 z-30">
        <div className="flex z-30 flex-col gap-8 justify-start overflow-hidden relative px-4 py-8 md:px-10 sm:px-8 sm:py-10 md:py-14 lg:px-6 lg:py-10 xl:px-12 xl:py-12 rounded-lg border-[0.5px] border-[#0a2030]">
          {/* Blur effect background */}
          <div className="w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[830px]"></div>

          <div className="flex flex-col items-start gap-2 lg:gap-4">
            <LogoIcon />
            <div className="flex flex-col gap-2">
              <span className="text-[#ffffff] text-xl lg:text-2xl font-bold z-20">
                BitLyte Studios
              </span>
              <p className="text-xl font-light text-[#ffffff] z-20">
                Business focused web design that solidifies your Brand Image and
                establishes constant revenue
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MailIcon />
            <div className="flex flex-col justify-start">
              <p className="text-xl text-[#ffffff] text-start font-bold ">
                Email Us
              </p>
              <p className="text-xl text-[#ffffff] text-start font-light ">
                bitlyte-studios@admin.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPinIcon />
            <div className="flex flex-col justify-start">
              <p className="text-xl text-[#ffffff] text-start font-bold ">
                Visit Us
              </p>
              <p className="text-xl text-[#ffffff] text-start font-light ">
                Assington, Sudbury, UK
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <ClockIcon />
            <div className="flex flex-col justify-start gap-2">
              <p className="text-xl text-[#ffffff] text-start font-bold ">
                Working Hours
              </p>
              <p className="text-xl text-[#ffffff] text-start font-light ">
                Monday - Friday: 9am - 6pm <br />
                Weekend: By appointment
              </p>
            </div>
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

export const MailIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

const MapPinIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
};

const ClockIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
};

export const UserIcon = () => {
  return (
    // <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#1A9FFF]">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#1A9FFF"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-user text-white"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
    // </div>
  );
};

export const MessageSquareIcon = () => {
  return (
    // <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#1A9FFF]">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A9FFF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-message-square text-white"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    // </div>
  );
};