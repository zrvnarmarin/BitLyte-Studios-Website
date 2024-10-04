import React from "react";
import Image from "next/image";
import MarinRemovedBgImage from "../../../public/marin_photoroom-Photoroom(1)_LE_auto_x2 (2).jpg";
import SectionWrapper from "../../components/SectionWrapper";
import "../../../public/test.css";
import { socialMediaIcons } from "@/app/components/Footer";
import Link from "next/link";

// image enchancer: https://letsenhance.io/boost for team images i ovaj:https://pixlr.com/express/

export default function MeetTheFoundersSection() {
  return (
    <SectionWrapper>
      <h2 className="w-full text-[40px] sm:text-[44px] lg:text-5xl text-[#ffffff] font-medium xs:font-normal text-start z-20">
        Meet The Founders
      </h2>

      {/* Big paragraph */}
      {/* <h3 className="w-full text-[#ffffff] font-semibold  text-3xl sm:text-[28px] md:text-3xl leading-tight text-start z-20 pr-24">
        Our founders came together with a shared passion for innovation and a
        drive to reshape the digital space. Each brings years of experience,
        creativity, and a commitment to success.
        <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div>
      </h3> */}

      {/* Founders section container */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-24 pt-4 sm:pt-8 md:pt-12 z-20">
        <div>
          <Image
            src={MarinRemovedBgImage}
            width={0} // Set desired width
            height={0} // Set desired height
            alt="Marin_image"
            className="z-20 object-cover"
          />
          <div className="relative flex flex-col justify-between items-start py-8 px-6">
            <div className="flex flex-col gap-2 justify-center items-start z-20 my-auto">
              <h2 className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">
                Marin Zrvnar
              </h2>
              <p className="text-lg xs:text-xl font-light text-[#ffffff]">
                Co-Founder <br />
                Web Developer/Designer
              </p>
            </div>

            <div className="flex flex-col gap-2 relative overflow-hidden z-20 mt-6">
              <div className="w-full flex items-center justify-end gap-8">
                <React.Fragment key={socialMediaIcons[2].id}>
                  <Link href={socialMediaIcons[2].href}>
                    {socialMediaIcons[2].icon()}
                  </Link>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Image
            src={IgorImage}
            width={0} // Set desired width
            height={0} // Set desired height
            alt="Marin_image"
            className="z-20 object-cover"
          />
          <div className="relative flex flex-col justify-between items-start py-8 px-6">
            <div className="flex flex-col gap-2 justify-center items-start z-20 my-auto">
              <h2 className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">
                Igor Ozmec
              </h2>
              <p className="text-lg xs:text-xl font-light text-[#ffffff]">
                Co-Founder <br />
                Web Developer/Designer
              </p>
            </div>

            <div className="flex flex-col gap-2 relative overflow-hidden z-20 mt-6">
              <div className="w-full flex items-center justify-end gap-8">
                <React.Fragment key={socialMediaIcons[2].id}>
                  <Link href={socialMediaIcons[2].href}>
                    {socialMediaIcons[2].icon()}
                  </Link>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative w-full grid grid-cols-3 place-items-center gap-6 pt-4 sm:pt-8 md:pt-12 justify-center items-center">
        {/* <div className="w-[28rem] h-[28rem] absolute bottom-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div> */}

        {/* Marin Card */}
        <div className="relative overflow-hidden flex flex-col rounded-lg border-[#252525] z-20 bg-[#0b0b0b]">
          {/* Blur background */}
          <div className="w-64 h-64 absolute right-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[530px]"></div>

          {/* Image Section */}
          <div className="w-full relative z-20">
            {/* Blue Overlay */}
            <div className="bg-blue-500 opacity-90 absolute inset-0 z-20 rounded-lg"></div>

            {/* Image */}
            <Image
              src={MarinRemovedBgImage}
              width={0} // Set desired width
              height={0} // Set desired height
              alt="Marin_image"
              className="z-20 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="relative flex flex-col justify-between items-start py-8 px-6">
            {/* Centered Content */}
            <div className="flex flex-col gap-2 justify-center items-start z-20 my-auto">
              <h2 className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">
                Marin Zrvnar
              </h2>
              <p className="text-lg xs:text-xl font-light text-[#ffffff]">
                Co-Founder <br />
                Web Developer/Designer
              </p>
            </div>

            {/* Social Media Icons and Divider */}
            <div className="flex flex-col gap-2 relative overflow-hidden z-20 mt-6">
              <div className="w-full flex items-center justify-end gap-8">
                <React.Fragment key={socialMediaIcons[2].id}>
                  <Link href={socialMediaIcons[2].href}>
                    {socialMediaIcons[2].icon()}
                  </Link>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>

        <h3 className="w-full text-[#ffffff] font-semibold  text-3xl sm:text-[28px] md:text-3xl leading-tight text-center z-20">
        Our founders came together with a shared passion for innovation and a
        drive to reshape the digital space. Each brings years of experience,
        creativity, and a commitment to success.
        {/* <div className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></div> */}
      </h3>

        {/* Igor Card */}
        <div className="relative overflow-hidden flex flex-col rounded-lg  border-[#252525] z-20 bg-[#0b0b0b]">
          {/* Blur background */}
          <div className="w-64 h-64 absolute right-0 top-0 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[130px]"></div>

          {/* Image Section */}
          <div className="w-full relative z-20">
            {/* Blue Overlay */}
            <div className="bg-blue-500 opacity-90 absolute inset-0 z-20 rounded-lg"></div>

            {/* Image */}
            <Image
              src={MarinRemovedBgImage}
              width={0} // Set desired width
              height={0} // Set desired height
              alt="Marin_image"
              className="z-20 object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="relative flex flex-col justify-between items-start py-8 px-6">
            {/* Centered Content */}
            <div className="flex flex-col gap-2 justify-center items-start z-20 my-auto">
              <h2 className="text-[#ffffff] font-semibold text-2xl xs:text-3xl">
                Igor Ozmec
              </h2>
              <p className="text-lg xs:text-xl font-light text-[#ffffff]">
                Co-Founder <br />
                Web Developer/Designer
              </p>
            </div>

            {/* Social Media Icons and Divider */}
            <div className="flex flex-col gap-2 relative overflow-hidden z-20 mt-6">
              <div className="w-full flex items-center justify-end gap-8">
                <React.Fragment key={socialMediaIcons[2].id}>
                  <Link href={socialMediaIcons[2].href}>
                    {socialMediaIcons[2].icon()}
                  </Link>
                </React.Fragment>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
{
  /* <span className="w-48 h-48 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#1A9FFF] to-[#0086E6] z-10 blur-[230px] pointer-events-none"></span> */
}
