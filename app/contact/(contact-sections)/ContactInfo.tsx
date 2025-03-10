import React from "react";
import Link from "next/link";
import { LogoIcon } from "@/app/components/Navbar";
import { socialMediaIcons } from '@/app/components/Footer';

export default function ContactInfo() {
    return (
        <div className="flex z-30 flex-col gap-8 justify-start overflow-hidden relative p-8 md:px-10 sm:px-8 sm:py-10 md:py-14 lg:px-10 lg:py-10 xl:p-12 rounded-lg border-[0.5px] border-[#0a2030]">
          {/* Blur effect background */}
          <div className="w-96 h-96 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1a4869] to-[#002139] z-10 blur-[830px]"></div>

          <div className="flex flex-col items-start gap-2 lg:gap-4 z-20">
            <LogoIcon />
            <div className="flex flex-col gap-2 pt-2">
              <span className="text-[#ffffff] text-xl lg:text-2xl font-bold">
                BitLyte Studios
              </span>
              <p className="text-base font-light text-[#ffffff] capitalize">
                Business focused web design that solidifies your Brand Image and
                establishes constant revenue
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 z-20">
            <MailIcon />
            <div className="flex flex-col justify-start">
              <p className="text-xl text-[#ffffff] text-start font-bold ">
                Email Us
              </p>
              <p className="text-lg text-[#ffffff] text-start font-light ">
                bitlyte-studios@admin.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 z-20">
            <MapPinIcon />
            <div className="flex flex-col justify-start">
              <p className="text-xl text-[#ffffff] text-start font-bold ">
                Visit Us
              </p>
              <p className="text-lg text-[#ffffff] text-start font-light ">
                Assington, Sudbury, UK
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 z-20">
            <ClockIcon />
            <div className="flex flex-col justify-start gap-2">
              <p className="text-xl text-[#ffffff] text-start font-bold ">
                Working Hours
              </p>
              <p className="text-lg text-[#ffffff] text-start font-light ">
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
    )
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